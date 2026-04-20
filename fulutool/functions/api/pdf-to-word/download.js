function contentDisposition(filename) {
  const safe = String(filename || 'converted.docx').replace(/["\r\n]/g, '');
  return `attachment; filename="${safe}"; filename*=UTF-8''${encodeURIComponent(safe)}`;
}

export async function onRequestGet(context) {
  const { request, env } = context;

  if (!env?.JOBS_DB || !env?.PDF_OUTPUTS) {
    return new Response('PDF 转 Word 下载接口尚未配置完成', { status: 500 });
  }

  const url = new URL(request.url);
  const jobId = (url.searchParams.get('id') || '').trim();

  if (!jobId) {
    return new Response('缺少任务编号', { status: 400 });
  }

  const row = await env.JOBS_DB.prepare(
    `SELECT id, status, result_key, result_name
     FROM jobs
     WHERE id = ? AND tool = ?`
  )
    .bind(jobId, 'pdf_to_word')
    .first();

  if (!row) {
    return new Response('任务不存在', { status: 404 });
  }

  if (row.status !== 'done' || !row.result_key) {
    return new Response('文件尚未生成完成', { status: 409 });
  }

  const object = await env.PDF_OUTPUTS.get(row.result_key);
  if (!object) {
    return new Response('结果文件不存在或已过期', { status: 404 });
  }

  return new Response(object.body, {
    headers: {
      'content-type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'content-disposition': contentDisposition(row.result_name),
      'cache-control': 'private, no-store, max-age=0'
    }
  });
}
