const MAX_FILE_SIZE = 25 * 1024 * 1024;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'cache-control': 'no-store'
    }
  });
}

function buildJobId() {
  return crypto.randomUUID();
}

function toDocxName(name) {
  const safeName = String(name || 'document.pdf')
    .replace(/[\\/:*?"<>|]+/g, '-')
    .trim();
  const withoutExt = safeName.replace(/\.pdf$/i, '') || 'document';
  return `${withoutExt}.docx`;
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env?.PDF_INPUTS || !env?.JOBS_DB || !env?.CONVERT_QUEUE) {
    return json(
      {
        error: 'PDF_TO_WORD_NOT_CONFIGURED',
        message: '缺少 PDF_INPUTS、JOBS_DB 或 CONVERT_QUEUE 绑定'
      },
      500
    );
  }

  const form = await request.formData();
  const file = form.get('file') || form.get('pdf');

  if (!(file instanceof File)) {
    return json({ error: 'NO_FILE', message: '请先上传 PDF 文件' }, 400);
  }

  const isPdf = /\.pdf$/i.test(file.name) || file.type === 'application/pdf';
  if (!isPdf) {
    return json({ error: 'INVALID_FILE_TYPE', message: '仅支持 PDF 文件' }, 400);
  }

  if (file.size <= 0) {
    return json({ error: 'EMPTY_FILE', message: '文件内容为空' }, 400);
  }

  if (file.size > MAX_FILE_SIZE) {
    return json(
      {
        error: 'FILE_TOO_LARGE',
        message: '文件过大，请控制在 25MB 以内'
      },
      413
    );
  }

  const jobId = buildJobId();
  const sourceKey = `pdf-to-word/input/${jobId}.pdf`;
  const resultName = toDocxName(file.name);
  const now = new Date().toISOString();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  try {
    await env.PDF_INPUTS.put(sourceKey, await file.arrayBuffer(), {
      httpMetadata: {
        contentType: 'application/pdf'
      },
      customMetadata: {
        jobId,
        originalName: file.name
      }
    });

    await env.JOBS_DB.prepare(
      `INSERT INTO jobs (
        id, tool, status, source_key, result_key, original_name, result_name,
        error_message, created_at, updated_at, expires_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        jobId,
        'pdf_to_word',
        'queued',
        sourceKey,
        null,
        file.name,
        resultName,
        null,
        now,
        now,
        expiresAt
      )
      .run();

    await env.CONVERT_QUEUE.send({
      jobId,
      tool: 'pdf_to_word'
    });

    return json({
      ok: true,
      job_id: jobId,
      status: 'queued',
      result_name: resultName
    });
  } catch (error) {
    try {
      await env.PDF_INPUTS.delete(sourceKey);
    } catch (_) {}

    return json(
      {
        error: 'JOB_CREATE_FAILED',
        message: error instanceof Error ? error.message : '任务创建失败'
      },
      500
    );
  }
}
