//boton de alerta//
// const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement("div");
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     "</div>",
//   ].join("");

//   alertPlaceholder.append(wrapper);
// };

//Ejercicio leiton

// const alertTrigger = document.getElementById("emergencia");
// alertTrigger.addEventListener("click", function () {
//   let ejemplo = document.getElementById("ejemplo1").value;
//   let ejemplo2 = document.getElementById("ejemplochek").checked;
//   let ejemplo3 = document.getElementById("ejemplochek2");
//   console.log(ejemplo);
//   console.log(ejemplo2);
//   console.log(ejemplo3);
// });

// Inicio captar datos pagina de registro

// const alertTrigger = document.getElementById("iniciar-sesion-registro");
// alertTrigger.addEventListener("click", function () {
//   let correoElectronicoRegistro = document.getElementById(
//     "correo-electronico-registro"
//   ).value;
//   let usuarioRegistroCheck = document.getElementById(
//     "usuario-registro-Check"
//   ).checked;
//   let claveRegistro = document.getElementById("clave-registro-inicio").value;
//   console.log(correoElectronicoRegistro);
//   console.log(usuarioRegistroCheck);
//   console.log(claveRegistro);
// });

//Inicio captar datos pagina de usuario autorizado

// const alertTrigger = document.getElementById("iniciar-sesion-autorizado");
// alertTrigger.addEventListener("click", function (event) {
//   event.preventDefault();
//   let correoElectronicoAutorizado = document.getElementById(
//     "correo-electronico-autorizado"
//   ).value;
//   let usuarioAutorizadoCheck = document.getElementById(
//     "usuario-autorizado-Check"
//   ).checked;
//   let claveAutorizado = document.getElementById(
//     "clave-autorizado-inicio"
//   ).value;
//   console.log(correoElectronicoAutorizado);
//   console.log(usuarioAutorizadoCheck);
//   console.log(claveAutorizado);
// });

//Inicio captar datos desde pagina de registrarse

// const alertTrigger = document.getElementById("iniciar-sesion-pagina-registro");
// alertTrigger.addEventListener("click", function () {
//   let nombrePaginaRegistro = document.getElementById(
//     "nombre-pagina-registro"
//   ).value;
//   //let usuarioAutorizadoCheck = document.getElementById(
//   //"usuario-autorizado-Check"
//   //).checked;
//   let apellidoPaginaRegistro = document.getElementById(
//     "apellido-pagina-registro"
//   ).value;
//   let opcionDocumento = document.getElementById("opcion-documento").value;
//   // // let cedula = document.getElementById("cedula").value;
//   // // let cedulaDeExtranjeria = document.getElementById(
//   // //   "cedula-de-extranjeria"
//   // // ).value;
//   // // let permisoPermanencia = document.getElementById("permiso-permanencia").value;
//   let numeroDeDocumento = document.getElementById(
//     "numero-de-identificacion"
//   ).value;
//   let cargo = document.getElementById("cargo").value;
//   let correoRegistro = document.getElementById("correo-registro").value;
//   // // let cargarArchivoImagen = document.getElementById(
//   // //   "cargar-archivo-imagen"
//   // // ).value;
//   let claveDeRegistro = document.getElementById("clave-de-registro").value;
//   let confirmacionClaveDeRegistro = document.getElementById(
//     "confirmacion-clave-de-registro"
//   ).value;

//   console.log(nombrePaginaRegistro);
//   //console.log(usuarioAutorizadoCheck);
//   console.log(apellidoPaginaRegistro);
//   // console.log(cedula);
//   // console.log(cedulaDeExtranjeria);
//   // console.log(permisoPermanencia);
//   console.log(opcionDocumento);
//   console.log(numeroDeDocumento);
//   console.log(cargo);
//   console.log(correoRegistro);
//   //   // console.log(cargarArchivoImagen);
//   console.log(claveDeRegistro);
//   console.log(confirmacionClaveDeRegistro);
// });

// Captura de datos padina SST Trabajo en alturas Trabajador

