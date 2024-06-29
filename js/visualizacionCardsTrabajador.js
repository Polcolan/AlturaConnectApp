//sin botones inferiores
document.addEventListener("DOMContentLoaded", function () {
  // Crear contenedor principal
  var container = document.createElement("div");
  container.classList.add("container");

  // Crear el contenedor secundario
  var secondaryContainer = document.createElement("div");
  secondaryContainer.classList.add("container");

  // Agregar imagen al contenedor secundario
  var img1 = createImage("/img/Bruno.jpg");
  var img2 = createImage("/img/Paisaje1.jpg");
  var img3 = createImage("/img/paisaje2.jpg");
  var img4 = createImage("/img/firma.jpg");

  secondaryContainer.appendChild(img1);
  secondaryContainer.appendChild(img2);
  secondaryContainer.appendChild(img3);
  secondaryContainer.appendChild(img4);

  // Agregar contenedor secundario al contenedor principal
  container.appendChild(secondaryContainer);

  // Crear formulario
  var form = document.createElement("form");

  // Agregar elementos al formulario
  var formGroupLabels = [
    "Nombre",
    "Apellido",
    "Tipo de Documento",
    "Numero de Documento",
    "Cargo",
    "Numero de Celular",
    "Contacto en caso de Emergencia",
    "Numero de Celular en caso de Emergencia",
    "Cargar Planilla de Seguridad Social",
    "Fecha de vencimiento Planilla",
    "Cargar Curso de Alturas",
    "Fecha de vencimiento Curso de Alturas",
    "Cargar Examen Médico",
    "Fecha de vencimiento Examen Médico",
    "Nombre de ARL",
    "Nombre de EPS",
    "Nombre de tu Fondo de Pensiones",
    "Cargar Fotos Registro Fotográfico",
    "Cargar Firma Digital",
  ];

  var formGroupIds = [
    "nombre-pt",
    "apellido-pt",
    "seleccion-documento-trabajador",
    "numero-documento-trabajador-pt",
    "cargo-pt",
    "numero-de-celular-trabajador",
    "contacto-emergencia",
    "numero-celular-emergencia",
    "planilla-seguridad-social",
    "fecha-vencimiento-planilla",
    "curso-alturas",
    "fecha-vencimiento-curso-alturas",
    "examen-medico",
    "fecha-vencimiento-examen-medico",
    "nombre-arl",
    "nombre-eps",
    "nombre-fondo-pensiones",
    "registro-fotografico-trabajador",
    "firma-digital-trabajador",
  ];

  for (var i = 0; i < formGroupLabels.length; i++) {
    var formGroup = document.createElement("div");
    formGroup.classList.add("mb-3");

    var label = document.createElement("label");
    label.setAttribute("for", formGroupIds[i]);
    label.classList.add("form-label");
    label.appendChild(document.createTextNode(formGroupLabels[i]));

    if (i === 2) {
      // Tipo de Documento
      var select = document.createElement("select");
      select.classList.add("form-select", "form-label");
      select.setAttribute("aria-label", "Default select example");
      select.id = formGroupIds[i];

      var defaultOption = document.createElement("option");
      defaultOption.setAttribute("selected", "true");
      defaultOption.appendChild(
        document.createTextNode("Seleccione una opción")
      );
      select.appendChild(defaultOption);

      var options = [
        "Cedula de Ciudadania",
        "Cedula de Extranjeria",
        "Permiso de permanencia",
      ];

      for (var j = 0; j < options.length; j++) {
        var option = document.createElement("option");
        option.value = options[j];
        option.classList.add("form-control");
        option.appendChild(document.createTextNode(options[j]));
        select.appendChild(option);
      }

      formGroup.appendChild(label);
      formGroup.appendChild(select);
    } else if (i === 8 || i === 10 || i === 12 || i === 14 || i === 16) {
      // File inputs
      var inputFile = document.createElement("input");
      inputFile.classList.add("form-control");
      inputFile.setAttribute("type", "file");
      inputFile.id = formGroupIds[i];

      formGroup.appendChild(label);
      formGroup.appendChild(inputFile);
    } else if (i === 9 || i === 11 || i === 13 || i === 15) {
      // Date inputs
      var inputDate = document.createElement("input");
      inputDate.classList.add("form-control");
      inputDate.setAttribute("type", "date");
      inputDate.id = formGroupIds[i];

      formGroup.appendChild(label);
      formGroup.appendChild(inputDate);
    } else {
      // Text inputs
      var inputText = document.createElement("input");
      inputText.classList.add("form-control");
      inputText.setAttribute("type", "text");
      inputText.id = formGroupIds[i];
      inputText.setAttribute("placeholder", "Escribe aquí");

      formGroup.appendChild(label);
      formGroup.appendChild(inputText);
    }

    form.appendChild(formGroup);
  }

  // Agregar formulario al contenedor principal
  container.appendChild(form);

  // Agregar contenedor principal al body
  document.body.appendChild(container);
});

