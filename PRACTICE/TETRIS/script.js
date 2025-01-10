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
  '#42F0F1', '#2201F1', '#F0A100', '#F1F001', '#37F002', '#A200F1', '#E40100', '#3E7B27', '#000957', '#FF9D23'
];

const ROWS = 20;
const COLS = 10;


let fallingPieceObj = generateRandomPiece(SHAPES.length);
// const pieceObj = generateRandomPiece(7);
console.log(fallingPieceObj);



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
        ctx.lineWidth = 0.03;
        ctx.strokeRect(fallingPieceObj.x + j, fallingPieceObj.y + i, 1, 1);
      }
    }
  }
}
// renderPiece();
// console.log(renderPiece());

// 2D grid to for tracking the movement 

let grid = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

console.log(grid);

// Rendering grid to the canvas element

function renderGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] != 0) {
        ctx.fillStyle = COLORS[grid[i][j]] || '#000';
        ctx.fillRect(j, i, 1, 1);
        ctx.strokeStyle = '#e5e5e5';
        // ctx.lineWidth = 0.05;
        ctx.lineWidth = 0.05;
        ctx.strokeRect(j, i, 1, 1);
      }
    }
  }
  renderPiece()
}

renderGrid()

function moveDown() {
  // Check if moving down causes a collision
  if (!collision(fallingPieceObj.x, fallingPieceObj.y + 1)) {
    fallingPieceObj.y += 1;
  } else {
    // Lock the piece into the grid
    let piece = fallingPieceObj.piece;
    for (let i = 0; i < piece.length; i++) {
      for (let j = 0; j < piece[i].length; j++) {
        if (piece[i][j] === 1) {
          let gridX = fallingPieceObj.x + j;
          let gridY = fallingPieceObj.y + i; // Corrected index
          if (gridY >= 0) { // Ensure we don't write above the visible grid
            grid[gridY][gridX] = fallingPieceObj.colorIndex;
          }
        }
      }
    }

    // Generate a new piece
    fallingPieceObj = generateRandomPiece(SHAPES.length);

    // Check if the new piece collides immediately (game over condition)
    if (collision(fallingPieceObj.x, fallingPieceObj.y)) {
      gameOver = true;
      alert("Game Over!");
      return;
    }
  }
  renderGrid();
}

// Adjusted collision function
function collision(newX, newY, piece = fallingPieceObj.piece) {
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j] === 1) {
        let x = newX + j;
        let y = newY + i;

        if (x < 0 || x >= COLS || y >= ROWS || (y >= 0 && grid[y][x] !== 0)) {
          return true;
        }
      }
    }
  }
  return false;
}

// Move down every 200ms
setInterval(() => {
  if (!gameOver) {
    moveDown();
  }
}, 500);


function moveRight() {
  // while (fallingPieceObj.x < 10)
  if (!collision(fallingPieceObj.x + 1, fallingPieceObj.y)) {
    fallingPieceObj.x++;
    renderGrid();
  }
}

function moveLeft() {
  if (!collision(fallingPieceObj.x - 1, fallingPieceObj.y)) {
    fallingPieceObj.x--;
    renderGrid()
  }
}

function rotatePiece(piece = fallingPieceObj.piece) {
  let rotatedPiece = piece[0].map((_, index) => piece.map(row => row[index])).reverse();
  if (!collision(fallingPieceObj.x, fallingPieceObj.y, rotatePiece))
    fallingPieceObj.piece = rotatedPiece;
}

// to see if we can make further rotations.
// function canRotate




document.addEventListener('keydown', function (e) {
  console.log(e)

  if (e.key === 'w' || e.key === 'ArrowUp') {
    rotatePiece();
    console.log(fallingPieceObj.piece);
  }
  else if (e.key === 'a' || e.key === 'ArrowLeft') {
    moveLeft();
  }
  else if (e.key === 's' || e.key === 'ArrowDown') {
    moveDown();
  }
  else if (e.key === 'd' || e.key === 'ArrowRight') {
    moveRight();
  }
})