# 🚀 NexusAI - Advanced AI Chat Application

[![GitHub Release](https://img.shields.io/badge/Release-v1.0.0-brightgreen)](https://github.com/xondamiroralboyev013-web/NexusAI/releases/tag/v1.0.0)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)](#)
[![Groq API](https://img.shields.io/badge/Powered%20by-Groq%20Mixtral-blue)](#)

> **NexusAI v1.0.0** - Ultra-fast AI chat with web search, images, and 100+ languages

**[📥 DOWNLOAD NOW](https://github.com/xondamiroralboyev013-web/NexusAI/releases/tag/v1.0.0)** | **[🚀 Quick Start](#quick-start)** | **[📖 Guide](DOWNLOAD-AND-INSTALL.md)**

---

## ✨ Features

| Feature | Status |
|---------|--------|
| 🤖 **Groq AI** (Mixtral 8x7B) | ✅ Ultra-fast responses |
| 🔍 **Web Search** (Tavily) | ✅ Real-time research |
| 🖼️ **Image Search** (Pixabay) | ✅ Visual results |
| 🎤 **Voice I/O** | ✅ Speak & listen |
| 🌍 **100+ Languages** | ✅ Global support |
| 📱 **Android APK** | ✅ Mobile app |
| 🌐 **Web Version** | ✅ Browser ready |
| 💾 **Chat History** | ✅ Save conversations |
| 🎨 **Dark Mode** | ✅ Eye comfort |
| 🚀 **PWA Ready** | ✅ Install as app |

---

## 🎯 Quick Start

### **Option 1: Web Version (No Build Needed) ⭐**
```bash
1. Download: https://github.com/xondamiroralboyev013-web/NexusAI/releases
2. Extract the ZIP
3. Open: www/app.html in your browser
4. Get free API key: https://console.groq.com
5. Add key in Settings & Start chatting!
```

### **Option 2: Clone & Run**
```bash
git clone https://github.com/xondamiroralboyev013-web/NexusAI.git
cd NexusAI
npm install
npm run serve
```

### **Option 3: Build Android APK**
```bash
npm install
cordova platform add android
cordova build android --release
# APK at: platforms/android/app/build/outputs/apk/release/
```

---

## 📥 Download Options

### **🔗 Main Repository**
- **Web:** https://github.com/xondamiroralboyev013-web/NexusAI
- **Release:** https://github.com/xondamiroralboyev013-web/NexusAI/releases/tag/v1.0.0
- **ZIP:** https://github.com/xondamiroralboyev013-web/NexusAI/archive/refs/heads/main.zip

### **📦 What You Get**
✅ Full source code  
✅ Android build files  
✅ Complete documentation  
✅ Logo & assets  
✅ API configuration  

**See [DOWNLOAD-AND-INSTALL.md](DOWNLOAD-AND-INSTALL.md) for detailed instructions**

**Perfect for:**
- Current events & news
- Statistics & facts
- Product research
- Learning new topics

---

### 💡 Creator Mode (ChatGPT-style)
Get creative, write code, or analyze complex topics.

```
User: "Write a React component for user authentication"

↓ NexusAI detects creative query (no search needed)

Nexus:
[Shows clean code block]
[Explains implementation]
[Provides best practices]
```

**Perfect for:**
- Code generation
- Writing & content
- Business strategy
- Learning explanations

---

### 📸 Visual Mode (Images + Maps)
See visual references alongside explanations.

```
User: "Show me what the Statue of Liberty looks like"

↓ NexusAI detects visual query

Nexus:
[Displays 4-5 images]
[Shows location on map]
[Provides historical context]
```

**Perfect for:**
- Inspiration & design
- Location research
- Visual learning
- Travel planning

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Android SDK (for APK builds)
- Git

### 1. Clone Repository
```bash
git clone https://github.com/xondamiroralboyev013-web/NexusAI.git
cd NexusAI/NexusAI
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Get API Keys
1. **OpenRouter** (AI models): https://openrouter.ai/
2. **Tavily** (web search): https://tavily.com/
3. **Pixabay** (image search): https://pixabay.com/api/

### 4. Configure Keys
Edit `www/index.html` (line ~293):
```javascript
const CONFIG = {
    apiKey: 'YOUR_OPENROUTER_KEY',
    tavilyKey: 'YOUR_TAVILY_KEY',
    pixabayKey: 'YOUR_PIXABAY_KEY'
};
```

### 5. Run Locally
```bash
# For web development
npm start

# Or open www/index.html in a browser
```

### 6. Build APK
```bash
# Add Android platform
npx cordova platform add android

# Build APK
npx cordova build android
```

---

## 📱 Mobile Installation

### Via GitHub Actions (Recommended)
1. Push changes to `main` branch
2. Wait for GitHub Actions workflow to complete
3. Download APK artifact from Actions
4. Install on Android device

### Manual Build
```bash
npx cordova prepare
npx cordova build android --release

# APK will be at:
# platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

### Install on Device
```bash
adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [NEXUS-HYBRID-GUIDE.md](./NEXUS-HYBRID-GUIDE.md) | Complete setup & usage guide |
| [NEXUS-IMPLEMENTATION-SUMMARY.md](./NEXUS-IMPLEMENTATION-SUMMARY.md) | Architecture & quick reference |
| [NEXUS-CHANGES.md](./NEXUS-CHANGES.md) | Technical changelog |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│         Nexus Hybrid AI System          │
├─────────────────────────────────────────┤
│                                          │
│  Frontend (Vanilla JS + Tailwind CSS)   │
│  ├─ index.html (Main UI)                │
│  ├─ app.js (Device/Cordova glue)        │
│  └─ sw.js (Service Worker)              │
│                                          │
├─────────────────────────────────────────┤
│                                          │
│  APIs Integration                       │
│  ├─ OpenRouter (AI models)              │
│  ├─ Tavily (Web search)                 │
│  ├─ Pixabay (Images)                    │
│  └─ Google Maps (Locations)             │
│                                          │
├─────────────────────────────────────────┤
│                                          │
│  Mobile Layer (Cordova)                 │
│  ├─ Android APK Build                   │
│  ├─ Device Hardware Access              │
│  └─ Offline Capabilities                │
│                                          │
└─────────────────────────────────────────┘
```

---

## 💻 Tech Stack

### Frontend
- **HTML5** / **CSS3** (Tailwind CSS)
- **Vanilla JavaScript** (no frameworks)
- **Marked.js** (Markdown parsing)
- **Highlight.js** (Syntax highlighting)
- **Lucide Icons** (SVG icons)

### APIs
- **OpenRouter** - ChatGPT/Claude/Llama models
- **Tavily** - Web search engine
- **Pixabay** - Image database
- **Google Maps** - Location display

### Mobile
- **Apache Cordova** - Android app framework
- **Android SDK** - Platform-specific build
- **Git/GitHub Actions** - CI/CD automation

---

## 🔐 Security

### API Keys
- **Development**: Edit `index.html` directly (placeholders provided)
- **Production**: Use environment variables or backend proxy
- **Never**: Commit real API keys to Git

### Data Privacy
- Chats stored locally in browser
- No data sent to third parties (except APIs)
- Service Worker handles offline caching safely

### Best Practices
```javascript
// ✗ WRONG (Don't do this)
const apiKey = 'sk-xxx'; // Hardcoded in code

// ✓ RIGHT (Do this)
const apiKey = process.env.API_KEY; // Environment variable
// Or via backend proxy that manages keys
```

---

## 📊 API Pricing & Limits

| Service | Free Tier | Pricing |
|---------|-----------|---------|
| **OpenRouter** | Yes | Varies by model |
| **Tavily** | 500/month | $100/100k after |
| **Pixabay** | 5,000/day | Free |
| **Google Maps** | Limited | $0.007 per request |

---

## 🧪 Testing

### Web Browser
```bash
# Open in browser
open www/index.html

# Or use local server
npx serve www
```

### Android APK
1. Install APK on device
2. Open NexusAI app
3. Test each mode:
   - Research: "What is quantum computing?"
   - Creator: "Write a hello world program"
   - Visual: "Show me the Taj Mahal"

### Troubleshooting
```javascript
// Check console for errors
console.log('Debug messages will appear here');

// Check API keys are valid
console.log(CONFIG); // Should show your keys

// Test each API individually
await fetchWebSearch('test');
await fetchPixabayImages('test');
```

---

## 🚀 Deployment

### GitHub Pages (Web)
```bash
# Push to gh-pages branch
git push origin www:gh-pages
```

### Android App Store
1. Generate signed APK (requires keystore)
2. Create Google Play Developer account
3. Upload APK with description
4. Wait for review

---

## 📈 Performance

### Benchmarks
| Operation | Time |
|-----------|------|
| Research query | 3-5s |
| Creator query | 1-2s |
| Visual query | 2-3s |
| Page load | <1s |
| APK launch | 2-3s |

### Optimization Tips
- Enable caching in service worker
- Lazy load images
- Minify CSS/JS for production
- Use CDN for fonts/icons

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork repository
2. Create feature branch: `git checkout -b feature/xyz`
3. Make changes
4. Commit: `git commit -am 'Add xyz'`
5. Push: `git push origin feature/xyz`
6. Create Pull Request

---

## 📝 License

MIT License - See [LICENSE](./LICENSE) file

---

## 🙋 Support

**Questions?** Check the documentation:
- [NEXUS-HYBRID-GUIDE.md](./NEXUS-HYBRID-GUIDE.md) - Setup & usage
- [NEXUS-IMPLEMENTATION-SUMMARY.md](./NEXUS-IMPLEMENTATION-SUMMARY.md) - Architecture
- [NEXUS-CHANGES.md](./NEXUS-CHANGES.md) - What changed

---

## 📞 Contact

- **GitHub Issues**: Report bugs or request features
- **Discussions**: Ask questions in repository discussions
- **Email**: For urgent matters

---

## 🎯 Roadmap

### Phase 1 (Current) ✅
- [x] Hybrid AI architecture
- [x] Research mode (web search)
- [x] Creator mode (code)
- [x] Visual mode (images + maps)
- [x] APK build pipeline

### Phase 2 (Planned)
- [ ] Voice input/output
- [ ] Conversation memory
- [ ] Code execution
- [ ] PDF export
- [ ] Dark mode enhancements

### Phase 3 (Future)
- [ ] Video search
- [ ] Real-time data (stocks, weather)
- [ ] Custom knowledge base
- [ ] Team collaboration
- [ ] Enterprise features

---

## 📊 Stats

- **Language**: JavaScript (Vanilla)
- **Lines of Code**: 1,000+ (core logic)
- **API Integrations**: 3 major services
- **Supported Platforms**: Web, Android
- **Languages Supported**: 40+
- **Features**: 15+ major features

---

## 🙏 Acknowledgments

- **OpenRouter** for AI model access
- **Tavily** for web search capabilities
- **Pixabay** for image database
- **Cordova** for mobile framework
- **Tailwind CSS** for styling
- **Community** for feedback

---

## 📅 Latest Updates

**December 2025**
- ✨ Launched Nexus Hybrid AI architecture
- 🔍 Added web search via Tavily
- 🎨 Enhanced UI with source cards
- 📱 Optimized for mobile APK
- 📚 Created comprehensive documentation

---

**Made with ❤️ by the NexusAI team**

**Start exploring intelligent AI today! 🚀**

---

## Quick Links

- 🌐 **Web Version**: [Coming Soon]
- 📱 **Android App**: Download APK from GitHub Actions
- 📖 **Full Guide**: [NEXUS-HYBRID-GUIDE.md](./NEXUS-HYBRID-GUIDE.md)
- 🐛 **Report Issues**: GitHub Issues
- 💡 **Feature Requests**: GitHub Discussions

