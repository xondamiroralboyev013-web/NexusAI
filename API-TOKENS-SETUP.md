# 🔑 Complete API Tokens Setup Guide

## ⚠️ CRITICAL: Your App Needs API Keys to Work!

The NexusAI app requires several API keys to function properly. This guide will help you set them all up.

---

## 📋 Required API Keys

| API | Purpose | Priority | Free Tier | Setup Time |
|-----|---------|----------|-----------|-----------|
| **Groq** | AI Chat (Main LLM) | 🔴 REQUIRED | ✅ Yes | 2 min |
| **Tavily** | Web Search | 🟡 OPTIONAL | ✅ Yes | 3 min |
| **Pixabay** | Image Search | 🟡 OPTIONAL | ✅ Yes | 2 min |
| **Google Maps** | Map Display | 🟡 OPTIONAL | ✅ Yes | 5 min |

---

## 1️⃣ GROQ API (REQUIRED) - AI Chat Engine

Groq provides **ultra-fast** AI responses. It's the main engine of NexusAI.

### Get Your Groq API Key:

1. Go to: **https://console.groq.com**
2. Click **Sign Up** (or Login if you have an account)
3. Create a free account (takes 1 minute)
4. Navigate to **API Keys** in the left sidebar
5. Click **Create API Key** button
6. Copy the key (looks like: `gsk_eD0S0GLBVY8nVx30inHSWGdyb3FYRjV0...`)

### Update Your Configuration:

In [index.html](www/index.html), find this section (around line 1025):

```javascript
const CONFIG = {
    api: 'https://api.groq.com/openai/v1/chat/completions',
    apiKey: 'REPLACE_WITH_YOUR_GROQ_KEY',  // ← PASTE YOUR KEY HERE
    model: 'llama-3.1-8b-instant',
    pixabayKey: 'REPLACE_PIXABAY_KEY',
    tavilyKey: 'REPLACE_TAVILY_KEY'
};
```

Replace `REPLACE_WITH_YOUR_GROQ_KEY` with your actual key:

```javascript
apiKey: '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',
```

✅ **Done!** The app will now work for basic AI chat.

---

## 2️⃣ TAVILY API (OPTIONAL) - Web Search

Enables the app to search the web for current information (needed for Research Mode).

### Get Your Tavily API Key:

1. Go to: **https://tavily.com**
2. Click **Sign Up** (free account)
3. Create account and verify email
4. Dashboard → Click **Get API Key**
5. Copy your API key
6. Set your monthly request limit (free tier: 1,000 requests/month)

### Update Configuration:

In [index.html](www/index.html), line ~1030:

```javascript
tavilyKey: 'tvly_YOUR_TAVILY_KEY_HERE',
```

Example:
```javascript
tavilyKey: 'tvly_abc123def456ghi789',
```

**Without this:** Web search won't work, but app still functions.

---

## 3️⃣ PIXABAY API (OPTIONAL) - Image Search

Provides images to accompany AI responses.

### Get Your Pixabay API Key:

1. Go to: **https://pixabay.com/api**
2. Click **Sign Up** (or Login)
3. Create account
4. Dashboard → Find your **API Key**
5. Copy it

### Update Configuration:

In [index.html](www/index.html), line ~1029:

```javascript
pixabayKey: 'YOUR_PIXABAY_API_KEY',
```

Example:
```javascript
pixabayKey: '12345678-abcdefghijklmnopqrst',
```

**Without this:** Image search won't work, but app still functions.

---

## 4️⃣ GOOGLE MAPS API (OPTIONAL) - Map Display

Shows maps when user asks for locations.

### Get Your Google Maps API Key:

1. Go to: **https://console.cloud.google.com**
2. Create a new project or select existing
3. Enable these APIs:
   - Maps JavaScript API
   - Maps Embed API
   - Geocoding API
4. Create API key (Credentials → Create Credentials → API Key)
5. Copy the key
6. (Optional) Set API restrictions to "Maps-related APIs"

