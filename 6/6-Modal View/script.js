'use strict';

// first select all the variables that you need and store them.

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden', 'other_class_name');
  overlay.classList.remove('hidden');
}
// console.log(btnsOpenModal);
// console.log(typeof btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal
  );

}
