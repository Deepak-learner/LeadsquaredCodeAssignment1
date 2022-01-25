
mapboxgl.accessToken = 'pk.eyJ1Ijoic3dhcmFqdHJpdmVkaSIsImEiOiJja3lsbjJmamYwMG9jMndwODFqbG5vaXFjIn0.n2hD-RnDq3YHE6kcczMmeg';

// Checking for browser support and if browser support geolocation api, call getCurrentPosition method.
function detectlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, showError);
    }
    else {
        alert("Your browser not support geolocation api");
    }
}

// A success callback function to get the location of user.
function showLocation(pos) {
  
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ pos.coords.longitude, pos.coords.latitude ],
        zoom: 13
    })
    latt = pos.coords.latitude;
    long = pos.coords.longitude;
    x = document.getElementById('location');
    x.innerHTML = "Your coordinates are - " + "latitude: " + latt + ",   longitude: " + long;
    let marker = new mapboxgl.Marker().setLngLat([ pos.coords.longitude, pos.coords.latitude ]).addTo(map);
   
}

// An error callback function 
function showError(error) {
    switch (error.code) {
    case error.PERMISSION_DENIED:
        alert("User denied the request.");
        break;
    case error.POSITION_UNAVAILABLE:
        alert("USer location information is not available.");
        break;
    case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
    case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
}
