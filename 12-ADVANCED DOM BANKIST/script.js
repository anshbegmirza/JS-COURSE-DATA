'use strict';
///////////////////////////////////////
// Selecting

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');


const btnCloseModal = document.querySelector('.btn--close-modal');

const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


const nav = document.querySelector('.nav');


///////////////////////////////////////
// Modal window
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


///////////////////////////////////////
// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('current scorll (x/y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  //scorlling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  // old way

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });


  // modern way
  section1.scrollIntoView({ behavior: "smooth" });
});


///////////////////////////////////////
//Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // console.log('link');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//     })
//   })
// })

// now doing using events delegation

// 1. Add event listener to common parent element

// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    console.log('link');

    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    })
  }
})

/////////////////////////////
// Tabbed component


// console.log(tabs, tabsContainer, tabsContent);


// this works for a smaller number of tabs, but for more number of tabs we have to use events delegation.


// tabs.forEach(t => t.addEventListener('click', () =>
//   console.log('tab')
// ))

tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //guard clause
  if (!clicked) return;


  //Remove active classes for tab and content area
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  //Activate content area
  console.log(clicked.dataset.tab);


  // Active tab
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');


});

///////////////////////////////////////
// MENU FADE ANIMATION
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el => {
      if (el !== link)
        el.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}


//passing 'argument' into handler.
nav.addEventListener('mouseover', handleHover.bind(0.5))

nav.addEventListener('mouseout', handleHover.bind(1))


// easier way, but violates the dry principle so we have to refactor it.
/*
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el => {
      if (el !== link)
        el.style.opacity = 0.5;
    })
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el => {
      if (el !== link)
        el.style.opacity = 1;
    })
    logo.style.opacity = 1;
  }
});
*/



/////////////////////////
// 191: Implementing a Sticky Navigation the scroll event.
// Sticky navigation
/*
const initialCords = section1.getBoundingClientRect()
console.log(initialCords);

window.addEventListener('scroll', function (e) {
  // console.log(window.scrollY);

  if (window.scrollY > initialCords.top)
    nav.classList.add('sticky');
  else nav.classList.remove('sticky');
})
*/

///////////////////////////////////////
//192: A Better Way: The Intersection Observer API.

// will be useful for infinite scrolling test and much more.

// to understand how the intersection observer api works,

// try yourself by changing the threshold values from 0 to 0.1 0.2 and so on.

// log the result to the console and see the difference on the intersectionRatio.

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);

//   });
// };


// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],

// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
// console.log(observer);

const header = document.querySelector('.header');

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight.height);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting)
    nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);


///////////////////////////////////////
//193: Revealing Elements on Scroll 

const allSections = document.querySelectorAll('section')
// console.log(allSections);


const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}


const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.18,
})

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////
// Experimenting
///////////////////////////////////////

/*
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



/*

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

// document.documentElement.style.setProperty('--color-primary', 'orangered');

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




// mouse enter events

const h1 = document.querySelector('h1');


const alertH1 = function (e) {
  alert('addEventlistener: Great! You are reading the heading : D');
}

h1.addEventListener('mouseenter', alertH1);
// to remove event listener



setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// old way
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading : D')
// };


// Event bubbling in js

// random color
// rgb(255,255,255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// console.log(randomInt(0, 255));

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('link');
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);

  console.log(e.currentTarget === this); // true


  // stop propagation
  // e.stopPropagation();

});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('link');
  this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget);
});


document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('link');
  this.style.backgroundColor = randomColor();
  console.log('nav', e.target, e.currentTarget);
});



////////
// Dom traversing
const h1 = document.querySelector('h1');

// going downwards : child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';


// going upwards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);



h1.closest('.header').style.background = 'var(--gradient-primary)';

// h1.closest('.h1').style.color = 'var(--gradient-primary)';


// Going sideways : siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.childElementCount);
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1)
    el.style.transform = 'scale(0.5)';
});
*/

////////////////////////
// 189: Building a tabbed component.

////////////////////////
//190: Passing Arguments to event handlers.