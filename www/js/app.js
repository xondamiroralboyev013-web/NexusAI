/* js/app.js - Cordova glue to ensure the app opens and behaves correctly on Android APKs.
   This file contains safe device-ready and backbutton handling and small runtime overrides.
*/
(function () {
  function log() { console.log.apply(console, ['[App]'].concat(Array.from(arguments))); }

  function onDeviceReady() {
    log('deviceready');

    // Hide splashscreen if available
    try { if (navigator.splashscreen && navigator.splashscreen.hide) navigator.splashscreen.hide(); } catch (e) { }

    // Ensure app branding is visible on device
    try {
      document.title = 'NexusAI';
      const br = document.getElementById('appBrand'); if (br) br.textContent = 'NexusAI';
      const welcome = document.getElementById('lbl_welcome_title'); if (welcome) welcome.textContent = 'NexusAI';
    } catch (e) { log('branding update failed', e); }

    // Fix Speech Recognition for Cordova: polyfill if needed
    try {
      if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
        log('SpeechRecognition not available — disabling mic button');
        const micBtn = document.getElementById('micButton');
        if (micBtn) micBtn.style.display = 'none';
      }
    } catch (e) { log('SpeechRecognition check failed', e); }

    // Call initSpeech() to set up speech recognition if available
    try {
      if (typeof initSpeech === 'function') initSpeech();
    } catch (e) { log('initSpeech call failed', e); }

    // Back button behavior: close modals first, then navigate back, otherwise exit
    document.addEventListener('backbutton', function (e) {
      e.preventDefault();
      try {
        const settings = document.getElementById('settingsModal');
        if (settings && !settings.classList.contains('hidden')) { toggleSettingsModal(); return; }
        const lang = document.getElementById('langModal');
        if (lang && !lang.classList.contains('hidden')) { closeLanguageModal(); return; }
        const history = document.getElementById('historyModal');
        if (history && !history.classList.contains('hidden')) { toggleHistoryModal(); return; }

        const input = document.getElementById('mainInput');
        if (document.activeElement === input) { input.blur(); return; }

        if (window.history.length > 1) { window.history.back(); return; }

        if (navigator.app && typeof navigator.app.exitApp === 'function') navigator.app.exitApp();
        else if (navigator.device && typeof navigator.device.exitApp === 'function') navigator.device.exitApp();
        else window.close();
      } catch (err) { log('backbutton handler error', err); }
    }, false);

    // Prefer InAppBrowser for external links if available
    if (window.cordova && window.cordova.InAppBrowser && typeof window.cordova.InAppBrowser.open === 'function') {
      window.open = window.cordova.InAppBrowser.open;
    }

    // Protect service worker registration on file:// protocol — override to be safe
    if (window.registerServiceWorker) {
      window.registerServiceWorker = function () {
        if (window.location.protocol && window.location.protocol.indexOf('http') === 0) {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
              .then(r => log('Service Worker registered', r))
              .catch(err => log('Service Worker registration failed', err));
          }
        } else {
          log('Skipping service worker registration (file protocol)');
        }
      };
    }

    // Optional: wake lock request on device
    try { if (typeof requestWakeLock === 'function') requestWakeLock(); } catch (e) { }
  }

  // Listen for Cordova ready
  if (window.cordova) {
    document.addEventListener('deviceready', onDeviceReady, false);
  } else {
    // If cordova.js is not present (browser), still attach a no-op so code doesn't break
    document.addEventListener('DOMContentLoaded', function () {
      log('browser DOMContentLoaded — Cordova not present');
    });
  }
})();
