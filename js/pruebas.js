const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchend", stopDrawing);
canvas.addEventListener("touchmove", draw);

document.getElementById("clearButton").addEventListener("click", clearCanvas);
document.getElementById("saveButton").addEventListener("click", saveSignature);

function startDrawing(event) {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(getX(event), getY(event));
  event.preventDefault();
}

function stopDrawing(event) {
  drawing = false;
}

function draw(event) {
  if (!drawing) return;
  ctx.lineTo(getX(event), getY(event));
  ctx.stroke();
  event.preventDefault();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveSignature() {
  const dataURL = canvas.toDataURL("image/png");
  const file = dataURLtoBlob(dataURL);
  const storageRef = storage.ref("signatures/" + new Date().getTime() + ".png");

  storageRef.put(file).then(function (snapshot) {
    snapshot.ref.getDownloadURL().then(function (downloadURL) {
      firestore
        .collection("signatures")
        .add({
          url: downloadURL,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          alert("Firma guardada con éxito.");
        })
        .catch(function (error) {
          console.error("Error al guardar la firma: ", error);
        });
    });
  });
}

function getX(event) {
  if (event.touches && event.touches.length > 0) {
    return event.touches[0].clientX - canvas.offsetLeft;
  } else {
    return event.clientX - canvas.offsetLeft;
  }
}

function getY(event) {
  if (event.touches && event.touches.length > 0) {
    return event.touches[0].clientY - canvas.offsetTop;
  } else {
    return event.clientY - canvas.offsetTop;
  }
}

function dataURLtoBlob(dataURL) {
  const parts = dataURL.split(";base64,");
  const contentType = parts[0].split(":")[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}

// // nueva prueba

// // Configuración de Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCFOE9HABPO98q4CalVCisoVM7TIVo2czI",
//   authDomain: "bd-appconnet.firebaseapp.com",
//   projectId: "bd-appconnet",
//   storageBucket: "bd-appconnet.appspot.com",
//   messagingSenderId: "749439432233",
//   appId: "1:749439432233:web:861541de33ed615b9fce38",
// };

// // Inicialización de Firebase
// firebase.initializeApp(firebaseConfig);
// const baseDatos = firebase.firestore();
// const storage = firebase.storage();

// // Manejo del Canvas para la firma digital
// const canvas = document.getElementById("signatureCanvas");
// const ctx = canvas.getContext("2d");
// let drawing = false;

// ctx.fillStyle = "white";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// canvas.addEventListener("mousedown", startDrawing);
// canvas.addEventListener("mouseup", stopDrawing);
// canvas.addEventListener("mousemove", draw);
// canvas.addEventListener("touchstart", startDrawing);
// canvas.addEventListener("touchend", stopDrawing);
// canvas.addEventListener("touchmove", draw);

// document.getElementById("clearButton").addEventListener("click", clearCanvas);
// document.getElementById("saveButton").addEventListener("click", saveSignature);

// function startDrawing(event) {
//   drawing = true;
//   ctx.beginPath();
//   ctx.moveTo(getX(event), getY(event));
//   event.preventDefault();
// }

// function stopDrawing(event) {
//   drawing = false;
// }

// function draw(event) {
//   if (!drawing) return;
//   ctx.lineTo(getX(event), getY(event));
//   ctx.stroke();
//   event.preventDefault();
// }

// function clearCanvas() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
// }

// function saveSignature() {
//   const dataURL = canvas.toDataURL("image/png");
//   const file = dataURLtoBlob(dataURL);
//   const storageRef = storage.ref("signatures/" + new Date().getTime() + ".png");

//   storageRef.put(file).then(function (snapshot) {
//     snapshot.ref.getDownloadURL().then(function (downloadURL) {
//       baseDatos
//         .collection("signatures")
//         .add({
//           url: downloadURL,
//           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//         })
//         .then(function () {
//           alert("Firma guardada con éxito.");
//         })
//         .catch(function (error) {
//           console.error("Error al guardar la firma: ", error);
//         });
//     });
//   });
// }

// function getX(event) {
//   const rect = canvas.getBoundingClientRect();
//   if (event.touches && event.touches.length > 0) {
//     return event.touches[0].clientX - rect.left;
//   } else {
//     return event.clientX - rect.left;
//   }
// }

// function getY(event) {
//   const rect = canvas.getBoundingClientRect();
//   if (event.touches && event.touches.length > 0) {
//     return event.touches[0].clientY - rect.top;
//   } else {
//     return event.clientY - rect.top;
//   }
// }

// function dataURLtoBlob(dataURL) {
//   const parts = dataURL.split(";base64,");
//   const contentType = parts[0].split(":")[1];
//   const raw = window.atob(parts[1]);
//   const rawLength = raw.length;
//   const uInt8Array = new Uint8Array(rawLength);

//   for (let i = 0; i < rawLength; ++i) {
//     uInt8Array[i] = raw.charCodeAt(i);
//   }

//   return new Blob([uInt8Array], { type: contentType });
// }
