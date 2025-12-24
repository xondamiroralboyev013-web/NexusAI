# 🏗️ Android APK Build Setup Guide

## ⚠️ Status: Android SDK Not Found

To build NexusAI as an APK, you need to install Android SDK.

---

## 🚀 Quick Setup (15 minutes)

### Step 1: Download Android Studio
1. Go to: **https://developer.android.com/studio**
2. Click **Download** (Windows version)
3. Run the installer

### Step 2: Install Android SDK
During Android Studio setup:
- ✅ Select "Android SDK"
- ✅ Select "Android SDK Platform"
- ✅ Select "Android Emulator" (optional)
- ✅ Accept license agreements
- ⏳ Wait for installation (5-10 minutes)

### Step 3: Set Environment Variable
Open PowerShell as Administrator and run:

```powershell
[Environment]::SetEnvironmentVariable("ANDROID_HOME", "C:\Users\PC\AppData\Local\Android\Sdk", "User")
[Environment]::SetEnvironmentVariable("ANDROID_SDK_ROOT", "C:\Users\PC\AppData\Local\Android\Sdk", "User")
```

Then restart PowerShell.

### Step 4: Verify Installation
```powershell
echo $env:ANDROID_HOME
```

Should show: `C:\Users\PC\AppData\Local\Android\Sdk`

### Step 5: Build APK
```powershell
cd "c:\Users\PC\OneDrive\Desktop\NexusAI"
npm run build:debug
```

---

## 📋 What Gets Installed

| Component | Size | Purpose |
|-----------|------|---------|
| Android SDK | 500 MB | Core SDK |
| Android API 33+ | 300 MB | Android API levels |
| SDK Tools | 100 MB | Build tools |
| Emulator | Optional | Testing device |

**Total: ~1 GB**

---

## ✅ Current System Status

```
✅ Java:        24.0.1 (INSTALLED)
✅ Node.js:     (Ready)
✅ Cordova:     (Ready)
❌ Android SDK: NOT INSTALLED
❌ ANDROID_HOME: Not set
```

---

## 🎯 Build Options

Once SDK is installed, you can:

### Debug Build (for testing)
```powershell
npm run build:debug
```
Output: `platforms/android/app/build/outputs/apk/debug/app-debug.apk`
✅ Can be installed on device directly

### Release Build (for Play Store)
```powershell
npm run build:release
```
Output: `platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk`
⚠️ Must be signed before publishing

---

## 🔧 Alternative: Use Pre-built APK

If you don't want to install Android SDK, you can:

1. **Use online APK builder**: https://www.phonegap.com/app
2. **Use GitHub Actions**: Automate APK builds in the cloud
3. **Use Firebase App Distribution**: Host APK for testing

---

## 📱 After APK is Built

### Install on Android Device
```powershell
adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

### Launch App
```powershell
adb shell am start -n com.nexusai.app/.MainActivity
```

### View Logs
```powershell
adb logcat
```

---

## 🆘 Troubleshooting

### "ANDROID_HOME not found"
→ Run the PowerShell command above to set environment variable

### "SDK Platform not found"
→ Open Android Studio → SDK Manager → Install Android 14+ (API 34+)

### "Build failed: Gradle error"
→ Run: `cd platforms/android && gradlew clean`

### "Cannot find adb"
→ Add to PATH: `C:\Users\PC\AppData\Local\Android\Sdk\platform-tools`

---

## 📚 Full Build Process

Once SDK is ready:

```powershell
# 1. Navigate to project
cd "c:\Users\PC\OneDrive\Desktop\NexusAI"

# 2. Add Android platform (if not exists)
cordova platform add android

# 3. Build debug APK
npm run build:debug

# 4. Wait 2-5 minutes...

# 5. Done! APK location:
# platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 🌐 Live Preview (No APK Needed)

While waiting for SDK setup, test the app:

```powershell
npm run serve
```

Then open: **http://localhost:8080**

You can test all features (chat, settings, language) without APK!

---

## ✨ What's Ready Now

- ✅ Web version works in browser
- ✅ Setup page: `www/setup-api-key.html`
- ✅ PWA installable as app
- ✅ API key management ready
- ✅ All features functional

---

## 🎬 Next Steps

**Choose one:**

### Option 1: Install Android SDK (Recommended)
- Complete setup steps above
- Run `npm run build:debug`
- Get native APK

### Option 2: Use Web Version
- Test in browser: `npm run serve`
- Deploy to web server
- Use PWA features

### Option 3: Use Cloud Build
- Push to GitHub
- Enable GitHub Actions
- Cloud builds APK automatically

---

**Status:** ⏳ Waiting for Android SDK setup  
**Build Time:** 2-5 minutes (after SDK installed)  
**Output:** `app-debug.apk` (4-8 MB)  
**Target:** Android 8.0+ (API 26+)

