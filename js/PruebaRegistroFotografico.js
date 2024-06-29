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

// Inicialización de Firebase Storage
let storage = firebase.storage();

// Acceso a la cámara y captura de la imagen
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const snapButton = document.getElementById("snap");

  // Pedir acceso a la cámara
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((err) => {
      console.error("Error accessing the camera: " + err);
    });

  snapButton.addEventListener("click", () => {
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convertir la imagen capturada a data URL
    const dataUrl = canvas.toDataURL("image/png");
    const blob = dataURLToBlob(dataUrl);

    // Subir la imagen a Firebase Storage
    const storageRef = storage.ref();
    const imageRef = storageRef.child(
      "images/" + new Date().toISOString() + ".png"
    );
    imageRef
      .put(blob)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
        alert("Foto capturada y subida exitosamente!");
      })
      .catch((error) => {
        console.error("Error al subir la foto: ", error);
        alert("Error al subir la foto.");
      });
  });
});

// Función para convertir data URL a Blob
function dataURLToBlob(dataURL) {
  const byteString = atob(dataURL.split(",")[1]);
  const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
}
