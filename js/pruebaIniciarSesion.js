const iniciarSesionRegistro = document.getElementById(
  "iniciar-sesion-registro"
);
iniciarSesionRegistro.addEventListener("click", function (event) {
  event.preventDefault();

  const usuarioRegistro = {};

  usuarioRegistro.correoElectronicoRegistro = document.getElementById(
    "correo-electronico-registro"
  ).value;
  usuarioRegistro.usuarioRegistroChecked = document.getElementById(
    "usuario-registro-Check"
  ).checked;
  usuarioRegistro.claveRegistro = document.getElementById(
    "clave-registro-inicio"
  ).value;

  console.log(usuarioRegistro);
  //iniciar sesion registro

  function validarContrasenasIngresoRegistro() {
    var clavePruebaRegistro = "R123";
    var correoPruebaRegistro = "r@gmail.com";

    if (
      clavePruebaRegistro === usuarioRegistro.claveRegistro &&
      correoPruebaRegistro === usuarioRegistro.correoElectronicoRegistro &&
      usuarioRegistro.usuarioRegistroChecked === true
    ) {
      alert("Contraseñas coinciden. ¡Bienvenido!");
      window.location.href = "../html/ingresoRegistro.html";
    } else {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
    }
  }
  validarContrasenasIngresoRegistro();
});
