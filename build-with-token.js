#!/usr/bin/env node

/**
 * Build script that injects the Groq API token into the HTML
 * Token comes from environment variable GROQ_API_KEY (from GitHub Secrets)
 * Usage: GROQ_API_KEY=xxx node build-with-token.js
 */

const fs = require('fs');
const path = require('path');

// Get token from environment variable
const GROQ_TOKEN = process.env.GROQ_API_KEY;

if (!GROQ_TOKEN) {
    console.error('❌ Error: GROQ_API_KEY environment variable not set!');
    console.error('Make sure to add GROQ_API_KEY to GitHub Secrets');
    process.exit(1);
}

console.log(`🔑 Injecting Groq API token into build...`);
console.log(`Token: ${GROQ_TOKEN.substring(0, 20)}...`);

// Path to index.html
const indexPath = path.join(__dirname, 'www', 'index.html');

if (!fs.existsSync(indexPath)) {
    console.error(`❌ index.html not found at ${indexPath}`);
    process.exit(1);
}

// Read the file
let content = fs.readFileSync(indexPath, 'utf8');

// Replace placeholder with actual token
const placeholder = 'gsk_PLACEHOLDER_TOKEN_REPLACE_IN_BUILD';
if (!content.includes(placeholder)) {
    console.warn('⚠️ Placeholder not found in index.html');
    process.exit(1);
}

content = content.replace(placeholder, GROQ_TOKEN);
console.log('✅ Placeholder replaced with token');

// Write back
fs.writeFileSync(indexPath, content, 'utf8');
console.log(`✅ Build injection complete!`);
