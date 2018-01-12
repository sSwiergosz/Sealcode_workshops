function main() {
  getLocations();
  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
  }
}

// read coordinates and names from JSON file
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
          );
          namesOfLocations.push(responseObject.features[i].properties.long_name);
        }
    }
  };

  xhr.send(null);
}

// put marker on a map based on your current location
function success(location) {
  let vector = [];
  document.getElementsByTagName('div')[0].id = 'mapid';
  vector[0] = location.coords.latitude;
  vector[1] = location.coords.longitude;
  draw(vector);
}

function fail(msg) {
  console.log(`Error code: ${msg.code}`);
}

function draw(vector) {
  const mymap = L.map('mapid').setView(vector, 13);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox.streets'
  }).addTo(mymap);

  const red_marker = new L.Icon({
  	iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  });

  let marker = L.marker(vector, {icon: red_marker}).addTo(mymap);

  for(let i = 0; i < arrayOfLocations.length; i++) {
  	let vector = [arrayOfLocations[i][0], arrayOfLocations[i][1]];
  	L.marker(vector).addTo(mymap).bindPopup(namesOfLocations[i]);

  	let circle = L.circle(vector, {
	    color: 'blue',
	    fillColor: 'lightblue',
	    fillOpacity: 0.5,
	    radius: 30
	  }).addTo(mymap);
  }

  // bind popup to your current location marker
  marker.bindPopup("Tu jesteś").openPopup();
  L.control.scale({imperial: false}).addTo(mymap);
}

let arrayOfLocations = [];
let namesOfLocations = [];
window.onload = main;
