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

// Llenar selectores con datos de Firebase
const trabajadorSelect = document.getElementById("seleccionTrabajadorAlturas");
const autorizadorSelect = document.getElementById(
  "seleccionAutorizadorAlturas"
);

function llenarSelectores() {
  // Llenar trabajadorSelect
  baseDatos
    .collection("trabajadorAutorizado")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data().impresionTrabajadorDatos;
        const option = document.createElement("option");
        option.value = `${data.nombrePT} ${data.apellidoPT}`;
        option.textContent = `${data.nombrePT} ${data.apellidoPT}`;
        trabajadorSelect.appendChild(option);
      });
    });

  // Llenar autorizadorSelect
  baseDatos
    .collection("usuario")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data().paginaRegistroingreso;
        if (data.cargo === "usuario-autorizador") {
          const option = document.createElement("option");
          option.value = `${data.nombrePaginaRegistro} ${data.apellidoPaginaRegistro}`;
          option.textContent = `${data.nombrePaginaRegistro} ${data.apellidoPaginaRegistro}`;
          autorizadorSelect.appendChild(option);
        }
      });
    });
}

document.addEventListener("DOMContentLoaded", llenarSelectores);

const formularioDatosTrabajoAltura = document.getElementById(
  "enviar-datos-trabajo-alturas"
);
formularioDatosTrabajoAltura.addEventListener("click", function () {
  const impresionFormularioTrabajoAltura = {};

  impresionFormularioTrabajoAltura.ciudadTrabajoAltura =
    document.getElementById("ciudadTrabajoAltura").value;
  impresionFormularioTrabajoAltura.nombreObra =
    document.getElementById("nombreObraTrAl").value;
  impresionFormularioTrabajoAltura.direccionTrabajoAltura =
    document.getElementById("direccionTrabajoAltura").value;
  impresionFormularioTrabajoAltura.fechaInicioActividad =
    document.getElementById("fechaInicioActividad").value;
  impresionFormularioTrabajoAltura.fechaCulminacionActividad =
    document.getElementById("fechaCulminacionActividad").value;
  impresionFormularioTrabajoAltura.horaInicioActividad =
    document.getElementById("horaInicioActividad").value;
  impresionFormularioTrabajoAltura.horaCulminacionActividad =
    document.getElementById("horaCulminacionActividad").value;
  impresionFormularioTrabajoAltura.alturaActividad =
    document.getElementById("alturaActividad").value;
  impresionFormularioTrabajoAltura.actividadRutinaria =
    document.getElementById("actividadRutinaria").checked;
  impresionFormularioTrabajoAltura.descripcionProcedimientoTarea =
    document.getElementById("descripcionProcedimientoTarea").value;

  // 2 Acordeon
  impresionFormularioTrabajoAltura.cascoBurbuquejoAt =
    document.getElementById("cascoBurbuquejoAt").checked;
  impresionFormularioTrabajoAltura.gafasSeguridadAt =
    document.getElementById("gafasSeguridadAt").checked;
  impresionFormularioTrabajoAltura.protectorRespiratorioAt =
    document.getElementById("protectorRespiratorioAt").checked;
  impresionFormularioTrabajoAltura.protectoresAuditivosAt =
    document.getElementById("protectoresAuditivosAt").checked;
  impresionFormularioTrabajoAltura.guantesNitriloAt =
    document.getElementById("guantesNitriloAt").checked;
  impresionFormularioTrabajoAltura.guantesVaquetaAt =
    document.getElementById("guantesVaquetaAt").checked;
  impresionFormularioTrabajoAltura.guantesDielectricosAt =
    document.getElementById("guantesDielectricosAt").checked;
  impresionFormularioTrabajoAltura.botaSeguridadAt =
    document.getElementById("botaSeguridadAt").checked;
  impresionFormularioTrabajoAltura.trajeOverolAt =
    document.getElementById("trajeOverolAt").checked;
  impresionFormularioTrabajoAltura.arnes4ArgollasAt =
    document.getElementById("arnes4ArgollasAt").checked;
  impresionFormularioTrabajoAltura.arnes5ArgollasAt =
    document.getElementById("arnes5ArgollasAt").checked;

  // 3 Acordeon actividades criticas
  impresionFormularioTrabajoAltura.trabajoAlturasAt =
    document.getElementById("trabajoAlturasAt").checked;
  impresionFormularioTrabajoAltura.espaciosConfinadosAt =
    document.getElementById("espaciosConfinadosAt").checked;
  impresionFormularioTrabajoAltura.energiasPeligrosasAt =
    document.getElementById("energiasPeligrosasAt").checked;

  // Acordeon 4 Identificacion de Peligros
  impresionFormularioTrabajoAltura.presenciaVirusAt =
    document.getElementById("presenciaVirusAt").checked;
  impresionFormularioTrabajoAltura.presenciaAnimalesAt =
    document.getElementById("presenciaAnimalesAt").checked;
  impresionFormularioTrabajoAltura.iluminacionDeficienteAt =
    document.getElementById("iluminacionDeficienteAt").checked;
  impresionFormularioTrabajoAltura.exposicionRuidoAt =
    document.getElementById("exposicionRuidoAt").checked;
  impresionFormularioTrabajoAltura.altasTemperaturasAt =
    document.getElementById("altasTemperaturasAt").checked;
  impresionFormularioTrabajoAltura.bajasTemperaturasAt =
    document.getElementById("bajasTemperaturasAt").checked;
  impresionFormularioTrabajoAltura.caidaObjetosAt =
    document.getElementById("caidaObjetosAt").checked;
  impresionFormularioTrabajoAltura.caidaMismoNivelAt =
    document.getElementById("caidaMismoNivelAt").checked;
  impresionFormularioTrabajoAltura.caidaDiferenteNivelAts =
    document.getElementById("caidaDiferenteNivelAt").checked;
  impresionFormularioTrabajoAltura.colapsoEstructuralAt =
    document.getElementById("colapsoEstructuralAt").checked;
  impresionFormularioTrabajoAltura.malOrdenAseoAt =
    document.getElementById("malOrdenAseoAt").checked;
  impresionFormularioTrabajoAltura.superficieIrregularAt =
    document.getElementById("superficieIrregularAt").checked;
  impresionFormularioTrabajoAltura.cercaniaRedesElectricasAt =
    document.getElementById("cercaniaRedesElectricasAt").checked;
  impresionFormularioTrabajoAltura.arcoElectricoAt =
    document.getElementById("arcoElectricoAt").checked;
  impresionFormularioTrabajoAltura.contactoPartesMovimientoAt =
    document.getElementById("contactoPartesMovimientoAt").checked;
  impresionFormularioTrabajoAltura.proyeccionParticulasAt =
    document.getElementById("proyeccionParticulasAt").checked;
  impresionFormularioTrabajoAltura.contactoSustanciasQuimicasAt =
    document.getElementById("contactoSustanciasQuimicasAt").checked;
  impresionFormularioTrabajoAltura.PresenciaGasesVaporesAt =
    document.getElementById("PresenciaGasesVaporesAt").checked;
  impresionFormularioTrabajoAltura.exposicionPolvoAt =
    document.getElementById("exposicionPolvoAt").checked;
  impresionFormularioTrabajoAltura.manipulacionManualCargasAt =
    document.getElementById("manipulacionManualCargasAt").checked;
  impresionFormularioTrabajoAltura.posturasInadecuadasAt =
    document.getElementById("posturasInadecuadasAt").checked;
  impresionFormularioTrabajoAltura.movimientosRepetitivosAt =
    document.getElementById("movimientosRepetitivosAt").checked;
  impresionFormularioTrabajoAltura.exposicionLluviaAt =
    document.getElementById("exposicionLluviaAt").checked;
  impresionFormularioTrabajoAltura.exposicionVientosFuertesAt =
    document.getElementById("exposicionVientosFuertesAt").checked;
  impresionFormularioTrabajoAltura.exposicionDerrumbesDesliamientosAt =
    document.getElementById("exposicionDerrumbesDesliamientosAt").checked;
  impresionFormularioTrabajoAltura.presenciaFuegoAt =
    document.getElementById("presenciaFuegoAt").checked;
  impresionFormularioTrabajoAltura.derramesFugasAt =
    document.getElementById("derramesFugasAt").checked;
  impresionFormularioTrabajoAltura.riesgoExplosionAt =
    document.getElementById("riesgoExplosionAt").checked;

  // acordeon 5 Sistemas de Restriccion y Posicionamiento
  impresionFormularioTrabajoAltura.lineaVidaVerticalFijaAt =
    document.getElementById("lineaVidaVerticalFijaAt").checked;
  impresionFormularioTrabajoAltura.lineaVidaVerticalPortatilAt =
    document.getElementById("lineaVidaVerticalPortatilAt").checked;
  impresionFormularioTrabajoAltura.lineaVidaHoriontalHorizontalAt =
    document.getElementById("lineaVidaHoriontalHorizontalAt").checked;
  impresionFormularioTrabajoAltura.lineaVidaHoriontalFijaAt =
    document.getElementById("lineaVidaHoriontalFijaAt").checked;
  impresionFormularioTrabajoAltura.anclajePortatilAt =
    document.getElementById("anclajePortatilAt").checked;
  impresionFormularioTrabajoAltura.cintaAnclajeAt =
    document.getElementById("cintaAnclajeAt").checked;
  impresionFormularioTrabajoAltura.conectorTransitoVerticalAt =
    document.getElementById("conectorTransitoVerticalAt").checked;
  impresionFormularioTrabajoAltura.eslingaRestriccionAt =
    document.getElementById("eslingaRestriccionAt").checked;
  impresionFormularioTrabajoAltura.eslingaPosicionamientoAt =
    document.getElementById("eslingaPosicionamientoAt").checked;
  impresionFormularioTrabajoAltura.eslingaDetencionCaidasAt =
    document.getElementById("eslingaDetencionCaidasAt").checked;
  impresionFormularioTrabajoAltura.eslingaDetencionCaidasSencillaAt =
    document.getElementById("eslingaDetencionCaidasSencillaAt").checked;
  impresionFormularioTrabajoAltura.eslingaDetencionCaidasDobleAt =
    document.getElementById("eslingaDetencionCaidasDobleAt").checked;

  // acordeon 6 Medidas de Prevencion Contra Caidas
  impresionFormularioTrabajoAltura.barandasAt =
    document.getElementById("barandasAt").checked;
  impresionFormularioTrabajoAltura.señaliacionAt =
    document.getElementById("señaliacionAt").checked;
  impresionFormularioTrabajoAltura.lineaAdvertenciaAt =
    document.getElementById("lineaAdvertenciaAt").checked;
  impresionFormularioTrabajoAltura.controlAccesoAt =
    document.getElementById("controlAccesoAt").checked;

  // acordeon 7 Aprobacion y validacion permiso
  impresionFormularioTrabajoAltura.registroFotograficoTrabajoAlturas =
    document.getElementById("registroFotograficoTrabajoAlturas").value;
  impresionFormularioTrabajoAltura.seleccionTrabajadorAlturas =
    document.getElementById("seleccionTrabajadorAlturas").value;
  impresionFormularioTrabajoAltura.seleccionAutorizadorAlturas =
    document.getElementById("seleccionAutorizadorAlturas").value;

  console.log(impresionFormularioTrabajoAltura);

  baseDatos
    .collection("formulaTrabajoAlturas")
    .add({ impresionFormularioTrabajoAltura })
    .then((docRef) => {
      alert("Datos Guardados correctamente");
      window.location.href = "../html/ingresoRegistro.html"; // Redirigir después de guardar los datos
    })
    .catch((error) => {
      alert("Error");
      console.error(error);
    });
});

