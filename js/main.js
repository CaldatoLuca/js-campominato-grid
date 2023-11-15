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

function createCells(count) {
  for (let i = 1; i <= count; i++) {
    const elementCell = elementHtmlCreator("div", "cell");
    elementCell.append(i);
    elementCellsContainer.append(elementCell);
  }
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
const elementSelect = document.getElementById("levels");

//* variabili
let level = 100;

//*richiamo la variabile che crea le celle
createCells(level);

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

//! condizioni per cambiare livello, aggiungere click sulla select, appena carico pagina elementSelect.value è subito === 0, non ho tempo di cambiare
// //*condizioni sul livello per cambiare valore di level
// if (+elementSelect.value === 1) level = 100;
// if (+elementSelect.value === 2) level = 81;
// if (+elementSelect.value === 3) level = 49;
