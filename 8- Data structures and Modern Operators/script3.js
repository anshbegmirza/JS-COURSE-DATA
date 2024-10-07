'use strict';
//********************************* 
// 120 Working with Strings Part #1
//*********************************
console.log(``);

const airline = `Tap Air Portugal`;
const plane = `A320`;
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log(`B737`[0]);

console.log(airline.length);
console.log(`B737`.length);

console.log(airline.indexOf(`r`)); // gives index on which r is (space neglected)
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`Portugal`)); // case sensitive

console.log(airline.indexOf(`portugal`)); // -1 if not found.

// slice is used to extract part of a string.

console.log(airline.slice(4)); // air portugal // starts from the 4 index till last.

// beginning parameter from which extraction starts

console.log(airline.slice(4, 7)); // starts from 4 ends 7, length is 7-4=3

//first word
console.log(airline.slice(0, airline.indexOf(` `)));
// starts from  0 till first space found.

//last word
console.log(airline.slice(airline.lastIndexOf(` `) + 1));
// to remove that blank space before the word.

console.log(airline.slice(-2)); // last two words of string,

console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats for smaller planes
  const s = seat.slice(-1);
  if (s === `B` || s === `E`)
    console.log(`You got the middle seat`);
  else
    console.log(`You got lucky`);
}
checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);

console.log(new String(`Jonas`));
console.log(typeof new String(`Jonas`));


//********************************* 
// 121 Working with strings #2
//*********************************

// coverting to lower case.

console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());
console.log(`jonas`.toLocaleUpperCase());


// fix capitalization in name
const passenger = `joNaS`;
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect = passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);


// function to correct passenger name 
const correctName = function (name) {
  const input = name;
  const inputLower = input.toLowerCase();
  const correctName = inputLower[0].toUpperCase() + inputLower.slice(1);
  console.log(correctName);
}
correctName(`CaPTaiN`);
correctName(`MavRick`);

// comparing email
const email = `hello@jonas.io`;
const loginEmail = `  Hello@Jonas.Io \n`;
// enter character is \n \t for tab

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);


// trim( )remmoves the white space, tab and enter from string
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace(`£`, '$').replace(`,`, '.');
console.log(priceUS);


const annoucement = `All passengers come to boarding door 23. Boarding door 23!`

console.log(annoucement.replace(`door`, `gate`));

// replaces all occurences
// console.log(annoucement.replaceAll(`door`, `gate`));

// using a regular expression
console.log(annoucement.replace(/door/g, 'gate'));

//Booleans
const plane2 = `A320neo`;
console.log(plane2.includes(`A320`));
console.log(plane2.startsWith(`Air`));

if (plane2.startsWith(`Airbus`) && plane2.endsWith(`neo`)) {
  console.log(`Part of the New AIRbus family`);
}
else {
  console.log(`Not a part of AIRbus family`);
}

// practice exercises
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes('gun'))
    console.log(`You are not allowed on board`);
  else
    console.log(`Welcome aboard !`);
}
checkBaggage(`I have a laptop,some Food and a pocket knife`);
checkBaggage(`Socks and camera`)
checkBaggage(`Got some snacks and a gun for protection`)

//********************************* 
// 122 Working with strings #3
//*********************************

console.log(` `);

//split
console.log(`a + very+nice+string`.split(`+`)); // stores the elements in an array

console.log(`Jonas Schmedtmann`.split(` `));// split on space

const [firstName, lastName] = `Jonas Schmedtmann`.split(` `);
// join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(` `);
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(` `);
  const namesUpper = []
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice([1]));
  }
  console.log(namesUpper.join(` `));

}


capitalizeName(`jessica ann smith davis`);
capitalizeName(`jonas schmedtmann`);


// padding
const message = `Go to gate 23!`;
console.log(message.padStart(25, `+`));
console.log(`Jonas`.padStart(23, `*`));

console.log(`trial`.padStart(15, `*`).padEnd(25, `*`));


// real world example for credit card number
const maskCreditCard = function (number) {
  const str = number + ``; // converts to string
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
}

console.log(maskCreditCard(786598));

console.log(maskCreditCard(230110304019));

console.log(maskCreditCard(230110304020203312));

console.log(maskCreditCard(`122011030402020331212312`));

// repeat method

// allows to repeat a string multiple time

const message2 = `Bad weather... All departures delayed ... `;
console.log(message2.repeat(10));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`🛩`.repeat(n)}`);

}
planesInLine(10)
planesInLine(1)
planesInLine(3)
planesInLine(6)


//********************************* 
// 123 Challenge #3
//*********************************

console.log(` `);


/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// solution

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});