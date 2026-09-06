(function () {
  const search = document.getElementById('toolSearch');
  if (!search) return;
  const cards = Array.from(document.querySelectorAll('.tools-grid .tool-card'));
  const buttons = Array.from(document.querySelectorAll('[data-filter]'));
  const clear = document.getElementById('clearSearchBtn');
  const count = document.getElementById('toolCount');
  const empty = document.getElementById('searchEmpty');
  let category = 'all';
  const copy = {
    zh: { searchLabel: '搜索工具', placeholder: '搜索工具，如：压图、拼图、PDF 转 Word', clear: '清除', all: '所有工具', ai: 'AI专区', aiName: '此间 · AI 伴侣', aiDesc: '一个可以接着聊、共同记忆由你掌握的 AI 伙伴。', aiLink: '打开此间 ↗', image: '图片处理', document: '文档处理', link: '链接与二维码', security: '安全工具', info: '信息查询', emptyTitle: '没有找到匹配的工具', emptyHint: '试试更短的关键词，或切换到所有工具。', reset: '清除搜索并显示全部', categories: '工具分类' },
    en: { searchLabel: 'Search tools', placeholder: 'Search tools, e.g. compress image, collage, PDF to Word', clear: 'Clear', all: 'All tools', ai: 'AI tools', aiName: 'Cijian · AI Companion', aiDesc: 'An AI companion for ongoing conversations, with shared memories you control.', aiLink: 'Open Cijian ↗', image: 'Images', document: 'Documents', link: 'Links & QR codes', security: 'Security', info: 'Info lookup', emptyTitle: 'No matching tools', emptyHint: 'Try a shorter search or switch to all tools.', reset: 'Clear search and show all', categories: 'Tool categories' }
  };
  // Both languages remain searchable when the display language changes.
  const aliases = {
    'cijian-ai': 'AI AI伴侣 AI伙伴 人工智能 此间 伴侣 伙伴 聊天 对话 记忆 cijian companion chat conversation memory ai.fulutool.com',
    'shortlink.html': '短链接 短网址 长链接 缩短 short link url shorten',
    'qrcode.html': '二维码 二维码生成 扫码 qr qrcode code url',
    'textstats.html': '文本整理 字数 统计 去空格 去空行 缩进 text formatter count words',
    'imagecompress.html': '图片压缩 压图 缩图 照片 体积 image photo compress resize jpg png webp',
    'password.html': '密码 随机密码 安全 password random secure generator',
    'ip-lookup.html': 'ip 归属地 查询 地址 location lookup',
    'pixel-avatar.html': '像素头像 照片 pixel avatar photo',
    'watermark.html': '图片水印 加水印 照片 watermark image photo',
    'puzzle.html': '拼图 拼接 长图 合图 无损 原图 png collage combine merge image',
    'word-to-pdf.html': 'word 转 pdf docx 文档转换 convert',
    'pdf-to-word.html': 'pdf 转 word docx 文档转换 convert',
    'pdf-compress.html': 'pdf 压缩 瘦身 文档 compress document',
    'old-calendar.html': '老挂历 海报 日历 复古 vintage calendar poster',
    'frame-art.html': '立体画框 美图 图片 相框 3d frame art photo'
  };
  const normalize = value => value.toLowerCase().normalize('NFKC').replace(/[\s\-_→]+/g, '');
  const entries = cards.map(card => {
    const name = card.dataset.searchKey || card.getAttribute('href').split('/').pop();
    return { card, name, text: normalize(card.textContent + ' ' + (aliases[name] || '')) };
  });
  function filter() {
    const lang = window.Fulutool?.lang === 'en' ? 'en' : 'zh';
    const query = normalize(search.value.trim());
    // Direction matters for the two document conversions.
    const direction = /^(pdf)(转|to)(word|docx)$/.test(query) ? 'pdf-to-word.html'
      : /^(word|docx)(转|to)pdf$/.test(query) ? 'word-to-pdf.html' : null;
    const terms = search.value.trim().toLowerCase().normalize('NFKC').split(/\s+/).filter(Boolean).map(normalize);
    let visible = 0;
    entries.forEach(({card, name, text}) => {
      const matches = direction ? name === direction : terms.every(term => term === 'ai' ? card.dataset.category === 'ai' : text.includes(term));
      card.hidden = !((category === 'all' || card.dataset.category === category) && matches);
      if (!card.hidden) visible++;
    });
    buttons.forEach(button => {
      const active = button.dataset.filter === category;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    clear.hidden = !search.value;
    empty.hidden = visible > 0;
    count.textContent = lang === 'en' ? `${visible} of ${cards.length} tools` : `共 ${cards.length} 个工具 · 显示 ${visible} 个`;
  }
  function localize() {
    const lang = window.Fulutool?.lang === 'en' ? 'en' : 'zh';
    document.querySelectorAll('[data-home-copy]').forEach(el => { el.textContent = copy[lang][el.dataset.homeCopy]; });
    search.placeholder = copy[lang].placeholder;
    document.querySelector('.ft-discovery').setAttribute('aria-label', lang === 'en' ? 'Tool search and categories' : '工具搜索与分类');
    document.querySelector('.tool-nav').setAttribute('aria-label', copy[lang].categories);
    const collage = document.querySelector('a[href="/puzzle.html"] .tool-desc');
    if (collage) collage.textContent = lang === 'en' ? 'Combine images at original pixel size, drag to reorder, and export a lossless PNG.' : '按原始像素拼接多张图片，支持拖拽排序，导出无损 PNG。';
    filter();
  }
  buttons.forEach(button => button.addEventListener('click', () => { category = button.dataset.filter; filter(); }));
  search.addEventListener('input', filter);
  clear.addEventListener('click', () => { search.value = ''; filter(); search.focus(); });
  search.addEventListener('keydown', event => { if (event.key === 'Escape') { search.value = ''; filter(); } });
  document.getElementById('resetSearchBtn').addEventListener('click', () => { search.value = ''; category = 'all'; filter(); search.focus(); });
  document.addEventListener('fulutool:languagechange', localize);
  document.getElementById('discoveryControls').hidden = false;
  localize();
})();
