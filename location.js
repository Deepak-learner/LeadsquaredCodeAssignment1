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
    latt = pos.coords.latitude;
    long = pos.coords.longitude;
    var lattlong = new google.maps.LatLng(latt, long);
    var options = {
        center: lattlong,
        zoom: 15,
        mapTypeControl: true,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
    }
    var coordinates = "Your coordinates are - " + "latitude: " + latt + ",   longitude: " + long;
    document.getElementById("position").innerHTML = coordinates;
    var maps = new google.maps.Map(document.getElementById("location"), options);
    // To mark user location on map google maps provide marker.
    var markers = new google.maps.Marker({ position: lattlong, map: maps, title: "your position" });
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


