// Google Maps integration for cultural sites
// import application json data
import { TidbinbillaData } from './data.js';

let map;
let infoWindow;

function initMap() {
    const mapCanvas = document.getElementById('map-canvas');
    if (!mapCanvas) return;

    if (typeof google === 'undefined' || !google.maps) return;

    infoWindow = new google.maps.InfoWindow();
    // initialise the interactive map, around the tidbinbilla area
    map = new google.maps.Map(mapCanvas, {
        zoom: 13,
        center: { lat: -35.4450, lng: 148.9350 },
        mapTypeControl: true
    });
    //create a marker for each chosen significant site 
    TidbinbillaData.significantSites.forEach(site => {
        const marker = new google.maps.Marker({
            position: site.coords,
            map,
            title: site.title
        });
        //add a click listener (button event handler) to markers to show interactive popups 
        //and contextual information
        marker.addListener('click', () => {
            showSiteDetails(site);
            infoWindow.setContent(buildInfoWindowHtml(site));
            infoWindow.open(map, marker);
            map.panTo(marker.getPosition());
        });
    });
    //start off by automatically showing first significant site in list
    showSiteDetails(TidbinbillaData.significantSites[0]);
}
//function to create popup inside interactive map. Includes site information and google maps link
function buildInfoWindowHtml(site) {
    //put the maps url together using the site lat/lng from the json data object.
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${site.coords.lat},${site.coords.lng}`;
    const imageUrl = site.imageUrl;


    return `
        <div style="max-width: 260px; font-family: Arial, sans-serif; colour: #2c160b;">
            <div style="font-size: 1rem; font-weight: 700; margin-bottom: 6px;">${site.title}</div>
            <img src="${imageUrl} " alt="${site.title}" style="width: 100%; height: 140px; object-fit: cover; border-radius: 6px; background: #efe2d0;" />
            <a href="${mapsUrl}" target="_blank" rel="noopener" style="display: block; margin-top: 10px; colour: #a64f25; text-decoration: none; font-weight: 700;">View on Google Maps</a>
        </div>
    `;
}

//function for changing the active location detail in context window
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
//ensure the document is loaded before initing map to prevent errors
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}
