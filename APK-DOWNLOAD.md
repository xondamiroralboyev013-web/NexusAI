# 📲 YOUR NEXUSAI APK - HERE'S HOW TO GET IT

## 🎯 Two Simple Options

---

## ⚡ FASTEST: Download Pre-built (2 minutes)

No build tools needed. Just download and install!

### Steps:
1. **Go to:** https://github.com/xondamiroralboyev013-web/NexusAI/releases
2. **Download:** Latest APK file (usually named `app-debug.apk`)
3. **Transfer:** To your Android phone (via USB, email, or cloud)
4. **Install:** Tap the APK file on your phone
5. **Open:** Launch NexusAI from your app drawer

**Total time: 2-5 minutes**

---

## 🔧 BUILD IT: Custom Build (20-30 minutes)

Full control. Can update anytime. Can customize features.

### Step 1: Install Android SDK (One-time, 10-15 min)

**Download Android Studio:**
https://developer.android.com/studio

**Run installer → Let it install SDK automatically**

Note the path: `C:\Users\PC\AppData\Local\Android\Sdk`

### Step 2: Set Environment Variable (2 min)

```powershell
# Open PowerShell as Administrator

$env:ANDROID_HOME = "C:\Users\PC\AppData\Local\Android\Sdk"
[Environment]::SetEnvironmentVariable("ANDROID_HOME", $env:ANDROID_HOME, "User")

# Close PowerShell and reopen for changes to take effect
```

### Step 3: Build APK (5-10 min)

```powershell
cd c:\Users\PC\OneDrive\Desktop\NexusAI\NexusAI
npm run build:debug
```

**Wait... building...**

**Your APK is ready at:**
```
platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

### Step 4: Install on Phone (2 min)

**Option A: USB Cable**
```powershell
adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

**Option B: Manual**
- Copy APK to phone via USB
- Tap APK file
- Tap "Install"

**Done! 🎉**

---

## 🤔 WHICH OPTION?

| Want | Choose |
|------|--------|
| Fastest way | Download (Option 1) |
| Custom features | Build (Option 2) |
| Latest version | Build (Option 2) |
| No setup needed | Download (Option 1) |
| Want to learn | Build (Option 2) |

---

## 📋 AFTER YOU INSTALL

1. **Open** NexusAI app on your phone
2. **Create Account** (email or social login)
3. **Complete Setup** (3 easy steps)
4. **Add API Key** (free from https://console.groq.com)
5. **Start Chatting** with AI! 🤖

---

## 🆘 PROBLEMS?

### Can't Download from GitHub?
→ Build it yourself (Option 2)

### Build Won't Work?
→ See `DOWNLOAD-APK.md` Troubleshooting section

### APK Won't Install?
1. Uninstall old version: `adb uninstall com.nexusai.app`
2. Enable "Unknown Sources" in phone settings
3. Try again

### Need More Help?
→ Check `GET-APK.md` for detailed instructions

---

## 📚 DOCUMENTATION

- **GET-APK.md** ← You are here (quick overview)
- **DOWNLOAD-APK.md** ← Detailed guide with all options
- **APK-QUICK-REF.md** ← Commands reference
- **APK-SETUP.md** ← Full step-by-step guide

---

## ✨ WHAT YOU GET

✅ Full NexusAI app with:
- Beautiful onboarding
- Professional UI
- AI chat (Groq LLaMA)
- Social login (Google, Facebook, GitHub, Microsoft)
- Pro features
- Dark/light theme
- Settings management
- And more!

---

## 🚀 READY?

### Option 1 (Fastest):
Go to: https://github.com/xondamiroralboyev013-web/NexusAI/releases

### Option 2 (Custom):
Run: `npm run build:debug`

**Pick one and enjoy! 🎉**

---

**Any issues?** Read the full guide in `DOWNLOAD-APK.md`
