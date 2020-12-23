// /* eslint-disable */
import "bootstrap";
import "./style.css";
//import { Collapse } from "bootstrap";

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
      e.target.style.background = "blue";
    } else {
      e.target.style.background = "red";
      checkForSunken();
    }
  }

  function checkForSunken(e) {
    for (let i = 0; i < cellstoFire.length; i++) {
      //   if (
      //     cellstoFire[i].value == 1 &&
      //     cellstoFire[i].style.background == "red"
      //   ) {
      console.log("kjasdfa", cellstoFire[i + 1]);
      //}
    }
  }

  //   var touched = (cellstoFire[i].style.backgroundColor = "red");

  //   var water = (cellstoFire.style.backgroundColor = "blue");

  //   var sunken = (cellstoFire.style.backgroundColor = "darkblue");

  //LOOP OF NESTED ARRAYS & FIRETORPEDO FUNCTION

  //   function fireTorpedo() {
  //     for (var i = 0; i < gameBoard.length; i++) {
  //       for (var j = 0; j < gameBoard[i].length; j++) {
  //         if (gameBoard[i][j] == 0) {
  //           return water;
  //         } else {
  //           return touched;
  //         }
  //       }
  //     }

  console.log(gameBoard.flat(), "HI");

  //     cellstoFire.addEventListener("click", fireTorpedo);

  //     // 0 = empty
  //     // 1 = part of a ship
  //     // 2 = a sunken part of a ship
  //     // 3 = a missed shot
  //   }
};
