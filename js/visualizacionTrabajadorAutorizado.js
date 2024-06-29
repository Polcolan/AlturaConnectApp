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

const urlParams = new URLSearchParams(window.location.search);
const docId = urlParams.get("id");

if (docId) {
  baseDatos
    .collection("trabajagorAutorizado")
    .doc(docId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const usuarioTA = doc.data().impresionTrabajadorDatos;
        document.getElementById("nombreTA").textContent = usuarioTA.nombrePT;
        document.getElementById("apellidoTA").textContent =
          usuarioTA.apellidoPT;
        document.getElementById("tipoDocumentoTA").textContent =
          usuarioTA.seleccionDocumentoTrabajador;
        document.getElementById("numeroDocumentoTA").textContent =
          usuarioTA.numeroDocumentoTrabajadorPT;
        document.getElementById("CargoTA").textContent = usuarioTA.cargoPT;
        document.getElementById("celularTA").textContent =
          usuarioTA.numeroCelularTrabajador;
        document.getElementById("correoElectronicoTA").textContent =
          usuarioTA.correoElectronicoTA;
        document.getElementById("conEmeTA").textContent =
          usuarioTA.contactoEmergencia;
        document.getElementById("celInfEmeTA").textContent =
          usuarioTA.numeroCelularEmergencia;
        document.getElementById("planillaTA").href =
          usuarioTA.planillaSeguridadSocial;
        document.getElementById("venPlanillaTA").textContent =
          usuarioTA.fechaVencimientoPlanilla;
        document.getElementById("curAlturasTA").href = usuarioTA.cursoAlturas;
        document.getElementById("fechaVencimientoCursoAlturas").textContent =
          usuarioTA.fechaVencimientoCursoAlturas;
        document.getElementById("examenMedico").href = usuarioTA.examenMedico;
        document.getElementById("fechaVencimientoExamenMedico").textContent =
          usuarioTA.fechaVencimientoExamenMedico;
        document.getElementById("nombreArl").textContent = usuarioTA.nombreArl;
        document.getElementById("nombreEps").textContent = usuarioTA.nombreEps;
        document.getElementById("registroFotograficoTrabajador").href =
          usuarioTA.registroFotograficoTrabajador;
        document.getElementById("nombreFondoPensiones").textContent =
          usuarioTA.nombreFondoPensiones;
        document.getElementById("firmaDigitalTrabajador").href =
          usuarioTA.firmaDigitalTrabajador;
      } else {
        console.error("No such document!");
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });
}
