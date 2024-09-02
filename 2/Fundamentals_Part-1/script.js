/*let js = 'amazing';

// if (js === 'amazing') alert(`JS is Fun !!!`);

console.log(40 + 8 + 23 - 10);

// console.log(`Jonas`);
// console.log(23);
// console.log(`First js program`);


//Variable conventions
let firstName = "Bob";
console.log(`****`);
console.log(firstName);
console.log(`****`);

let $function = "$ is allowed to use in var names";

let _Name = " It is allowed to underscore in var name";

const PI = 3.1415;


console.log(`Use camel case to write var names`);
console.log(`****`);

console.log(`Always writes const in uppercase`);
console.log(`****`);


let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
console.log(myFirstJob);
console.log(myCurrentJob); */


//*************** 
// 012 Data Types
//*************** 

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof `jonas`);
// to assign new value to exisiting var.
javascriptIsFun = `Yes it is`;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
*/

//*************** 
// 013 let,const and var
//*************** 

/*
let age = 30;

age = 31;
// const can't be changed. They always have a value and can't be empty.
const birthYear = 1991;

// use const for the var which are not going to change to have a clean code.

// use let for var which are going to change.

*/

//*************** 
// 014 Basic Operators
//*************** 

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 (2 power 3)

// plus operator is used to concatenate strings

let firstName = `Jonas`;
let lastName = `Schmedtmann`;
console.log(firstName + ` ` + lastName);

// assignment operator

let x = 10 + 5; //15
x += 10; //25
x *= 4; //100
x /= 2; //50
x++; // 51
x--; // 50
console.log(x);

// comparison operator
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true

// const isFullAge = ageSarah >= 18;
// console.log(isFullAge);

console.log(now - 1991 > now - 2018);

*/


//*************** 
// 015 Operator Precedence
//*************** 

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x=y=10
console.log(x, y);

// paranthesis grouping has the highest precedence

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/


//*************** 
// 016 is coding challenge
//*************** 


// Coding challenge #1

/* Test data 1 Mark weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall.

Test data 2 Mark weights 95kg and 1.88m tall. John weights 85kg and is 1.76m tall. */


/*
let markWeight = 78;
let markHeight = 1.69;
let bmiMark = markWeight / (markHeight * markHeight);

let johnWeight = 92;
let johnHeight = 1.95;
let bmiJohn = johnWeight / (johnHeight * johnHeight);

console.log(`The BMI of Mark is ${bmiMark}`);
console.log(`The BMI of John is ${bmiJohn}`);

let markHigherBMI = bmiMark > bmiJohn;
console.log(`The bmi of mark is higher ${markHigherBMI}`);


markWeight = 95;
markHeight = 1.88;
bmiMark = markWeight / (markHeight * markHeight);
johnWeight = 85;
johnHeight = 1.76;
bmiJohn = johnWeight / (johnHeight * johnHeight);
console.log(`The BMI of Mark for test 2 data is ${bmiMark} `);
console.log(`The BMI of John for test 2 data is ${bmiJohn} `);
markHigherBMI = bmiMark > bmiJohn;
console.log(`The bmi of mark is higher for test data 2 ${markHigherBMI}`);

*/


//*************** 
// 019 Coding challenge #2
//*************** 
/*
console.log(`Coding Challenge #2`);

if (bmiMark > bmiJohn) {
  console.log(`Mark's bmi ${bmiMark} is higher than John's ${bmiJohn}`);
}
else {
  console.log(`John's bmi ${bmiJohn} is higher than Mark's ${bmiMark}`);

}

*/
//*************** 
// 017 String & Template Literals
//*************** 

/*
const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const year = 2037;
const jonas = `I'm ${firstName} a ${year - birthYear} years old ${job} !`;
console.log(jonas);


// Always prefer tactics for strings and template literals.

console.log(' String with \n\
  multiple \n\
  lines');

console.log(`String with
    multiple
    lines`);

*/

//*************** 
// 018 Taking Decisions If / else statements
//*************** 

// voter id program

/*
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`You are eligible to vote !`);

}
else {
  const yearLeft = 18 - age;
  console.log(`You are too young. Wait another ${yearLeft} years`);

}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  let century = 20;
  console.log(`You are born in ${century}`);
}
else {
  let century = 21;
  console.log(`You are born in ${century}`);
}
  */

//*************** 
// 020 Type conversion and coercion
//*************** 


