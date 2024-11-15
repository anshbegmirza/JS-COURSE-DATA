'use strict';
/*
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
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
}


const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to a prototype
// 4. function automaticall returns {}


const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person); // true


// Prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype);

jonas.calcAge();
matilda.calcAge();
jack.calcAge();


// Practice more small projects on your own in order to master JS. (vanilla js)

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);


console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(Person));


// So what we learn from these is that the person.prototype calcAge is a prototype of the objects of the person class and calc age is the prototype of that

// not the main class (Person)

// .prototypeOfLinkedObjects();

Person.prototype.species = 'Homo Sapiens';

console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species')); // not on jonas object.

// 206. Prototypal Inheritance on Built-in Objects.

console.log(jonas.__proto__);


// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__); // prototype property of object.
console.log(jonas.__proto__.__proto__.__proto__);


console.dir(Person.prototype.constructor); // gives back person function iteself


const arr = [3, 6, 4, 6, 6, 9, 9, 9, 4, 5, 6, 7]; // new Array === []
console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

*/

// 208: ES 6 Classes

// classes in js are nothing but synthetic sugar 

// implementing person using class

// class Expression

// const PersonCl = class {
// 
// }


// class Declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear
  }


  // set a property that already exists.
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
    return this._fullName;
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey there`);
    console.log(this);

  }

};

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);

jessica.calcAge();
console.log(jessica.age);


console.log(jessica.__proto__ === PersonCl.prototype);


// PersonCl.prototype.greet = function () {
// console.log(`Hey ${this.firstName}`);
// }

jessica.greet();

// Class just hides the true nature of the prototypal inheritance in js, meaning its just synthetic sugar 


// 0. Classes are just functions disguised.

// 1. Classes are NOT hoisted 
// meaning we can't use them before they are declared, we have to declare them first to use them.

// 2.classes are first-class citizens

// 3. Classes are executed in strict mode.

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop()
  },

  set latest(mov) {
    this.movements.push(mov);
  }

};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


//210: Static Methods

// PersonCl.hey = function () {
//   console.log(`hey there`);

// }

PersonCl.hey();

