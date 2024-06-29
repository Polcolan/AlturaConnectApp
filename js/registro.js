// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: "AIzaSyCFOE9HABPO98q4CalVCisoVM7TIVo2czI",
  authDomain: "bd-appconnet.firebaseapp.com",
  projectId: "bd-appconnet",
  storageBucket: "bd-appconnet.appspot.com",
  messagingSenderId: "749439432233",
  appId: "1:749439432233:web:861541de33ed615b9fce38",
};

firebase.initializeApp(firebaseConfig);
const baseDatos = firebase.firestore();

// Reference to the registration button
let paginaRegistro = document.getElementById("iniciar-sesion-pagina-registro");

paginaRegistro.addEventListener("click", function (event) {
  event.preventDefault();

  const paginaRegistroingreso = {};

  paginaRegistroingreso.nombrePaginaRegistro = document.getElementById(
    "nombre-pagina-registro"
  ).value;
  paginaRegistroingreso.apellidoPaginaRegistro = document.getElementById(
    "apellido-pagina-registro"
  ).value;
  paginaRegistroingreso.opcionDocumento =
    document.getElementById("opcion-documento").value;
  paginaRegistroingreso.numeroIdentificacion = document.getElementById(
    "numero-de-identificacion"
  ).value;
  paginaRegistroingreso.numeroTelefonico =
    document.getElementById("numero-telefonico").value;
  paginaRegistroingreso.cargo = document.getElementById("cargo").value;
  paginaRegistroingreso.correoRegistro =
    document.getElementById("correo-registro").value;
  paginaRegistroingreso.claveRegistro =
    document.getElementById("clave-de-registro").value;
  paginaRegistroingreso.confirmacionClaveRegistro = document.getElementById(
    "confirmacion-clave-de-registro"
  ).value;

  if (
    validarContraseñas(
      paginaRegistroingreso.claveRegistro,
      paginaRegistroingreso.confirmacionClaveRegistro
    )
  ) {
    baseDatos
      .collection("usuario")
      .add({
        paginaRegistroingreso,
      })
      .then((docRef) => {
        alert("Datos Guardados correctamente");
        window.location.href = "/index.html"; // Redirect after successful registration
      })
      .catch((error) => {
        alert("Error al guardar los datos");
        console.error("Error adding document: ", error);
      });
  }
});

function validarContraseñas(clave, confirmacionClave) {
  let validacion = true;
  const tieneMayuscula = /[A-Z]/.test(clave);
  const tieneNumero = /\d/.test(clave);
  const longitudValida = clave.length >= 8;

  if (
    clave !== confirmacionClave ||
    !tieneMayuscula ||
    !tieneNumero ||
    !longitudValida
  ) {
    validacion = false;
    let mensajeError =
      "Las contraseñas no coinciden o no cumplen con los requisitos:\n";
    if (clave !== confirmacionClave) {
      mensajeError += "- Las contraseñas no coinciden.\n";
    }
    if (!tieneMayuscula) {
      mensajeError += "- Debe incluir al menos una letra mayúscula.\n";
    }
    if (!tieneNumero) {
      mensajeError += "- Debe incluir al menos un número.\n";
    }
    if (!longitudValida) {
      mensajeError += "- Debe tener al menos 8 caracteres.\n";
    }
    alert(mensajeError);
  }

  return validacion;
}
