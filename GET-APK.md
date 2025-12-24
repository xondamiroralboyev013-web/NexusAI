# 📲 GET YOUR NEXUSAI APK - TWO EASY OPTIONS

## ✨ Choose Your Path

### 🚀 OPTION 1: Build It Yourself (Recommended)
**Time: 20-30 minutes | Best: Full control, can customize**

```powershell
# Step 1: Install Android SDK
# Download from: https://developer.android.com/studio
# Let it auto-install (10-15 minutes)

# Step 2: Set environment variable
$env:ANDROID_HOME = "C:\Users\PC\AppData\Local\Android\Sdk"
[Environment]::SetEnvironmentVariable("ANDROID_HOME", $env:ANDROID_HOME, "User")

# Close PowerShell and reopen

# Step 3: Build APK
cd c:\Users\PC\OneDrive\Desktop\NexusAI\NexusAI
npm run build:debug

# APK created at:
# platforms/android/app/build/outputs/apk/debug/app-debug.apk
# File size: ~5-8 MB
```

**Install on Phone:**
```powershell
# Method A: Via USB
adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk

# Method B: Manual
# - Copy APK to phone via USB
# - Tap to install
# Done!
```

---

### 📥 OPTION 2: Download Pre-built APK
**Time: 2 minutes | Best: Quick & easy, no build tools needed**

Go to: **https://github.com/xondamiroralboyev013-web/NexusAI/releases**

1. Find latest release
2. Download `app-debug.apk` or `NexusAI-*.apk`
3. Transfer to phone
4. Tap to install
5. Done!

---

## ⚡ FASTEST WAY (If you have Android SDK already)

```powershell
cd c:\Users\PC\OneDrive\Desktop\NexusAI\NexusAI
npm run build:debug

# Wait 5-10 minutes...

# APK ready at:
# platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 🎯 WHICH OPTION?

| Situation | Choose |
|-----------|--------|
| **Never built an APK before** | Option 2 (download) |
| **Want to customize the app** | Option 1 (build) |
| **Want latest version** | Option 1 (build) |
| **Have 30 minutes to spare** | Option 1 (build) |
| **Need it right now** | Option 2 (download) |
| **Want to learn how** | Option 1 (build) |

---

## 📚 FULL GUIDES

- **DOWNLOAD-APK.md** - Complete step-by-step guide with troubleshooting
- **APK-SETUP.md** - Detailed build instructions
- **APK-QUICK-REF.md** - Commands quick reference

---

## 💡 After Installation

1. Open NexusAI app
2. Create account (email or social login)
3. Complete setup wizard (3 steps)
4. Add Groq API key (free at https://console.groq.com)
5. Start chatting!

---

**Questions?** Read DOWNLOAD-APK.md for detailed instructions.

**Ready?** Pick your option above and get started! 🚀

**Automated build:** Triggered GitHub Actions workflow to build APK on 2025-12-24 00:00 UTC.

**CI note:** To embed a Groq API key into CI-built APKs (not recommended for public repos), add a repository secret named `GROQ_API_KEY` (Settings → Secrets), and the workflow will inject it during the build step. Prefer users set the key in the app Settings (securely stored in localStorage).
