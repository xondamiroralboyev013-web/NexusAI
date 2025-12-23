# 🚀 NexusAI APK Build Guide

## ✅ Prerequisites Checklist

### What You Have ✅
- ✅ **Java JDK** installed (Java 24.0.1)
- ✅ **Node.js** installed
- ✅ **Cordova Android Platform** added
- ✅ **config.xml** configured
- ✅ **App Assets** ready (app.html with OAuth)

### What You Need to Install

#### 1. Android SDK (Required)
The Android SDK provides tools to build Android apps. Two options:

**Option A: Android Studio (Full - Recommended)**
1. Download from: https://developer.android.com/studio
2. Install Android Studio
3. Open it and let it install Android SDK components
4. Set environment variable:
   ```
   ANDROID_HOME = C:\Users\PC\AppData\Local\Android\Sdk
   ```

**Option B: Command-line tools only (Lightweight)**
1. Download from: https://developer.android.com/tools/releases/cmdline-tools
2. Extract to `C:\Android\cmdline-tools`
3. Set environment variable:
   ```
   ANDROID_HOME = C:\Android
   ```
4. Run SDK Manager:
   ```powershell
   cd C:\Android\cmdline-tools\latest\bin
   .\sdkmanager.bat --list_installed
   ```

#### 2. Add to System PATH
Add these to Windows System PATH (Windows Settings > Environment Variables):
```
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\build-tools\35.0.0
```

#### 3. Verify Installation
After setting ANDROID_HOME:
```powershell
adb version
sdkmanager --version
```

---

## 🔧 Step-by-Step APK Build Process

### Step 1: Update Cordova
```powershell
cd c:\Users\PC\OneDrive\Desktop\NexusAI\NexusAI
npm install -g cordova
npm install
```

### Step 2: Ensure Latest Android Platform
```powershell
cordova platform rm android
cordova platform add android@latest
```

### Step 3: Build APK (Debug)
```powershell
cordova build android
```

**Output location:** `platforms/android/app/build/outputs/apk/debug/app-debug.apk`

### Step 4: Build APK (Release)
For production release:

1. **Generate signing key** (one-time):
   ```powershell
   keytool -genkey -v -keystore nexusai-release.keystore `
     -keyalg RSA -keysize 2048 -validity 10000 `
     -alias nexusai_key -storepass your_password `
     -keypass your_password `
     -dname "CN=NexusAI,O=NexusAI Team,C=US"
   ```

2. **Build release APK**:
   ```powershell
   cordova build android --release
   ```

3. **Sign APK with your key**:
   ```powershell
   jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 `
     -keystore nexusai-release.keystore `
     platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk `
     nexusai_key
   ```

4. **Align APK** (optimize):
   ```powershell
   zipalign -v 4 `
     platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk `
     NexusAI-v1.0.0.apk
   ```

**Final APK location:** `NexusAI-v1.0.0.apk`

---

## 📱 Install & Test APK

### On Connected Device (Debug)
```powershell
adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk
adb shell am start -n com.nexusai.app/.MainActivity
```

### On Connected Device (Release)
```powershell
adb install NexusAI-v1.0.0.apk
adb shell am start -n com.nexusai.app/.MainActivity
```

### Using Android Emulator
```powershell
# List available emulators
emulator -list-avds

# Start emulator
emulator -avd <emulator_name>

