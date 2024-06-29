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

const contenedor = document.getElementById("pruebaCards");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((qSAlturas) => {
    baseDatos
      .collection("permisoATS")
      .get()
      .then((qSATS) => {
        qSAlturas.forEach((docAlturas) => {
          const datosAlturas =
            docAlturas.data().impresionFormularioTrabajoAltura;
          const idAlturas = docAlturas.id;
          qSATS.forEach((docATS) => {
            const datosATS = docATS.data().impresionFormularioAts;
            const idATS = docATS.id;
            if (
              datosAlturas.nombreObra == datosATS.nombreObra &&
              datosAlturas.fechaInicioActividad ==
                datosATS.fechaInicioActividad &&
              datosAlturas.fechaCulminacionActividad ==
                datosATS.fechaCulminacionActividad
            ) {
              const aprobada = datosAlturas.aprobada || false;
              contenedor.innerHTML += `
                <div class="col">
                  <div class="card h-100">
                    <div class="card-body ${aprobada ? "bg-success" : ""}">
                        <h5 class="card-title" id="nombrePrueba">${
                          datosAlturas.nombreObra
                        }</h5>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Fecha de inicio: <span>${
                          datosAlturas.fechaInicioActividad
                        }</span></li>
                        <li class="list-group-item">Fecha de culminacion: <span>${
                          datosAlturas.fechaCulminacionActividad
                        }</span></li>
                        <li class="list-group-item">Direccion: <span>${
                          datosAlturas.direccionTrabajoAltura
                        }</span></li>
                      </ul>
                      <div class="card-body">
                        <a href="../html/visualizacionFormularioATS.html?id=${idATS}" class="card-link" id="">ATS</a>
                        <a href="../html/visualizacionFormularioAlturas.html?id=${idAlturas}" class="card-link" id="">Alturas</a>
                        <button class="btn btn-primary" onclick="aprobarCard('${idAlturas}')">Aprobar</button>
                        <button class="btn btn-danger" onclick="borrarCard('${idAlturas}', '${idATS}')">Borrar</button>
                      </div>
                  </div>
                </div>
              `;
            } else {
              console.log("No obra");
            }
          });
        });
      });
  });

function aprobarCard(idAlturas) {
  baseDatos
    .collection("formulaTrabajoAlturas")
    .doc(idAlturas)
    .update({
      "impresionFormularioTrabajoAltura.aprobada": true,
    })
    .then(() => {
      console.log("Document successfully approved!");
      location.reload(); // Recargar la página para actualizar las cards
    })
    .catch((error) => {
      console.error("Error approving document: ", error);
    });
}

function borrarCard(idAlturas, idATS) {
  baseDatos
    .collection("formulaTrabajoAlturas")
    .doc(idAlturas)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
      baseDatos
        .collection("permisoATS")
        .doc(idATS)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          location.reload(); // Recargar la página para actualizar las cards
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}
