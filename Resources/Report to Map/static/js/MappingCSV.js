// Add console.log to check to see if our code is working.

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  accessToken: API_KEY
});


// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [40.7, -94.5],
	zoom: 3,
	layers: [dark]
});

// Create a base layer that holds all three maps.
let baseMaps = {
  "Dark": dark,
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create a layer for our job location data.
let jobLocations = new L.LayerGroup();

let overlays = {
  "Job Locations": jobLocations,
};


L.control.layers(baseMaps, overlays).addTo(map);


// Read in the data from our CSV file using d3.
d3.csv('https://raw.githubusercontent.com/ScottyMacCVC/EoStoECMS/main/Resources/Report%20to%20Map/Addresses%20List-Transform.csv').then(function(data) {
  console.log(data);
  // Loop through each row in the CSV file and create an object.

  var AddMarkers = function(entry)
  {
    L.circleMarker([entry.Latitude, entry.Longitude])
      .addTo(jobLocations)
      .bindPopup("Job Name: " + entry["Job Name"] + "<br>Job Number: " + entry["Job Number"]);
      //+ "<br>Address: " + entry['Address']);

  };

  data.forEach(AddMarkers);
});
