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
  //Array de valores en un sola linea con .flat()
  var gameBoardArrayValues = gameBoard.flat();

  //Loop con asignacion de letra y numero a cada celda(valor del array superior)

  var indexes = [];
  var rowIndex = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  for (let j = 0; j < gameBoard.length; j++) {
    for (let h = 0; h < gameBoard[0].length; h++) {
      indexes = indexes.concat(rowIndex[j].concat((h + 1).toString()));
    }
  }

  //Asignacion de letra y numero como ID de cada celda, y valor de 0 y 1 a cada una. Event "click" para llamar a funcion Changecolor()

  for (let i = 0; i < cellstoFire.length; i++) {
    cellstoFire[i].id = indexes[i];

    cellstoFire[i].value = gameBoardArrayValues[i];

    cellstoFire[i].addEventListener("click", function(e) {
      changeColor(e.target);
    });
  }

  //Funcion para cambio de background en funcion del valor
  function changeColor(target) {
    if (target.value == 0) {
      target.style.background = "lightblue";
    } else {
      target.style.background = "red";
    }
  }

  //Modal para disparo a celda concreta
  function aimShot(x) {
    let aimShotY = document.getElementById("Y-axis");
    let aimShotX = document.getElementById("X-axis");

    let aimShotWithCordinates = aimShotY.value.toUpperCase() + aimShotX.value;

    let target = document.getElementById(aimShotWithCordinates);

    changeColor(target);
  }
};
