# 🚀 APK Build Instructions

## Prerequisites
- Node.js and npm installed
- Java Development Kit (JDK) 11 or higher
- Android SDK installed
- ANDROID_HOME environment variable set

## Setup Steps

### 1. Set Environment Variable (Windows)
```powershell
# Check your Android SDK location
$env:ANDROID_HOME = "C:\Users\[YourUsername]\AppData\Local\Android\Sdk"

# Or permanently add it to system variables:
# Search "Edit environment variables" -> Add ANDROID_HOME
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure API Key
Create a `.env` file in the root directory:
```
GROQ_API_KEY=gsk_YOUR_API_KEY_HERE
```
Get your free API key from: https://console.groq.com

### 4. Build APK (Debug)
```bash
cordova build android
```

Output APK: `platforms/android/app/build/outputs/apk/debug/app-debug.apk`

### 5. Build APK (Release)
```bash
cordova build android --release
```

Output APK: `platforms/android/app/build/outputs/apk/release/app-release.apk`

## Alternative: Using npm Script
```bash
npm run build:apk
```

## Install on Device/Emulator
```bash
# Debug APK
cordova run android

# Or manually:
adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

## Troubleshooting

### ANDROID_HOME Error
```powershell
# Find Android SDK path
Get-ChildItem "$env:LOCALAPPDATA\Android\Sdk"

# Set it permanently
[System.Environment]::SetEnvironmentVariable('ANDROID_HOME', 'C:\Users\PC\AppData\Local\Android\Sdk', 'User')
```

### Gradle Build Error
```bash
# Clean and rebuild
cordova clean android
cordova build android
```

### Missing Java
Download JDK from: https://www.oracle.com/java/technologies/downloads/

## APK Signing (For Release)
```bash
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 \
  -keystore my-release-key.keystore \
  platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk \
  alias_name
```

## Upload to Play Store
See: https://support.google.com/googleplay/android-developer/answer/9859152
