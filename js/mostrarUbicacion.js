// Initialize and add the map
let map;

function initMap() {
  // The map, centered at a default location
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 }, // Default center, can be changed
    zoom: 8,
  });

  // traer datos de geoubicacion
  loadLocations();
}

function loadLocations() {
  baseDatos
    .collection("geolocations")
    .orderBy("timestamp", "desc")
    .get()
    .then((querySnapshot) => {
      const bounds = new google.maps.LatLngBounds();

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const latLng = new google.maps.LatLng(data.latitude, data.longitude);

        const marker = new google.maps.Marker({
          position: latLng,
          map: map,
          title: `Latitud: ${data.latitude}, Longitud: ${data.longitude}`,
        });

        bounds.extend(latLng);
      });

      // Adjust the map to fit all markers
      map.fitBounds(bounds);
    })
    .catch((error) => {
      console.error("Error al obtener las ubicaciones: ", error);
    });
}

// Wait for the DOM to be fully loaded before initializing the map
document.addEventListener("DOMContentLoaded", function () {
  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCFOE9HABPO98q4CalVCisoVM7TIVo2czI",
    authDomain: "bd-appconnet.firebaseapp.com",
    projectId: "bd-appconnet",
    storageBucket: "bd-appconnet.appspot.com",
    messagingSenderId: "749439432233",
    appId: "1:749439432233:web:861541de33ed615b9fce38",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const baseDatos = firebase.firestore();

  // Load the Google Maps script dynamically with the API key
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
});
