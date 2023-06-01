/*POSITION*/

navigator.geolocation.getCurrentPosition(function (position) {
    var userLatitude = position.coords.latitude;
    var userLongitude = position.coords.longitude;
  
    // Map user's coordinates to SVG map
    var svgMap = document.getElementById('svg-map');
    var svgPoint = svgMap.createSVGPoint();
    svgPoint.x = userLongitude; // Map longitude to SVG x-coordinate
    svgPoint.y = userLatitude; // Map latitude to SVG y-coordinate
    var mappedPoint = svgPoint.matrixTransform(svgMap.getScreenCTM());
  
    // Add a marker to the SVG map
    var marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    marker.setAttribute('cx', mappedPoint.x);
    marker.setAttribute('cy', mappedPoint.y);
    marker.setAttribute('r', 5);
    marker.setAttribute('fill', 'red');
    svgMap.appendChild(marker);
  });
   
