// exporting modules

console.log(`exporting modules`);

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, qty) {
  cart.push(product, qty);
  console.log(`${qty} ${product} was added to the cart`);
};


const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

export default function (product, qty) {
  cart.push(product, qty);
  console.log(`${qty} ${product} was added to the cart`);
};