// Manejo del Canvas para la firma digital
const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchend", stopDrawing);
canvas.addEventListener("touchmove", draw);

document.getElementById("clearButton").addEventListener("click", clearCanvas);
document.getElementById("saveButton").addEventListener("click", saveSignature);

function startDrawing(event) {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(getX(event), getY(event));
  event.preventDefault();
}

function stopDrawing(event) {
  drawing = false;
}

function draw(event) {
  if (!drawing) return;
  ctx.lineTo(getX(event), getY(event));
  ctx.stroke();
  event.preventDefault();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveSignature() {
  const dataURL = canvas.toDataURL("image/png");
  const file = dataURLtoBlob(dataURL);
  const storageRef = firebase
    .storage()
    .ref("signatures/" + new Date().getTime() + ".png");

  storageRef.put(file).then(function (snapshot) {
    snapshot.ref.getDownloadURL().then(function (downloadURL) {
      baseDatos
        .collection("signatures")
        .add({
          url: downloadURL,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          alert("Firma guardada con éxito.");
        })
        .catch(function (error) {
          console.error("Error al guardar la firma: ", error);
        });
    });
  });
}

function getX(event) {
  const rect = canvas.getBoundingClientRect();
  if (event.touches && event.touches.length > 0) {
    return event.touches[0].clientX - rect.left;
  } else {
    return event.clientX - rect.left;
  }
}

function getY(event) {
  const rect = canvas.getBoundingClientRect();
  if (event.touches && event.touches.length > 0) {
    return event.touches[0].clientY - rect.top;
  } else {
    return event.clientY - rect.top;
  }
}

function dataURLtoBlob(dataURL) {
  const parts = dataURL.split(";base64,");
  const contentType = parts[0].split(":")[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}
