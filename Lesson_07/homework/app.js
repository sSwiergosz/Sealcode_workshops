function main() {
  getLocations();
  // console.log(arrayOfLocations);
  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
  }
}

function getLocations() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'map_service.json', true);

  xhr.onload = function() {
    if(xhr.status == 200) {
        responseObject = JSON.parse(xhr.responseText);
        for(let i in responseObject.features) {
          arrayOfLocations.push(
            [
              responseObject.features[i].geometry.coordinates[1],
              responseObject.features[i].geometry.coordinates[0],
            ]
          )
        }
        console.log(arrayOfLocations);
    }
  };

  xhr.send(null);
}

function success(location) {
  let vector = [];
  document.getElementsByTagName('div')[0].id = 'mapid';
  vector[0] = location.coords.latitude;
  vector[1] = location.coords.longitude;
  // arrayOfLocations.push(vector);
  // draw(vector);
}

function fail(msg) {
  console.log(`Error code: ${msg.code}`);
}

// function draw(vector) {
//   const mymap = L.map('mapid').setView(vector, 13);
//
//   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//     maxZoom: 18,
//     id: 'mapbox.streets'
//   }).addTo(mymap);
//
//   let marker = L.marker(vector).addTo(mymap);
//   marker.bindPopup("Punkt o wspołrzędnych (" + vector[0] + ", " + vector[1] + ")").openPopup();
//
//   var circle = L.circle(vector, {
//     color: 'green',
//     fillColor: '#00AA00',
//     fillOpacity: 0.5,
//     radius: 1000
//   }).addTo(mymap);
//
//   function onMapClickMarker(e) {
//     arrayOfLocations.push([e.latlng.lat, e.latlng.lng]);
//     console.log(arrayOfLocations);
//     let marker2 = L.marker();
//     marker2.setLatLng(e.latlng)
//       .addTo(mymap);
//     marker2.bindPopup("Kliknąłeś na punkt o wspołrzędnych " + e.latlng.toString().replace('LatLng', '')).openPopup();
//     let polyline = L.polyline(arrayOfLocations, {color: 'red'}).addTo(mymap);
//   }
//
//   mymap.on('click', onMapClickMarker);
//
//   L.control.scale({imperial: false}).addTo(mymap);
//
//   let polyline = L.polyline(arrayOfLocations, {color: 'red'}).addTo(mymap);
// }

let arrayOfLocations = [];
window.onload = main;
