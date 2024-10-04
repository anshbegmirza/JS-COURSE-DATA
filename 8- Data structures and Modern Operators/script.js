'use strict';


//********************** 
// 103 Destructuring Arrays in JS
//**********************


/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

};

*/

/*
// destructuring means breaking down into smaller parts

const arr = [2, 3, 4];
// noob way
const a = arr[0];
const b = arr[1];
const c = arr[2];

// unpacking and not destroying
// destructuring the right way
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//swap

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [secondary,main] using destructuring
[main, secondary] = [secondary, main]
console.log(main, secondary);


//Receive 2 return values from a function.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // r is undefiend because no value in parent.

*/




//********************** 
// 104 Destructuring Objects in JS
//**********************



// REFER TO THE CODE WRITTEN IN THE FINAL OF THIS FOLDER.


/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (starterIndex = 1, mainIndex = 2, time = '22:00', address) {
    // console.log(this);
    console.log(`Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]
      } will be delivered to ${address} at ${time}`);
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

// in objs order doesnot matter
//destructuring obj in JS
const { name, categories, openingHours, } = restaurant;
console.log(name, categories, openingHours);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);


//setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);


// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b,);


// nested objs in JS
// write property name and then the name of the inner property that you want to destructure.
const { fri: { open, close } } = openingHours;
console.log(open, close);


const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);
*/

//********************** 
// 105 SPREAD OPERATOR (...)
//**********************
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);


// ... expands all the elements inside an array. breaks all the smaller modules
const newArr = [1, 2, ...arr];
console.log(newArr);
// logs all the individual elements of the newArr.
console.log(...newArr);


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);


// copy of array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);


// Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];


// let menu = [];
// menu.push(...restaurant.mainMenu);
// menu.push(...restaurant.starterMenu);
// console.log(menu);


// Iterables; arrays, strings,maps,sets not objects.

// const str = 'jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);

// console.log(`${...str} Schmedtmann`);
// unexpected token window coz we can't use spread operator in template literal string.

// Real world example

// const ingredients = [prompt(`Let\'s make pasta! Ingredient 1?`), prompt(`Ingredient 2?`), prompt(`Ingredient 3?`)];

// restaurant.orderPasta(...ingredients);

// spread operator also works on objects

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // new obj
console.log(restaurant.name); // old obj



//**********************
// 106 Rest patterns and parameters
//**********************



// 1) Deestructuring

// Spread, coz on right side of =
const arr1 = [1, 2, 3, ...[2, 3, 4]];
console.log(arr1);
//Rest, coz on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);


// keep the rest element the last element.
const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, Risotto, otherFood);


// Objects (remaining elements will be collected in a object just like in array remaining are collected in a array)

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(sat); //

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza(`olives`, `onions`, `spinach`, `mushrooms`);




//**********************
// 107 Short circuiting (&& and ||)
//**********************
/*
console.log(`--- OR ---`);

// 1) Use any data types, return any data types , short-ciruiting
console.log(3 || `Jonas`);
console.log('' || `Jonas`);
console.log(true || 0);
console.log(undefined || null);

// logs first truthy value which is hello
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);


console.log(`--- AND ---`);
// and operator short circuits when the first falsy value is found and returns it without checking further for anything.
console.log(0 && `Jonas`); // 0 is falsy
console.log(7 && 'jonas'); // 7 is truth (>1)
console.log('hello' && 23 && null && 'jonas');// null is first falsy, returning it

//practical example.
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant

*/

//********************** 
// 108 Nullish Coalescing operator (??)
//**********************

/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish null and undefined.
const guestsCoorect = restaurant.numGuests ?? 10;
console.log(guestsCoorect);
*/

//********************** 
// 109 Coding Challenge #1
//**********************

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀*/

/////////////////
//Data for challenge
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.
const [players1, players2] = game.players;
// console.log(players1, players2);

//2.
const [gk1, ...otherPlayers1] = players1;
// console.log(gk1, otherPlayers1);

const [gk2, ...otherPlayers2] = players2;
// console.log(gk2, otherPlayers2);

//3.
const allplayers = [...players1, ...players2];
// console.log(allplayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);


const printGoals = function (...players) {
  console.log((`${players.length} goals were scored`));
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7.
const team1 = game.team1;
const team2 = game.team2;
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

//********************** 
// 110 Looping Arrays the for loop
//**********************

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);


for (const item of menu) {
  console.log(item);
}
//entries is a method on array
console.log(menu.entries()); // array iterator{}
console.log([...menu.entries()]);


// old way of destructuring a array
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}:${item[1]}`);
}

//using the destructuring method 
console.log(`using new way`);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}