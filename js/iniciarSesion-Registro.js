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

function validarContrasenas(
  correoIngreso,
  contraseñaIngreso,
  correoBD,
  contraseñaBD
) {
  return correoIngreso === correoBD && contraseñaIngreso === contraseñaBD;
}

document
  .getElementById("iniciar-sesion-registro")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const correo = document.getElementById("correo-electronico-registro").value;
    const clave = document.getElementById("clave-registro-inicio").value;
    const esRobot = document.getElementById("usuario-registro-Check").checked;

    if (!esRobot) {
      const alertaError = document.getElementById("alertaError");
      alertaError.innerHTML =
        '<h4 class="bg-danger">Debes confirmar que no eres un robot.</h4>';
      return;
    }

    baseDatos
      .collection("usuario")
      .get()
      .then((querySnapshot) => {
        let autorizado = false;

        querySnapshot.forEach((doc) => {
          const data = doc.data().paginaRegistroingreso;
          if (
            data.cargo === "usuario-registrador" &&
            validarContrasenas(
              correo,
              clave,
              data.correoRegistro,
              data.claveRegistro
            )
          ) {
            alert("Contraseñas coinciden. ¡Bienvenido!");
            autorizado = true;
            localStorage.setItem("correoUsuarioRegistrado", correo);
            window.location.href = "../html/ingresoRegistro.html";
          }
          if (
            data.cargo === "usuario-autorizador" &&
            validarContrasenas(
              correo,
              clave,
              data.correoRegistro,
              data.claveRegistro
            )
          ) {
            alert("Usted es un usuario autorizador");
            autorizado = true;
            localStorage.setItem("correoUsuarioRegistrado", correo);
            window.location.href = "../html/iniciar-sesion-autorizador.html";
          }
        });

        if (!autorizado) {
          const alertaError = document.getElementById("alertaError");
          alertaError.innerHTML =
            '<h4 class="bg-danger">Las contraseñas no coinciden. Por favor, inténtalo de nuevo.</h4>';
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos de usuario: ", error);
      });
  });