# Install APK (will auto-detect running emulator)
adb install NexusAI-v1.0.0.apk
```

---

## 🐛 Troubleshooting

### Error: "ANDROID_HOME not set"
```powershell
$env:ANDROID_HOME = "C:\Users\PC\AppData\Local\Android\Sdk"
[Environment]::SetEnvironmentVariable("ANDROID_HOME", $env:ANDROID_HOME, "User")
```

### Error: "No SDK found"
Install Android SDK:
- Option A: Use Android Studio > SDK Manager
- Option B: Use `sdkmanager.bat` in cmdline-tools

Required SDK versions:
- **Android API 35** (Android 15)
- **Build Tools 35.0.0**
- **CMake** (for NDK)

### Error: "Gradle build failed"
```powershell
# Clean build
cordova clean
cordova build android --release
```

### APK Won't Install
1. Uninstall old version: `adb uninstall com.nexusai.app`
2. Check target API level in config.xml
3. Verify device has storage space

---

## 📋 Build Commands Quick Reference

| Task | Command |
|------|---------|
| Install dependencies | `npm install` |
| Add Android platform | `cordova platform add android` |
| Build debug APK | `cordova build android` |
| Build release APK | `cordova build android --release` |
| Clean build | `cordova clean && cordova build android` |
| Install debug APK | `adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk` |
| Install release APK | `adb install NexusAI-v1.0.0.apk` |
| Test on device | `adb shell am start -n com.nexusai.app/.MainActivity` |
| View logs | `adb logcat \| grep NexusAI` |

---

## 🎯 Configuration Details

### Current config.xml Settings
- **App ID:** com.nexusai.app
- **App Name:** NexusAI Mobile Pro
- **Version:** 1.0.0
- **Min API Level:** 24 (Android 7.0)
- **Target API Level:** 35 (Android 15)
- **Orientation:** Portrait
- **Status Bar:** Green (#10B981) with light content

### AndroidManifest.xml (Auto-generated)
Located at: `platforms/android/app/src/main/AndroidManifest.xml`
- Permissions included: INTERNET, WRITE_EXTERNAL_STORAGE
- Activities configured for main app
- Intents for OAuth providers configured

---

## 📦 Distribution Options

### 1. Direct APK Download
- Share APK file directly with users
- Users enable "Unknown Sources" in Settings > Security
- Install with: `adb install NexusAI-v1.0.0.apk`

### 2. Google Play Store
1. Create Google Play Developer account ($25 one-time)
2. Prepare app icon (512x512 PNG)
3. Prepare screenshots (minimum 2)
4. Write app description and privacy policy
5. Generate signing key and build release APK
6. Upload to Google Play Console
7. Submit for review (24-48 hours)

### 3. GitHub Releases
1. Build release APK
2. Create GitHub Release
3. Upload APK as release asset
4. Users download from: `github.com/xondamiroralboyev013-web/NexusAI/releases`

### 4. APK Distribution Sites
- APKMirror (requires verification)
- Sideload via trusted hosting

---

## 🔐 Security Checklist

Before releasing:
- ✅ API keys stored in backend (never in APK)
- ✅ HTTPS enabled for all API calls
- ✅ Permissions minimized in AndroidManifest.xml
- ✅ App signed with release keystore
- ✅ ProGuard/R8 code obfuscation enabled (optional)
- ✅ Privacy policy included in app

---

## 📝 Next Steps

1. **Install prerequisites** (Android SDK, Build Tools)
2. **Set ANDROID_HOME** environment variable
3. **Run build**: `cordova build android`
4. **Install on device**: `adb install <apk_path>`
5. **Test thoroughly** on real device
6. **Build release version** when ready
7. **Distribute via Play Store or direct download**

---

## 🆘 Need Help?

### Common Issues & Fixes

**Gradle Daemon Issues**
```powershell
./gradlew --stop
cordova build android --release
```

**Permission Denied**
```powershell
Get-ExecutionPolicy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Out of Memory**
```powershell
$env:_JAVA_OPTIONS = "-Xmx2048m"
```

---

## 📞 Support Resources

- **Cordova Docs:** https://cordova.apache.org/docs/en/latest/
- **Android Dev Docs:** https://developer.android.com/
- **Build Issues:** https://github.com/apache/cordova-android/issues

---

**Status:** Ready to build! Follow steps above to create APK.

**Last Updated:** December 24, 2025
**Build Version:** 1.0.0
**Target API Level:** Android 15 (API 35)
