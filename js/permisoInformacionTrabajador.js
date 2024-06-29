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

const trabajadorDatos = document.getElementById("enviar-inf-trabajador");
trabajadorDatos.addEventListener("click", function () {
  const impresionTrabajadorDatos = {};

  impresionTrabajadorDatos.nombrePT =
    document.getElementById("nombre-pt").value;

  impresionTrabajadorDatos.apellidoPT =
    document.getElementById("apellido-pt").value;

  impresionTrabajadorDatos.seleccionDocumentoTrabajador =
    document.getElementById("seleccion-documento-trabajador").value;

  impresionTrabajadorDatos.numeroDocumentoTrabajadorPT =
    document.getElementById("numero-documento-trabajador-pt").value;
  impresionTrabajadorDatos.cargoPT = document.getElementById("cargo-pt").value;

  impresionTrabajadorDatos.numeroCelularTrabajador = document.getElementById(
    "numero-de-celular-trabajador"
  ).value;

  impresionTrabajadorDatos.correoElectronicoTA = document.getElementById(
    "correo-Electronico-TA"
  ).value;

  impresionTrabajadorDatos.contactoEmergencia = document.getElementById(
    "contacto-emergencia"
  ).value;
  impresionTrabajadorDatos.numeroCelularEmergencia = document.getElementById(
    "numero-celular-emergencia"
  ).value;
  impresionTrabajadorDatos.planillaSeguridadSocial = document.getElementById(
    "planilla-seguridad-social"
  ).value;
  impresionTrabajadorDatos.fechaVencimientoPlanilla = document.getElementById(
    "fecha-vencimiento-planilla"
  ).value;
  impresionTrabajadorDatos.cursoAlturas =
    document.getElementById("curso-alturas").value;
  impresionTrabajadorDatos.fechaVencimientoCursoAlturas =
    document.getElementById("fecha-vencimiento-curso-alturas").value;
  impresionTrabajadorDatos.examenMedico =
    document.getElementById("examen-medico").value;
  impresionTrabajadorDatos.fechaVencimientoExamenMedico =
    document.getElementById("fecha-vencimiento-examen-medico").value;
  impresionTrabajadorDatos.nombreArl =
    document.getElementById("nombre-arl").value;
  impresionTrabajadorDatos.nombreEps =
    document.getElementById("nombre-eps").value;
  impresionTrabajadorDatos.nombreFondoPensiones = document.getElementById(
    "nombre-fondo-pensiones"
  ).value;
  impresionTrabajadorDatos.registroFotograficoTrabajador =
    document.getElementById("registro-fotografico-trabajador").value;
  impresionTrabajadorDatos.firmaDigitalTrabajador = document.getElementById(
    "archivoFirmaDigitalSst"
  ).value;

  console.log(impresionTrabajadorDatos);

  baseDatos
    .collection("trabajagorAutorizado")
    .add({
      impresionTrabajadorDatos,
    })
    .then((docRef) => {
      alert("Datos Guardados correctamente");
      window.location.href = "../html/ingresoRegistro.html"; // Redirigir después de guardar
    })
    .catch((error) => {
      alert("Error");
      console.error(error);
    });
});
