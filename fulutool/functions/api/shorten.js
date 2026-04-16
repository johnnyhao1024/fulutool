const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function normalizeUrl(input) {
  const trimmed = String(input || '').trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function randomCode(length = 7) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  let out = '';
  for (let i = 0; i < length; i += 1) {
    out += ALPHABET[bytes[i] % ALPHABET.length];
  }
  return out;
}

async function readBody(request) {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return request.json();
  }
  const form = await request.formData();
  return Object.fromEntries(form.entries());
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const payload = await readBody(request);
  const target = normalizeUrl(payload.url || payload.long_url || payload.target);

  if (!target) {
    return Response.json({ error: '请输入有效的网址' }, { status: 400 });
  }

  if (!env || !env.FULUTOOL_LINKS) {
    return Response.json(
      { error: 'SHORTLINK_STORAGE_NOT_CONFIGURED', fallback: true },
      { status: 503 }
    );
  }

  let code = randomCode();
  for (let i = 0; i < 5; i += 1) {
    const existing = await env.FULUTOOL_LINKS.get(code);
    if (!existing) break;
    code = randomCode();
  }

  await env.FULUTOOL_LINKS.put(code, target);

  const url = new URL(request.url);
  const shortUrl = `${url.origin}/s/${code}`;

  return Response.json({
    code,
    target,
    short_url: shortUrl
  });
}
