var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  minZoom:7,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



const buttonCreatePoint = document.querySelector('#button__create--point')
console.log(buttonCreatePoint)

function removeOnClick(){
  map.off('click')
}

function createPoint(event) {
  var marker = L.marker([event.latlng.lat, event.latlng.lng])
  marker.setIcon(L.icon({
    iconUrl: 'http://maps.google.com/mapfiles/kml/shapes/placemark_square.png',
    iconSize: [25,25],
}))
  marker.addTo(map);
  removeOnClick()
}

function navigateMode(){
}
function createPointMode(){
  removeOnClick()
  map.on('click',createPoint);
}

buttonCreatePoint.onclick = createPointMode;