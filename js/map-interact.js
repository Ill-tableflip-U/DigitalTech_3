// Google Maps integration for cultural sites

import { TidbinbillaData } from './data.js';

let map;
let infoWindow;

function initMap() {
    const mapCanvas = document.getElementById('map-canvas');
    if (!mapCanvas) return;

    if (typeof google === 'undefined' || !google.maps) return;

    infoWindow = new google.maps.InfoWindow();

    map = new google.maps.Map(mapCanvas, {
        zoom: 13,
        center: { lat: -35.4450, lng: 148.9350 },
        mapTypeControl: true
    });

    TidbinbillaData.significantSites.forEach(site => {
        const marker = new google.maps.Marker({
            position: site.coords,
            map,
            title: site.title
        });

        marker.addListener('click', () => {
            showSiteDetails(site);
            infoWindow.setContent(buildInfoWindowHtml(site));
            infoWindow.open(map, marker);
            map.panTo(marker.getPosition());
        });
    });

    showSiteDetails(TidbinbillaData.significantSites[0]);
}

function buildInfoWindowHtml(site) {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${site.coords.lat},${site.coords.lng}`;
    const imageUrl = getSiteImageUrl(site);

    return `
        <div style="max-width: 260px; font-family: Arial, sans-serif; colour: #2c160b;">
            <div style="font-size: 1rem; font-weight: 700; margin-bottom: 6px;">${site.title}</div>
            <img src="${imageUrl}" alt="${site.title}" style="width: 100%; height: 140px; object-fit: cover; border-radius: 6px; background: #efe2d0;" />
            <a href="${mapsUrl}" target="_blank" rel="noopener" style="display: block; margin-top: 10px; colour: #a64f25; text-decoration: none; font-weight: 700;">View on Google Maps</a>
        </div>
    `;
}

function getSiteImageUrl(site) {
    if (site.imageUrl) return site.imageUrl;

    const apiKey = getGoogleApiKey();
    if (!apiKey) {
        return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="250" height="140"><rect width="250" height="140" fill="#efe2d0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#8a5b38" font-family="Arial, sans-serif" font-size="14">image placeholder</text></svg>'
        );
    }

    const lat = site.coords.lat;
    const lng = site.coords.lng;
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=250x140&maptype=satellite&markers=color:red%7C${lat},${lng}&key=${apiKey}`;
}

function getGoogleApiKey() {
    const script = Array.from(document.querySelectorAll('script[src*="maps.googleapis.com/maps/api/js"]')).find(el => el.src.includes('key='));
    if (!script) return '';
    const match = script.src.match(/[?&]key=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : '';
}

function showSiteDetails(site) {
    const detailPane = document.getElementById('cultural-detail-pane');
    if (!detailPane) return;

    detailPane.innerHTML = `
        <h3>${site.title}</h3>

        <p class="detail-label">Description</p>
        <p>${site.description}</p>

        <p class="detail-label">Material Culture</p>
        <p>${site.description2}</p>
    `;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}