### Update Configuration:

Find this section in [index.html](www/index.html) (around line 500-600):

```javascript
// Google Maps configuration
const GOOGLE_MAPS_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
```

Replace with your key:
```javascript
const GOOGLE_MAPS_KEY = 'AIzaSyD_YOUR_ACTUAL_KEY_HERE';
```

**Without this:** Maps won't embed, but app still functions.

---

## 🔒 Security Best Practices

### ⚠️ DO NOT:
- ❌ Commit API keys to GitHub
- ❌ Share keys on public forums
- ❌ Leave keys in email

### ✅ DO:
- ✅ Use environment variables in production
- ✅ Regenerate keys periodically
- ✅ Use a backend proxy (see API-SETUP.md)
- ✅ Set API rate limits
- ✅ Use read-only keys where possible

### For Production (Backend Proxy):

Create `.env` file (NEVER commit):
```
GROQ_API_KEY=gsk_YOUR_KEY_HERE
TAVILY_API_KEY=tvly_YOUR_KEY_HERE
PIXABAY_API_KEY=YOUR_KEY_HERE
GOOGLE_MAPS_API_KEY=AIzaSy_YOUR_KEY_HERE
```

Add to `.gitignore`:
```
.env
.env.local
.env.*.local
```

Then use backend to proxy requests.

---

## ✅ Step-by-Step Setup Checklist

- [ ] **Step 1:** Get Groq API key from https://console.groq.com
- [ ] **Step 2:** Paste Groq key in [index.html](www/index.html) line ~1027
- [ ] **Step 3:** Test app works (send a message)
- [ ] **Step 4:** (Optional) Get Tavily key for web search
- [ ] **Step 5:** (Optional) Get Pixabay key for images
- [ ] **Step 6:** (Optional) Get Google Maps key for maps
- [ ] **Step 7:** Paste remaining keys in config
- [ ] **Step 8:** Test all features
- [ ] **Step 9:** Do NOT commit keys to GitHub
- [ ] **Step 10:** Build APK with `npm run build:debug`

---

## 🚀 Quick Start (Minimum Setup)

**To get NexusAI working RIGHT NOW:**

1. Visit: https://console.groq.com
2. Sign up (30 seconds)
3. Get API key (1 minute)
4. Edit [www/index.html](www/index.html) line ~1027
5. Replace: `apiKey: 'REPLACE_WITH_YOUR_GROQ_KEY'`
6. With your key: `apiKey: 'gsk_...YOUR_KEY...'`
7. Save file
8. Open app in browser → **WORKING!** ✅

That's it! You now have a functional AI chat app.

---

## 🆘 Troubleshooting

### Q: "API Error: 401 Unauthorized"
**A:** Your Groq API key is wrong or expired. Double-check it at https://console.groq.com/keys

### Q: "Web search not working"
**A:** Tavily key not set. Either:
- Get key at https://tavily.com, OR
- Disable web search (app still works without it)

### Q: "App won't respond"
**A:** Check:
1. API key is correct
2. Internet connection is active
3. Browser console for error messages (F12)
4. Try clearing localStorage: `localStorage.clear()`

### Q: "Can't find config in index.html"
**A:** Use Ctrl+F to search: `CONFIG =` or `apiKey`

---

## 📞 Support Resources

| Issue | Resource |
|-------|----------|
| Groq Issues | https://discord.gg/groq |
| Tavily Issues | https://www.tavily.com/contact |
| Pixabay Issues | https://pixabay.com/service/faq/ |
| Google Maps Issues | https://cloud.google.com/support |

---

## 📝 Version History

- **v1.0** (Dec 24, 2025): Initial setup guide
- **v1.1**: Added Tavily, Pixabay, Google Maps
- **v1.2**: Security best practices added

---

**Status:** ✅ Production Ready  
**Last Updated:** December 24, 2025  
**Next Update:** When new APIs are added
