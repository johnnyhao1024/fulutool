function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'cache-control': 'no-store'
    }
  });
}

export async function onRequestGet(context) {
  const { request, env } = context;

  if (!env?.JOBS_DB) {
    return json(
      {
        error: 'PDF_TO_WORD_NOT_CONFIGURED',
        message: '缺少 JOBS_DB 绑定'
      },
      500
    );
  }

  const url = new URL(request.url);
  const jobId = (url.searchParams.get('id') || '').trim();

  if (!jobId) {
    return json({ error: 'MISSING_JOB_ID', message: '缺少任务编号' }, 400);
  }

  const row = await env.JOBS_DB.prepare(
    `SELECT id, status, result_name, error_message, updated_at
     FROM jobs
     WHERE id = ? AND tool = ?`
  )
    .bind(jobId, 'pdf_to_word')
    .first();

  if (!row) {
    return json({ error: 'JOB_NOT_FOUND', message: '任务不存在' }, 404);
  }

  return json({
    ok: true,
    job_id: row.id,
    status: row.status,
    result_name: row.result_name,
    error_message: row.error_message,
    updated_at: row.updated_at,
    download_url:
      row.status === 'done'
        ? `/api/pdf-to-word/download?id=${encodeURIComponent(row.id)}`
        : null
  });
}
