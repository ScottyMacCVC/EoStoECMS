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
let orders = new L.LayerGroup();

let overlays = {
  "Job Locations": jobLocations,
  'Recent Orders': orders
};


L.control.layers(baseMaps, overlays).addTo(map);

///////////////////////////////////////////////////////////////////////////////
// Task: Working with our csv file.                                          //                  
//                                                                           //
// Logic: While we are working with the csv file, we need to parse it.       //
//      We need to create a function that will parse the csv file.           //
//      We need to create a function that will create a marker for each job. //
//      We will be setting the pop-up for each datapoint.                    //
//      Create a class to be easily updated?                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////


// An object to save the markers.
var markers = {};
var orderMarkers = {};

// Read in the data from our CSV file using d3.
Promise.all([

  // TODO: Figure our how to get data from local files.

  // Local Files
  // d3.csv("../data/mapping.csv"),
  // d3.csv("../data/orders.csv")
  // Github Files
  d3.csv('https://raw.githubusercontent.com/ScottyMacCVC/EoStoECMS/main/Resources/Report%20to%20Map/static/data/mapping.csv'),
  d3.csv('https://raw.githubusercontent.com/ScottyMacCVC/EoStoECMS/main/Resources/Report%20to%20Map/static/data/orders.csv'),
  d3.csv('https://raw.githubusercontent.com/ScottyMacCVC/EoStoECMS/main/Resources/Report%20to%20Map/static/data/7-23%20CONCRETE%20SCHED.csv')
  // Network Files
  // d3.csv("file:///Z:/8-THE STANDARD/12-EoS to eCMS/Resources/Report to Map/Addresses List-Transform.csv"),
  // d3.csv("")

]).then(function(files) {
  
  // Debug Purpose: console.log the files.
  // console.log(files[0]);
  // console.log(files[1]);
  console.log(files[2]);

  // Function to loop through data and add each entry to the map.
  var AddMarkers = function(entry)
  {
    // Create a new marker for each entry.
    markers[entry['Job Number']] = L.circleMarker([entry.Latitude, entry.Longitude])
      // Adding all our options 
      .addTo(jobLocations)
      .bindPopup("Job Name: " + entry["Job Name"] + "<br>Job Number: " + entry["Job Number"] + '<br><br>RECENT ORDERS<br>');
      //+ "<br>Address: " + entry['Address']);

  };

  // A Function to go through the orders and sort them by Job Number.
  var ExtractOrders = function(entry) {
    // DEBUG AREA
    // console.log(entry['Job Number(QProduct)']);

    // Check if the variable is undefined
    try {
      if ( entry['Job Number(QProduct)'] !== 'SRVICE' ) {
        // Get the content of the marker popup.
        content = markers[entry['Job Number(QProduct)']].getPopup().getContent();
        //console.log(content);
        orderMarkers[entry['Job Number(QProduct)']] = markers[entry['Job Number(QProduct)']];

        
        orderMarkers[entry['Job Number(QProduct)']].getPopup().setContent(
          content + "<br>Part: " + entry['Part Description'] + "Quantity: " + entry['Quantity Shipped'] + "<br>");
        orderMarkers[entry['Job Number(QProduct)']].setStyle({color: 'orange', fillColor: 'orange'}).addTo(orders).removeFrom(jobLocations);
        }
      } catch (e) {
        // console.log(e);
      }
  };

  // A Function to go through the orders and sort them by Job Number.
  var ExtractOrders2 = function(entry) {
    // DEBUG AREA
    console.log(entry['JOB CODE']);

    // Check if the variable is undefined
    try {
      if ( entry['JOB CODE'] !== 'SRVICE' ) {
        // Get the content of the marker popup.
        content = markers[entry['JOB CODE']].getPopup().getContent();
        //console.log(content);
        orderMarkers[entry['JOB CODE']] = markers[entry['JOB CODE']];

        
        orderMarkers[entry['JOB CODE']].getPopup().setContent(
          content + "<br>Pump #: " + entry['Pump #'] + "Yards Ordered: " + entry['YARDS ORDERED'] + "<br>");
        orderMarkers[entry['JOB CODE']].setStyle({color: 'red', fillColor: 'red'}).addTo(orders).removeFrom(jobLocations);
        }
      } catch (e) {
        // console.log(e);
      }
  };

  console.log(markers)
  
  files[0].forEach(AddMarkers);
  files[1].forEach(ExtractOrders);
  files[2].forEach(ExtractOrders2);

  // // We are experimenting with the sidebar.
  // // Finding out what needs to stay and go from the code.
  // function createMarker(coords, title, info, source) {
  //   var marker, content;
  
  //   content = '<b><font size="6">' + title + '</font></b><br/>' + info + '<br><a href="' + source + '" target="_blank"><button>Orders</button></a>'
  //   marker = L.marker(coords).addTo(markerLayer);
  //   marker.bindPopup(content);
    
  //   marker.on('click', function(evt) {
  //     var id = L.Util.stamp(evt.target);
  //     if (document.getElementById(id) != null) return; 
  //     var sidebarElement, infoPart, removePart;
  //     sidebarElement = L.DomUtil.create('div', 'sidebarElement', document.getElementById('sidebar'));
  //     sidebarElement.id = id;
  //     infoPart = L.DomUtil.create('div', 'infoSidebarElement', sidebarElement);
  //     infoPart.innerHTML = content;
  //     L.DomEvent.on(infoPart, 'click', function(evt) {
  //       var marker = markerLayer.getLayer(this.id);
  //       marker.closePopup();
  //       map.panTo(marker.getLatLng());
  //       marker.bounce(3);
  //     }, sidebarElement);
  //     removePart = L.DomUtil.create('div', 'removeSidebarElement', sidebarElement);
  //     removePart.innerHTML = 'Remove';
  //     L.DomEvent.on(removePart, 'click', function(evt) {
  //       markerLayer.getLayer(this.id).closePopup();
  //       this.parentNode.removeChild(this);
  //     }, sidebarElement);
  //   });
  // }


});

