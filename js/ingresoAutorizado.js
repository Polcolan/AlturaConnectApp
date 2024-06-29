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

let usuario = {
  nombre: "........ ",
  apellido: ".......",
  correo: ".......",
  celular: "........",
  opcionDocumento: ".............",
  numeroIdentificacion: "..........",
};

// Obtén el correo del usuario autorizado desde localStorage
const correoUsuarioAutorizado = localStorage.getItem("correoUsuarioAutorizado");

if (correoUsuarioAutorizado) {
  baseDatos
    .collection("usuario")
    .where(
      "paginaRegistroingreso.correoRegistro",
      "==",
      correoUsuarioAutorizado
    )
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.error(
          "No se encontró ningún usuario con el correo proporcionado."
        );
      } else {
        querySnapshot.forEach((doc) => {
          usuario = doc.data().paginaRegistroingreso;

          document.getElementById("nombre-ingresoA").textContent =
            usuario.nombrePaginaRegistro;
          document.getElementById("apellido-ingresoA").textContent =
            usuario.apellidoPaginaRegistro;
          document.getElementById("numeroDocumento-ingresoA").textContent =
            usuario.numeroIdentificacion;
          document.getElementById("tipoDocumento-ingresoA").textContent =
            usuario.opcionDocumento;
          document.getElementById("numero-celularA").textContent =
            usuario.numeroTelefonico;
          document.getElementById("correo-ingresoA").textContent =
            usuario.correoRegistro;

          const contenedorUsuario = document.getElementById(
            "usuarioIngresado-a-r"
          );
          const mensajeUsuario = document.createElement("h3");
          if (usuario.cargo === "usuario-autorizador") {
            mensajeUsuario.textContent = "Ingreso de Usuario Autorizado";
          } else {
            mensajeUsuario.textContent = "Ingreso de Usuario Registro";
          }
          contenedorUsuario.appendChild(mensajeUsuario);
        });
      }
    })
    .catch((error) => {
      console.error("Error obteniendo los datos del usuario: ", error);
    });
} else {
  console.error("No se encontró el correo del usuario en localStorage.");
}
