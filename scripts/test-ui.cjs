// Run with NODE_PATH pointing to a jsdom installation; no production dependencies added.
const { JSDOM } = require('jsdom');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../fulutool');
const shared = fs.readFileSync(path.join(root, 'assets/fulutool.js'), 'utf8');
const directory = fs.readFileSync(path.join(root, 'assets/directory.js'), 'utf8');
async function load(file, lang = 'zh') {
  const dom = new JSDOM(fs.readFileSync(path.join(root, file), 'utf8'), { url: `https://fulutool.com/${file}`, runScripts: 'outside-only' });
  const w = dom.window;
  w.localStorage.setItem('fulutool.lang', lang);
  await new Promise(resolve => w.document.addEventListener('DOMContentLoaded', resolve, { once: true }));
  w.eval(shared);
  if (file === 'index.html' || file === 'tools.html') w.eval(directory);
  return dom;
}
(async () => {
  let assertions = 0;
  const check = (actual, expected) => { assert.deepEqual(actual, expected); assertions++; };
  for (const file of ['index.html', 'tools.html']) {
    for (const lang of ['zh', 'en']) {
      const dom = await load(file, lang); const w = dom.window; const d = w.document;
      const shown = () => [...d.querySelectorAll('.tools-grid .tool-card')].filter(x => !x.hidden).map(x => x.getAttribute('href'));
      const query = text => { d.querySelector('#toolSearch').value = text; d.querySelector('#toolSearch').dispatchEvent(new w.Event('input')); };
      check(shown().length, 15);
      const aiIcon = () => d.querySelector('[data-category=ai] .tool-icon img').getAttribute('src');
      check(aiIcon(), '/assets/tool-icons/cijian.svg?v=20260906-logo');
      for (const [category, expected] of [['image', 6], ['document', 4], ['link', 2], ['security', 1], ['info', 1], ['ai', 1], ['all', 15]]) {
        d.querySelector(`[data-filter="${category}"]`).click(); check(shown().length, expected);
        check(d.querySelectorAll('[data-filter][aria-pressed="true"]').length, 1);
      }
      for (const [text, href] of [['压图','imagecompress'], ['拼图','puzzle'], ['PDF 转 Word','pdf-to-word'], ['word to pdf','word-to-pdf'], ['compress image','imagecompress'], ['二维码','qrcode']]) {
        query(text); check(shown(), [`/${href}.html`]);
      }
      query('AI'); check(shown(), ['https://ai.fulutool.com/']);
      query('此间'); check(shown(), ['https://ai.fulutool.com/']);
      check(d.querySelector('.ft-directory-heading'), null);
      query('压图'); d.querySelector('[data-filter="document"]').click(); check(shown(), []);
      check(d.querySelector('#searchEmpty').hidden, false);
      d.querySelector('#resetSearchBtn').click(); check(shown().length, 15);
      check(d.activeElement.id, 'toolSearch');
      query('<img src=x onerror=alert(1)>'); check(shown(), []);
      check(d.querySelector('#toolCount img'), null);
      d.querySelector('#clearSearchBtn').click(); check(shown().length, 15);
      query('拼图'); w.Fulutool.setLanguage(lang === 'en' ? 'zh' : 'en');
      check(shown(), ['/puzzle.html']);
      check(d.querySelector('[data-home-copy="link"]').textContent, lang === 'en' ? '链接与二维码' : 'Links & QR codes');
      check(d.querySelector('#toolSearch').value, '拼图');
      check(d.querySelectorAll('.tools-grid [target="_blank"]').length, 0);
      check(d.querySelectorAll('.ft-card-tool-icon').length, 15);
      check(aiIcon(), '/assets/tool-icons/cijian.svg?v=20260906-logo');
      check(d.querySelector('[data-home-copy="ai"]').textContent, lang === 'en' ? 'AI专区' : 'AI tools');
      check(d.querySelector('.ft-brand-icon img').getAttribute('src'), '/assets/logo.svg?v=20260906-2');
      dom.window.close();
    }
  }
  for (const [file, select, run, save] of [
    ['imagecompress.html', 'selectImageBtn', 'compressImageBtn', 'downloadCompressedBtn'],
    ['pdf-to-word.html', 'selectPdfBtn', 'convertBtn', 'saveWordBtn'],
    ['word-to-pdf.html', 'selectWordBtn', 'convertBtn', 'savePdfBtn'],
    ['pdf-compress.html', 'selectPdfBtn', 'compressBtn', 'savePdfBtn'],
    ['old-calendar.html', 'selectPhotoBtn', 'generateBtn', 'saveBtn'],
    ['frame-art.html', 'selectImageBtn', 'generateBtn', 'saveBtn']
  ]) {
    const dom = await load(file); const w = dom.window; const d = w.document;
    const tick = () => new Promise(resolve => setImmediate(resolve));
    const active = () => [...d.querySelectorAll('.ft-current-action')].map(x => x.id);
    check(active(), [select]);
    d.getElementById(run).disabled = false;
    if (file === 'imagecompress.html') {
      Object.defineProperty(d.querySelector('input[type=file]'), 'files', { value: [new w.File(['sample'], 'sample.png', {type:'image/png'})] });
      d.querySelector('input[type=file]').dispatchEvent(new w.Event('change', {bubbles:true}));
    }
    await tick(); check(active(), [run]);
    if (file === 'imagecompress.html') {
      d.querySelector('#imagePreviewArea').style.display = 'flex';
      const img = d.createElement('img'); img.src = 'data:image/png;base64,eA==';
      d.querySelector('#compressedPreviewContainer').append(img);
    }
    d.getElementById(save).disabled = false;
    await tick(); check(active(), [save]);
    d.getElementById(save).disabled = true;
    await tick(); check(active(), [run]);
    w.Fulutool.setLanguage('en'); check(d.querySelector('.ft-back-link').textContent, '← All tools');
    w.Fulutool.setLanguage('zh'); check(d.querySelector('.ft-back-link').textContent, '← 返回全部工具');
    dom.window.close();
  }
  // Every local card, stylesheet, script and image points at an existing public file.
  for (const file of fs.readdirSync(root).filter(x => x.endsWith('.html'))) {
    const dom = new JSDOM(fs.readFileSync(path.join(root, file), 'utf8'));
    const d = dom.window.document;
    for (const el of d.querySelectorAll('[src], link[href], a.tool-card[href]')) {
      const ref = el.getAttribute('src') || el.getAttribute('href');
      if (ref?.startsWith('/') && !ref.startsWith('//')) check(fs.existsSync(path.join(root, ref.split('?')[0])), true);
    }
    // Parse every inline script, without executing processing backends or uploading files.
    for (const script of d.querySelectorAll('script:not([src])')) { new Function(script.textContent); assertions++; }
    dom.window.close();
  }
  console.log(`PASS: ${assertions} assertions (directory, languages, action states, local assets, inline syntax).`);
})().catch(error => { console.error(error); process.exitCode = 1; });
