$(document).ready() {
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: -34.397, lng: 150.644},
	    zoom: 8
	  });
	}

	navigator.geolocation.getCurrentPosition(GetLocation);
	function GetLocation(location) {
	    alert(location.coords.latitude);
	    alert(location.coords.longitude);
	    alert(location.coords.accuracy);
	}
}