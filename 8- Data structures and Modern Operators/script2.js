'use strict'
console.log(`Second script file`);
// It will retrieve data from the first scirpt file also.

//********************** 
// 113 Looping objects, object keys, values and entries.
//**********************

// Object.keys() is a method that returns an array of a given object's own enumerable property names (keys)


//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open for ${properties.length} days: `;


for (const day of properties) {
  openStr += `${day}, `
}
console.log(openStr);


// Property values use object.values()

const values = Object.values(openingHours);
console.log(values); // returns array

//entire object

const entries = Object.entries(openingHours);
console.log(entries);

//[key,value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}



//********************** 
// 115 SETS (DATA STRUCTURE)
//**********************

// set is a unique collection of data

const orderSet = new Set(['pasta', 'pizza', 'pizza', 'risotto', 'pasta', 'pizza']);
console.log(orderSet);
console.log(new Set('Jonas'));

console.log(orderSet.size); // 3
console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread')); // has is method similar to includes method to arrays
orderSet.add('garlic bread');
orderSet.add('garlic bread');
orderSet.delete('risotto');
// orderSet.clear(); // deletes all the data
console.log(orderSet);

// set is not used to store data and retrieve
//it is used to check if the elements are unique or not.


//looping in set
for (const order of orderSet) {
  console.log(order);
}

// Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

const staffUnique = [...new Set(staff)]; // unpacked set used ... spread to unpack and create a new array
console.log(staffUnique);

console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size); // directly check size 

console.log(new Set('jonasschmedtmann').size); // gives the unqie letters in jonas name


//********************** 
// 116 MAPS (DATA STRUCTURE)
//**********************

const rest = new Map(); // map is used to create map first create empty

// then fill it up

rest.set('name', 'Classico Italiano') // similar to add method.
rest.set(1, `Firenze,Italy`);
rest.set(2, `Lisbon,Portugal`);
rest.set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set(`open`, 11).set(`close`, 23).set(true, `We are open :D`).set(false, `We are closed :(`);
console.log(rest);
console.log(rest.get(`name`));
console.log(rest.get(true));

const time = 21;
rest.get(time > rest.get(`open`) && time < rest.get(`close`)); // we are open (result of above is true)

console.log(rest.has(`categories`)); // true
rest.delete(2);
console.log(`This is a map`, rest); // displays rest map

// deletes all the data
// rest.clear();

console.log(rest.size); // to check size

// we can use arrays and objects as map keys
rest.set(document.querySelector(`h1`, `heading`));
const arr = [1, 2];
rest.set([1, 2], 'true');
console.log(rest.get(arr, 'test')); // undefined


//********************** 
// 117 Looping Maps
//**********************

// set method is used to populate map (add items to map)

const question = new Map([
  [`question`, `What is the best programming langauge in the world?`],
  [1, `C`],
  [2, `Java`],
  [3, `Javascript`],
  [`Correct`, 3],
  [true, `Correct Answer`],
  [false, `Try again !`],
]);

console.log(question);

// first element is the key and the second element is the value.

console.log(Object.entries(openingHours));
//convert a object to map.
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


console.log(``);
//Quic App
console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) {
    console.log(`Answer ${key}:${value}`);
  }
}
// const answer = Number(prompt(`Your answer`));
// console.log(answer);

// console.log(question.get(question.get(`Correct`) === answer));
;


// convert map to array 
console.log(...question);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);


//********************** 
// 118 Which Data Structure To Use?
//**********************

console.log(``);



//********************** 
// 119 Challenge #3
//**********************

console.log(``);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1).
const events = new Set([...gameEvents.values()]);
console.log(events);
// events.delete(`🔶 Yellow card`);

//2).
gameEvents.delete(64);
console.log(gameEvents);


//3).
let gameTime = [...gameEvents.keys()];
console.log(gameTime);

const gameTime2 = [...gameEvents.keys()].pop();
console.log(gameTime2); // 92 use this instead of gameTime[9] in log string.


// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

console.log(
  `An event happened, on average, every ${gameTime[9] / gameEvents.size} minutes`
);


// 4).
for (const [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`[First Half] ${key}:${value}`);
  }
  else {
    console.log(`[Second Half] ${key}:${value}`);
  }
}