console.log('266: Exporting and Importing in ES6 Modules');

/*
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
*/

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


import cloneDeep from './node_modules/lodash-es/cloneDeep.js';