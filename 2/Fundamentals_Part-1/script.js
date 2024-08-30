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

