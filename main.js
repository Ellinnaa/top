var map = L.map('map').setView([50.914167, 14.203333], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([50.914167, 14.203333]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
