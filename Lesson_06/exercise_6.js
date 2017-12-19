const lat = document.getElementById('latitude');
const long = document.getElementById('longitude');
const acc = document.getElementById('accuracy');
const btn = document.getElementById('clear-storage');

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
  btn.style.display = 'none';
}

btn.addEventListener('click', function() {
	localStorage.clear();
	sessionStorage.clear();
	alert("Local and session storage empty");
});