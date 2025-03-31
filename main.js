var map = L.map('map').setView([50.914167, 14.203333], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([50.914167, 14.203333]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();


let stop= {
    nr: 2,
    title: "Schrammsteinaussicht",
    user: "Ellinnaa",
    lat:50.914167,
    lng:14.203333,
    zoom:15,
};

const STOPS= [
    
];
console.log(STOPS[0]);
console.log(STOPS[0].title);


//Karte initialisieren
let map = L.map('map');

//Hintergrundkarte initialisieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// loop über Etappen
for (let i=0; i<STOPS.length; i++) {

//Marker zeichnen
    let marker = L.marker([STOPS[i].lat, STOPS[i].lng]).addTo(map);

    //Popup definieren
marker.bindPopup(`
    <h2>${STOPS[i].title}</h2>
    <ul>
    <li>Geografische Breite ${STOPS[i].lat. toFixed(5)}° </li>
    <li>Geografische Länge ${STOPS[i].lng. toFixed(5)}° </li>
    </ul>
    `);

    // auf eigene Etappe blicken und Popup öffnen
    if(STOPS[i].user =="Ellinnaa"){
        console.log(STOPS[i].user,"Ellinnaa")
        map.setView([STOPS[i].lat, STOPS[i].lng], STOPS[i].zoom);
        marker.openPopup();
    }

    //Pulldownmenü befüllen
    let option = document.createElement("option");
    option.value = STOPS[i].user;
    option.text=STOPS[i].title;
    if(STOPS[i].user =="Ellinnaa"){
        option.selected = true;
    }
    document.querySelector("#pulldown select").appendChild(option);
}

// auf Änderungen beim Pulldown reagieren
document.querySelector("#pulldown select").onchange = function(evt) {
    let url= `https://${evt.target.value}.github.io/nz`;
    //console.log(url);
    //console.log(evt.target.value);
    window.location = url;
}
