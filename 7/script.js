'use strict';
//********************** 
// 093 Scope resolution operator in JS
//**********************

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

*/

//********************** 
// 094 Variable Environment and Hoisting in JS
//**********************

// variable environment


//********************** 
// 095 Hoisting and TDZ in practice
//**********************

/*

// Hoisiting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'jonas'; // undefined coz called it is in TDZ (Temperal leteral zone)
let job = 'teacher'; // cant be accessed before initialization
const year = 1981;

// Hoisting with Functions
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // Cannot access 'addExpr' before initialization (IN TDZ)
// console.log(addArr(10, 2));  // Cannot access 'addArr' before initialization



function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

var addArr = (a, b) => {
  a + b;
}

// Example
if (!numProducts) {
  deleteShoppingCart();
} // here numProducts is undefiend.
// undefined is also falsy value thereby if block executed.

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted !`);
}


// DONT USE VAR AND USE CONST, use let to change later.

// define all your variables first at the top of code.

// below it keep your functions for easy understanding.

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x); // x is property of window object.
console.log(y === window.y);
console.log(z === window.z);

// window on console of browser

// let and const do not create properties which are showing on window.

*/


//********************** 
// 096 how THIS keyword WOrks;
//**********************

// arrow function do not get their own this keyword.


//********************** 
// 097 This keyword in practice
//**********************

// console.log(this); // window object // global object

/*
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this); // undefied // it will get its own this keyword, RN it is not defined.
}
calcAge(2020);

const calcAgeArr = (birthYear) => {
  console.log(2037 - birthYear);
  // console.log(this); // window object
}
calcAgeArr(2012);

const jonas = {
  year: 1991,
  calcAge: function () {
    // console.log(this); // jonas object
    console.log(2037 - this.year); // jonas object
  }
}
jonas.calcAge();

const matlida = {
  year: 2017,
};
// method borrowing we have borrowed the calcAge function from jonas to matlida
matlida.calcAge = jonas.calcAge;
matlida.calcAge(); // 2037-2017 = 20 (CORRECT)


// this keyword is dynamic and depends on which object or method it is called

const f = jonas.calcAge;
// console.log(f);
f(); // now the this keyword is undefined.

*/

//********************** 
// 098 Regular function vs Arrow function
//**********************



// var firstName = 'matlida' // coz var is  globally available 
/*
const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
*/

// solution 1 to this keyword issue

/*
    // to fix the issue of this keyword we define a variable self outside the function set to this
    // preserving this keyword
    const self = this; // self or that
    // pre es6 solution
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);

    };

// solution 2

//use a arrow funciton of a regular function to solve the issue

// this solution works because a arrow funciton does not a this keyword of its own, so it gets from the parent

const self = this;
const isMillenial = () => {
  console.log(this); // to check what this keyword is
  console.log(this.year >= 1981 && this.year <= 1996);
};
isMillenial();// true
},

greet: () => {
console.log(`Hey ${this.firstName}`); // hey undefiend
}
};

jonas.greet();
jonas.calcAge();

// arguments keyword
// a regular function gets the argument keyword which takes more arguments than specified
const addExpr = function (a, b) {
console.log(arguments);
return a + b;
}
console.log(addExpr(2, 5));
addExpr(2, 4, 5, 67, 1, 2, 3)

// a arrow function does not get arguments keyword
var addArrow = (a, b) => {
console.log(arguments); // not defiened
return a + b;
}
addArrow(2, 3, 5, 6, 7, 1)
*/

//********************** 
// 099 Primitives vs Objects (Primitive types vs reference types)
//**********************

/*
let age = 30;
let oldAge = age;

age = 31;
// console.log(age, oldAge, age);

const me = {
  name: 'jonas',
  age: 30,
}
const friend = me;
friend.age = 27; // only changed for friend but changed for me also
console.log("friend", friend);
console.log("Jonas", me);

*/

//********************** 
// 100 Primitive and Objects in Practice
//**********************

/*
// primitives types

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};


// copying objects
const marriedJessica = jessica; // this is not a new object in the heap but a demo which excess the same memory of jessica 

// that is why the values are changed in both the objects and not in the copied one only.


marriedJessica.lastName = 'Davis';
console.log(`Before marriage`, jessica);
console.log(`After marriage`, marriedJessica);


const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['alice', 'bob'],
};

// to copy two objects into new
// only copy to first level and not on deep clone
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'davis';
jessicaCopy.family.push(`mary`);
jessicaCopy.family.push(`john`);
console.log(`Before marriage`, jessica2);
console.log(`After marriage`, jessicaCopy);

*/