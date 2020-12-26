// /* eslint-disable */
import "bootstrap";
import "./style.css";

let gameBoard = [
  [["A"], 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [["B"], 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [["C"], 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [["D"], 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [["E"], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [["F"], 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [["G"], 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [["H"], 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [["I"], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [["J"], 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

window.onload = function() {
  var cellstoFire = document.querySelectorAll(".cells");

  gameBoard.forEach(array => array.shift());

  var gameBoardArrayValues = gameBoard.flat();

  for (let i = 0; i < cellstoFire.length; i++) {
    cellstoFire[i].value = gameBoardArrayValues[i];
    //console.log(cellstoFire[i].value, "Valor");
    cellstoFire[i].addEventListener("click", function(e) {
      changeColor(e);
    });
  }

  function changeColor(e) {
    if (e.target.value == 0) {
      e.target.style.background = "lightblue";
    } else {
      e.target.style.background = "red";
    }
  }
  function aimShot(x) {
    //var shotButton = document.getElementById("btnShot");

    let aimShotY = document.querySelector("Y-axis");
    let aimShotX = document.querySelector("X-axis");

    let aimShotCordinate = aimShotY + aimShotX;

    document.getElementById("btnShot").onclick = alert(aimShotCordinate);
  }
};
