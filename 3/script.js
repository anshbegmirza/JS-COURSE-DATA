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