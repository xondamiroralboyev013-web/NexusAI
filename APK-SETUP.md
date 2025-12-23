# 📱 APK Build Instructions - NexusAI

## Quick Start (⚡ 3 Steps)

### 1. Install Prerequisites (One-time setup)
```powershell
# Install Node.js (if not already installed)
# Download from: https://nodejs.org/

# Install Cordova globally
npm install -g cordova

# Install Android Studio or Android SDK
# Download from: https://developer.android.com/studio
# Set ANDROID_HOME environment variable to Android SDK path
```

### 2. Build Debug APK (Testing)
```powershell
cd c:\Users\PC\OneDrive\Desktop\NexusAI\NexusAI

# Option A: Using npm script
npm run build:debug

# Option B: Using build script
.\build-apk.ps1

# Option C: Direct Cordova command
cordova build android
```

**Result:** `platforms/android/app/build/outputs/apk/debug/app-debug.apk`

### 3. Install & Test
```powershell
# Connect device via USB (enable USB Debugging in settings)
adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk

# Launch app
adb shell am start -n com.nexusai.app/.MainActivity
```

---

## Full Build Process

### Prerequisites

#### Required Software
- ✅ **Java JDK 8 or higher** (you have Java 24.0.1)
- ✅ **Node.js 12+** (for npm)
- ⚠️ **Android SDK** (must install)
- ⚠️ **Gradle** (auto-downloaded with SDK)

#### Environment Setup

**Step 1: Set ANDROID_HOME**

In PowerShell (as Administrator):
```powershell
# For Android Studio installation
$env:ANDROID_HOME = "C:\Users\PC\AppData\Local\Android\Sdk"

# Make permanent
[Environment]::SetEnvironmentVariable("ANDROID_HOME", $env:ANDROID_HOME, "User")

# Verify
Write-Host $env:ANDROID_HOME
```

**Step 2: Add to System PATH**

In PowerShell (as Administrator):
```powershell
# Get current PATH
$path = [Environment]::GetEnvironmentVariable("Path", "User")

# Add Android tools
$androidTools = @(
    "$env:ANDROID_HOME\tools",
    "$env:ANDROID_HOME\tools\bin",
    "$env:ANDROID_HOME\platform-tools",
    "$env:ANDROID_HOME\build-tools\35.0.0"
)

# Add each to PATH
foreach ($tool in $androidTools) {
    if ($path -notcontains $tool) {
        $path += ";$tool"
    }
}

# Save to environment
[Environment]::SetEnvironmentVariable("Path", $path, "User")
```

**Step 3: Verify Installation**

```powershell
# Close PowerShell and open new window for environment changes to take effect

# Check each tool
adb version
sdkmanager --version
```

---

### Build Debug APK

Perfect for testing on devices/emulators:

```powershell
cd c:\Users\PC\OneDrive\Desktop\NexusAI\NexusAI

# Clean previous builds (optional but recommended)
cordova clean

# Build
cordova build android

# Output: platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

**Build Time:** 2-5 minutes (first build is slower)

---

### Build Release APK

For production/Google Play Store:

```powershell
cd c:\Users\PC\OneDrive\Desktop\NexusAI\NexusAI

# Build unsigned release APK
cordova build android --release

# Output: platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk
```

**Important:** Release APK must be signed before installation.

#### Sign Release APK

```powershell
# Generate signing key (one-time, keep it safe!)
keytool -genkey -v -keystore nexusai-release.keystore `
  -keyalg RSA -keysize 2048 -validity 10000 `
  -alias nexusai_key -storepass YourPassword123 `
  -keypass YourPassword123 `
  -dname "CN=NexusAI,O=NexusAI Team,C=US"

# Sign APK
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 `
  -keystore nexusai-release.keystore `
  platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk `
  nexusai_key

# Align APK for optimization (required for Play Store)
zipalign -v 4 `
  platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk `
  NexusAI-v1.0.0.apk

# Result: NexusAI-v1.0.0.apk (ready to install or submit to Play Store)
```

---

### Install APK on Device/Emulator

#### Option A: Using ADB (Command-line)

```powershell
# Ensure device is connected
adb devices

# Install (and replace if exists)
adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk

# Uninstall if needed
adb uninstall com.nexusai.app

# Launch app
adb shell am start -n com.nexusai.app/.MainActivity

# View logs
adb logcat | findstr "NexusAI"
```

#### Option B: Manual Installation

1. Transfer APK to device
2. Open file manager
3. Tap APK file
4. Tap "Install"
5. Run from app launcher

#### Option C: Android Studio

1. Open Android Studio
2. Select "Device File Explorer"
3. Drag APK to device `/data/local/tmp/`
4. Run installation commands above

---

## Troubleshooting

