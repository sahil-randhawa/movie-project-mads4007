// Initialize the map
let map = L.map('map').setView([43.64642, -79.37932], 13);

// tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 19,
}).addTo(map);

// marker to the map
let marker = L.marker([43.64642, -79.37932]).addTo(map);

// pop-up marker
marker.bindPopup("APEX Cinema").openPopup();