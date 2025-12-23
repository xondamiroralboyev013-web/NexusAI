# 🚀 APK Build Quick Reference

## ⚡ Quick Build (30 seconds to command)

```powershell
cd c:\Users\PC\OneDrive\Desktop\NexusAI\NexusAI
npm run build:debug
```

**Result:** `platforms/android/app/build/outputs/apk/debug/app-debug.apk`

---

## 📋 Prerequisites Checklist

- [ ] Java installed (`java -version` should work)
- [ ] Node.js installed (`node -v` should work)
- [ ] Android SDK installed
- [ ] ANDROID_HOME environment variable set
- [ ] USB Debugging enabled on phone (Settings > Developer Options)
- [ ] Phone connected via USB

**Missing something?** See `APK-SETUP.md` (detailed guide)

---

## 🔧 Commands by Task

### Build APK
```powershell
# Debug (for testing) - RECOMMENDED
npm run build:debug

# Release (for Play Store)
npm run build:release

# Interactive setup & build
.\build-apk.ps1

# Direct Cordova command
cordova build android
```

### Install APK
```powershell
# Debug APK
adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk

# Release APK (if signed)
adb install -r NexusAI-v1.0.0.apk

# Uninstall first (if getting permission errors)
adb uninstall com.nexusai.app
adb install -r <apk-path>
```

### Launch App
```powershell
adb shell am start -n com.nexusai.app/.MainActivity
```

### View Logs
```powershell
adb logcat | findstr "NexusAI"
```

### List Devices
```powershell
adb devices
```

---

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| `ANDROID_HOME not set` | See APK-SETUP.md → Environment Setup |
| `No connected devices` | Enable USB Debugging, reconnect phone |
| Build fails | Run `cordova clean` then rebuild |
| APK won't install | `adb uninstall com.nexusai.app` first |
| App crashes | Check `adb logcat` for error messages |

---

## 📁 File Locations

| File | Location |
|------|----------|
| Debug APK | `platforms/android/app/build/outputs/apk/debug/app-debug.apk` |
| Release APK (unsigned) | `platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk` |
| Release APK (signed) | `NexusAI-v1.0.0.apk` (current directory) |
| Config | `config.xml` |
| Source | `www/app.html` |
| Android code | `platforms/android/` |

---

## 📱 Installation Methods

**Method 1: USB Cable + ADB** (Fastest)
```powershell
adb install -r <apk-path>
```

**Method 2: Emulator**
```powershell
# Create emulator in Android Studio, then:
adb install -r <apk-path>
```

**Method 3: Manual** (Device file manager)
1. Copy APK to phone via USB
2. Open file manager
3. Tap APK to install

**Method 4: Email/Cloud** (For distribution)
1. Send APK as email attachment
2. Download on phone
3. Tap to install

---

## 📊 Build Time Estimates

| Build Type | First Time | Subsequent |
|-----------|-----------|-----------|
| Debug | 5-10 min | 2-3 min |
| Release | 6-12 min | 3-4 min |
| Clean build | 8-15 min | N/A |

---

## 🎯 Typical Workflow

```powershell
# 1. Make changes to app
# Edit www/app.html or other source files

# 2. Build APK
npm run build:debug

# 3. Install on device
adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk

# 4. Test on device
adb shell am start -n com.nexusai.app/.MainActivity

# 5. View logs for debugging
adb logcat | findstr "NexusAI"

# 6. Repeat from step 1
```

---

## 📚 Full Guides

- **APK-SETUP.md** - Step-by-step complete guide
- **BUILD-APK.md** - Detailed build process & troubleshooting
- **QUICK-START.md** - App usage guide

---

## ✅ Verification Checklist

After installing APK:
- [ ] App launches without crashing
- [ ] Login screen appears
- [ ] Can click social login buttons
- [ ] Can enter email/password
- [ ] Can progress through 3-step setup
- [ ] Can enter Groq API key
- [ ] Can send chat messages
- [ ] Can receive AI responses
- [ ] Dark/light theme toggle works
- [ ] Settings screen accessible

---

## 💡 Tips & Tricks

**Speed up builds:**
```powershell
# Use Gradle daemon (parallel builds)
$env:ORG_GRADLE_PROJECT_android_enableBuildCache = "true"
$env:ORG_GRADLE_PROJECT_android_gradle_daemon = "true"
```

**Monitor build progress:**
```powershell
# View detailed output
cordova build android --verbose
```

**Skip gradle updates:**
```powershell
# Add to gradle.properties
org.gradle.parallel=true
org.gradle.daemon=true
```

---

## 🔐 Security Notes

- API keys stored only in app settings (user-entered)
- Never hardcode API keys in source code
- Use signed release APK for distribution
- Enable ProGuard/R8 for code obfuscation (advanced)
- HTTPS required for API calls
- Test on real device before publishing

---

## 🆘 Where to Get Help

| Issue | Resource |
|-------|----------|
| General questions | See APK-SETUP.md |
| Build errors | See BUILD-APK.md → Troubleshooting |
| Android SDK | https://developer.android.com/ |
| Cordova | https://cordova.apache.org/docs/ |
| ADB commands | https://developer.android.com/tools/adb |

---

## 📞 Common Contacts

- **Google Play Store:** https://play.google.com/console
- **Android Studio:** https://developer.android.com/studio
- **Cordova Issues:** https://github.com/apache/cordova-android/issues

---

**Version:** 1.0.0  
**Last Updated:** December 24, 2025  
**Status:** ✅ Ready to Build!

---

## 🚀 Next Step: Run This Command

```powershell
cd c:\Users\PC\OneDrive\Desktop\NexusAI\NexusAI
.\build-apk.ps1
```

This will guide you through the entire build process step-by-step!
