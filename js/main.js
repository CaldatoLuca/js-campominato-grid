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

function elementHtmlCreator(tag, style, content) {
  const elementHtml = document.createElement(tag);
  elementHtml.classList.add(style);
  elementHtml.append(content);
  return elementHtml;
}

/* 
?--------
!CODICE
?--------
*/

//*variabili elemento html
const elementCellsContainer = document.querySelector(".cells-container");
const elementButton = document.querySelector(".btn");
const elementMessage = document.getElementById("message");

//* ciclo for per inserire le celle nel container (richiama la funzione che le crea e poi inserisce)
for (let i = 1; i <= 100; i++) {
  const elementCell = elementHtmlCreator("div", "cell", i);
  elementCellsContainer.append(elementCell);
}

//* evento click sul bottone
elementButton.addEventListener("click", function () {
  elementCellsContainer.classList.toggle("none");
  elementMessage.classList.toggle("none");
});
//!TODO evento click su bottone e sulle celle (bonus)
