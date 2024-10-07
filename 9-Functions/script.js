'use strict';

//********************************* 
// 126 Default Parameters
//*********************************

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  //previous versions
  // numPassengers = numPassengers || 1;
  // price = price || 199;


  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking)
}
createBooking(`LH123`);
createBooking(`LH234`, 2, 900);
createBooking(`LH123`, 5);

// when we want to skip a arguement we keep it undefined.
createBooking('AZ902', undefined, undefined);//default parameters will be called.