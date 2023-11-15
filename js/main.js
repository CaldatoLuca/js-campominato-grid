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

/* 
?--------
!CODICE
?--------
*/

const elementCellsContainer = document.querySelector(".cells-container");

for (let i = 1; i <= 100; i++) {
  const elementCell = document.createElement("div");
  elementCell.append(i);
  elementCell.classList.add("cell");
  elementCellsContainer.append(elementCell);
}
