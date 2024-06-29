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

// Obtén el correo del usuario registrado desde localStorage
const correoUsuarioRegistrado = localStorage.getItem("correoUsuarioRegistrado");

if (correoUsuarioRegistrado) {
  baseDatos
    .collection("usuario")
    .where(
      "paginaRegistroingreso.correoRegistro",
      "==",
      correoUsuarioRegistrado
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

          document.getElementById("nombreIngreso").textContent =
            usuario.nombrePaginaRegistro;
          document.getElementById("apellidoIngreso").textContent =
            usuario.apellidoPaginaRegistro;
          document.getElementById("numeroDocumento-ingreso").textContent =
            usuario.numeroIdentificacion;
          document.getElementById("tipoDocumento-ingreso").textContent =
            usuario.opcionDocumento;
          document.getElementById("celularIngreso").textContent =
            usuario.numeroTelefonico;
          document.getElementById("correo-ingreso").textContent =
            usuario.correoRegistro;

          // Verificar si el usuario es autorizador o registrador y actualizar el mensaje correspondiente
          const contenedorUsuario = document.getElementById(
            "usuarioIngresado-a-r"
          );
          const mensajeUsuario = document.createElement("h3");
          if (usuario.cargo === "usuario-autorizador") {
            mensajeUsuario.textContent = "Ingreso de Usuario Autorizador";
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
