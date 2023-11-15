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
  const elementCell = document.createElement(tag);
  elementCell.classList.add(style);
  return elementCell;
}

/* 
?--------
!CODICE
?--------
*/

const elementCellsContainer = document.querySelector(".cells-container");
console.log(elementHtmlCreator("div", "cell"));

// for (let i = 1; i <= 100; i++) {
//   const elementCell = document.createElement("div");
//   elementCell.append(i);
//   elementCell.classList.add("cell");
//   elementCellsContainer.append(elementCell);
// }
