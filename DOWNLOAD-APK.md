# 📥 How to Download/Build Your NexusAI APK

## ⚡ Quick Summary

You have **two options** to get the APK:

### Option 1: Build It Yourself (Recommended) 
- Takes 10-30 minutes
- Full control over the APK
- Can customize features
- Can build updates anytime

### Option 2: Download Pre-built APK
- Takes 2 minutes
- Ready to install immediately
- No build tools needed
- Latest version

---

## 🔧 OPTION 1: BUILD APK YOURSELF

### Prerequisites Check
Before building, you need:
- ✅ Java JDK (you have it - Java 24.0.1)
- ✅ Node.js (you have it)
- ✅ Cordova (installed)
- ⏳ **Android SDK** - MUST INSTALL
- ⏳ **ANDROID_HOME** - MUST SET

### Step 1: Install Android SDK (10-15 minutes, one-time)

**Option A: Using Android Studio (Easiest)**
1. Download Android Studio: https://developer.android.com/studio
2. Run the installer
3. Let it auto-install Android SDK
4. Note the installation path (usually: `C:\Users\PC\AppData\Local\Android\Sdk`)
5. Set environment variable:

```powershell
# Open PowerShell as Administrator
$env:ANDROID_HOME = "C:\Users\PC\AppData\Local\Android\Sdk"
[Environment]::SetEnvironmentVariable("ANDROID_HOME", $env:ANDROID_HOME, "User")

# Close and reopen PowerShell for changes to take effect
```

**Option B: Using Command-line Tools (Lightweight)**
1. Download: https://developer.android.com/tools/releases/cmdline-tools
2. Extract to: `C:\Android\cmdline-tools`
3. Set environment variable:

```powershell
$env:ANDROID_HOME = "C:\Android"
[Environment]::SetEnvironmentVariable("ANDROID_HOME", $env:ANDROID_HOME, "User")
```

### Step 2: Verify Installation

```powershell
# Close and reopen PowerShell first!
# Then check:
$env:ANDROID_HOME

# Should output your SDK path, e.g.:
# C:\Users\PC\AppData\Local\Android\Sdk
```

### Step 3: Build Debug APK (2-3 minutes)

```powershell
cd c:\Users\PC\OneDrive\Desktop\NexusAI\NexusAI

# Option A: Interactive build (guided)
.\build-apk.ps1

# Option B: Direct build
npm run build:debug

# Option C: Cordova command
cordova build android
```

**APK will be created at:**
```
platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

### Step 4: Get Your APK

The APK file will be at:
```
c:\Users\PC\OneDrive\Desktop\NexusAI\NexusAI\platforms\android\app\build\outputs\apk\debug\app-debug.apk
```

**File size:** ~5-8 MB

### Step 5: Install on Phone

**Method A: Via USB Cable**
```powershell
# Connect Android phone (USB Debugging enabled)
adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk

# Launch app
adb shell am start -n com.nexusai.app/.MainActivity
```

**Method B: Manual Installation**
1. Copy APK to phone via USB
2. Open file manager
3. Tap APK file
4. Tap "Install"

**Method C: Cloud/Email**
1. Upload APK to Google Drive
2. Download on phone
3. Install

---

## 📥 OPTION 2: DOWNLOAD PRE-BUILT APK

### From GitHub Releases
If you want a pre-built APK without building:

1. Go to: https://github.com/xondamiroralboyev013-web/NexusAI/releases
2. Look for latest release with APK attached
3. Download `app-debug.apk` or `NexusAI-*.apk`
4. Transfer to phone and install

### If Not Available There

Create and build it yourself (Option 1 above) - it only takes 10-30 minutes total.

---

## 📱 INSTALL ON ANDROID PHONE

### Before Installation

1. **Enable USB Debugging** (one-time setup)
   - Settings > About Phone
   - Tap "Build Number" 7 times
   - Settings > Developer Options
   - Enable "USB Debugging"

2. **Enable Installation from Unknown Sources**
   - Settings > Security (or Apps & Notifications)
   - Enable "Install from unknown sources" (or "Allow from this source")

### Installation Methods

#### Method 1: USB Cable + ADB (Fastest)
```powershell
# Connect phone via USB
# Allow USB Debugging access on phone prompt

