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
/*
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
/*
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
console.log(`*********************`);
console.log(`210: Static Methods`);
console.log(`*********************`);
// PersonCl.hey = function () {
//   console.log(`hey there`);

// }

// PersonCl.hey();


//211: Object Create
console.log(`*********************`);
console.log(`211: Object Create`);
console.log(`*********************`);
const PersonProto = {

  // a method
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);


steven.name = `Steven`;
steven.birthYear = 2002;
steven.calcAge(); // Prototypal inheritance


console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init(`sarah`, 2022)
sarah.calcAge();

*/


//213: Inheritance Between Classes, constructor functions.

/*
console.log(`*********************`);
console.log(`213: Inheritance Between Classes, constructor functions.`);
console.log(`*********************`);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.course = course;

  // this violates dry principle, thereby using person again
  Person.call(this, firstName, birthYear);

  // so we manually set this keyword of this function to this keyword of person function/
  // this.firstName = firstName;
  // this.birthYear = birthYear;
};


// Student.prototype = Person.prototype;
// this means that the student object is exactly the same as the person object which we does not want.

// we want it to inherit from the person object, so we use
Student.prototype = Object.create(Person.prototype);
// now the student object inherits from the person object.

Student.prototype.introduce = function () {
  console.log(`Hello, My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'CSE');
console.log(mike);
mike.introduce();

mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true



// since we set the student prototype to person we have to update the constructor back to student.

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


*/

//215: Inheritance between classes es6 classes
console.log(`*********************`);
console.log(`215: Inheritance between classes es6 classes`);
console.log(`*********************`);

/*
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
    // console.log(name);
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

// will link the prototypes bts
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first !
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hello, My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);

  }

};

// const martha = new StudentCl('Martha Jones', 2012);
const martha = new StudentCl('Martha Jones', 2012, 'CSE');
martha.introduce();

martha.calcAge(); // 25

*/


//216 Inheritance Between _Classes__ Object.create
console.log(`*********************`);
console.log(`216 Inheritance Between _Classes__ Object.create`);
console.log(`*********************`);
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },


  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};


const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear)
  this.course = course;
}


StudentProto.introduce = function () {
  console.log(`Hello, My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, `CSE`);

jay.introduce();
jay.calcAge();

*/
//217 Another Class Example
console.log(`*********************`);
console.log(`217 Another Class Example`);
console.log(`*********************`);

/*
class AccountCl {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening a account,${owner}!`);

  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan approved of ${val} ${this.currency}`);
    }
  }
}

const acc1 = new AccountCl(`Jonas`, `EUR`, 1111);
console.log(acc1);

acc1.deposit(250)
acc1.deposit(200)
acc1.withdraw(140)
acc1.requestLoan(1000);
acc1.approveLoan(1000)
console.log(acc1);
console.log(acc1.pin);
*/

//218 Encapsulation_ Protected Properties and Methods

console.log(`*********************`);
console.log(`218 Encapsulation Protected Proerties and Methods`);
console.log(`*********************`);

/*

class AccountCl {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // protected property (use _ before name)
    this._movements = [];
    this._pin = pin;
    this.locale = navigator.language;

    console.log(`Thanks for opening a account,${owner}!`);

  }

  // Public Interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan approved of ${val} ${this.currency}`);
    }
  }
}

const acc1 = new AccountCl(`Jonas`, `EUR`, 1111);
console.log(acc1);

acc1.deposit(250)
acc1.deposit(200)
acc1.withdraw(140)
acc1.requestLoan(1000);
acc1._approveLoan(1000)
console.log(acc1);
console.log(acc1._pin);
console.log(acc1.getMovements());

*/
//219 Encapsulation_ Private Class Fields and Methods
console.log(`*********************`);
console.log(`219 Encapsulation_ Private Class Fields and Methods`);
console.log(`*********************`);

// class fields

// Public fields, 
// Private Fields,
// public methods,
// private methods,


class AccountCl {

  // 1) public fields (instances)
  locale = navigator.language;
  // _movements = [];


  // 2) private fields (use a # to make private)
  #movements = [];


  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    console.log(`Thanks for opening a account,${owner}!`);
  }

  // Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan approved of ${val} ${this.currency}`);
    }
  }
}

const acc1 = new AccountCl(`Jonas`, `EUR`, 1111);
console.log(acc1);

acc1.deposit(250)
acc1.deposit(200)
acc1.withdraw(140)
acc1.requestLoan(1000);
acc1._approveLoan(1000)
console.log(acc1);
console.log(acc1._pin);
console.log(acc1.getMovements());


// Private field '#movements' must be declared in an enclosing class
// console.log(acc1.#movements); 