// const trabajadorDatos = document.getElementById("enviar-inf-trabajador");
// trabajadorDatos.addEventListener("click", function () {
//   let nombrePT = document.getElementById("nombre-pt").value;

//   let apellidoPT = document.getElementById("apellido-pt").value;

//   let seleccionDocumentoTrabajador = document.getElementById(
//     "selecion-documento-trabajador"
//   ).value;

//   let numeroDocumentoTrabajadorPT = document.getElementById(
//     "numero-documento-trabajador-pt"
//   ).value;
//   let cargoPT = document.getElementById("cargo-pt").value;

//   let numeroCelularTrabajador = document.getElementById(
//     "numero-de-celular-trabajador"
//   ).value;

//   let contactoEmergencia = document.getElementById("contacto-emergencia").value;
//   let numeroCelularEmergencia = document.getElementById(
//     "numero-celular-emergencia"
//   ).value;
//   let planillaSeguridadSocial = document.getElementById(
//     "planilla-seguridad-social"
//   ).value;
//   let fechaVencimientoPlanilla = document.getElementById(
//     "fecha-vencimiento-planilla"
//   ).value;
//   let cursoAlturas = document.getElementById("curso-alturas").value;
//   let fechaVencimientoCursoAlturas = document.getElementById(
//     "fecha-vencimiento-curso-alturas"
//   ).value;
//   let examenMedico = document.getElementById("examen-medico").value;
//   let fechaVencimientoExamenMedico = document.getElementById(
//     "fecha-vencimiento-examen-medico"
//   ).value;

//   console.log(nombrePT);
//   console.log(apellidoPT);
//   console.log(seleccionDocumentoTrabajador);
//   console.log(numeroDocumentoTrabajadorPT);
//   console.log(cargoPT);
//   console.log(numeroCelularTrabajador);
//   console.log(contactoEmergencia);
//   console.log(numeroCelularEmergencia);
//   console.log(planillaSeguridadSocial);
//   console.log(fechaVencimientoPlanilla);
//   console.log(cursoAlturas);
//   console.log(fechaVencimientoCursoAlturas);
//   console.log(examenMedico);
//   console.log(fechaVencimientoExamenMedico);
// });

//Codigo de ingreso en java script contraseña basica.

// function validarContraseñas() {
//   // Obtener las contraseñas ingresadas por el usuario
//   var contraseña1 = document.getElementById("contraseña1").value;
//   var contraseña2 = document.getElementById("contraseña2").value;

//   // Comparar las contraseñas
//   if (contraseña1 === contraseña2) {
//     // Contraseñas coinciden, permitir el ingreso
//     alert("Contraseñas coinciden. ¡Bienvenido!");
//   } else {
//     // Contraseñas no coinciden, mostrar alerta de error
//     alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
//   }
// }

// contraseña con caracterrs especiales

// function validarContraseñas() {
//   var contraseña1 = document.getElementById("contraseña1").value;
//   var contraseña2 = document.getElementById("contraseña2").value;

//   // Expresiones regulares para verificar las condiciones
//   var tieneMayuscula = /[A-Z]/.test(contraseña1);
//   var tieneNumero = /\d/.test(contraseña1);
//   var longitudValida = contraseña1.length >= 8;

//   // Verificar las condiciones
//   if (
//     contraseña1 === contraseña2 &&
//     tieneMayuscula &&
//     tieneNumero &&
//     longitudValida
//   ) {
//     alert("Contraseñas coinciden. ¡Bienvenido!");
//   } else {
//     var mensajeError =
//       "Las contraseñas no coinciden o no cumplen con los requisitos:\n";
//     if (contraseña1 !== contraseña2) {
//       mensajeError += "- Las contraseñas no coinciden.\n";
//     }
//     if (!tieneMayuscula) {
//       mensajeError += "- Debe incluir al menos una letra mayúscula.\n";
//     }
//     if (!tieneNumero) {
//       mensajeError += "- Debe incluir al menos un número.\n";
//     }
//     if (!longitudValida) {
//       mensajeError += "- Debe tener al menos 8 caracteres.\n";
//     }
//     alert(mensajeError);
//   }
// }
