// Icon yaratish uchun oddiy SVG dan PNG ga o'tkazuvchi script
const fs = require('fs');
const path = require('path');

// SVG icon (NexusAI logosi - sparkles emoji)
const createIcon = (size) => {
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10B981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#grad)"/>
  <text x="50%" y="50%" font-size="${size * 0.5}" text-anchor="middle" dy=".35em" fill="white" font-family="Arial, sans-serif" font-weight="bold">N</text>
</svg>`;
};

// www papkaga icon fayllarni yaratish
const wwwDir = path.join(__dirname, 'www');

// 192x192 icon
fs.writeFileSync(path.join(wwwDir, 'icon-192.png.svg'), createIcon(192));
console.log('Created icon-192.png.svg');

// 512x512 icon
fs.writeFileSync(path.join(wwwDir, 'icon-512.png.svg'), createIcon(512));
console.log('Created icon-512.png.svg');

console.log('\nSVG icons created! For production, convert to PNG using online tools or ImageMagick.');
console.log('For now, renaming to .png for testing...');

// Vaqtinchalik - SVG ni PNG sifatida nomlash (Cordova uchun)
fs.copyFileSync(path.join(wwwDir, 'icon-192.png.svg'), path.join(wwwDir, 'icon-192.png'));
fs.copyFileSync(path.join(wwwDir, 'icon-512.png.svg'), path.join(wwwDir, 'icon-512.png'));

console.log('Icons ready!');
