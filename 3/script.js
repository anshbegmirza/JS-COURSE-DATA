'use strict'; //always add it to your script to make them future proof.


//********************** 
// 032 Strict mode in JS
//**********************

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) console.log(`I can drive`);


// const interface = 'audio'
// const private = 534;
// const if = 23;
*/

//********************** 
// 033 Functions in JS
//**********************

/*
// for revision watch from 10 to 12min

//function keyword its name ()
//parameters goes in to the paranthesis
//they are variables which are focused for a function only.
function logger() {
  console.log(`My name is Jonas`);
}
//Invoking the function or calling or running.
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(9, 0);
console.log(appleJuice);

console.log(fruitProcessor(2, 3));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

//********************** 
// 034 Function Declaration vs expressions
//**********************

/*
//parameter means this birthYear kindof placeholder
//function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

//argument means value of parameter
const age1 = calcAge1(1991);
// console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// You can call a function before defining like function is invoked above and defined below.
*/

//********************** 
// 035 Arrow Functions
//**********************

/*
// form of function expression which is shorter and faster.
const calcAge3 = birthYear => 2037 - birthYear;

// console.log(calcAge3(2030));
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in next ${retirement} years`
}
console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1980, 'BOB'));
*/

//********************** 
// 036 Function Calling other function
//**********************

/*
// nice video to revise functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applesPieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applesPieces} of apples and ${orangesPieces} of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

//********************** 
// 037 Reviewing Functions
//**********************

/*
// Use this video to revise functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in next ${retirement} years`);
    return retirement;

  }
  else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  // return
}

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1950, 'Mike'));
*/

//********************** 
// 038 Coding Challenge #1
//**********************

/*
// Test data 1 : dolphins 44 23 71 and Koalas 65 54 49
// Test data 2 : dolphins 85 54 41 and Koalas 23 34 27

// function calcAverage(scores1, scores2, scores3) {
//   return (scores1 + scores2 + scores3) / 3;
// }

const calcAverage = (scores1, scores2, scores3) => (scores1 + scores2 + scores3) / 3;



const avgDolphins = calcAverage(44, 23, 71); // for data-1
// const avgDolphins = calcAverage(85, 54, 41); // for data-2
console.log(`Average score of Dolphins is ${avgDolphins}`);

const avgKoalas = calcAverage(65, 54, 49); // for data-1
// const avgKoalas = calcAverage(23, 34, 27); // for data-2
console.log(`Average score of Koalas is ${avgKoalas}`);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  }
  else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  }
  else {
    console.log(`No one wins`);

  }
}

console.log(checkWinner(avgDolphins, avgKoalas));
*/

//********************** 
// 039 Introduction to Arrays
//**********************

/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends[0]);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends.length);//to find the length of the array
console.log(friends[friends.length - 1]);//to get the last number

friends[2] = 'Jay';
console.log(friends[2]);
const firstName = 'Jonas'
const jonas = [firstName, 'shmedtman', 2037 - 1991, 'teacher', friends];
console.log(jonas);
// console.log(jonas.length);


// exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const year = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

*/


//********************** 
// 040 Basic Array Methods
//**********************

/*
// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('jay', 'stevie', 'bob', 'maverick'); // adds elements to array at the end
console.log(friends);
console.log(friends.length);

friends.unshift('John'); // // adds elements to array at the beginning
console.log(friends);


// Remove Elements
friends.pop(); // Removes last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Removes the first element
console.log(friends);

// to find index of a element
console.log(friends.indexOf('Steven'));

// to check whether element is in array
console.log(friends.includes('Steven')); // true if present
console.log(friends.includes('BOB'));

if (friends.includes('Peter')) {
  console.log(`You have a friend called Peter`);

}
*/

//********************** 
// 041 Array Challende #1
//**********************

/*
// my solution

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return 0.15 * bill;
//   }
//   else {
//     return 0.20 * bill;
//   }
// }
// let bill1 = calcTip(125) + 125;
// let bill2 = calcTip(555) + 555;
// let bill3 = calcTip(44) + 44;
// console.log(bill1, bill2, bill3);


// const total = [bill1, bill2, bill3];

// console.log(total);

// const trial = [calcTip(125) + 125, calcTip(555) + 555, calcTip(44) + 44,];
// console.log(trial);


//jonas solution
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
console.log(`Total for bill ${bills[0]} is ${total[0]} with tip ${tips[0]}.`);
console.log(`Total for bill ${bills[1]} is ${total[1]} with tip ${tips[1]}.`);
console.log(`Total for bill ${bills[2]} is ${total[2]} with tip ${tips[2]}.`);

*/


