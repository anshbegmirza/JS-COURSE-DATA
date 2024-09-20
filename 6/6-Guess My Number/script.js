'use strict';

/*
//////////////////////////
//70 GUESS MY NUMBER GAME
///////////////////////////

// DOM MANipulation begins

console.log(document.querySelector('.message').textContent);

//textContent property reads the text in the element we selected.

//////////////////////////
//71 DOM & DOM manipulation
///////////////////////////

// js interacting with js to make html work.
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

//////////////////////////
//73 Handling click events
///////////////////////////

//////////////////////////
//74 Implementing GAME LOGIC
///////////////////////////

//////////////////////////
//75 Manipulating CSS STYLES
///////////////////////////



let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // document.querySelector('.message').textContent = 'Correct Number'

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No Number');
  }

  //If player wins
  else if (guess == secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number !';

    displayMessage('Correct Number !');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    //When guess is too high
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high !' : 'Too low !';
      displayMessage(guess > secretNumber ? 'Too high !' : 'Too low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }

  }
});


//////////////
// Coding Challenge #1 76
//////////////
document.querySelector('.again').addEventListener('click', function () {

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';


  document.querySelector('.score').textContent = score;

  document.querySelector('.number').style.width = '15rem';
});

///////////////////////
// 077 Implementing the highscore logic
//////////////////////

/////////////////////
//078 Refactoring
////////////////////

// Removing the duplicate code and following the dry principle whilst coding

// Advisable to just make things work first and then refine it.
