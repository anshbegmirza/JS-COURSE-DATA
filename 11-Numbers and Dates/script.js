'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-10-19T17:01:17.194Z',
    '2024-10-20T23:36:17.929Z',
    '2024-10-24T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {

  const calcDaysPassed = (date1, date2) => Math.round(Math.abs((date2 - date1)) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDay()}`.padStart(2, `0`);

  // const month = `${date.getMonth() + 1}`.padStart(2, `0`);

  // const year = date.getFullYear();

  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);

};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: `currency`,
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);


    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">
        ${formattedMov}
        </div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {

  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);


  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);


  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency)


  // `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};


const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);;
    // in each call, print the remaining time to ui
    labelTimer.textContent = `${min}:${sec}`;


    // when 0 seconds, stop timer and logout user.
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    //DEcrease one seond
    time--;
  };





  // set time to 5mins
  let time = 10;
  // call the timer everysecond
  tick();
  const timer = setInterval(tick, 1000)
  return timer;
}

///////////////////////////////////////
// Event handlers
let currentAccount, timer;


// // Fake always loggin in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;


// day/month year // experimenting



//login functionality
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      } `;
    containerApp.style.opacity = 100;

    // create current date and time
    // const now = new Date();
    // const day = `${now.getDay()}`.padStart(2, `0`);
    // const month = `${now.getMonth() + 1}`.padStart(2, `0`);
    // const year = now.getFullYear();
    // const hour = now.getHours();
    // const min = now.getMinutes();

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;


    const now = new Date();
    const options = {
      hour: `numeric`,
      minute: `numeric`,
      day: `numeric`,
      month: `long`,
      year: `numeric`,
      weekday: `long`,
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);


    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();


    // Update UI
    updateUI(currentAccount);
  }
});


//Transfer functionality
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);


    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});


// Loan functionality
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(Number(inputLoanAmount.value));

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {

      // Add movement
      currentAccount.movements.push(amount);


      // add loan date
      currentAccount.movementsDates.push(new Date().toISOString());


      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();


    }, 2500);
  }
  inputLoanAmount.value = '';
});


// Closing functionality
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

// Sorting functionality

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


//166 Numbers and Dates
/*
console.log(23 === 23.0); // true
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // this should be true, so accept the fact and move on

console.log(3 / 10);
console.log(Number('23'));
console.log((+'23')); // type coercion in JS

// every function is a object
//parsing
console.log(Number.parseInt(`30px`, 10));
console.log(Number.parseInt(`e23`, 10));

console.log(Number.parseFloat(`  2.5rem`, 10));

//Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN(`20`));
console.log(Number.isNaN(+`20X`));
console.log(Number.isNaN(23 / 0));

// isFinite is best of checking a value is a number
console.log(Number.isFinite(23));
console.log(Number.isFinite(+`20`));
console.log(Number.isFinite(20 / 0));

console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23));
*/

/*
//167 Math and Rounding


console.log(Math.sqrt(25));
console.log(25 ** 1 / 2);
//max value
console.log(Math.max(5, 17, 23, 11, 12, 125, 22));
console.log(Math.max(5, 17, 23, 11, 12, '125', 22));
console.log(Math.max(5, 17, 23, 11, '12px', '125', 22));

//min value
console.log(Math.min(5, 17, 23, 11, '12px', '125', 22));

// area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);


const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));


// Rounding Inters
console.log(Math.trunc(23.2));

console.log(Math.ceil(23.7)); // round down

console.log(Math.round(23.4));
console.log(Math.round(23.7));

console.log(Math.floor(23.7)); // round up


console.log(Math.floor(23.7));
console.log(Math.ceil(23.7));

console.log(Math.trunc(-23.2)); // -23
console.log(Math.floor(-23.2)); // -24
console.log(Math.trunc(23.2)); // 23
console.log(Math.floor(23.2)); // 23



// Rounding decimals
console.log(`Rounding Decimals`);
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35

*/

/*
//167 Numbers, Remainder Operator

console.log(5 % 2); // 1
console.log(5 / 2); // 2.5
console.log(8 % 3); // 3 + 3 +2
console.log(8 / 3); // 2.666

console.log(6 % 2); // 0
console.log(6 / 2); // 3

console.log(7 % 2); //1
console.log(7 / 2); //3.5

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(2));
console.log(isEven(23));
console.log(isEven(29));

labelBalance.addEventListener('click', function () {

  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    {
      if (i % 2 === 0) {
        row.style.backgroundColor = 'orangered';
      }
    }
  });
});

console.log(labelBalance);


//169 Working BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(121354879751648447122567878798735n);
console.log(typeof 121354879751648447122567878798735n);
console.log(BigInt(879784651231256887987415310.35648798));
console.log(typeof BigInt(879784651231256887987415310.35648798));


// Operations
console.log(10000n + 10000n);
console.log(89798765845435464798797564657654n * 4877987135168764549873543n);

const huge = 789898765454316811648647n;
const num = 23;
// console.log(huge * num); // does not work correctlu
console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n == 20); // no type coercion
console.log(20n === 20); // with type coercion 
console.log(typeof 20n);

console.log(huge + `is really big!!!`);


// Math operations do not work on bigint

// Division
console.log(10n / 3n);
console.log(10 / 3);



// 170 Dates

// Create a date
/*
const now = new Date();
console.log(now);

console.log(new Date(`Thu Oct 24 2024 18: 40: 41`));

console.log(new Date(`December 24, 2017`));

console.log(new Date(account1.movements[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));

// Months in js are 0 based, meaning they start from 0 to 11 0=january and 11=december

console.log(new Date(2037, 10, 35));
console.log(new Date(2037, 10, 31));
console.log(new Date(2037, 10, 29));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/


/*
// working with dates 
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getMonth());
console.log(future.getHours());
console.log(future.getSeconds());

console.log(future.toISOString());
console.log(future.getTime()); // amount of time passed
console.log(Date.now());

console.log(new Date(2142237180000));

future.setFullYear(2040);
console.log(future);

*/


const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));
console.log(+(future));


const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1)) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 10, 19), new Date(2037, 12, 16,));
console.log(`${days1} days`);


const num = 3884764.23;


const options = {
  style: `unit`,
  // unit: `mile-per-hour`
  unit: `celsius`,
  currency: 'EUR',
  // useGrouping: false,

}


console.log(`US: `, new Intl.NumberFormat('en-US', options).format(num));

console.log(`Germany: `, new Intl.NumberFormat('de-DE', options).format(num));

console.log(`Syria: `, new Intl.NumberFormat('ar-SY', options).format(num));

console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(num));
// uk or great britain and language is english


//Settimeout


// setTimeout(() => console.log(`Here is your Pizza !`), 3000);
console.log(`waiting...`);


// execution does not stop, for setTimeout(); js will count time and the code below will be executed.

// const ingredients = ['olives', ''] // pizza timer works
const ingredients = ['olives', 'spinach']

const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2} !`), 3000, ...ingredients);

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);



// setInterval

// setInterval(() => {
//   const now = new Date();
//   console.log(now);
// }, 1000);