// Initialize the map
const map = L.map('map', {
  center: [20, 0],
  zoom: 2
});

// Add a base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define a layer for tectonic plates
const platesLayer = L.layerGroup().addTo(map);

// Load tectonic plates GeoJSON from GitHub
fetch('https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json')
  .then(response => response.json())
  .then(data => {
      L.geoJSON(data, {
          style: {
              color: "orange",
              weight: 2
          }
      }).addTo(platesLayer);
      console.log("Tectonic plates data loaded successfully.");
  })
  .catch(error => console.error("Error loading tectonic plates data:", error));
