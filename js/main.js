// main script handles cookie consent and language interactions

import { TidbinbillaData } from './data.js';

function initCookieConsent() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept-btn');
    const declineBtn = document.getElementById('cookie-decline-btn');
    const storageKey = 'tidbinbilla_cookie_consent';
    //check if user already accepted cookies
    if (localStorage.getItem(storageKey) === 'accepted'|| localStorage.getItem(storageKey) === 'declined') {
        banner.classList.add('hidden');
    }
// save user preference to localstorage
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem(storageKey, 'accepted');
            localStorage.setItem(`${storageKey}_date`, new Date().toISOString());
            banner.classList.add('hidden');
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            localStorage.setItem(storageKey, 'declined');
            banner.classList.add('hidden');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initCookieConsent();
    vocabularyCards();
});
