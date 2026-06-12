// seasonal knowledge content generator

import { TidbinbillaData } from './data.js';

const seasons = TidbinbillaData.seasons;
let currentSeason = 'winter_frost';

function initSeasonalContent() {
    const buttons = document.querySelectorAll('.seasonal-selector button');
    if (buttons.length === 0) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const seasonKey = btn.getAttribute('data-season');
            if (seasons[seasonKey]) {
                currentSeason = seasonKey;
                renderSeason(seasonKey);
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });

    renderSeason(currentSeason);
}

function renderSeason(seasonKey) {
    const season = seasons[seasonKey];
    const contentArea = document.getElementById('seasonal-content');
    if (!contentArea || !season) return;

    contentArea.innerHTML = '';

    document.documentElement.style.setProperty('--season-primary', season.colour);
    document.documentElement.style.setProperty('--season-accent', season.colour);
    document.documentElement.style.setProperty('--season-background', season.colour);

    const infoCard = document.createElement('div');
    infoCard.className = 'seasonal-info-card';
    infoCard.style.gridColumn = '1 / -1';

    infoCard.innerHTML = `
        <h2>${season.title}</h2>

        <div class="info-section">
            <p class="section-label">Active Months</p>
            <p>${season.monthsActive}</p>
        </div>

        <div class="info-section">
            <p class="section-label">Description</p>
            <p>${season.description}</p>
        </div>
    `;

    contentArea.appendChild(infoCard);

    TidbinbillaData.resources.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'seasonal-item';
        itemDiv.innerHTML = `
            <div class="item-type">${item.type}</div>
            <h3>${item.name}</h3>
            <p>${item.notes}</p>
        `;
        contentArea.appendChild(itemDiv);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSeasonalContent);
} else {
    initSeasonalContent();
}
