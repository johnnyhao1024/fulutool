function decodeBase64Url(token) {
  if (!token) return '';
  const normalized = token.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function decodeGzipBase64Url(token) {
  if (!token) return '';
  const normalized = token.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
  if (typeof DecompressionStream === 'undefined') {
    throw new Error('DecompressionStream unavailable');
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  const buffer = await new Response(stream).arrayBuffer();
  return new TextDecoder().decode(buffer);
}

async function readStaticLinks(request) {
  try {
    const response = await fetch(new URL('/links.json', request.url).toString());
    if (!response.ok) return {};
    return await response.json();
  } catch (err) {
    return {};
  }
}

function isLikelyUrl(value) {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch (err) {
    return false;
  }
}

async function resolveTarget(request, env, code) {
  if (!code) return '';

  if (env && env.FULUTOOL_LINKS) {
    const stored = await env.FULUTOOL_LINKS.get(code);
    if (stored) return stored;
  }

  const links = await readStaticLinks(request);
  return links[code] || '';
}

async function resolveTokenTarget(request, env, token) {
  if (!token) return '';

  if (env && env.FULUTOOL_LINKS) {
    const stored = await env.FULUTOOL_LINKS.get(token);
    if (stored) return stored;
  }

  const fromPlain = await (async () => {
    try {
      const decoded = decodeBase64Url(token);
      return isLikelyUrl(decoded) ? decoded : '';
    } catch (err) {
      return '';
    }
  })();
  if (fromPlain) return fromPlain;

  const fromGzip = await (async () => {
    try {
      const decoded = await decodeGzipBase64Url(token);
      return isLikelyUrl(decoded) ? decoded : '';
    } catch (err) {
      return '';
    }
  })();
  if (fromGzip) return fromGzip;

  return resolveTarget(request, env, token);
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const pathToken = url.pathname.startsWith('/s/')
    ? url.pathname.slice('/s/'.length).split('/').filter(Boolean).join('/')
    : '';
  const code = url.searchParams.get('code') || url.searchParams.get('id') || '';
  const encoded = url.searchParams.get('u') || url.searchParams.get('url') || '';
  const compressed = url.searchParams.get('c') || '';

  let target = '';
  if (pathToken) {
    target = await resolveTokenTarget(request, env, pathToken);
  } else if (compressed) {
    try {
      target = await decodeGzipBase64Url(compressed);
    } catch (err) {
      return new Response('无效的短链接参数', { status: 400 });
    }
  } else if (encoded) {
    try {
      target = decodeBase64Url(encoded);
    } catch (err) {
      return new Response('无效的短链接参数', { status: 400 });
    }
  } else {
    target = await resolveTarget(request, env, code);
  }

  if (!target) {
    return new Response('短链接不存在或已失效', { status: 404 });
  }

  return Response.redirect(target, 302);
}
