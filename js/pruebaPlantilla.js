// inicio De codigo firebase

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

// fin de codigo firebase

// Obtener referencia al botón
const sendLocationBtn = document.getElementById("sendLocationBtn");

// Función para obtener la geolocalización
function getGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(saveLocation, showError);
  } else {
    alert("Geolocalización no es soportada por este navegador.");
  }
}

// Función para guardar la geolocalización en Firestore
function saveLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const timestamp = new Date();

  baseDatos
    .collection("geolocations")
    .add({
      latitude: latitude,
      longitude: longitude,
      timestamp: timestamp,
    })
    .then(() => {
      alert("Ubicación guardada exitosamente!");
    })
    .catch((error) => {
      console.error("Error al guardar la ubicación: ", error);
    });
}

// Función para manejar errores de geolocalización
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Permiso denegado para obtener la geolocalización.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Información de geolocalización no disponible.");
      break;
    case error.TIMEOUT:
      alert("El tiempo de solicitud de geolocalización ha expirado.");
      break;
    case error.UNKNOWN_ERROR:
      alert("Error desconocido al obtener la geolocalización.");
      break;
  }
}

// Evento click para el botón de enviar geolocalización
sendLocationBtn.addEventListener("click", getGeolocation);