adb install -r c:\path\to\app-debug.apk

# Or if you built it:
adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

#### Method 2: Direct Manual Install
1. Connect phone via USB
2. Go to phone's file manager
3. Navigate to Downloads folder
4. Copy APK there
5. Tap APK file
6. Tap "Install"
7. Allow permissions
8. Done!

#### Method 3: Cloud Download
1. Upload APK to Google Drive
2. Open Drive on your phone
3. Download APK
4. Open it
5. Tap "Install"

#### Method 4: Send via Email
1. Email APK to yourself
2. Open email on phone
3. Download APK
4. Tap to install

---

## ✅ TROUBLESHOOTING

### "Android SDK not found"
```powershell
# Set ANDROID_HOME
$env:ANDROID_HOME = "C:\Users\PC\AppData\Local\Android\Sdk"
[Environment]::SetEnvironmentVariable("ANDROID_HOME", $env:ANDROID_HOME, "User")

# Close and reopen PowerShell
# Try building again
```

### "Build failed - Gradle error"
```powershell
# Clean and rebuild
npm run clean
npm run build:debug
```

### "APK won't install"
- Uninstall old version: `adb uninstall com.nexusai.app`
- Try again: `adb install -r app-debug.apk`
- Or use manual method above

### "No devices found"
```powershell
adb devices

# If empty:
# 1. Enable USB Debugging on phone
# 2. Reconnect USB
# 3. Tap "Allow" on phone prompt
# 4. Run: adb kill-server && adb start-server
# 5. Check again: adb devices
```

---

## 🎁 WHAT'S IN THE APK

✅ Full NexusAI app with:
- Professional onboarding
- Email/password login
- Social login buttons (Google, Facebook, GitHub, Microsoft)
- Groq AI chat integration
- Pro/Beta features
- Dark/light theme
- Complete UI

---

## 📊 BUILD PROCESS

```
Build starts
    ↓
Copy files to Android project
    ↓
Run Gradle build
    ↓
Compile Java/Kotlin
    ↓
Create DEX files
    ↓
Bundle resources
    ↓
Sign APK (debug key auto-generated)
    ↓
Align APK
    ↓
Done! APK ready to install
    ↓
(5-10 minutes for first build)
(2-3 minutes for subsequent builds)
```

---

## ⏱️ TIME ESTIMATES

| Task | Time |
|------|------|
| Install Android SDK | 10-15 min |
| Set ANDROID_HOME | 2 min |
| Build APK | 5-10 min (first), 2-3 min (after) |
| Install on phone | 2 min |
| **Total** | **20-30 min** |

---

## 🔐 SECURITY NOTES

- Debug APK uses auto-generated debug signing key
- Debug APK is safe for testing
- For production/Play Store, must use release APK with your signing key
- See APK-SETUP.md for release APK signing

---

## 📞 NEED HELP?

- **Quick reference:** APK-QUICK-REF.md
- **Step-by-step:** APK-SETUP.md
- **Technical details:** BUILD-APK.md
- **Troubleshooting:** APK-SETUP.md (Troubleshooting section)

---

## 🚀 NEXT STEPS

### Option 1: Build It
1. Install Android SDK (10-15 min)
2. Set ANDROID_HOME (2 min)
3. Run: `npm run build:debug` (5-10 min)
4. Install: `adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk` (2 min)
5. Enjoy!

### Option 2: Quick Download
1. Go to: https://github.com/xondamiroralboyev013-web/NexusAI/releases
2. Download APK
3. Install on phone
4. Enjoy!

---

**Choose your path and enjoy your NexusAI app! 🎉**

**Version:** 1.0.0  
**Status:** Ready to build or download  
**Updated:** December 24, 2025