//********************** 
// 042 Introduction to Objects
//**********************

/*
const JonasArray = [
  'Jonas',
  'Schmedtmann',
  '2037-1991',
  'Teacher',
  ['Micheal', 'Peter', 'Jack', 'Rose']
];

console.log(JonasArray);
//curly brackets for object
const jonas = {
  firstName: 'Jonas',
  lastname: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Jack', 'Rose']
};
*/

//********************** 
// 043 Dot vs Bracket Notation
//**********************

/*

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Jack', 'Rose']
};

console.log(jonas);
console.log(jonas.friends[3]);
console.log(jonas.lastname);
console.log(jonas['lastname']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends');


jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';
// console.log(jonas);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(`Error 404 !`);
}

// challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);

*/

//********************** 
// 044 Objects Methods
//**********************


/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  hasDriverLicense: true,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Jack', 'Rose'],

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {

  //   // console.log(this);//logs whole jonas object

  //   return 2037 - this.birthYear;

  //   // return 2037 - jonas.birthYear; //not ideal
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
  }

};

// console.log(jonas.calcAge());
// console.log(jonas.age);


// console.log(jonas['calcAge'](1991));

//keep your code dry : DO NOT REPEAT YOURSELF

// challenge

// console.dir(jonas.getSummary());

console.log(jonas.getSummary());

*/


//********************** 
// 045 Coding Challenge #3
//**********************

// Objects challenge

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
}
mark.calcBMI();
john.calcBMI();


// const display = mark.calcBMI() > john.calcBMI() ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})` : `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s bmi (${mark.calcBMI()})`;
// console.log(display);

console.log(mark.bmi, john.bmi);


const display = mark.bmi > john.bmi ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})` : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s bmi (${mark.bmi})`;
console.log(display);

*/

//********************** 
// 046 FOR LOOP
//**********************

/*
//counter loop
//for loop keeps running while condition is TRUE
for (let i = 1; i <= 10; i++) {
  console.log(`Repetition ${i}`);
}

*/


//********************** 
// 047 Looping Arrays Breaking and Continuing
//**********************


/*
// Really nice lecture to revise arrays.

const JonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'Teacher',
  ['Micheal', 'Peter', 'Jack', 'Rose'],

];

// always try to make your code dynamic and not hardcore.
const types = [];
for (let i = 0; i <= JonasArray.length - 1; i++) {

  //reading from JonasArray
  console.log(`${i + 1} element of array is ${JonasArray[i]}`, typeof JonasArray[i]);

  //filling a array
  // types[i] = typeof JonasArray[i];
  types.push(typeof JonasArray[i]);
}


console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i <= years.length - 1; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);


//continue and break

// continue is use to excess the current iteration of the loop.
console.log(`--- ONLY STRINGS ALLOWED ---`);

for (let i = 0; i < JonasArray.length; i++) {
  if (typeof JonasArray[i] !== 'string') continue;
  console.log(JonasArray[i], typeof JonasArray[i]);
}

console.log(`---  BREAK WHEN NUMBER FOUND ---`);

for (let i = 0; i < JonasArray.length; i++) {
  if (typeof JonasArray[i] === 'break') break;
  console.log(JonasArray[i], typeof JonasArray[i]);
}

*/


//********************** 
// 048 Looping Backwards and Loops in loops
//**********************

/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'Teacher',
  ['Micheal', 'Peter', 'Jack', 'Rose'],

];

//looping backwards
//5,4,3,2...0
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`Starting Exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Rep ${rep}`);
  }

}
  */

//********************** 
// 049 While Loop
//**********************


/*
for (let rep = 0; rep < 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}



console.log(`While loop result`);
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}



//random number generator;
let dice = Math.trunc(Math.random() * 6);
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6);
  if (dice === 6) console.log(`Loop ends`);

}

*/


//********************** 
// 050 Coding Challenge #4
//**********************


// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);
// console.log(`Total for bill ${bills[0]} is ${total[0]} with tip ${tips[0]}.`);
// console.log(`Total for bill ${bills[1]} is ${total[1]} with tip ${tips[1]}.`);
// console.log(`Total for bill ${bills[2]} is ${total[2]} with tip ${tips[2]}.`);

//MY SOLUTION

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
  console.log(`tips ${tips[i]}`);
  console.log(`total ${bills[i]}`);
}
console.log(tips);
console.log(bills);
console.log(totals);

let sum = 0;
const calcAvg = function (arr) {
  for (let j = 0; j < arr.length; j++) {
    sum = sum + arr[j];

  }
  return sum / arr.length;
}
console.log(calcAvg(totals));
console.log(calcAvg(bills));
console.log(calcAvg(tips
));




