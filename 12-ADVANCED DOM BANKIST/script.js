'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


/*
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
*/
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


///////////////////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(`.header`); // first element which mathces it

// select single element only for mutliple use below
const allSections = document.querySelectorAll(`.section`);
console.log(allSections);

document.getElementById(`section--1`);
const allButtons = document.getElementsByTagName(`button`); // returns a htmlcollection. live-collection
console.log(allButtons);


console.log(
  document.getElementsByClassName('btn') // live collection of html collection
);


// Creating and inserting elements

// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');

// message.textContent = 'We use cookied for improved functionality and analytics';
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class= "btn btn--close-cookie">Got it ! </button>';


// header.prepend(mes1sage);
header.append(message);

// copies and adds
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// delete elements
document.querySelector(`.btn--close-cookie`).addEventListener('click', function () {
  // newer way
  message.remove();

  // old way
  // message.parentElement.removeChild(message);

});

// styles
// are set as inline styles
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;

console.log(message.style.height);

console.log(message.style.backgroundColor);

console.log(getComputedStyle(message)); // gives all the styles on message
console.log(getComputedStyle(message).color); // specific style like color
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

// attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.id);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

// non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company'));
logo.setAttribute('data-version-number', 3.0);

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// data attributes
console.log(logo.getAttribute('data-version-number'));

//Classes
logo.classList.add(`c`)
logo.classList.remove(`c`)
logo.classList.contains(`c`)
logo.classList.toggle(`c`)
//dont use 
// reason: overwrites whatever their is, and add this one only.
logo.className = 'jonas'


