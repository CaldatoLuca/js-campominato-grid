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

const elementCellsContainer = document.querySelector(".cells-container");

for (let i = 1; i <= 100; i++) {
  const elementCell = elementHtmlCreator("div", "cell", i);
  elementCellsContainer.append(elementCell);
}

//!TODO evento click su bottone e sulle celle (bonus)
