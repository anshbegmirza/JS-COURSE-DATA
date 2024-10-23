'use strict';

//********************************* 
// 126 Default Parameters
//*********************************
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  //previous versions
  // numPassengers = numPassengers || 1;
  // price = price || 199;


  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking)
}
createBooking(`LH123`);
createBooking(`LH234`, 2, 900);
createBooking(`LH123`, 5);

// when we want to skip a arguement we keep it undefined.
createBooking('AZ902', undefined, undefined);//default parameters will be called.
*/

//********************************* 
// 127 How passing arguments works value vs reference.
//*********************************
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 23011030785,
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr .' + passenger.name;

  if (passenger.passport === 23011030785) {
    alert(`Check In`)
  }
  else {
    alert(`Wrong Passport`)
  }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);


const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000)
}
newPassport(jonas);
checkIn(flight, jonas) // wrong passport coz the main value of the var is changed and not in the function only.
*/

//********************************* 
// 128 First class and higher order functions
//*********************************

/*
Simple functions are known as first class functions and the function which receives another function as argument are known as higher order functions.*/

//********************************* 
// 129 Higher order functions in practice
//*********************************

/*

function oneWordDecl(str) {
  return str.replace(/ /g, ``).toLowerCase();
}

const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
}

console.log(oneWord(`Jonas Schmedtmann`)); //jonasschmedtmann

const upperFirstWord = function (str) {
  console.log(str);
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

//higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string : ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
  console.log(` `);

}

transformer(`JS is the Best`, upperFirstWord);
transformer(`JS is the Best`, oneWord);
transformer(`JS is the Best`, oneWordDecl);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');

}

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5); // called three times for three elements of array.

*/

//********************************* 
// 130 Functions returning functions.
//*********************************


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}

greet(`Hello`)(`Rose`);

const greeterHey = greet(`Hey`);
greeterHey(`Jonas`);
greeterHey(`Steven`);


// arrow function

const greetArr = greeting => (name) => {
  console.log(`${greeting} ${name}`);
}

greetArr(`Hi`)(`Ellie`)


//********************************* 
// 131 The call and apply method.
//*********************************

const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  //book: function(){}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline}  flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
}
lufthansa.book(239, `Jonas Schmedtmann`)
lufthansa.book(635, `John Smith`)

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
}

const book = lufthansa.book;

// book(23, `Sarah Williams`) does not work coz different this keyword

// call method (first arugment sets this keyword to it)

book.call(lufthansa, 564, `Rohit Bhasa`)
console.log(lufthansa);

book.call(eurowings, 23, `Sarah williams`);
console.log(eurowings);



const swiss = {
  airline: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings: [],
}
// no longer used in modern JS
// Apply Method
const flightData = [583, `George Cooper`];
book.apply(swiss, flightData)
book.call(swiss, ...flightData) // used spread to get data from flightdata

//



//********************************* 
// 132 Bind Method
//*********************************

// allows us to set this keyword manually

// bind does not directly call the function instead it creates a new function first 

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, `Steven Williams`);
console.log(` `);
const bookEW23 = book.bind(eurowings, 23,);
bookEW23(`Jonas`);
bookEW23(`Rudra`);
bookEW23(`Rohit`);


// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))


// partial application
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.10, 200));

const addVAT = addTax.bind(null, 0.23,);
console.log(addVAT(200)); // 246



const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));



//********************************* 
// 133 Immediately invoked function expressions (IIFE)
//*********************************

//Came back after a leave of 12days from 8 to 21 OCT

const runOnce = function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
};
runOnce();
// console.log(isPrivate); //  not defined

// this is an iife
(function () {
  console.log(`This will never run again`);
});


(() => console.log(`This will Also never run again`))
  ();


{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate); // not defined
console.log(notPrivate);



//********************************* 
// 134 Closure
//*********************************
/*
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

//********************************* 
// 135 Closure #2
//*********************************
let f;
const g = function () {
  const a = 25;
  f = function () {
    console.log(a * 2);
  }
}



const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  }
}

g();
f(); // f here is different than f below
console.dir(g)
console.dir(h)
h();
f(); // f is reassigned.


// Example #2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