/*
// type conversion means when we manually convert one datatype to another.

//coercion happens automatically when needed by js itself.


// Type Conversions
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // converts to number

console.log(Number(inputYear) + 18);


console.log(Number('Jonas')); // not able to convert

console.log(typeof NaN); // means invalid number

console.log(String(23), 23); // converts to string


// type coercion
console.log(`I am` + ` ` + 23 + ` ` + `years old`);
console.log(`23` - `10` - 3); // 10
console.log(`23` + `10` + 3); // 23103
console.log(`23` * `2`);


// in the + the coercion happens the other way around which all the values are converted to string first.

// in the rest the string is converted to number

console.log(`10` - `4` - `3` - 2 + `5`);// 10 - 4 -3 -2 then add 5

// answer would be 15

*/

//*************** 
// 021 Truthy and Falsy Values.
//*************** 

// 5 falsy values : 0 , ``, undefined, null, NaN, false

// these above will be converted to falsy on conversion

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(``));
console.log(`****`);

console.log(Boolean(`jonas`));
console.log(Boolean({}));


const money = 0;
if (money) {
  console.log(`Don't spend it all`);
}
else {
  console.log(`You should earn something`);

}

let height; //undefined
if (height) {
  console.log(`yay ! height is defined`);
}
else {
  console.log(`Height is undefined`);
}
*/

//*************** 
// 022 Equality Operators == v/s ===
//*************** 

/*
const age = 18;
if (age === 18) {
  console.log(`Yay! you are 18 years old`);
}
else {
  console.log(`Still have time`);
}

// === strict does not allow type coercion. Returns true if both side are of same data type.

// == lose equal

if (age === 18)
  console.log(`You just become an adult :D (strict equality ===)`);


if (age == 18)
  console.log(`You just become an adult :D (lose equality ==)`);

// avoid lose equality for clean code.

// To compare two values use triple equality.

const favourite = Number(prompt(`What's your favourite number ?`));
console.log(favourite);

if (favourite === 23) {
  console.log(`Cool ! 23 is an amazing number`);
}
else if (favourite === 7) {
  console.log(`Cool ! 7 is also good.`);

}
else if (favourite === 9) {
  console.log(`9 is the coolest number`);

}
else {
  console.log(`Nay !!!`);
}

if (favourite !== 23) console.log(`Why not 23?`);
*/


//*************** 
// 023 Boolean Logic
//*************** 

// And or and not operators

//*************** 
// 024 Logical Operators
//*************** 

/*
const hasDriversLicense = true;
const hasGoodVision = true;


console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;


const isTired = false;

console.log(hasDriversLicense && hasGoodVision && isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah should drive`);
}
else {
  console.log(`Someone else should drive`);
}
*/

//*************** 
// 025 Coding Challenge #3
//*************** 

/*
const dolphinsScore1 = (96 + 108 + 89) / 3;
const koalasScore1 = (88 + 91 + 110) / 3;
if (dolphinsScore1 > koalasScore1 && dolphinsScore1 >= 100) {
  console.log(`Dolphins wins`);
}
else if (dolphinsScore1 === koalasScore1) {
  console.log(`Both wins the trophy`);
}
else {
  console.log(`Koalas wins`);
}

console.log(`test data 2`);

const dolphinsScore2 = (97 + 112 + 101) / 3;
const koalasScore2 = (109 + 95 + 106) / 3;
if (dolphinsScore2 > koalasScore2) {
  console.log(`Dolphins wins`);
}
else if (dolphinsScore2 === koalasScore2) {
  console.log(`Koalas wins`);
}
else {
  console.log(`Koalas wins`);
}

*/

//*************** 
// 026 Switch Statement
//*************** 

/*
const day = 'wednesday';

switch (day) {
  case 'monday':
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case 'tuesday':
    console.log(`Prepare theory videos`);
    break;
  case 'wednesday':
  case 'thursday':
    console.log(`Write code examples`);
    break;
  case 'friday':
    console.log(`Record videos`);
    break;
  case 'saturday':
  case 'sunday':
    console.log(`Enjoy the weekend`);
    break;
  default:
    console.log(`Not a valid day`);

}
*/

//*************** 
// 027 Statements & Expressions
//***************

//expression which produces value
// 3+4 true && false 

// if else switch are statements


//*************** 
// 028 Conditional Ternery Operator
//***************
const age = 19;

// age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);

// condition ? if true part : else false part

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
}
else {
  drink = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


// used for smaller logics quick decisions.