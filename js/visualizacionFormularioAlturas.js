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
    .collection("formulaTrabajoAlturas")
    .doc(docId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const visualizacionFormularioAlturas =
          doc.data().impresionFormularioTrabajoAltura;

        document.getElementById("ciudadTA").textContent =
          visualizacionFormularioAlturas.ciudadTrabajoAltura;
        document.getElementById("ubicacionObra").textContent =
          visualizacionFormularioAlturas.nombreObra;
        document.getElementById("direccionTrabajoAltura").textContent =
          visualizacionFormularioAlturas.direccionTrabajoAltura;
        document.getElementById("fechaInicioTA").textContent =
          visualizacionFormularioAlturas.fechaInicioActividad;
        document.getElementById("fechaCulminacionTA").textContent =
          visualizacionFormularioAlturas.fechaCulminacionActividad;
        document.getElementById("horaInicioActividad").textContent =
          visualizacionFormularioAlturas.horaInicioActividad;
        document.getElementById("horaCulminacionActividad").textContent =
          visualizacionFormularioAlturas.horaCulminacionActividad;
        document.getElementById("alturaActividad").textContent =
          visualizacionFormularioAlturas.alturaActividad;
        document.getElementById("actividadRutinaria").textContent =
          visualizacionFormularioAlturas.actividadRutinaria;
        document.getElementById("descripcionTarea").textContent =
          visualizacionFormularioAlturas.descripcionProcedimientoTarea;
        document.getElementById("cascoBurbuquejoAt").textContent =
          visualizacionFormularioAlturas.cascoBurbuquejoAt;
        document.getElementById("gafasSeguridadAt").textContent =
          visualizacionFormularioAlturas.gafasSeguridadAt;
        document.getElementById("protectorRespiratorioAt").textContent =
          visualizacionFormularioAlturas.protectorRespiratorioAt;
        document.getElementById("protectoresAuditivosAt").textContent =
          visualizacionFormularioAlturas.protectoresAuditivosAt;
        document.getElementById("guantesNitriloAt").textContent =
          visualizacionFormularioAlturas.guantesNitriloAt;
        document.getElementById("guantesVaquetaAt").textContent =
          visualizacionFormularioAlturas.guantesVaquetaAt;
        document.getElementById("guantesDielectricosAt").textContent =
          visualizacionFormularioAlturas.guantesDielectricosAt;
        document.getElementById("botaSeguridadAt").textContent =
          visualizacionFormularioAlturas.botaSeguridadAt;
        document.getElementById("trajeOverolAt").textContent =
          visualizacionFormularioAlturas.trajeOverolAt;
        document.getElementById("arnes4ArgollasAt").textContent =
          visualizacionFormularioAlturas.arnes4ArgollasAt;
        document.getElementById("arnes5ArgollasAt").textContent =
          visualizacionFormularioAlturas.arnes5ArgollasAt;
        document.getElementById("trabajoAlturasAt").textContent =
          visualizacionFormularioAlturas.trabajoAlturasAt;
        document.getElementById("espaciosConfinadosAt").textContent =
          visualizacionFormularioAlturas.espaciosConfinadosAt;
        document.getElementById("energiasPeligrosasAt").textContent =
          visualizacionFormularioAlturas.energiasPeligrosasAt;
        document.getElementById("presenciaVirusAt").textContent =
          visualizacionFormularioAlturas.presenciaVirusAt;
        document.getElementById("presenciaAnimalesAt").textContent =
          visualizacionFormularioAlturas.presenciaAnimalesAt;
        document.getElementById("iluminacionDeficienteAt").textContent =
          visualizacionFormularioAlturas.iluminacionDeficienteAt;
        document.getElementById("exposicionRuidoAt").textContent =
          visualizacionFormularioAlturas.exposicionRuidoAt;
        document.getElementById("altasTemperaturasAt").textContent =
          visualizacionFormularioAlturas.altasTemperaturasAt;
        document.getElementById("bajasTemperaturasAt").textContent =
          visualizacionFormularioAlturas.bajasTemperaturasAt;
        document.getElementById("caidaObjetosAt").textContent =
          visualizacionFormularioAlturas.caidaObjetosAt;
        document.getElementById("caidaMismoNivelAt").textContent =
          visualizacionFormularioAlturas.caidaMismoNivelAt;
        document.getElementById("caidaDiferenteNivelAt").textContent =
          visualizacionFormularioAlturas.caidaDiferenteNivelAt;
        document.getElementById("colapsoEstructuralAt").textContent =
          visualizacionFormularioAlturas.colapsoEstructuralAt;
        document.getElementById("malOrdenAseoAt").textContent =
          visualizacionFormularioAlturas.malOrdenAseoAt;
        document.getElementById("superficieIrregularAt").textContent =
          visualizacionFormularioAlturas.superficieIrregularAt;
        document.getElementById("cercaniaRedesElectricasAt").textContent =
          visualizacionFormularioAlturas.cercaniaRedesElectricasAt;
        document.getElementById("arcoElectricoAt").textContent =
          visualizacionFormularioAlturas.arcoElectricoAt;
        document.getElementById("contactoPartesMovimientoAt").textContent =
          visualizacionFormularioAlturas.contactoPartesMovimientoAt;
        document.getElementById("proyeccionParticulasAt").textContent =
          visualizacionFormularioAlturas.proyeccionParticulasAt;
        document.getElementById("contactoSustanciasQuimicasAt").textContent =
          visualizacionFormularioAlturas.contactoSustanciasQuimicasAt;
        document.getElementById("PresenciaGasesVaporesAt").textContent =
          visualizacionFormularioAlturas.PresenciaGasesVaporesAt;
        document.getElementById("exposicionPolvoAt").textContent =
          visualizacionFormularioAlturas.exposicionPolvoAt;
        document.getElementById("manipulacionManualCargasAt").textContent =
          visualizacionFormularioAlturas.manipulacionManualCargasAt;
        document.getElementById("posturasInadecuadasAt").textContent =
          visualizacionFormularioAlturas.posturasInadecuadasAt;
        document.getElementById("movimientosRepetitivosAt").textContent =
          visualizacionFormularioAlturas.movimientosRepetitivosAt;
        document.getElementById("exposicionLluviaAt").textContent =
          visualizacionFormularioAlturas.exposicionLluviaAt;
        document.getElementById("exposicionVientosFuertesAt").textContent =
          visualizacionFormularioAlturas.exposicionVientosFuertesAt;
        document.getElementById(
          "exposicionDerrumbesDesliamientosAt"
        ).textContent =
          visualizacionFormularioAlturas.exposicionDerrumbesDesliamientosAt;
        document.getElementById("presenciaFuegoAt").textContent =
          visualizacionFormularioAlturas.presenciaFuegoAt;
        document.getElementById("derramesFugasAt").textContent =
          visualizacionFormularioAlturas.derramesFugasAt;
        document.getElementById("riesgoExplosionAt").textContent =
          visualizacionFormularioAlturas.riesgoExplosionAt;
        document.getElementById("lineaVidaVerticalFijaAt").textContent =
          visualizacionFormularioAlturas.lineaVidaVerticalFijaAt;
        document.getElementById("lineaVidaVerticalPortatilAt").textContent =
          visualizacionFormularioAlturas.lineaVidaVerticalPortatilAt;
        document.getElementById("lineaVidaHoriontalHorizontalAt").textContent =
          visualizacionFormularioAlturas.lineaVidaHoriontalHorizontalAt;
        document.getElementById("lineaVidaHoriontalFijaAt").textContent =
          visualizacionFormularioAlturas.lineaVidaHoriontalFijaAt;
        document.getElementById("anclajePortatilAt").textContent =
          visualizacionFormularioAlturas.anclajePortatilAt;
        document.getElementById("cintaAnclajeAt").textContent =
          visualizacionFormularioAlturas.cintaAnclajeAt;
        document.getElementById("conectorTransitoVerticalAt").textContent =
          visualizacionFormularioAlturas.conectorTransitoVerticalAt;
        document.getElementById("eslingaRestriccionAt").textContent =
          visualizacionFormularioAlturas.eslingaRestriccionAt;
        document.getElementById("eslingaPosicionamientoAt").textContent =
          visualizacionFormularioAlturas.eslingaPosicionamientoAt;
        document.getElementById("eslingaDetencionCaidasAt").textContent =
          visualizacionFormularioAlturas.eslingaDetencionCaidasAt;
        document.getElementById(
          "eslingaDetencionCaidasSencillaAt"
        ).textContent =
          visualizacionFormularioAlturas.eslingaDetencionCaidasSencillaAt;
        document.getElementById("eslingaDetencionCaidasDobleAt").textContent =
          visualizacionFormularioAlturas.eslingaDetencionCaidasDobleAt;
        document.getElementById("barandasAt").textContent =
          visualizacionFormularioAlturas.barandasAt;
        document.getElementById("señaliacionAt").textContent =
          visualizacionFormularioAlturas.señaliacionAt;
        document.getElementById("lineaAdvertenciaAt").textContent =
          visualizacionFormularioAlturas.lineaAdvertenciaAt;
        document.getElementById("controlAccesoAt").textContent =
          visualizacionFormularioAlturas.controlAccesoAt;

        const registroFotograficoAts =
          visualizacionFormularioAlturas.registroFotograficoTrabajoAlturas;
        const registroFotograficoElement = document.getElementById(
          "registroFotrografico"
        );
        registroFotograficoElement.href = registroFotograficoAts;
        registroFotograficoElement.textContent = "Ver Foto";

        document.getElementById("personalRealizaraActividad").textContent =
          visualizacionFormularioAlturas.seleccionTrabajadorAlturas;
        document.getElementById("personalAutorizaraActividad").textContent =
          visualizacionFormularioAlturas.seleccionAutorizadorAlturas;
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
