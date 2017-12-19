let lat = document.getElementById('latitude');
let long = document.getElementById('longitude');
let acc = document.getElementById('accuracy');

if (Modernizr.geolocation) {
  navigator.geolocation.getCurrentPosition(success, fail);
}

function success(location) {
  long.innerHTML = `Longtitude: ${location.coords.longitude}`;
  lat.innerHTML = `Latitude: ${location.coords.latitude}`;
  acc.innerHTML = `Accuracy: ${location.coords.accuracy}`;

  if(Modernizr.localstorage) {
    localStorage.setItem('latitude', location.coords.latitude);
  }
  if(Modernizr.sessionstorage) {
    sessionStorage.setItem('longitude', location.coords.longitude);
  }
}

function fail(msg) {
  lat.innerHTML = `Error code: ${msg.code}`;
  long.style.display = 'none';
  acc.style.display = 'none';
}
