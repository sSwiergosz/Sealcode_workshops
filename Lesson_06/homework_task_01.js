/*
	This program is divided into two parts:

	1. It uses users' geolocation. It also displays a current timezone, based on previously 
	downloaded coordinates and current time in UTC 00:00. 

	2. It saves information from form in a sessionStorage.
*/

const timezone = document.getElementById('timezone');
const utcTime = document.getElementById('time-in-utc0');

class addTime extends Date {
	addHours(h) {
		this.setHours(this.getHours()+h);
    	return this;
	}
}

class substractTime extends Date {
	substractHours(h) {
		this.setHours(this.getHours()-h);
    	return this;
	}
}

function getTimezone(coords) {
	/*
		This function returns our current timezone. The returned value is two-element list. First of them
		is a string, which displays timezone in a proper way. The second one is an integer from UTC time 
		format.
	*/
	let utc = 0;

	if (coords > 0) {
		// One timezone is 15 degree width. UTC -/+01:00 starts from 7.5 degree
		utc = Math.floor((coords + 7.5) / 15);
	}
	else {
		// Math.floor is not working properly with negative numbers - that's why here is ~~ operator
		utc = ~~((coords - 7.5) / 15);
	}

	if (coords > 7.5) {
		if (utc < 10) {
			return [`UTC +0${utc}:00`, utc];
		}
		else {
			return [`UTC +${utc}:00`, utc];
		}
	}

	else if(coords < 7.5 && coords > -7.5) {
		return ['UTC 00:00', utc];
	}

	else {
		let absUTC = Math.abs(utc);

		if(absUTC < 10) {
			return [`UTC -0${absUTC}:00`, utc];
		}
		else {
			return [`UTC -${absUTC}:00`, utc];
		}
	}
}

function getUTCtime(timezoneUTC) {
	// This function returns properly formatted string, which displays current time in UTC 00:00
	// timezoneUTC shows us, how many hours we have to add/substract from current time

	if(timezoneUTC > 0) {
		let currentDate = new substractTime().substractHours(timezoneUTC);
		return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
	}
	else {
		let currentDate = new addTime().addHours(timezoneUTC)
		return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
	}
}

function success(location) {
  const long = location.coords.longitude;
  const timeArr = getTimezone(long);

  // timeArr[0] - properly formatted string, timeArr[1] - integer from UTC time format
  timezone.innerHTML = `Your timezone is: ${timeArr[0]}`;
  utcTime.innerHTML = `Time in UTC 00:00 - ${getUTCtime(timeArr[1])}`

  if(Modernizr.localstorage) {
    localStorage.setItem('Timezone', getTimezone(long));
  }
}

function fail(msg) {
  timezone.innerHTML = `Error code: ${msg.code}`;
}

if (Modernizr.geolocation) {
  navigator.geolocation.getCurrentPosition(success, fail);
}

