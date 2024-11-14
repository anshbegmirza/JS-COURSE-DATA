'use strict';

// in oop the constructor always starts from a capital letter.
// expression and function declarations works as a constructor in js 
const Person = function (firstName, birthYear) {
  // console.log(this);
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never create methods in constructors // not a good practice

  // not a js feature pattern created by some developer, used and adopted by many. 
  // method
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
}


const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to a prototype
// 4. function automaticall returns {}


const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 2017);
console.log(matilda, jack);

console.log(jonas instanceof Person); // true



