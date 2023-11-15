"use strict";

/* <div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div> */

/* 
?--------
!FUNZIONI
?--------
*/

function elementHtmlCreator(tag, style) {
  const elementHtml = document.createElement(tag);
  elementHtml.classList.add(style);
  return elementHtml;
}

/* 
?--------
!CODICE
?--------
*/

//*variabili elemento html
const elementCellsContainer = document.querySelector(".cells-container");
const elementButtonPlay = document.getElementById("play");
const elementButtonReset = document.getElementById("reset");
const elementMessage = document.querySelector(".messages");

//* ciclo for per inserire le celle nel container (richiama la funzione che le crea e poi inserisce)
for (let i = 1; i <= 100; i++) {
  const elementCell = elementHtmlCreator("div", "cell");
  elementCell.append(i);
  elementCellsContainer.append(elementCell);
}

//* creo falso array che raccoglie tutte le mie celle
const cellsAll = document.querySelectorAll(".cell");

//* evento click sul bottone
elementButtonPlay.addEventListener("click", function () {
  elementCellsContainer.classList.toggle("none");
  elementMessage.classList.toggle("none");
});

//* ciclo for per aggiungere un evento click a ogni cella
for (let i = 0; i < cellsAll.length; i++) {
  cellsAll[i].addEventListener("click", function () {
    console.log(cellsAll[i].innerHTML);
    cellsAll[i].classList.add("cell-bg");
  });

  elementButtonReset.addEventListener("click", function () {
    elementCellsContainer.classList.add("none");
    elementMessage.classList.remove("none");
    cellsAll[i].classList.remove("cell-bg");
  });
}
