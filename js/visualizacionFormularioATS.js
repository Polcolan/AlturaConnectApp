// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCFOE9HABPO98q4CalVCisoVM7TIVo2czI",
  authDomain: "bd-appconnet.firebaseapp.com",
  projectId: "bd-appconnet",
  storageBucket: "bd-appconnet.appspot.com",
  messagingSenderId: "749439432233",
  appId: "1:749439432233:web:861541de33ed615b9fce38",
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const baseDatos = firebase.firestore();

// Obtener el parámetro 'id' de la URL
const urlParams = new URLSearchParams(window.location.search);
const docId = urlParams.get("id");

if (docId) {
  baseDatos
    .collection("permisoATS")
    .doc(docId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const visualizacionFormularioAts = doc.data().impresionFormularioAts;
        console.log(visualizacionFormularioAts);

        document.getElementById("ciudadTrabajoAltura").textContent =
          visualizacionFormularioAts.ciudadTrabajoAltura;
        document.getElementById("nombreObraTrAl").textContent =
          visualizacionFormularioAts.nombreObra;
        document.getElementById("direccionTrabajoAltura").textContent =
          visualizacionFormularioAts.direccionTrabajoAltura;
        document.getElementById("fechaInicioActividad").textContent =
          visualizacionFormularioAts.fechaInicioActividad;
        document.getElementById("fechaCulminacionActividad").textContent =
          visualizacionFormularioAts.fechaCulminacionActividad;
        document.getElementById("desProTarAts").textContent =
          visualizacionFormularioAts.descripcionProcedimientoTarea;
        document.getElementById("tipoHerranientaAts").textContent =
          visualizacionFormularioAts.tipoHerramienta;
        document.getElementById("descripcionHerramientaAts").textContent =
          visualizacionFormularioAts.descripcionHerramienta;
        document.getElementById("escaleraSencillaAts").textContent =
          visualizacionFormularioAts.escSenAts;
        document.getElementById("escDobExtAts").textContent =
          visualizacionFormularioAts.escDobExtAts;
        document.getElementById("escaleraTijeraAts").textContent =
          visualizacionFormularioAts.escaleraTijeraAts;
        document.getElementById("andModAts").textContent =
          visualizacionFormularioAts.andModAts;
        document.getElementById("andColAts").textContent =
          visualizacionFormularioAts.andColAts;
        document.getElementById("elePerAts").textContent =
          visualizacionFormularioAts.elePerAts;
        document.getElementById("otroAts").textContent =
          visualizacionFormularioAts.otroAts;
        document.getElementById("salEmerAts").textContent =
          visualizacionFormularioAts.salEmerAts;
        document.getElementById("ruiTraAts").textContent =
          visualizacionFormularioAts.ruiTraAts;
        document.getElementById("iluminacionAts").textContent =
          visualizacionFormularioAts.iluminacionAts;
        document.getElementById("pelResAts").textContent =
          visualizacionFormularioAts.pelResAts;
        document.getElementById("pasDetActAts").textContent =
          visualizacionFormularioAts.pasDetActAts;
        document.getElementById("pelExiPotAts").textContent =
          visualizacionFormularioAts.pelExiPotAts;
        document.getElementById("conAts").textContent =
          visualizacionFormularioAts.conAts;
        document.getElementById("contReqAts").textContent =
          visualizacionFormularioAts.contReqAts;

        const registroFotograficoAts =
          visualizacionFormularioAts.registroFotograficoAts;
        const registroFotograficoElement = document.getElementById(
          "registroFotograficoAts"
        );
        registroFotograficoElement.href = registroFotograficoAts;
        registroFotograficoElement.textContent = "Ver Foto";

        document.getElementById("seleccionPersonalAts").textContent =
          visualizacionFormularioAts.seleccionPersonalAts;
        document.getElementById("seleccionAutorizadorAts").textContent =
          visualizacionFormularioAts.seleccionAutorizadorAts;
      } else {
        console.error("No such document!");
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });
} else {
  console.error("docId is not defined in the URL");
}
