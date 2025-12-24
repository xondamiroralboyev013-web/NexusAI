# ☁️ GitHub Actions - Avtomatik APK Build

## 🎉 Xush Xabar!

**Android SDK o'rnatishga ehtiyoj YO'Q!** GitHub Actions cloud'da avtomatik build qiladi! ⚡

---

## 🚀 Qanday Ishlaydi?

```
1. Siz code'ni push qilasiz
   ↓
2. GitHub Actions avtomatik run bo'ladi
   ↓
3. Ubuntu cloud'da Android SDK bilan build qiladi
   ↓
4. APK tayyorlanadi
   ↓
5. Siz yuklab olasiz ✅
```

**Vaqt:** ~5-10 daqiqa  
**Xarajat:** **BEPUL** (free)

---

## 📱 Debug APK (Testing)

### Avtomatik Build

Har safar `main` branchga push qilganingizda:
- ✅ Avtomatik build
- ✅ Debug APK tayyorlandi
- ✅ Artifacts'da available

### GitHub'dan Yuklab Olish

```
1. GitHub repo'ga o'ting
   xondamiroralboyev013-web/NexusAI
   
2. "Actions" tabiga bosing
   
3. Oxirgi "Build Android APK" workflow'ni tanlang
   
4. "Artifacts" bo'limida "app-debug" toping
   
5. Download qiling (.zip)
   
6. Unzip → app-debug.apk
```

### Android Telefoniga O'rnatish

```bash
adb install -r app-debug.apk
```

---

## 🎁 Release APK (Play Store)

### Manual Release Build

```
1. GitHub repo'ga o'ting → "Actions"

2. "Build Release APK" workflow'ni tanlang

3. "Run workflow" bosmasi

4. Version raqam kiriting (masalan: v1.0.0)

5. Ko'k "Run workflow" bosmasi

6. 10 daqiqa kutib turing...

7. Release'larga o'tib, APK'ni yuklab oling
```

---

## 📊 Workflows Nima Qiladi?

### `build-apk.yml` (Debug Build)

**Trigger:** Har push'da main'ga

```yaml
✅ Node.js o'rnatish
✅ Java setup
✅ Android SDK setup
✅ npm install
✅ Cordova build
✅ APK yaratish
✅ Artifacts upload
```

**Natija:** `app-debug.apk`

### `release-apk.yml` (Release Build)

**Trigger:** Manual trigger

```yaml
✅ Release version build
✅ Code signing (optional)
✅ GitHub Release yaratish
✅ Play Store upload (optional)
```

**Natija:** Signed APK + Release

---

## 🔐 Signing Setup (Optional)

Release APK'ni Play Store'da joylashtirish uchun:

### 1. Signing Key Yaratish

```bash
keytool -genkey -v -keystore release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias nexusai
```

### 2. GitHub Secrets'ga Qo'shish

`Settings` → `Secrets and variables` → `New repository secret`

```
Name: SIGNING_KEY
Value: (release-key.jks ni Base64'ga convert qiling)
```

Qo'shilishi kerak bo'lgan secretlar:
- `SIGNING_KEY` - Key file (Base64)
- `KEY_ALIAS` - "nexusai"
- `KEY_STORE_PASSWORD` - Sizning parol
- `KEY_PASSWORD` - Sizning parol

### 3. Uncomment Release Build'da

`.github/workflows/release-apk.yml`'da `uploadToPlayStore` enable qiling.

---

## 📥 APK'ni Qanday Yuklab Olish

### Fastest Way

```
GitHub repo → Actions → Latest workflow
→ Artifacts section → app-debug download
```

### CLI orqali

```bash
# Latest artifact'ni yuklab olish
gh run download -n app-debug

# Yoki browser'da
https://github.com/xondamiroralboyev013-web/NexusAI/actions
```

---

## ⚡ Test Edish

### QR Code orqali (Eng Tez)

1. APK'ni GitHub release'ga upload qiling
2. Release URL'ni QR code'ga o'voring (qr-server.com)
3. Telefonning camera'si bilan scan qiling
4. Download va install

### Telegram bilan

1. APK'ni Telegram bot'ga yuborish
2. Bot link yaratadi
3. Telefondan link'ni oching
4. Download qiladi

---

## ❌ Agar Build Fail Bo'lsa

### Sabablari

1. **Java version** - Actions Ubuntu'da o'zini javoni bor
2. **Cordova version** - package.json'da aniqlangan
3. **Android API** - Actions API 34'ni o'rnatadi
4. **Dependencies** - npm install bilan

### Debug

```
1. GitHub → Actions
2. Failed workflow'ni tanlang
3. "Build Android APK" step'ni oching
4. Errors'ni ko'ring
5. Log'ni ko'chib, Stack Overflow'da izlab ko'ring
```

---

## 📱 APK Specifications

```
App ID:      com.nexusai.app
Version:     1.0.0
Min API:     26 (Android 8.0)
Target API:  34 (Android 14)
Size:        ~5-8 MB
Architecture: arm64-v8a + armeabi-v7a
```

---

## 🎯 Play Store'ga Joylashtirish

### Steps

1. **Google Play Developer Account yaratish** ($25 one-time)
2. **App listing yaratish**
3. **Release APK upload** (signed)
4. **Screenshots, description qo'shish**
5. **Review submission**
6. ✅ **Live!**

---

## 📊 Status Check

```bash
# Oxirgi workflow status'ni ko'rish
gh workflow view build-apk.yml

# Recent runs
gh run list --workflow=build-apk.yml
```

---

## 💡 Tips

✅ **Her push'da auto-build** - Rivojlanish vaqtida foydali  
✅ **Artifacts 30 kun saqlani** - Ko'p vaqt yuklab olishga bor  
✅ **No local SDK kerak** - Hammasi cloud'da  
✅ **Free va unlimited** - GitHub free tier'da  
✅ **Security** - Secrets'da saqlanadi

---

## 🚀 Qo'llash

Hozir siznining GitHub Actions ishga tushdi!

### Birinchi APK'ni Olish

```
1. Repo'ga push qiling (yoki Actions'da manual run)
2. 5-10 daqiqa kutib turing
3. Actions → Latest workflow
4. Artifacts'dan app-debug download
5. Android'ga install: adb install app-debug.apk
6. ✅ TAYYOR!
```

---

**Qiydali?** Android SDK'ni o'rnatmasdan 5 daqiqada APK bo'ldi! ⚡🎉

