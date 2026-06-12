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
//delete following
function vocabularyCards() {
    const wordCards = document.querySelectorAll('.word-card');
    const displayArea = document.getElementById('translation-display');

    if (wordCards.length === 0 || !displayArea) return;
//to be deleted: unnecessary 
    wordCards.forEach(card => {
        card.addEventListener('click', () => {
            const word = card.getAttribute('data-word');
            showTranslation(word);
        });
    });

    function showTranslation(word) {
        const vocab = TidbinbillaData.vocabulary.find(v => v.word === word);
        if (!vocab) return;

        displayArea.innerHTML = `
            <div style="text-align: center;">
                <h3 style="margin: 0 0 10px 0; color: var(--heading);">${vocab.word}</h3>
                <p style="margin: 0 0 10px 0; font-weight: bold; font-size: 1.05rem; color: var(--accent);">${vocab.translation}</p>
                <p style="margin: 0; font-size: 0.95rem; color: #6a4f39;">${vocab.usage}</p>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initCookieConsent();
    vocabularyCards();
});
