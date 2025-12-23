# 🔐 Secure API Configuration Guide

## ⚠️ NEVER commit API keys to GitHub!

Your API key is sensitive information. Always keep it private and secure.

---

## Setup Options

### Option 1: Use Browser Settings (Recommended for Users)
1. Open the NexusAI app
2. Click **⚙️ Settings** button
3. Paste your Groq API key in the input field
4. Click **Save & Close**
5. Your key is stored securely in browser localStorage

**Benefits:**
- ✅ No secrets in code
- ✅ Easy to change anytime
- ✅ Each user has their own key
- ✅ Works offline (stored locally)

---

### Option 2: Backend Proxy (For Production)

For production apps, implement an API proxy:

```javascript
// Frontend sends message to your backend
const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userMessage })
});

// Backend (Node.js example)
app.post('/api/chat', async (req, res) => {
    const apiKey = process.env.GROQ_API_KEY; // From .env file
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'llama-3.1-8b-instant',
            messages: [{ role: 'user', content: req.body.message }],
        })
    });
    
    res.json(await response.json());
});
```

**Benefits:**
- ✅ API key never exposed to browser
- ✅ Secrets stored securely on server
- ✅ Rate limiting and monitoring
- ✅ Better security

---

## Getting Your Groq API Key

1. Go to [console.groq.com](https://console.groq.com)
2. Sign up for free account
3. Navigate to **API Keys**
4. Click **Create API Key**
5. Copy the key (starts with `gsk_`)
6. Paste it in NexusAI Settings

---

## Environment Variables (.env)

If using a backend, create a `.env` file (NEVER commit this):

```
GROQ_API_KEY=gsk_YOUR_ACTUAL_KEY_HERE
GROQ_MODEL=llama-3.1-8b-instant
```

Add to `.gitignore`:
```
.env
.env.local
.env.*.local
```

---

## Security Best Practices

- ✅ Keep API keys private
- ✅ Use environment variables in backend
- ✅ Rotate keys periodically
- ✅ Use read-only keys where possible
- ✅ Monitor API usage
- ✅ Never share keys in chat/email
- ✅ Regenerate if accidentally exposed

---

## Troubleshooting

**"Please add your Groq API key in Settings first"**
- → Your key is missing or invalid
- → Go to Settings and add/update your key
- → Make sure key starts with `gsk_`

**"API Error: 401"**
- → Authentication failed
- → Check if key is correct
- → Key may have expired (get new one from console.groq.com)

**"API Error: 429"**
- → Too many requests
- → Free tier has rate limits
- → Upgrade plan or wait a few minutes

---

## Your API Credentials (Save Securely)

Once you get your key from console.groq.com:

```
API Key: gsk_[your-key-here]
Model: llama-3.1-8b-instant
Endpoint: https://api.groq.com/openai/v1/chat/completions
```

Add this to NexusAI Settings ⚙️ when prompted.
