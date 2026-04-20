(function () {
  const STORAGE_KEY = 'fulutool.lang';
  const DEFAULT_LANG = 'zh';
  const PAGE_BINDINGS = {
    '/index.html': {
      title: { zh: '福禄工具箱 · 常用工具大全', en: 'Fulutool Toolbox · Everyday Utilities' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ]
    },
    '/tools.html': {
      title: { zh: '福禄工具箱 · 常用工具大全', en: 'Fulutool Toolbox · Everyday Utilities' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ]
    },
    '/shortlink.html': {
      title: { zh: '免费短链接生成器 · 福禄工具箱', en: 'Short Link Generator · Fulutool Toolbox' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.current-tool-badge', zh: '当前工具：短链接生成器', en: 'Current tool: Short Link Generator' },
        { selector: '.tool-title', zh: '🔗 短链接生成器', en: '🔗 Short Link Generator' },
        { selector: '.tool-desc', zh: '将冗长网址一键转为短链接，复制分享更便捷（支持 Cloudflare 部署）', en: 'Turn long URLs into compact short links, ready to share and Cloudflare-friendly' },
        { selector: '.input-group label', zh: '🔗 原始链接', en: '🔗 Original URL' },
        { selector: '#doShortenBtn', zh: '✨ 生成短链接', en: '✨ Generate Short Link' },
        { selector: '.result-label span', zh: '📎 短链接', en: '📎 Short Link' },
        { selector: '#copyShortResult', zh: '复制', en: 'Copy' },
        { selector: '.section-label', zh: '🧩 其他工具 · 点击切换', en: '🧩 More tools · Jump around' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ],
      attr: [
        { selector: '#shortUrlInput', attr: 'placeholder', zh: 'https://fulutool.com/explore', en: 'https://fulutool.com/explore' }
      ]
    },
    '/qrcode.html': {
      title: { zh: '免费二维码生成器 · 福禄工具箱', en: 'QR Code Generator · Fulutool Toolbox' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.current-tool-badge', zh: '当前工具：二维码生成器', en: 'Current tool: QR Code Generator' },
        { selector: '.tool-title', zh: '📱 二维码生成器', en: '📱 QR Code Generator' },
        { selector: '.tool-desc', zh: '输入网址，生成二维码，扫码访问', en: 'Enter a URL and generate a scannable QR code' },
        { selector: '.input-group label', zh: '🔗 网址链接', en: '🔗 Website URL' },
        { selector: '#genQrBtn', zh: '🎯 生成二维码', en: '🎯 Generate QR Code' },
        { selector: '#saveQrBtn', zh: '💾 保存二维码图片', en: '💾 Save QR Image' },
        { selector: '.save-tip', zh: '💡 点击按钮可直接下载图片；移动端若无法下载，可长按二维码图片保存', en: '💡 Tap to download; on mobile, long-press the QR image to save it' },
        { selector: '.section-label', zh: '🧩 其他工具 · 点击切换', en: '🧩 More tools · Jump around' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ],
      attr: [
        { selector: '#qrText', attr: 'placeholder', zh: 'https://fulutool.com', en: 'https://fulutool.com' }
      ]
    },
    '/textstats.html': {
      title: { zh: '免费在线文本整理器 · 福禄工具箱', en: 'Text Formatter · Fulutool Toolbox' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.current-tool-badge', zh: '当前工具：文本整理器', en: 'Current tool: Text Formatter' },
        { selector: '.tool-title', zh: '📊 文本整理器', en: '📊 Text Formatter' },
        { selector: '.tool-desc', zh: '实时统计字数、行数，并快速调整文本格式（去空行、首行缩进）', en: 'Count text instantly and clean up formatting with one click' },
        { selector: '.input-group label', zh: '📄 输入文本', en: '📄 Input text' },
        { selector: '#updateStatsBtn', zh: '📈 立即统计', en: '📈 Count now' },
        { selector: '#removeEmptyLinesBtn', zh: '🚫 去除所有空行', en: '🚫 Remove empty lines' },
        { selector: '#addFirstLineIndentBtn', zh: '📝 首行缩进2字符', en: '📝 Indent first line' },
        { selector: '#copyFormattedTextBtn', zh: '📋 复制文本', en: '📋 Copy text' },
        { selector: '.result-label', zh: '📊 统计结果', en: '📊 Text stats' },
        { selector: '.section-label', zh: '🧩 其他工具 · 点击切换', en: '🧩 More tools · Jump around' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ],
      attr: [
        { selector: '#statsTextArea', attr: 'placeholder', zh: '在这里输入或粘贴你的文本，支持中英文统计和格式调整...', en: 'Paste or type your text here for instant stats and cleanup...' }
      ]
    },
    '/imagecompress.html': {
      title: { zh: '免费在线图片压缩器 · 福禄工具箱', en: 'Image Compressor · Fulutool Toolbox' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.current-tool-badge', zh: '当前工具：图片压缩器', en: 'Current tool: Image Compressor' },
        { selector: '.tool-title', zh: '🖼️ 图片压缩器', en: '🖼️ Image Compressor' },
        { selector: '.tool-desc', zh: '上传图片，调整压缩质量或最大宽度，减少文件体积', en: 'Upload an image, tweak quality or width, and shrink the file size' },
        { selector: '.compress-controls .slider-group:nth-of-type(1) > span:first-child', zh: '📉 压缩质量', en: '📉 Quality' },
        { selector: '.compress-controls .slider-group:nth-of-type(2) > span:first-child', zh: '📐 最大宽度', en: '📐 Max width' },
        { selector: '#selectImageBtn', zh: '📂 选择图片', en: '📂 Pick image' },
        { selector: '#compressImageBtn', zh: '⚡ 开始压缩', en: '⚡ Compress' },
        { selector: '.preview-card:nth-child(1) .preview-title', zh: '📸 原图', en: '📸 Original' },
        { selector: '.preview-card:nth-child(2) .preview-title', zh: '✨ 压缩结果', en: '✨ Compressed' },
        { selector: '#downloadCompressedBtn', zh: '⬇️ 下载图片', en: '⬇️ Download image' },
        { selector: '.section-label', zh: '🧩 其他工具 · 点击切换', en: '🧩 More tools · Jump around' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ]
    },
    '/word-to-pdf.html': {
      title: { zh: '免费 Word 转 PDF 工具 · 福禄工具箱', en: 'Word to PDF Converter · Fulutool Toolbox' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.tool-title', zh: '📄 Word 转 PDF 工具', en: '📄 Word to PDF Converter' },
        { selector: '.tool-desc', zh: '上传本地 Word 文档，一键转换为 PDF 并保存到设备，当前浏览器版支持 .docx 文件', en: 'Upload a local Word document, convert it into PDF in one click, and save it to your device. Browser mode currently supports .docx files.' },
        { selector: '#selectWordBtn', zh: '📂 选择 Word 文件', en: '📂 Choose Word file' },
        { selector: '#convertBtn', zh: '⚡ 开始转换', en: '⚡ Start conversion' },
        { selector: '#savePdfBtn', zh: '💾 保存文件', en: '💾 Save file' },
        { selector: '.preview-title', zh: '👀 文档预览', en: '👀 Document preview' },
        { selector: '.section-label', zh: '🧩 其他工具 · 点击切换', en: '🧩 More tools · Jump around' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ]
    },
    '/pdf-to-word.html': {
      title: { zh: '免费 PDF 转 Word 工具 · 福禄工具箱', en: 'PDF to Word Converter · Fulutool Toolbox' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.tool-title', zh: '📘 PDF 转 Word 工具', en: '📘 PDF to Word Converter' },
        { selector: '.tool-desc', zh: '上传 PDF 文档，提交高精度转换任务，完成后下载 Word 文件，复杂版式的还原效果更稳定', en: 'Upload a PDF document, submit a high-fidelity conversion job, and download the Word file when it finishes for more reliable layout recovery.' },
        { selector: '#selectPdfBtn', zh: '📂 选择 PDF 文件', en: '📂 Choose PDF file' },
        { selector: '#convertBtn', zh: '⚡ 开始转换', en: '⚡ Start conversion' },
        { selector: '#saveWordBtn', zh: '💾 保存文件', en: '💾 Save file' },
        { selector: '.preview-title', zh: '👀 文档预览', en: '👀 Document preview' },
        { selector: '.section-label', zh: '🧩 其他工具 · 点击切换', en: '🧩 More tools · Jump around' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ]
    },
    '/password.html': {
      title: { zh: '免费随机密码生成器 · 福禄工具箱', en: 'Password Generator · Fulutool Toolbox' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.current-tool-badge', zh: '当前工具：随机密码生成器', en: 'Current tool: Password Generator' },
        { selector: '.tool-title', zh: '🔐 随机密码生成器', en: '🔐 Password Generator' },
        { selector: '.tool-desc', zh: '自定义密码长度和字符类型，一键生成高强度密码', en: 'Customise length and character sets to generate a strong password' },
        { selector: '.control-group:nth-of-type(2) label', zh: '🔤 包含字符类型', en: '🔤 Character types' },
        { selector: '#generateBtn', zh: '✨ 生成密码', en: '✨ Generate' },
        { selector: '#copyBtn', zh: '📋 复制密码', en: '📋 Copy password' },
        { selector: '.section-label', zh: '🧩 其他工具 · 点击切换', en: '🧩 More tools · Jump around' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ]
    },
    '/ip-lookup.html': {
      title: { zh: '免费IP归属地查询 · 福禄工具箱', en: 'IP Lookup · Fulutool Toolbox' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.current-tool-badge', zh: '当前工具：IP归属地查询', en: 'Current tool: IP Lookup' },
        { selector: '.tool-title', zh: '🌐 IP归属地查询', en: '🌐 IP Lookup' },
        { selector: '.tool-desc', zh: '查询公网 IP 的归属地信息，支持本机 IP', en: 'Look up the location and ISP of a public IP, including your own' },
        { selector: '.ip-input-wrapper button:nth-of-type(1)', zh: '🔎 查询', en: '🔎 Search' },
        { selector: '.ip-input-wrapper button:nth-of-type(2)', zh: '📍 查询我的IP', en: '📍 My IP' },
        { selector: '.section-label', zh: '🧩 其他工具 · 点击切换', en: '🧩 More tools · Jump around' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ],
      attr: [
        { selector: '#ipInput', attr: 'placeholder', zh: '例如：8.8.8.8 或留空自动查询本机IP', en: 'For example: 8.8.8.8 or leave blank to detect your IP' }
      ]
    },
    '/pixel-avatar.html': {
      title: { zh: '免费像素头像生成器 · 福禄工具箱', en: 'Pixel Avatar Generator · Fulutool Toolbox' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.current-tool-badge', zh: '当前工具：像素头像生成器', en: 'Current tool: Pixel Avatar Generator' },
        { selector: '.tool-title', zh: '🎨 像素头像生成器', en: '🎨 Pixel Avatar Generator' },
        { selector: '.tool-desc', zh: '上传照片并自动裁剪成像素风头像，清晰又有趣', en: 'Upload a photo and turn it into a crisp pixel-style avatar' },
        { selector: '#selectImageBtn', zh: '📂 选择照片', en: '📂 Select photo' },
        { selector: '#cropAndGenerateBtn', zh: '✨ 裁剪并生成像素头像', en: '✨ Crop and generate' },
        { selector: '#saveAvatarBtn', zh: '💾 保存头像', en: '💾 Save avatar' },
        { selector: '.save-tip', zh: '💡 点击按钮下载图片；移动端若无法下载，可长按图片保存', en: '💡 Tap to download; on mobile, long-press the image to save it' },
        { selector: '.section-label', zh: '🧩 其他工具 · 点击切换', en: '🧩 More tools · Jump around' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ]
    },
    '/puzzle.html': {
      title: { zh: '免费在线拼图工具 · 福禄工具箱', en: 'Photo Collage Maker · Fulutool Toolbox' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.current-tool-badge', zh: '当前工具：拼图工具', en: 'Current tool: Collage Maker' },
        { selector: '.tool-title', zh: '🧩 拼图工具', en: '🧩 Photo Collage Maker' },
        { selector: '.tool-desc', zh: '多张图片自由拼接，支持横向、纵向和九宫格布局', en: 'Combine multiple images into a neat horizontal, vertical, or grid layout' },
        { selector: '#selectImagesBtn', zh: '📂 选择图片（可多选）', en: '📂 Choose images (multi-select)' },
        { selector: '.template-label:nth-of-type(1)', zh: '横向拼接', en: 'Horizontal' },
        { selector: '.template-label:nth-of-type(2)', zh: '纵向拼接', en: 'Vertical' },
        { selector: '.template-label:nth-of-type(3)', zh: '网格拼图', en: 'Grid' },
        { selector: '#generateBtn', zh: '✨ 生成拼图', en: '✨ Generate collage' },
        { selector: '#saveBtn', zh: '💾 保存图片', en: '💾 Save image' },
        { selector: '.save-tip', zh: '💡 点击保存按钮下载图片；移动端若无法下载，可长按图片保存', en: '💡 Tap to download; on mobile, long-press the image to save it' },
        { selector: '.section-label', zh: '🧩 其他工具 · 点击切换', en: '🧩 More tools · Jump around' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ]
    },
    '/watermark.html': {
      title: { zh: '图片水印工具 · 福禄工具箱', en: 'Watermark Tool · Fulutool Toolbox' },
      text: [
        { selector: '.ft-brand-copy small', zh: '免费使用·无需注册·即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.current-tool-badge', zh: '当前工具：图片水印工具', en: 'Current tool: Watermark Tool' },
        { selector: '.tool-title', zh: '💧 图片水印工具', en: '💧 Watermark Tool' },
        { selector: '.tool-desc', zh: '为图片添加文字水印，支持透明度、角度和平铺模式', en: 'Add text watermarks with opacity, angle and tiled layouts' },
        { selector: '#selectImageBtn', zh: '📂 选择图片', en: '📂 Select image' },
        { selector: '#saveImageBtn', zh: '💾 保存图片', en: '💾 Save image' },
        { selector: '.save-tip', zh: '💡 点击保存按钮下载图片；移动端若无法下载，可长按图片保存', en: '💡 Tap to download; on mobile, long-press the image to save it' },
        { selector: '.section-label', zh: '🧩 其他工具 · 点击切换', en: '🧩 More tools · Jump around' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ]
    }
  };

  const LANGUAGE_NORMALIZATIONS = {
    zh: new Map([
      ['免费使用·无需注册·即用即走', '免费使用·无需注册·即用即走'],
      ['免费使用 · 无需注册 · 即用即走', '免费使用·无需注册·即用即走'],
      ['Free to use · No sign-up · Instant access', '免费使用·无需注册·即用即走'],
      ['Modern everyday utilities, ready for Cloudflare', '免费使用·无需注册·即用即走']
    ]),
    en: new Map([
      ['免费使用·无需注册·即用即走', 'Free to use · No sign-up · Instant access'],
      ['免费使用 · 无需注册 · 即用即走', 'Free to use · No sign-up · Instant access'],
      ['Free to use · No sign-up · Instant access', 'Free to use · No sign-up · Instant access'],
      ['免费使用·无需注册·即用即走', 'Free to use · No sign-up · Instant access']
    ])
  };

  const TEXT_TRANSLATIONS = {
    zh: new Map([
      ['Fulutool Toolbox', '福禄工具箱'],
      ['Free to use · No sign-up · Instant access', '免费使用·无需注册·即用即走'],
      ['🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking', '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪'],
      ['🧩 More tools · Jump around', '🧩 其他工具 · 点击切换'],
      ['Turn long URLs into compact short links, ready to share and Cloudflare-friendly', '将冗长网址一键转为短链接，复制分享更便捷（支持 Cloudflare 部署）'],
      ['将冗长网址一键转为短链接，复制分享更便捷（支持 Cloudflare 部署）', 'Turn long URLs into compact short links, ready to share and Cloudflare-friendly'],
      ['将冗长网址一键转为短链接，复制分享更便捷（自建服务，直达无延迟）', 'Turn long URLs into compact short links, ready to share and instantly open'],
      ['长链接转短链接，干净易传播，直达无延迟。', 'Turn long links into short links, clean to share, and quick to open.'],
      ['Enter a URL and generate a scannable QR code', '输入网址，生成二维码，扫码访问'],
      ['输入网址，快速生成二维码，扫码访问。', 'Enter a URL and generate a scannable QR code'],
      ['Count text instantly and clean up formatting with one click', '实时统计字数、行数，并快速调整文本格式（去空行、首行缩进）'],
      ['实时统计字数、行数，并快速调整文本格式（去空行、首行缩进）', 'Count text instantly and clean up formatting with one click'],
      ['Upload an image, tweak quality or width, and shrink the file size', '上传图片，调整压缩质量或最大宽度，减少文件体积'],
      ['Word 转 PDF', 'Word to PDF'],
      ['📄 Word 转 PDF', '📄 Word to PDF'],
      ['PDF 转 Word', 'PDF to Word'],
      ['📘 PDF 转 Word', '📘 PDF to Word'],
      ['Word to PDF Converter', 'Word 转 PDF 工具'],
      ['📄 Word to PDF Converter', '📄 Word 转 PDF 工具'],
      ['PDF to Word Converter', 'PDF 转 Word 工具'],
      ['📘 PDF to Word Converter', '📘 PDF 转 Word 工具'],
      ['Upload a local Word document, convert it into PDF in one click, and save it to your device. Browser mode currently supports .docx files.', '上传本地 Word 文档，一键转换为 PDF 并保存到设备，当前浏览器版支持 .docx 文件'],
      ['Upload a Word document, turn it into PDF in one click, and save it locally with preview support.', '上传 Word 文档，一键转换为 PDF，支持预览与本地保存。'],
      ['Upload a PDF document, extract its text and basic page structure, then export it as Word for further editing.', '上传 PDF 文档，提取文本与基础分页结构并导出为 Word，适合继续编辑与整理内容'],
      ['Upload a PDF document, extract text, and export it as Word for continued editing.', '上传 PDF 文档，提取文本并导出为 Word，适合继续编辑与整理。'],
      ['📂 Choose Word file', '📂 选择 Word 文件'],
      ['📂 Choose PDF file', '📂 选择 PDF 文件'],
      ['⚡ Start conversion', '⚡ 开始转换'],
      ['💾 Save file', '💾 保存文件'],
      ['👀 Document preview', '👀 文档预览'],
      ['Drag a .docx file here to upload on desktop, or tap the button to choose a file on mobile.', '支持将 .docx 文件拖到这里上传，桌面端拖拽更方便，移动端可直接点击选择文件'],
      ['Drag a PDF file here to upload on desktop, or tap the button to choose a file on mobile.', '支持将 PDF 文件拖到这里上传，桌面端拖拽更方便，移动端可直接点击选择文件'],
      ['💡 Browser-based conversion works best with .docx files. Please resave legacy .doc files as .docx first.', '💡 纯浏览器转换更适合 .docx 文件，旧版 .doc 建议先另存为 .docx 再转换'],
      ['💡 Browser-mode conversion works best for text-based PDFs. Scanned files or complex layouts may convert imperfectly.', '💡 当前为浏览器版转换，适合文本型 PDF；扫描件或复杂排版文档的还原度会有限'],
      ['💡 Complex headers, comments, or special fonts may look slightly different in the exported PDF.', '💡 若原文档含复杂页眉、批注或特殊字体，导出的 PDF 排版可能与 Word 略有差异'],
      ['💡 The exported Word file keeps the page order where possible, but images, annotations, forms, and complex tables may not fully survive.', '💡 导出的 Word 会尽量保留分页顺序，但图片、批注、表单和复杂表格可能无法完整还原'],
      ['上传图片，调整压缩质量与宽度，减少文件体积，保持画质。', 'Upload an image, tweak quality or width, and shrink the file size'],
      ['上传图片，调整压缩质量或最大宽度，减少文件体积，保持画质。', 'Upload an image, tweak quality or width, and shrink the file size while keeping it looking good'],
      ['Customise length and character sets to generate a strong password', '自定义密码长度和字符类型，一键生成高强度密码'],
      ['自定义长度和字符类型，生成高强度密码。', 'Customise length and character sets to generate a strong password'],
      ['Look up the location and ISP of a public IP, including your own', '查询公网 IP 的归属地信息，支持本机 IP'],
      ['查询任意公网IP的归属地信息，支持自动获取本机IP', 'Look up the location and ISP of any public IP, and auto-detect your own IP'],
      ['查询公网IP的归属地信息，支持本机IP。', 'Look up the location and ISP of a public IP, including your own'],
      ['Upload a photo and turn it into a crisp pixel-style avatar', '上传照片并自动裁剪成像素风头像，清晰又有趣'],
      ['上传照片，裁剪头像区域，一键生成像素风格头像（实时预览像素块大小）', 'Upload a photo, crop the avatar area, and generate a pixel-style avatar with live pixel-size preview'],
      ['上传照片，裁剪并生成像素风格头像。', 'Upload a photo and turn it into a crisp pixel-style avatar'],
      ['Add text watermarks with opacity, angle and tiled layouts', '为图片添加文字水印，支持透明度、角度和平铺模式'],
      ['为图片添加文字水印，支持平铺模式，可调节颜色、透明度、大小和旋转角度（实时预览）', 'Add text watermarks with tiled mode, adjustable color, opacity, size and rotation (live preview)'],
      ['为图片添加文字水印，支持平铺、透明度和旋转。', 'Add text watermarks with opacity, angle and tiled layouts'],
      ['Combine multiple images into a neat horizontal, vertical, or grid layout', '多张图片自由拼接，支持横向、纵向和九宫格布局'],
      ['上传多张图片，选择拼接模板，拖拽调整顺序，一键生成并保存', 'Upload multiple images, choose a collage template, drag to reorder, and generate/save in one click'],
      ['多图拼接，支持横向/纵向模板，拖拽排序。', 'Combine multiple images into a neat horizontal, vertical, or grid layout'],
      ['Short Link Generator', '短链接生成器'],
      ['QR Code Generator', '二维码生成器'],
      ['Text Formatter', '文本整理器'],
      ['Image Compressor', '图片压缩器'],
      ['Password Generator', '随机密码生成器'],
      ['IP Lookup', 'IP归属地查询'],
      ['Pixel Avatar Generator', '像素头像生成器'],
      ['Watermark Tool', '图片水印工具'],
      ['Photo Collage Maker', '图片拼图工具'],
      ['🔗 短链接生成器', '短链接生成器'],
      ['📱 二维码生成器', '二维码生成器'],
      ['📊 文本整理器', '文本整理器'],
      ['🖼️ 图片压缩器', '图片压缩器'],
      ['🔐 随机密码生成器', '随机密码生成器'],
      ['🌐 IP归属地查询', 'IP归属地查询'],
      ['🎨 像素头像生成器', '像素头像生成器'],
      ['💧 图片水印工具', '图片水印工具'],
      ['🧩 图片拼图工具', '图片拼图工具'],
      ['📦 全部工具', '全部工具'],
      ['随机密码生成', 'Password Generator'],
      ['🔐 随机密码生成', 'Password Generator'],
      ['原始链接', 'Original URL'],
      ['短链接', 'Short Link'],
      ['网址链接', 'Website URL'],
      ['生成短链接', 'Generate Short Link'],
      ['生成二维码', 'Generate QR Code'],
      ['保存二维码图片', 'Save QR Image'],
      ['请输入网址', 'Please enter a URL'],
      ['请输入有效的网址', 'Please enter a valid URL'],
      ['请先生成二维码', 'Please generate a QR code first'],
      ['未找到二维码图片，请先生成二维码', 'Could not find QR image. Please generate one first'],
      ['如果未自动下载，请长按二维码图片保存', "If it doesn't download automatically, long-press the QR image to save it"],
      ['查询', 'Search'],
      ['查询我的IP', 'My IP'],
      ['🔍 输入IP地址（支持IPv4）', '🔍 IP address (IPv4 supported)'],
      ['例如：8.8.8.8 或留空自动查询本机IP', 'For example: 8.8.8.8 or leave blank to detect your IP'],
      ['⏳ 查询中，请稍候...', '⏳ Looking up, please wait...'],
      ['🎚️ 像素块大小', '🎚️ Pixel size'],
      ['待裁剪图片', 'Image to crop'],
      ['像素头像', 'Pixel avatar'],
      ['请先选择图片', 'Please select an image first'],
      ['裁剪失败，请重试', 'Crop failed. Please try again'],
      ['请先生成像素头像', 'Please generate a pixel avatar first'],
      ['📱 长按图片保存到手机', '📱 Long-press the image to save it'],
      ['(大小计算中)', '(Calculating size)'],
      ['手动复制', 'Please copy manually'],
      ['生成失败', 'Generation failed'],
      ['🔢 密码长度：', '🔢 Password length:'],
      ['密码长度：', 'Password length:'],
      ['大写字母 (A-Z)', 'Uppercase letters (A-Z)'],
      ['小写字母 (a-z)', 'Lowercase letters (a-z)'],
      ['数字 (0-9)', 'Numbers (0-9)'],
      ['符号 (!@#$%^&*)', 'Symbols (!@#$%^&*)'],
      ['✍️ 水印文字', '✍️ Watermark text'],
      ['🎨 文字颜色', '🎨 Text color'],
      ['🎨 文字透明度', '🎨 Opacity'],
      ['📏 字体大小', '📏 Font size'],
      ['🔄 旋转角度', '🔄 Rotation'],
      ['拼接模板', 'Collage template'],
      ['自定义', 'Custom'],
      ['横向拼接', 'Horizontal'],
      ['纵向拼接', 'Vertical'],
      ['网格拼图', 'Grid'],
      ['未选择图片', 'No image selected'],
      ['等待压缩', 'Waiting to compress'],
      ['点击生成按钮获取密码', 'Click generate to create a password'],
      ['请至少选择一种字符类型', 'Please select at least one character type'],
      ['请先生成密码', 'Please generate a password first'],
      ['手动复制失败，请手动复制', 'Copy failed. Please copy it manually'],
      ['✓ 已复制', '✓ Copied'],
      ['请输入水印文字', 'Enter watermark text'],
      ['黑色', 'Black'],
      ['白色', 'White'],
      ['红色', 'Red'],
      ['绿色', 'Green'],
      ['蓝色', 'Blue'],
      ['平铺模式（文字均匀分布）', 'Tiled mode (even spacing)'],
      ['行数:', 'Rows:'],
      ['列数:', 'Columns:'],
      ['Turn long links into short links, clean to share, and quick to open.', '长链接转短链接，干净易传播，直达无延迟。'],
      ['Enter a URL, generate a QR code, and scan to open it.', '输入网址，快速生成二维码，扫码访问。'],
      ['Count text instantly and adjust formatting (remove blank lines, indent first line).', '实时统计字数，快速调整文本格式（去空行、首行缩进）。'],
      ['Adjust quality and width to reduce file size while keeping the image looking good.', '调整压缩质量与宽度，减少文件体积，保持画质。'],
      ['Customise length and character types to generate a strong password.', '自定义长度和字符类型，生成高强度密码。'],
      ['Look up the location and details of a public IP, including your own.', '查询公网IP的归属地信息，支持本机IP。'],
      ['Upload a photo, crop it, and turn it into a pixel-style avatar.', '上传照片，裁剪并生成像素风格头像。'],
      ['Add text watermarks with tiling, opacity, and rotation support.', '为图片添加文字水印，支持平铺、透明度和旋转。'],
      ['Combine multiple images with horizontal, vertical, and grid layouts.', '多图拼接，支持横向/纵向模板，拖拽排序。'],
      ['Open →', '立即使用 →'],
      ['Copy', '复制']
    ]),
    en: new Map([
      ['福禄工具箱', 'Fulutool Toolbox'],
      ['免费使用·无需注册·即用即走', 'Free to use · No sign-up · Instant access'],
      ['🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking'],
      ['🧩 其他工具 · 点击切换', '🧩 More tools · Jump around'],
      ['将冗长网址一键转为短链接，复制分享更便捷（支持 Cloudflare 部署）', 'Turn long URLs into compact short links, ready to share and Cloudflare-friendly'],
      ['将冗长网址一键转为短链接，复制分享更便捷（支持 Cloudflare 部署）', 'Turn long URLs into compact short links, ready to share and Cloudflare-friendly'],
      ['将冗长网址一键转为短链接，复制分享更便捷（自建服务，直达无延迟）', 'Turn long URLs into compact short links, ready to share and instantly open'],
      ['长链接转短链接，干净易传播，直达无延迟。', 'Turn long links into short links, clean to share, and quick to open.'],
      ['输入网址，生成二维码，扫码访问', 'Enter a URL and generate a scannable QR code'],
      ['输入网址，快速生成二维码，扫码访问。', 'Enter a URL and generate a scannable QR code'],
      ['实时统计字数、行数，并快速调整文本格式（去空行、首行缩进）', 'Count text instantly and clean up formatting with one click'],
      ['上传图片，调整压缩质量或最大宽度，减少文件体积', 'Upload an image, tweak quality or width, and shrink the file size'],
      ['Word 转 PDF', 'Word to PDF'],
      ['📄 Word 转 PDF', '📄 Word to PDF'],
      ['PDF 转 Word', 'PDF to Word'],
      ['📘 PDF 转 Word', '📘 PDF to Word'],
      ['Word 转 PDF 工具', 'Word to PDF Converter'],
      ['📄 Word 转 PDF 工具', '📄 Word to PDF Converter'],
      ['PDF 转 Word 工具', 'PDF to Word Converter'],
      ['📘 PDF 转 Word 工具', '📘 PDF to Word Converter'],
      ['上传本地 Word 文档，一键转换为 PDF 并保存到设备，当前浏览器版支持 .docx 文件', 'Upload a local Word document, convert it into PDF in one click, and save it to your device. Browser mode currently supports .docx files.'],
      ['上传 Word 文档，一键转换为 PDF，支持预览与本地保存。', 'Upload a Word document, turn it into PDF in one click, and save it locally with preview support.'],
      ['上传 PDF 文档，提取文本与基础分页结构并导出为 Word，适合继续编辑与整理内容', 'Upload a PDF document, extract its text and basic page structure, then export it as Word for further editing.'],
      ['上传 PDF 文档，提取文本并导出为 Word，适合继续编辑与整理。', 'Upload a PDF document, extract text, and export it as Word for continued editing.'],
      ['📂 选择 Word 文件', '📂 Choose Word file'],
      ['📂 选择 PDF 文件', '📂 Choose PDF file'],
      ['⚡ 开始转换', '⚡ Start conversion'],
      ['💾 保存文件', '💾 Save file'],
      ['👀 文档预览', '👀 Document preview'],
      ['支持将 .docx 文件拖到这里上传，桌面端拖拽更方便，移动端可直接点击选择文件', 'Drag a .docx file here to upload on desktop, or tap the button to choose a file on mobile.'],
      ['支持将 PDF 文件拖到这里上传，桌面端拖拽更方便，移动端可直接点击选择文件', 'Drag a PDF file here to upload on desktop, or tap the button to choose a file on mobile.'],
      ['💡 纯浏览器转换更适合 .docx 文件，旧版 .doc 建议先另存为 .docx 再转换', '💡 Browser-based conversion works best with .docx files. Please resave legacy .doc files as .docx first.'],
      ['💡 当前为浏览器版转换，适合文本型 PDF；扫描件或复杂排版文档的还原度会有限', '💡 Browser-mode conversion works best for text-based PDFs. Scanned files or complex layouts may convert imperfectly.'],
      ['💡 若原文档含复杂页眉、批注或特殊字体，导出的 PDF 排版可能与 Word 略有差异', '💡 Complex headers, comments, or special fonts may look slightly different in the exported PDF.'],
      ['💡 导出的 Word 会尽量保留分页顺序，但图片、批注、表单和复杂表格可能无法完整还原', '💡 The exported Word file keeps the page order where possible, but images, annotations, forms, and complex tables may not fully survive.'],
      ['上传图片，调整压缩质量与宽度，减少文件体积，保持画质。', 'Upload an image, tweak quality or width, and shrink the file size'],
      ['上传图片，调整压缩质量或最大宽度，减少文件体积，保持画质。', 'Upload an image, tweak quality or width, and shrink the file size while keeping it looking good'],
      ['自定义密码长度和字符类型，一键生成高强度密码', 'Customise length and character sets to generate a strong password'],
      ['自定义长度和字符类型，生成高强度密码。', 'Customise length and character sets to generate a strong password'],
      ['查询公网 IP 的归属地信息，支持本机 IP', 'Look up the location and ISP of a public IP, including your own'],
      ['查询任意公网IP的归属地信息，支持自动获取本机IP', 'Look up the location and ISP of any public IP, and auto-detect your own IP'],
      ['查询公网IP的归属地信息，支持本机IP。', 'Look up the location and ISP of a public IP, including your own'],
      ['上传照片并自动裁剪成像素风头像，清晰又有趣', 'Upload a photo and turn it into a crisp pixel-style avatar'],
      ['上传照片，裁剪头像区域，一键生成像素风格头像（实时预览像素块大小）', 'Upload a photo, crop the avatar area, and generate a pixel-style avatar with live pixel-size preview'],
      ['上传照片，裁剪并生成像素风格头像。', 'Upload a photo and turn it into a crisp pixel-style avatar'],
      ['为图片添加文字水印，支持透明度、角度和平铺模式', 'Add text watermarks with opacity, angle and tiled layouts'],
      ['为图片添加文字水印，支持平铺模式，可调节颜色、透明度、大小和旋转角度（实时预览）', 'Add text watermarks with tiled mode, adjustable color, opacity, size and rotation (live preview)'],
      ['为图片添加文字水印，支持平铺、透明度和旋转。', 'Add text watermarks with opacity, angle and tiled layouts'],
      ['多张图片自由拼接，支持横向、纵向和九宫格布局', 'Combine multiple images into a neat horizontal, vertical, or grid layout'],
      ['上传多张图片，选择拼接模板，拖拽调整顺序，一键生成并保存', 'Upload multiple images, choose a collage template, drag to reorder, and generate/save in one click'],
      ['多图拼接，支持横向/纵向模板，拖拽排序。', 'Combine multiple images into a neat horizontal, vertical, or grid layout'],
      ['短链接生成器', 'Short Link Generator'],
      ['二维码生成器', 'QR Code Generator'],
      ['文本整理器', 'Text Formatter'],
      ['图片压缩器', 'Image Compressor'],
      ['随机密码生成器', 'Password Generator'],
      ['IP归属地查询', 'IP Lookup'],
      ['像素头像生成器', 'Pixel Avatar Generator'],
      ['图片水印工具', 'Watermark Tool'],
      ['图片拼图工具', 'Photo Collage Maker'],
      ['🔗 短链接生成器', 'Short Link Generator'],
      ['📱 二维码生成器', 'QR Code Generator'],
      ['📊 文本整理器', 'Text Formatter'],
      ['🖼️ 图片压缩器', 'Image Compressor'],
      ['🔐 随机密码生成器', 'Password Generator'],
      ['🌐 IP归属地查询', 'IP Lookup'],
      ['🎨 像素头像生成器', 'Pixel Avatar Generator'],
      ['💧 图片水印工具', 'Watermark Tool'],
      ['🧩 图片拼图工具', 'Photo Collage Maker'],
      ['📦 全部工具', 'All tools'],
      ['随机密码生成', 'Password Generator'],
      ['🔐 随机密码生成', 'Password Generator'],
      ['原始链接', 'Original URL'],
      ['短链接', 'Short Link'],
      ['网址链接', 'Website URL'],
      ['生成短链接', 'Generate Short Link'],
      ['生成二维码', 'Generate QR Code'],
      ['保存二维码图片', 'Save QR Image'],
      ['请输入网址', 'Please enter a URL'],
      ['请输入有效的网址', 'Please enter a valid URL'],
      ['请先生成二维码', 'Please generate a QR code first'],
      ['未找到二维码图片，请先生成二维码', 'Could not find QR image. Please generate one first'],
      ['如果未自动下载，请长按二维码图片保存', "If it doesn't download automatically, long-press the QR image to save it"],
      ['查询', 'Search'],
      ['查询我的IP', 'My IP'],
      ['🔍 输入IP地址（支持IPv4）', '🔍 IP address (IPv4 supported)'],
      ['例如：8.8.8.8 或留空自动查询本机IP', 'For example: 8.8.8.8 or leave blank to detect your IP'],
      ['⏳ 查询中，请稍候...', '⏳ Looking up, please wait...'],
      ['🎚️ 像素块大小', '🎚️ Pixel size'],
      ['待裁剪图片', 'Image to crop'],
      ['像素头像', 'Pixel avatar'],
      ['请先选择图片', 'Please select an image first'],
      ['裁剪失败，请重试', 'Crop failed. Please try again'],
      ['请先生成像素头像', 'Please generate a pixel avatar first'],
      ['📱 长按图片保存到手机', '📱 Long-press the image to save it'],
      ['(大小计算中)', '(Calculating size)'],
      ['手动复制', 'Please copy manually'],
      ['生成失败', 'Generation failed'],
      ['🔢 密码长度：', '🔢 Password length:'],
      ['密码长度：', 'Password length:'],
      ['大写字母 (A-Z)', 'Uppercase letters (A-Z)'],
      ['小写字母 (a-z)', 'Lowercase letters (a-z)'],
      ['数字 (0-9)', 'Numbers (0-9)'],
      ['符号 (!@#$%^&*)', 'Symbols (!@#$%^&*)'],
      ['✍️ 水印文字', '✍️ Watermark text'],
      ['🎨 文字颜色', '🎨 Text color'],
      ['🎨 文字透明度', '🎨 Opacity'],
      ['📏 字体大小', '📏 Font size'],
      ['🔄 旋转角度', '🔄 Rotation'],
      ['拼接模板', 'Collage template'],
      ['自定义', 'Custom'],
      ['横向拼接', 'Horizontal'],
      ['纵向拼接', 'Vertical'],
      ['网格拼图', 'Grid'],
      ['未选择图片', 'No image selected'],
      ['等待压缩', 'Waiting to compress'],
      ['点击生成按钮获取密码', 'Click generate to create a password'],
      ['请至少选择一种字符类型', 'Please select at least one character type'],
      ['请先生成密码', 'Please generate a password first'],
      ['手动复制失败，请手动复制', 'Copy failed. Please copy it manually'],
      ['✓ 已复制', '✓ Copied'],
      ['请输入水印文字', 'Enter watermark text'],
      ['黑色', 'Black'],
      ['白色', 'White'],
      ['红色', 'Red'],
      ['绿色', 'Green'],
      ['蓝色', 'Blue'],
      ['平铺模式（文字均匀分布）', 'Tiled mode (even spacing)'],
      ['行数:', 'Rows:'],
      ['列数:', 'Columns:'],
      ['长链接转短链接，干净易传播，直达无延迟。', 'Turn long links into short links, clean to share, and quick to open.'],
      ['输入网址，快速生成二维码，扫码访问。', 'Enter a URL, generate a QR code, and scan to open it.'],
      ['实时统计字数，快速调整文本格式（去空行、首行缩进）。', 'Count text instantly and adjust formatting (remove blank lines, indent first line).'],
      ['调整压缩质量与宽度，减少文件体积，保持画质。', 'Adjust quality and width to reduce file size while keeping the image looking good.'],
      ['自定义长度和字符类型，生成高强度密码。', 'Customise length and character types to generate a strong password.'],
      ['查询公网IP的归属地信息，支持本机IP。', 'Look up the location and details of a public IP, including your own.'],
      ['上传照片，裁剪并生成像素风格头像。', 'Upload a photo, crop it, and turn it into a pixel-style avatar.'],
      ['为图片添加文字水印，支持平铺、透明度和旋转。', 'Add text watermarks with tiling, opacity, and rotation support.'],
      ['多图拼接，支持横向/纵向模板，拖拽排序。', 'Combine multiple images with horizontal, vertical, and grid layouts.'],
      ['立即使用 →', 'Open →'],
      ['复制', 'Copy']
    ])
  };

  const EXTRA_TRANSLATIONS = {
    zh: new Map([
      ['✨ Generate', '✨ 生成'],
      ['✨ Generate Password', '✨ 生成密码'],
      ['生成密码', '✨ 生成密码'],
      ['📋 Copy Password', '📋 复制密码'],
      ['复制密码', '📋 复制密码'],
      ['🔎 Search', '🔎 查询'],
      ['📍 My IP', '📍 查询我的IP'],
      ['🎯 Generate QR Code', '🎯 生成二维码'],
      ['💾 Save QR Image', '💾 保存二维码图片'],
      ['📂 Select Image', '📂 选择图片'],
      ['📂 Select Photo', '📂 选择照片'],
      ['⚡ Compress', '⚡ 开始压缩'],
      ['⬇️ Download Image', '⬇️ 下载图片'],
      ['📉 Quality', '📉 压缩质量'],
      ['📐 Max width', '📐 最大宽度'],
      ['📸 Original image', '📸 原图'],
      ['✨ Compressed image', '✨ 压缩结果'],
      ['✨ Crop and Generate Avatar', '✨ 裁剪并生成像素头像'],
      ['💾 Save Avatar', '💾 保存头像'],
      ['📂 Choose Images (Multi-select)', '📂 选择图片（可多选）'],
      ['✨ Generate Collage', '✨ 生成拼图'],
      ['💾 Save Image', '💾 保存图片'],
      ['📈 Count Now', '📈 立即统计'],
      ['🚫 Remove Empty Lines', '🚫 去除所有空行'],
      ['📝 Indent First Line by 2', '📝 首行缩进2字符'],
      ['📋 Copy Text', '📋 复制文本'],
      ['🔗 Original URL', '🔗 原始链接'],
      ['✨ Generate Short Link', '✨ 生成短链接']
    ]),
    en: new Map([
      ['✨ 生成', '✨ Generate'],
      ['✨ 生成密码', '✨ Generate Password'],
      ['生成密码', '✨ Generate Password'],
      ['📋 复制密码', '📋 Copy Password'],
      ['复制密码', '📋 Copy Password'],
      ['🔎 查询', '🔎 Search'],
      ['📍 查询我的IP', '📍 My IP'],
      ['🎯 生成二维码', '🎯 Generate QR Code'],
      ['💾 保存二维码图片', '💾 Save QR Image'],
      ['📂 选择图片', '📂 Select Image'],
      ['📂 选择照片', '📂 Select Photo'],
      ['⚡ 开始压缩', '⚡ Compress'],
      ['⬇️ 下载图片', '⬇️ Download Image'],
      ['📉 压缩质量', '📉 Quality'],
      ['📐 最大宽度', '📐 Max width'],
      ['📸 原图', '📸 Original image'],
      ['✨ 压缩结果', '✨ Compressed image'],
      ['✨ 裁剪并生成像素头像', '✨ Crop and Generate Avatar'],
      ['💾 保存头像', '💾 Save Avatar'],
      ['📂 选择图片（可多选）', '📂 Choose Images (Multi-select)'],
      ['✨ 生成拼图', '✨ Generate Collage'],
      ['💾 保存图片', '💾 Save Image'],
      ['📈 立即统计', '📈 Count Now'],
      ['🚫 去除所有空行', '🚫 Remove Empty Lines'],
      ['📝 首行缩进2字符', '📝 Indent First Line by 2'],
      ['📋 复制文本', '📋 Copy Text'],
      ['🔗 原始链接', '🔗 Original URL'],
      ['✨ 生成短链接', '✨ Generate Short Link']
    ])
  };

  function normalizeLang(lang) {
    return lang === 'en' ? 'en' : 'zh';
  }

  function getStoredLang() {
    try {
      return normalizeLang(localStorage.getItem(STORAGE_KEY) || '');
    } catch (err) {
      return DEFAULT_LANG;
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, normalizeLang(lang));
    } catch (err) {}
  }

  function getPageBindings() {
    const path = location.pathname.endsWith('/') ? `${location.pathname}index.html` : location.pathname;
    return {
      ...(PAGE_BINDINGS[path] || {}),
      ...(window.FULUTOOL_BINDINGS || {})
    };
  }

  function pick(entry, lang) {
    if (entry == null) return '';
    if (typeof entry === 'string') return entry;
    return entry[lang] ?? entry.zh ?? entry.en ?? '';
  }

  function translateValue(value, lang) {
    if (typeof value !== 'string' || !value) return value;
    const normalized = LANGUAGE_NORMALIZATIONS[lang]?.get(value);
    if (normalized) return normalized;
    const translated = EXTRA_TRANSLATIONS[lang]?.get(value) ?? TEXT_TRANSLATIONS[lang]?.get(value) ?? value;

    // In Chinese mode, never replace existing Chinese copy with English text.
    if (
      lang === 'zh' &&
      /[\u3400-\u9fff]/.test(value) &&
      !/[\u3400-\u9fff]/.test(translated)
    ) {
      return value;
    }

    return translated;
  }

  function applyBinding(selector, lang, handler) {
    if (!selector) return;
    document.querySelectorAll(selector).forEach((el) => handler(el, pick));
  }

  function applyPageBindings(lang) {
    const bindings = getPageBindings();

    if (bindings.title) {
      document.title = pick(bindings.title, lang);
    }

    (bindings.text || []).forEach((item) => {
      document.querySelectorAll(item.selector).forEach((el) => {
        el.textContent = pick(item, lang);
      });
    });

    (bindings.html || []).forEach((item) => {
      document.querySelectorAll(item.selector).forEach((el) => {
        el.innerHTML = pick(item, lang);
      });
    });

    (bindings.attr || []).forEach((item) => {
      const attr = item.attr || 'title';
      document.querySelectorAll(item.selector).forEach((el) => {
        el.setAttribute(attr, pick(item, lang));
      });
    });

    (bindings.value || []).forEach((item) => {
      document.querySelectorAll(item.selector).forEach((el) => {
        el.value = pick(item, lang);
      });
    });
  }

  function translateTextNodes(lang) {
    if (!document.body) return;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'CODE', 'PRE', 'SVG'].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    let node = walker.nextNode();
    while (node) {
      const translated = translateValue(node.nodeValue, lang);
      if (translated !== node.nodeValue) {
        node.nodeValue = translated;
      }
      node = walker.nextNode();
    }

    document.querySelectorAll('[placeholder], [title], [aria-label], [alt]').forEach((el) => {
      ['placeholder', 'title', 'aria-label', 'alt'].forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        const current = el.getAttribute(attr);
        const translated = translateValue(current, lang);
        if (translated !== current) {
          el.setAttribute(attr, translated);
        }
      });
    });
  }

  function translateInteractiveElements(lang) {
    const selectors = [
      'button',
      'a.tool-card',
      '.tool-card-name',
      '.tool-name',
      '.tool-link',
      '.section-label',
      '.tool-title',
      '.tool-desc',
      '.preview-title',
      '.result-label span',
      '.copy-btn',
      '.footer',
      '.save-tip',
      '.note',
      '.dropzone-copy',
      '.weixin-tip'
    ];

    document.querySelectorAll(selectors.join(',')).forEach((el) => {
      if (el.querySelector('input, textarea, select, svg, img, canvas')) return;
      const current = el.textContent;
      const translated = translateValue(current, lang);
      if (translated !== current) {
        el.textContent = translated;
      }
    });
  }

  function setToolbarLang(lang) {
    const resolved = normalizeLang(lang);
    document.documentElement.lang = resolved === 'en' ? 'en' : 'zh-CN';

    const toolbar = document.querySelector('.ft-toolbar');
    if (!toolbar) return;

    toolbar.querySelectorAll('[data-ft-lang]').forEach((btn) => {
      const isActive = btn.getAttribute('data-ft-lang') === resolved;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    const brand = toolbar.querySelector('[data-ft-brand]');
    const tagline = toolbar.querySelector('[data-ft-brand-tagline]');
    if (brand) {
      brand.textContent = resolved === 'en' ? 'Fulutool Toolbox' : '福禄工具箱';
    }
    if (tagline) {
      tagline.textContent = resolved === 'en'
        ? 'Free to use · No sign-up · Instant access'
        : '免费使用·无需注册·即用即走';
    }
  }

  function ensureToolbar() {
    if (document.querySelector('.ft-toolbar')) return;

    const toolbar = document.createElement('div');
    toolbar.className = 'ft-toolbar';
    toolbar.innerHTML = `
      <a class="ft-brand" href="/" aria-label="Fulutool">
        <span class="ft-brand-icon" aria-hidden="true">
          <img src="/assets/favicon.svg" alt="">
        </span>
        <span class="ft-brand-copy">
          <strong data-ft-brand>福禄工具箱</strong>
          <small data-ft-brand-tagline>免费使用·无需注册·即用即走</small>
        </span>
      </a>
      <div class="ft-lang-switch" role="group" aria-label="Language switch">
        <button class="ft-lang-btn" type="button" data-ft-lang="zh">中文</button>
        <button class="ft-lang-btn" type="button" data-ft-lang="en">EN</button>
      </div>
    `;

    document.body.prepend(toolbar);

    toolbar.querySelectorAll('[data-ft-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-ft-lang'));
      });
    });
  }

  function setLanguage(lang) {
    const resolved = normalizeLang(lang);
    setStoredLang(resolved);
    setToolbarLang(resolved);
    applyPageBindings(resolved);
    translateInteractiveElements(resolved);

    const hooks = window.FULUTOOL_HOOKS || {};
    if (typeof hooks.onLanguageChange === 'function') {
      hooks.onLanguageChange(resolved);
    }

    translateTextNodes(resolved);
  }

  function init() {
    ensureToolbar();
    document.body.classList.add('ft-flat-hero');
    const lang = getStoredLang();
    setLanguage(lang);

    if (window.FULUTOOL_HOOKS && typeof window.FULUTOOL_HOOKS.onBeforeApply === 'function') {
      window.FULUTOOL_HOOKS.onBeforeApply(lang);
    }

    const hooks = window.FULUTOOL_HOOKS || {};
    if (typeof hooks.onReady === 'function') {
      hooks.onReady(lang);
    }

    translateTextNodes(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.Fulutool = {
    get lang() {
      return getStoredLang();
    },
    setLanguage,
    t(key, fallback) {
      const dict = (window.FULUTOOL_MESSAGES || {})[getStoredLang()] || {};
      return dict[key] ?? fallback ?? key;
    },
    formatBytes(bytes) {
      if (!Number.isFinite(bytes)) return '-';
      if (bytes < 1024) return `${bytes} B`;
      const units = ['KB', 'MB', 'GB'];
      let value = bytes / 1024;
      let idx = 0;
      while (value >= 1024 && idx < units.length - 1) {
        value /= 1024;
        idx += 1;
      }
      return `${value.toFixed(value >= 10 ? 1 : 2)} ${units[idx]}`;
    }
  };
})();