### Problem: "ANDROID_HOME is not set"

**Solution:**
```powershell
# Check if set
$env:ANDROID_HOME

# If empty, set it
$env:ANDROID_HOME = "C:\Users\PC\AppData\Local\Android\Sdk"
[Environment]::SetEnvironmentVariable("ANDROID_HOME", $env:ANDROID_HOME, "User")

# Close PowerShell and reopen for changes to take effect
```

---

### Problem: "Gradle build failed"

**Solution:**
```powershell
# Clean build
cordova clean
cordova platform rm android
cordova platform add android

# Try build again
cordova build android
```

---

### Problem: "No connected devices"

**Solution:**

1. **Check device connection:**
   ```powershell
   adb devices
   ```

2. **Enable USB Debugging on phone:**
   - Settings > About Phone > tap Build Number 7 times
   - Settings > Developer Options > enable USB Debugging
   - Connect phone via USB cable
   - Allow USB Debugging access on phone prompt

3. **Reset ADB:**
   ```powershell
   adb kill-server
   adb start-server
   ```

4. **Restart emulator:**
   ```powershell
   emulator -list-avds
   emulator -avd Pixel_6_API_35
   ```

---

### Problem: "Insufficient permissions" during installation

**Solution:**
```powershell
# Uninstall first
adb uninstall com.nexusai.app

# Then install
adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

---

### Problem: "Android SDK not found"

**Solution:**

1. Download Android Studio from https://developer.android.com/studio
2. Install and launch Android Studio
3. Let it complete automatic SDK setup
4. SDK will be at: `C:\Users\PC\AppData\Local\Android\Sdk`
5. Set ANDROID_HOME environment variable (see above)
6. Restart PowerShell
7. Try build again

---

## Build Verification Checklist

After building APK, verify:

- ✅ APK file exists at expected location
- ✅ APK file size > 5 MB (typical for Cordova apps)
- ✅ Can install on test device
- ✅ App launches without crashes
- ✅ All features work (login, API, chat, settings, etc.)
- ✅ OAuth buttons visible and clickable
- ✅ API key can be saved in settings
- ✅ Groq API calls work
- ✅ Dark/light theme toggle works
- ✅ App closes cleanly

---

## Distribution

### Test Distribution
Share debug APK directly:
```powershell
# Copy to cloud storage or USB
Copy-Item "platforms/android/app/build/outputs/apk/debug/app-debug.apk" "D:\NexusAI-debug.apk"
```

### Production Distribution
**Option 1: Google Play Store**
1. Build and sign release APK (see above)
2. Create Google Play Developer account ($25)
3. Upload to Google Play Console
4. Submit for review (24-48 hours)

**Option 2: GitHub Releases**
1. Build release APK
2. Create GitHub release
3. Upload APK as release asset

**Option 3: Direct Download**
1. Build release APK
2. Host on website or cloud storage
3. Users download and install manually

---

## Scripts & Commands Reference

| Action | Command |
|--------|---------|
| Build debug APK | `npm run build:debug` |
| Build release APK | `npm run build:release` |
| Interactive build | `.\build-apk.ps1` |
| Install debug APK | `adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk` |
| Launch app | `adb shell am start -n com.nexusai.app/.MainActivity` |
| View logs | `adb logcat \| findstr NexusAI` |
| List connected devices | `adb devices` |
| Clean build | `npm run clean` |

---

## FAQ

**Q: How long does APK build take?**
A: First build: 5-10 minutes. Subsequent builds: 2-3 minutes.

**Q: Can I test on emulator instead of device?**
A: Yes! Create Android emulator in Android Studio, then install APK normally.

**Q: What's the difference between debug and release APK?**
A: Debug = larger, for testing. Release = optimized, for production (requires signing).

**Q: Can I use this APK on multiple devices?**
A: Yes! Install the same APK on any Android device with API level 24+.

**Q: How do I update the app after building?**
A: Rebuild and reinstall with `adb install -r` (the `-r` flag replaces existing).

---

## Resources

- **Cordova Documentation:** https://cordova.apache.org/docs/
- **Android Development:** https://developer.android.com/
- **Gradle Help:** https://gradle.org/
- **ADB Reference:** https://developer.android.com/tools/adb

---

## Next Steps

1. ✅ Complete prerequisites installation
2. ✅ Set ANDROID_HOME environment variable
3. ✅ Build debug APK with `npm run build:debug`
4. ✅ Connect device and install APK
5. ✅ Test all features
6. ✅ Build release APK when ready
7. ✅ Submit to Google Play Store

---

**Status:** Ready to build APK! 🚀

**Version:** 1.0.0  
**API Level:** 24-35 (Android 7.0 - Android 15)  
**Min Size:** ~5 MB  
**Package:** com.nexusai.app
