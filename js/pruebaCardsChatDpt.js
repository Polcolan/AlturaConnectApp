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
