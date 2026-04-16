(function () {
  const STORAGE_KEY = 'fulutool.lang';
  const DEFAULT_LANG = 'zh';
  const PAGE_BINDINGS = {
    '/index.html': {
      title: { zh: '福禄工具箱 · 常用工具大全', en: 'Fulutool Toolbox · Everyday Utilities' },
      text: [
        { selector: '.title-section p', zh: '免费使用 · 无需注册 · 即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ]
    },
    '/tools.html': {
      title: { zh: '福禄工具箱 · 常用工具大全', en: 'Fulutool Toolbox · Everyday Utilities' },
      text: [
        { selector: '.title-section p', zh: '免费使用 · 无需注册 · 即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.footer', zh: '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', en: '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking' }
      ]
    },
    '/shortlink.html': {
      title: { zh: '免费短链接生成器 · 福禄工具箱', en: 'Short Link Generator · Fulutool Toolbox' },
      text: [
        { selector: '.title-section p', zh: '免费使用 · 无需注册 · 即用即走', en: 'Free to use · No sign-up · Instant access' },
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
        { selector: '.title-section p', zh: '免费使用 · 无需注册 · 即用即走', en: 'Free to use · No sign-up · Instant access' },
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
        { selector: '.title-section p', zh: '免费使用 · 无需注册 · 即用即走', en: 'Free to use · No sign-up · Instant access' },
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
        { selector: '.title-section p', zh: '免费使用 · 无需注册 · 即用即走', en: 'Free to use · No sign-up · Instant access' },
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
    '/password.html': {
      title: { zh: '免费随机密码生成器 · 福禄工具箱', en: 'Password Generator · Fulutool Toolbox' },
      text: [
        { selector: '.title-section p', zh: '免费使用 · 无需注册 · 即用即走', en: 'Free to use · No sign-up · Instant access' },
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
        { selector: '.title-section p', zh: '免费使用 · 无需注册 · 即用即走', en: 'Free to use · No sign-up · Instant access' },
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
        { selector: '.title-section p', zh: '免费使用 · 无需注册 · 即用即走', en: 'Free to use · No sign-up · Instant access' },
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
        { selector: '.title-section p', zh: '免费使用 · 无需注册 · 即用即走', en: 'Free to use · No sign-up · Instant access' },
        { selector: '.current-tool-badge', zh: '当前工具：拼图工具', en: 'Current tool: Collage Maker' },
        { selector: '.tool-title', zh: '🧩 拼图工具', en: '🧩 Photo Collage Maker' },
        { selector: '.tool-desc', zh: '多张图片自由拼接，支持横向、纵向和九宫格布局', en: 'Combine multiple images into a neat horizontal, vertical, or grid layout' },
        { selector: '#selectImagesBtn', zh: '📂 选择图片（可多选）', en: '📂 Choose images (multi-select)' },
        { selector: '.template-buttons .template-btn:nth-of-type(1)', zh: '横向拼接', en: 'Horizontal' },
        { selector: '.template-buttons .template-btn:nth-of-type(2)', zh: '纵向拼接', en: 'Vertical' },
        { selector: '.template-buttons .template-btn:nth-of-type(3)', zh: '九宫格', en: 'Grid' },
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
        { selector: '.title-section p', zh: '免费使用 · 无需注册 · 即用即走', en: 'Free to use · No sign-up · Instant access' },
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
      ['现代、轻快、可直接部署到 Cloudflare 的工具集合', '免费试用 · 无需注册 · 即用即走'],
      ['免费使用 · 无需注册 · 即用即走', '免费试用 · 无需注册 · 即用即走'],
      ['Free to use · No sign-up · Instant access', '免费试用 · 无需注册 · 即用即走'],
      ['Modern everyday utilities, ready for Cloudflare', '免费试用 · 无需注册 · 即用即走']
    ]),
    en: new Map([
      ['现代、轻快、可直接部署到 Cloudflare 的工具集合', 'Free to try · No sign-up · Instant access'],
      ['免费使用 · 无需注册 · 即用即走', 'Free to try · No sign-up · Instant access'],
      ['Free to use · No sign-up · Instant access', 'Free to try · No sign-up · Instant access'],
      ['免费试用 · 无需注册 · 即用即走', 'Free to try · No sign-up · Instant access']
    ])
  };

  const TEXT_TRANSLATIONS = {
    zh: new Map([
      ['Fulutool Toolbox', '福禄工具箱'],
      ['Free to try · No sign-up · Instant access', '免费试用 · 无需注册 · 即用即走'],
      ['🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking', '🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪'],
      ['🧩 More tools · Jump around', '🧩 其他工具 · 点击切换'],
      ['Turn long URLs into compact short links, ready to share and Cloudflare-friendly', '将冗长网址一键转为短链接，复制分享更便捷（支持 Cloudflare 部署）'],
      ['将冗长网址一键转为短链接，复制分享更便捷（支持 Cloudflare 部署）', 'Turn long URLs into compact short links, ready to share and Cloudflare-friendly'],
      ['长链接转短链接，干净易传播，直达无延迟。', 'Turn long links into short links, clean to share, and quick to open.'],
      ['Enter a URL and generate a scannable QR code', '输入网址，生成二维码，扫码访问'],
      ['输入网址，快速生成二维码，扫码访问。', 'Enter a URL and generate a scannable QR code'],
      ['Count text instantly and clean up formatting with one click', '实时统计字数、行数，并快速调整文本格式（去空行、首行缩进）'],
      ['实时统计字数、行数，并快速调整文本格式（去空行、首行缩进）', 'Count text instantly and clean up formatting with one click'],
      ['Upload an image, tweak quality or width, and shrink the file size', '上传图片，调整压缩质量或最大宽度，减少文件体积'],
      ['上传图片，调整压缩质量与宽度，减少文件体积，保持画质。', 'Upload an image, tweak quality or width, and shrink the file size'],
      ['Customise length and character sets to generate a strong password', '自定义密码长度和字符类型，一键生成高强度密码'],
      ['自定义长度和字符类型，生成高强度密码。', 'Customise length and character sets to generate a strong password'],
      ['Look up the location and ISP of a public IP, including your own', '查询公网 IP 的归属地信息，支持本机 IP'],
      ['查询公网IP的归属地信息，支持本机IP。', 'Look up the location and ISP of a public IP, including your own'],
      ['Upload a photo and turn it into a crisp pixel-style avatar', '上传照片并自动裁剪成像素风头像，清晰又有趣'],
      ['上传照片，裁剪并生成像素风格头像。', 'Upload a photo and turn it into a crisp pixel-style avatar'],
      ['Add text watermarks with opacity, angle and tiled layouts', '为图片添加文字水印，支持透明度、角度和平铺模式'],
      ['为图片添加文字水印，支持平铺、透明度和旋转。', 'Add text watermarks with opacity, angle and tiled layouts'],
      ['Combine multiple images into a neat horizontal, vertical, or grid layout', '多张图片自由拼接，支持横向、纵向和九宫格布局'],
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
      ['免费试用 · 无需注册 · 即用即走', 'Free to try · No sign-up · Instant access'],
      ['🧰 福禄工具箱 · 所有工具免费 | 独立页面 | 无跟踪', '🧰 Fulutool Toolbox · Free tools | Standalone pages | No tracking'],
      ['🧩 其他工具 · 点击切换', '🧩 More tools · Jump around'],
      ['将冗长网址一键转为短链接，复制分享更便捷（支持 Cloudflare 部署）', 'Turn long URLs into compact short links, ready to share and Cloudflare-friendly'],
      ['将冗长网址一键转为短链接，复制分享更便捷（支持 Cloudflare 部署）', 'Turn long URLs into compact short links, ready to share and Cloudflare-friendly'],
      ['长链接转短链接，干净易传播，直达无延迟。', 'Turn long links into short links, clean to share, and quick to open.'],
      ['输入网址，生成二维码，扫码访问', 'Enter a URL and generate a scannable QR code'],
      ['输入网址，快速生成二维码，扫码访问。', 'Enter a URL and generate a scannable QR code'],
      ['实时统计字数、行数，并快速调整文本格式（去空行、首行缩进）', 'Count text instantly and clean up formatting with one click'],
      ['上传图片，调整压缩质量或最大宽度，减少文件体积', 'Upload an image, tweak quality or width, and shrink the file size'],
      ['上传图片，调整压缩质量与宽度，减少文件体积，保持画质。', 'Upload an image, tweak quality or width, and shrink the file size'],
      ['自定义密码长度和字符类型，一键生成高强度密码', 'Customise length and character sets to generate a strong password'],
      ['自定义长度和字符类型，生成高强度密码。', 'Customise length and character sets to generate a strong password'],
      ['查询公网 IP 的归属地信息，支持本机 IP', 'Look up the location and ISP of a public IP, including your own'],
      ['查询公网IP的归属地信息，支持本机IP。', 'Look up the location and ISP of a public IP, including your own'],
      ['上传照片并自动裁剪成像素风头像，清晰又有趣', 'Upload a photo and turn it into a crisp pixel-style avatar'],
      ['上传照片，裁剪并生成像素风格头像。', 'Upload a photo and turn it into a crisp pixel-style avatar'],
      ['为图片添加文字水印，支持透明度、角度和平铺模式', 'Add text watermarks with opacity, angle and tiled layouts'],
      ['为图片添加文字水印，支持平铺、透明度和旋转。', 'Add text watermarks with opacity, angle and tiled layouts'],
      ['多张图片自由拼接，支持横向、纵向和九宫格布局', 'Combine multiple images into a neat horizontal, vertical, or grid layout'],
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
    return TEXT_TRANSLATIONS[lang]?.get(value) ?? value;
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
        ? 'Free to try · No sign-up · Instant access'
        : '免费试用 · 无需注册 · 即用即走';
    }
  }

  function ensureToolbar() {
    if (document.querySelector('.ft-toolbar')) return;

    const toolbar = document.createElement('div');
    toolbar.className = 'ft-toolbar';
    toolbar.innerHTML = `
      <a class="ft-brand" href="/" aria-label="Fulutool">
        <span class="ft-brand-mark">福</span>
        <span class="ft-brand-copy">
          <strong data-ft-brand>福禄工具箱</strong>
          <small data-ft-brand-tagline>免费试用 · 无需注册 · 即用即走</small>
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

    const observer = new MutationObserver(() => {
      translateTextNodes(getStoredLang());
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
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
