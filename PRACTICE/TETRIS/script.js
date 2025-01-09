const canvas = document.getElementById('canvas');
console.log(canvas);
const scoreBoard = document.querySelector('.score');
// console.log(scoreBoard);

let ctx = canvas.getContext('2d');
console.log(ctx);
// each grid box will be of 30x30
ctx.scale(30, 30);

let score = 0;
let gameOver = false;

;

const SHAPES = [

  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],

  [
    [1, 1, 1,],
    [1, 1, 1,],
  ],

  [
    [1, 1, 1, 1] // // Line
  ],

  [
    [0, 1, 0],
    [0, 1, 0], // L Shape
    [1, 1, 0],
  ],

  [
    [0, 1, 0],
    [0, 1, 0], // L Shape
    [0, 1, 1],
  ],

  [
    [1, 1],
    [1, 1], // square or O
  ],

  [
    [1, 1, 1], // T shape
    [0, 1, 0]
  ],

  [
    [0, 1, 1],
    [1, 1, 0], // Z shape
  ],

  [
    [1, 1, 0],
    [0, 1, 1], // Z shape
  ]
];

const COLORS = [
  '#42F0F1', '#2201F1', '#F0A100', '#F1F001', '#37F002', '#A200F1', '#E40100', '#3E7B27'
];

const ROWS = 20;
const COLS = 10;


// const grid = generateGrid();

const fallingPieceObj = generateRandomPiece(7);

// setInterval(newGameState, 500);

// function newGameState() {
//   checkGrid();
//   if (!fallingPieceObj) {
//     fallingPieceObj = randomPieceObj();
//     renderPiece();
//   }
//   moveDown();
// }

// function to check the space in the grid and update the score accordingly move the grid up or down

// function checkGrid() {
//   let count = 0;

//   for (let i = 0; i < grid.length; i++) {
//     let allTrue = true;
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] == 0)
//         allTrue = false;
//     }

//     if (allTrue) {
//       count++;
//       grid.splice(i, 1);
//       grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // equal to cols defined.
//     }
//   }

//   // if (count === 1) {
//   // score += 10 * (count * count);
//   // }
//   // else if (count == 2) {
//   // score += 10 * (count * count);
//   // }
//   // else if (count == 3) {
//   // score += 10 * (count * count);
//   // }
//   // else if (count > 3) {
//   // score += 10 * (count * count);
//   // }

//   // score += 10 * (count * count);
//   // scoreBoard.textContent = `Score : ${score}`;
// }

// function generateGrid() {
//   let grid = [];
//   for (let i = 0; i < ROWS; i++) {
//     grid.push([]);
//     for (let j = 0; j < COLS; j++) {
//       grid[i].push(0);
//     }
//   }
//   return grid;
// }


function generateRandomPiece(n) {
  let random = Math.floor(Math.random() * n);
  let piece = SHAPES[random];
  let colorIndex = random + 1;
  let x = 4;
  let y = 0;
  return { piece, colorIndex, x, y };
};


function renderPiece() {
  let piece = fallingPieceObj.piece;
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j] === 1) {
        ctx.fillStyle = COLORS[fallingPieceObj.colorIndex];
        ctx.fillRect(fallingPieceObj.x + j, fallingPieceObj.y + i, 1, 1);
        ctx.strokeStyle = '#e5e5e5';
        ctx.lineWidth = 0.05;
        ctx.strokeRect(fallingPieceObj.x + j, fallingPieceObj.y + i, 1, 1);
      }
    }
  }
}

console.log(renderPiece());