function createImage(src) {
  var imgContainer = document.createElement("div");
  imgContainer.classList.add("mb-3");
  imgContainer.style.width = "10rem";

  var img = document.createElement("img");
  img.setAttribute("src", src);
  img.classList.add("img-thumbnail");
  img.setAttribute("alt", "Trabajadores");

  imgContainer.appendChild(img);

  return imgContainer;
}
// card prueba

$(document).ready(function () {
  // Crear contenedor principal
  var container = $("<div class='container'>").appendTo("body");

  // Crear fila dentro del contenedor
  var row = $("<div class='row ms-3'>").appendTo(container);

  // Primera tarjeta
  var card1 = $("<div class='card' style='width: 18rem;'>").appendTo(row);
  $("<img src='/img/Bruno.jpg' class='card-img-top' alt='...'>").appendTo(
    card1
  );
  var cardBody1 = $("<div class='card-body'>").appendTo(card1);
  $("<div class='card-title' id='nombre-ingreso'></div>").appendTo(cardBody1);
  $("<div class='card-title' id='apellido-ingreso'></div>").appendTo(cardBody1);
  $("<div class='card-title' id='profesion-ingreso'></div>").appendTo(
    cardBody1
  );
  var listGroup1 = $("<ul class='list-group list-group-flush'>").appendTo(
    card1
  );
  $("<div class='card-title' id='numero-celular'></div>").appendTo(listGroup1);
  $("<div class='card-title' id='arl-ingreso'></div>").appendTo(listGroup1);
  $("<div class='card-title' id='eps-ingreso'></div>").appendTo(listGroup1);
  var cardFooter1 = $("<div class='card-body'>").appendTo(card1);
  $(
    "<a href='../html/visualizacion-cards-trabajadores.html' class='card-link'>Mas inf.....</a>"
  ).appendTo(cardFooter1);

  // Segunda tarjeta
  var card2 = $("<div class='card' style='width: 18rem;'>").appendTo(row);
  $("<img src='...' class='card-img-top' alt='...'>").appendTo(card2);
  var cardBody2 = $("<div class='card-body'>").appendTo(card2);
  $("<h5 class='card-title'>Card title</h5>").appendTo(cardBody2);
  $(
    "<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>"
  ).appendTo(cardBody2);
  var listGroup2 = $("<ul class='list-group list-group-flush'>").appendTo(
    card2
  );
  $("<li class='list-group-item'>An item</li>").appendTo(listGroup2);
  $("<li class='list-group-item'>A second item</li>").appendTo(listGroup2);
  $("<li class='list-group-item'>A third item</li>").appendTo(listGroup2);
  var cardFooter2 = $("<div class='card-body'>").appendTo(card2);
  $("<a href='#' class='card-link'>Card link</a>").appendTo(cardFooter2);
  $("<a href='#' class='card-link'>Another link</a>").appendTo(cardFooter2);

  // Contenedor adicional con botones
  var containerSm = $(
    "<div class='container-sm justify-content-end sticky bottom'>"
  ).appendTo("body");
  $("<br>").appendTo(containerSm);
  var containerTextCenter = $(
    "<div class='container text-center mt-3'>"
  ).appendTo(containerSm);
  var rowButtons = $("<div class='row row-cols-3'>").appendTo(
    containerTextCenter
  );

  var col1 = $("<div class='col'>").appendTo(rowButtons);
  var button1 = $(
    "<button type='button' class='btn btn-primary' style='--bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.75rem;'>"
  ).appendTo(col1);
  $("<a class='text-white' href='/index.html'>Salir</a>").appendTo(button1);

  var col2 = $("<div class='col'>").appendTo(rowButtons);
  var button2 = $(
    "<button type='button' class='btn btn-primary' style='--bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.75rem;'>"
  ).appendTo(col2);
  $(
    "<a class='text-white' href='/html/archivos-guardados.html'>Historico</a>"
  ).appendTo(button2);

  var col3 = $("<div class='col'>").appendTo(rowButtons);
  var button3 = $(
    "<button type='button' class='btn btn-primary' style='--bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.75rem;'>"
  ).appendTo(col3);
  $(
    "<a class='text-white' href='/html/cardsUsuarios.html'>Usuarios</a>"
  ).appendTo(button3);

  // Fila adicional con botón de emergencia
  var rowEmergency = $("<div class='row sticky-bottom m-3'>").appendTo(
    container
  );
  var textCenter = $("<div class='text-center'>").appendTo(rowEmergency);
  $("<div id='liveAlertPlaceholder'></div>").appendTo(textCenter);
  $(
    "<button type='button' class='btn btn-danger' id='liveAlertBtn'>Emergencia</button>"
  ).appendTo(textCenter);
  $("<br><br>").appendTo(container);
});

