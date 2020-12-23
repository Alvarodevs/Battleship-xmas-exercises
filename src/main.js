// /* eslint-disable */
// import "bootstrap";
// import "./style.css";
// import { doc } from "prettier";

// window.onload = function() {
//   var cellstoFire = document.querySelectorAll(".cells");

//   var touched = (celltoFire.style.backgroundColor = "red");

//   var water = (celltoFire.style.backgroundColor = "blue");

//   var sunken = (celltoFire.style.backgroundColor = "darkblue");

//   //LOOP OF NESTED ARRAYS & FIRETORPEDO FUNCTION

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

//     let gameBoard = [
//       [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
//       [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
//     ];

//     cellstoFire.addEventListener("click", fireTorpedo);

//     // 0 = empty
//     // 1 = part of a ship
//     // 2 = a sunken part of a ship
//     // 3 = a missed shot
//   }
// };
