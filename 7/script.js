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
