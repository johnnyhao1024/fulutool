function decodeBase64Url(token) {
  if (!token) return '';
  const normalized = token.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
  return new TextDecoder().decode(bytes);
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

async function resolveTarget(request, env, code) {
  if (!code) return '';

  if (env && env.FULUTOOL_LINKS) {
    const stored = await env.FULUTOOL_LINKS.get(code);
    if (stored) return stored;
  }

  const links = await readStaticLinks(request);
  return links[code] || '';
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code') || url.searchParams.get('id') || '';
  const encoded = url.searchParams.get('u') || url.searchParams.get('url') || '';

  let target = '';
  if (encoded) {
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