//Visualizacion 15/05/ cards ats y alturas

document.addEventListener("DOMContentLoaded", function () {
  // Contenedor principal
  var containerSm = document.createElement("div");
  containerSm.className = "container-sm mt-5";
  document.body.appendChild(containerSm);

  // Primera fila
  var row = document.createElement("div");
  row.className =
    "row bg-primary m-3 p-3 border border-primary-subtle border-5 rounded-4";
  containerSm.appendChild(row);

  // Primera columna
  var col1 = document.createElement("div");
  col1.className = "col-3 text-center text-white";
  col1.style.cursor = "pointer";
  col1.setAttribute("onclick", "window.history.back()");
  row.appendChild(col1);

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "30");
  svg.setAttribute("height", "30");
  svg.setAttribute("fill", "currentColor");
  svg.className = "bi bi-arrow-left-square";
  svg.setAttribute("viewBox", "0 0 16 16");
  col1.appendChild(svg);

  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute(
    "d",
    "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
  );
  svg.appendChild(path);

  // Segunda columna
  var col2 = document.createElement("div");
  col2.className = "col-9 text-center text-white";
  row.appendChild(col2);

  var h5 = document.createElement("h5");
  h5.appendChild(document.createTextNode("Archivos Historico"));
  col2.appendChild(h5);

  // 1era pareja de cards
  var container1 = document.createElement("div");
  container1.className = "container mb-2";
  document.body.appendChild(container1);

  var row1 = document.createElement("div");
  row1.className = "row";
  container1.appendChild(row1);

  // Card 1
  var colCard1 = document.createElement("div");
  colCard1.className = "col-sm-6 mb-3 mb-sm-0";
  row1.appendChild(colCard1);

  var card1 = document.createElement("div");
  card1.className = "card";
  colCard1.appendChild(card1);

  var cardBody1 = document.createElement("div");
  cardBody1.className = "card-body";
  card1.appendChild(cardBody1);

  var h5Card1 = document.createElement("h5");
  h5Card1.className = "card-title";
  h5Card1.appendChild(
    document.createTextNode("SST Formulario Trabajo Seguro Alturas")
  );
  cardBody1.appendChild(h5Card1);

  var inputGroup1 = document.createElement("div");
  inputGroup1.className = "input-group input-group-sm mb-3";
  cardBody1.appendChild(inputGroup1);

  var span1 = document.createElement("span");
  span1.className = "input-group-text ms-2";
  span1.setAttribute("id", "inputGroup-sizing-sm");
  span1.appendChild(document.createTextNode("Formulario #"));
  inputGroup1.appendChild(span1);

  var p1 = document.createElement("p");
  p1.className = "card-text ms-2";
  p1.appendChild(document.createTextNode("T-A-001"));
  inputGroup1.appendChild(p1);

  var inputGroup2 = inputGroup1.cloneNode(false);
  cardBody1.appendChild(inputGroup2);

  var span2 = span1.cloneNode(false);
  span2.appendChild(document.createTextNode("Fecha"));
  inputGroup2.appendChild(span2);

  var p2 = p1.cloneNode(false);
  p2.appendChild(document.createTextNode("11/may/2024"));
  inputGroup2.appendChild(p2);

  var inputGroup3 = inputGroup1.cloneNode(false);
  cardBody1.appendChild(inputGroup3);

  var span3 = span1.cloneNode(false);
  span3.appendChild(document.createTextNode("Direccion"));
  inputGroup3.appendChild(span3);

  var p3 = p1.cloneNode(false);
  p3.appendChild(document.createTextNode("Carrera 68a # 80-34"));
  inputGroup3.appendChild(p3);

  var a1 = document.createElement("a");
  a1.className = "btn btn-primary";
  a1.setAttribute("href", "#");
  a1.appendChild(document.createTextNode("Mas Informacion"));
  cardBody1.appendChild(a1);

  // Card 2
  var colCard2 = colCard1.cloneNode(false);
  row1.appendChild(colCard2);

  var card2 = card1.cloneNode(false);
  colCard2.appendChild(card2);

  var cardBody2 = cardBody1.cloneNode(true);
  card2.appendChild(cardBody2);

  cardBody2.querySelector("h5").textContent = "SST Formulario ATS";
  cardBody2.querySelectorAll("p")[0].textContent = "T-A-001";
  cardBody2.querySelectorAll("p")[1].textContent = "11/may/2024";
  cardBody2.querySelectorAll("p")[2].textContent = "Carrera 68a # 80-34";

  var a2 = a1.cloneNode(true);
  cardBody2.appendChild(a2);

  // Separator
  var hr = document.createElement("hr");
  hr.className = "bg-primary h-100 fw-bold";
  document.body.appendChild(hr);

  // 2da pareja de cards
  var container2 = container1.cloneNode(false);
  document.body.appendChild(container2);

  var row2 = row1.cloneNode(false);
  container2.appendChild(row2);

  // Card 3
  var colCard3 = colCard1.cloneNode(false);
  row2.appendChild(colCard3);

  var card3 = card1.cloneNode(false);
  colCard3.appendChild(card3);

  var cardBody3 = cardBody1.cloneNode(false);
  card3.appendChild(cardBody3);

  var h5Card3 = h5Card1.cloneNode(false);
  h5Card3.appendChild(document.createTextNode("Special title treatment"));
  cardBody3.appendChild(h5Card3);

  var pCard3 = document.createElement("p");
  pCard3.className = "card-text";
  pCard3.appendChild(
    document.createTextNode(
      "With supporting text below as a natural lead-in to additional content."
    )
  );
  cardBody3.appendChild(pCard3);

  var a3 = a1.cloneNode(true);
  a3.textContent = "Go somewhere";
  cardBody3.appendChild(a3);

  // Card 4
  var colCard4 = colCard1.cloneNode(false);
  row2.appendChild(colCard4);

  var card4 = card3.cloneNode(false);
  colCard4.appendChild(card4);

  var cardBody4 = cardBody3.cloneNode(true);
  card4.appendChild(cardBody4);

  var h5Card4 = h5Card3.cloneNode(true);
  cardBody4.querySelector("h5").replaceWith(h5Card4);

  var pCard4 = pCard3.cloneNode(true);
  cardBody4.querySelector("p").replaceWith(pCard4);

  var a4 = a3.cloneNode(true);
  cardBody4.querySelector("a").replaceWith(a4);

  // Separator
  var hr2 = hr.cloneNode(false);
  document.body.appendChild(hr2);
});
