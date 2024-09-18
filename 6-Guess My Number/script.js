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


document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // document.querySelector('.message').textContent = 'Correct Number'
  if (!guess) {
    document.querySelector('.message').textContent = 'No input';
  }
});

//////////////////////////
//74 Implementing GAME LOGIC
///////////////////////////
const number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
document.querySelector('.number').textContent = number;