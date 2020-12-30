// /* eslint-disable */
import "bootstrap";
import "./style.css";

let gameBoard = [
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

window.onload = function() {
  var cellstoFire = document.querySelectorAll(".cells");
  document.getElementById("btnShot").onclick = () => {
    aimShot();
  };
  //var gameBoardArrayValuesShifted = gameBoard.shift();

  var gameBoardArrayValues = gameBoard.flat();
  //console.log(gameBoardArrayValues, "Valor");

  var indexes = [];
  var rowIndex = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  for (let j = 0; j < gameBoard.length; j++) {
    for (let h = 0; h < gameBoard[0].length; h++) {
      indexes = indexes.concat(rowIndex[j].concat((h + 1).toString()));
    }
  }

  //console.log(indexes);

  for (let i = 0; i < cellstoFire.length; i++) {
    cellstoFire[i].id = indexes[i];
    //console.log(cellstoFire[i]);
    cellstoFire[i].value = gameBoardArrayValues[i];
    //console.log(cellstoFire[i].value, "Valor");
    cellstoFire[i].addEventListener("click", function(e) {
      changeColor(e.target);
    });
  }

  function changeColor(target) {
    if (target == 0) {
      target.style.background = "lightblue";
    } else {
      target.style.background = "red";
    }
  }

  function aimShot(x) {
    //var shotButton = document.getElementById("btnShot");

    let aimShotY = document.getElementById("Y-axis");
    let aimShotX = document.getElementById("X-axis");

    let aimShotWithCordinates = aimShotY.value.toUpperCase() + aimShotX.value;

    let target = document.getElementById(aimShotWithCordinates);

    changeColor(target);
  }
};
