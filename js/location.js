document.addEventListener('DOMContentLoaded', function() {
  handleLocationPermission();
});

function handleLocationPermission() {
  if (navigator.permissions) {
    navigator.permissions.query({ name: 'geolocation' }).then(function(result) {
      if (result.state === 'granted') {
        getCurrentLocation();
      } else if (result.state === 'prompt') {
        requestLocationPermission();
      } else {
        console.error('Location permission denied.');
      }
    }).catch(function(error) {
      console.error('Error requesting location permission:', error);
    });
  } else {
    console.error('Geolocation API not supported.');
  }
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var userLatitude = position.coords.latitude;
    var userLongitude = position.coords.longitude;
    displayUserLocation(userLatitude, userLongitude);
  }, function(error) {
    console.error('Error getting location:', error);
  });
}

function requestLocationPermission() {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      getCurrentLocation();
    },
    function(error) {
      console.error('Error getting location:', error);
    }
  );
}

function displayUserLocation(latitude, longitude) {
  const mapWidth = 1817; // Width of the SVG map in pixels
  const mapHeight = 984; // Height of the SVG map in pixels
  
  var svgMapParent = document.getElementById('zoom');
  var svgMapRect = svgMapParent.getBoundingClientRect();

  // Calculate the cx and cy values for each point
  var points = [
    { id: 'svetaStosija', latitude: 44.127204894681576, longitude: 15.23749511295614 }, // Add coordinates for point 1
    { id: 'svetiRoko', latitude: 44.12636170880619, longitude: 15.238860383372325 }, // Add coordinates for point 2
  
    // Add more points as needed
  ];

  points.forEach(function(point) {
    var svgPoint = document.getElementById(point.id);
    var cx = (point.longitude + 180) * (mapWidth / 360);
    var cy = ((90 - point.latitude) * (mapHeight / 180));

    // Display the blue marker based on the user's proximity to each point
    var distance = calculateDistance(latitude, longitude, point.latitude, point.longitude);
    if (distance <= 0.05) { // Distance in kilometers (50 meters = 0.05 kilometers)
      var marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      marker.setAttribute('cx', cx);
      marker.setAttribute('cy', cy);
      marker.setAttribute('r', 12);
      marker.setAttribute('fill', 'blue');
      svgPoint.parentNode.appendChild(marker);
    }
  });
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  // Convert latitude and longitude from degrees to radians
  const lat1Rad = (lat1 * Math.PI) / 180;
  const lon1Rad = (lon1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;
  const lon2Rad = (lon2 * Math.PI) / 180;

  // Calculate the differences between coordinates
  const latDiff = lat2Rad - lat1Rad;
  const lonDiff = lon2Rad - lon1Rad;

  // Apply the Haversine formula
  const a =
    Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance; // Distance in kilometers
}
