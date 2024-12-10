console.log('266: Exporting and Importing in ES6 Modules');


// importing modules

// addToCart('bread', 5)
// console.log(totalPrice, totalQuantity);
// console.log(price, qty);
// import { addToCart, totalPrice as price, qty } from "./shoppingCart.js"


// import * as ShoppingCart from "./shoppingCart.js";
// // import "./clean.js";


// console.log(`importing modules`);

// ShoppingCart.addToCart('bread', 5);

// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.totalQuantity);

import add, { cart } from "./shoppingCart.js";

add('pizza', 2);
add('bread', 5);
add('apples', 4);
add('banana', 12);
console.log(cart);


/*
console.log(`267: The Module Pattern`);

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, qty) {
    cart.push(product, qty);
    console.log(`${qty} ${product} was added to the cart`);
  };

  const orderStock = function (product, qty) {
    // cart.push(product, qty);
    console.log(`${qty} ${product} ordered stock from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  }
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost); // undefined.
console.log(shoppingCart2.orderStock); // undefined.
*/

console.log(`268: CommonJS Modules`);

// // export for node js
// export.addToCart = function (product, qty) {
//   cart.push(product, qty);
//   console.log(`${qty} ${product} was added to the cart`);
// };

// // imoprt  for node js
// const { addToCart } = require('./shoppingCart.js');

//////////////////
// introduction too npm

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {
      product: 'bread', quantity: 5
    },
    {
      product: 'pizza', quantity: 5
    },
  ],
  user: { loogedIn: true }
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);


console.log(stateDeepClone);

console.log(`271 : Bundling With Parcel and NPM Scripts`);

// whenever we modify a new module, the page will be updated/

if (module.hot) {
  module.hot.accept();
}

class PersonCl {
  greeting = `Hey`;

  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new PersonCl('Jonas') // it works.

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';

// importing specific parts which we require.
// import 'core-js/stable/array/find.js'
// import 'core-js/stable/promise'

// polyfilling async function

import 'regenerator-runtime/runtime'


console.log(`273: Modern, Clean and Declarative JavaScript Programming`);
