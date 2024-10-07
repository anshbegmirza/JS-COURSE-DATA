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
orderSet.delete('risotto')
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
console.log(rest);

// deletes all the data
// rest.clear();

console.log(rest.size); // to check size

// we can use arrays and objects as map keys
rest.set(document.querySelector(`h1`, `heading`));
const arr = [1, 2];
rest.set([1, 2], 'true');
console.log(rest.get(arr, 'test')); // undefined
