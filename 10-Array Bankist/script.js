'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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


const displayMovements = function (movements, sort = false) {

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;




  containerMovements.innerHTML = ''; // empties the whole container.

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
          <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
          <div class="movements__value">${mov}€</div>
    `;

    containerMovements.insertAdjacentHTML(`afterbegin`, html)
  });
};
// displayMovements(account1.movements);


const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  acc.balance = balance;
  labelBalance.textContent = `${balance}€`;
}

// calcDisplayBalance(account1.movements);



const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};



const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLocaleLowerCase().split(` `).map(function (name) {
      return name[0];
    }).join(``);
  })
}

// const user = 'Steven Thomas Williams'; // stw

// console.log(createUsernames(user));

createUsernames(accounts);
console.log(accounts);

const updateUI = acc => {
  //Display movements
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc)
}



// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // prevent form from submitting.

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  // if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
  // console.log(`logged in`);
  // }

  //used optional chaining, if current account exists then only further read
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(`logged in`);
    // Display ui and show balance
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(` `)[0]}`

    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = ``;

    inputLoginPin.blur();


    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();//does not reload the page

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = ''


  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    // transfer code
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    console.log(`Loan issued ${amount}`);

    // Updates UI
    updateUI(currentAccount);
  }

});


// Loan (using some method of array)
// only grants a loan if we have a deposit of atleast 10%

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0
    && currentAccount.movements.some(mov => mov > amount * 0.1)
  ) {
    // add the movement
    currentAccount.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = ``;
});





// Closing event
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(`Account Deleted !`);

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {

    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);

    // delete account
    accounts.splice(index, 1);

    // hide ui
    containerApp.style.opacity = 0;
  }

  inputClosePin.value = inputCloseUsername.value = ` `;
});


// sorting functionality
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


/*
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*

//*********************************
// 138 Array methods
//*********************************

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice method
arr.slice(2)
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // 2 and 3
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// to create a shallow copy
console.log(arr.slice());
console.log([...arr]);


// SPLICE METHOD
// it changes the original array

console.log(arr.splice(2));
console.log(arr);
console.log(typeof (arr[1]));
arr.splice(-1);

// Use mdn to learn more about array methods

// Reverse

arr = ['a', 'b', 'c', 'd', 'e']
const arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse()); // also changes the original array


// concat method

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join method

console.log(letters.join(`-`)); // return a string
*/

// 141 looping arrays foreach loop

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} deposited ${movement}`);
  }
  else {
    console.log(`Movement ${i + 1} withdrew ${Math.abs(movement)}`);
  }
}
console.log(` `);

console.log(`foreach loop`);
console.log(` `);


// can not break for each loop it will loop the entire array.

movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} deposited ${movement}`);
  }
  else {
    console.log(`Movement ${i + 1} withdrew ${Math.abs(movement)}`);
  }
})

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// use more for each loops

//*********************************
// 142 Foreach for maps and sets
//*********************************


// with a map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
})


// set
const currenciesUnique = new Set(['USD', "GBP", 'USD', "EUR", "EUR"])
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
})



//*********************************
// 143 Bankist App
//*********************************
// brief overview of the application



//*********************************
// 144 Dom manipulation
//*********************************
// brief overview of the application
*/


/*
//*********************************
// 147 The Map method of Arrays
//*********************************

// One of the most used array methods.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementUSD = movements.map(mov =>
  mov * eurToUsd
);



console.log(movementUSD, movements);


// Created a new array and did the same thing.
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd)
}

console.log(movementsUSDfor);

//used arror function
const movementsDescription = movements.map((mov, i) => {
  if (mov > 0) {
    return `Movement ${i + 1} deposited ${mov}`;
  }
  else {
    return `Movement ${i + 1} withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementsDescription);


//*********************************
// 148 Computing Usernames
//*********************************
*/

/*
//********************************* 
// 149 Filter Methods
//********************************* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0; // only with this condition true will be added in deposits array
});
console.log(deposits);
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0)
    depositsFor.push(mov)
}
console.log(depositsFor);


const withdrawls = movements.filter(function (mov) {
  return mov < 0;
})
console.log(withdrawls);


//********************************* 
// 150 Reduce method of array
//*********************************

console.log(movements);
// accumulator -> snowball
// first argument is accumulator
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}:${acc}`);
  return acc + cur;
  // return acc + Math.abs(cur);
}, 0);
console.log(balance);

// the 0 is the initial value for first iteration


// maximum value of array
const max = movements.reduce(function (acc, mov) {
  if (acc > mov)
    return acc;
  else
    return mov;
}, 200);
console.log(max);


//********************************* 
// 152 The Magic of chaining methods
//*********************************
const eurToUsd = 1.1;

// Pipeline  
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawl = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawl);


// find only return the element we are looking for, not a new array.

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account);



//********************************* 
// 153 Find Index method
//*********************************

//********************************* 
// 158 Some and every
//*********************************
console.log(movements);
// can be used to see if a value is in the array or not
console.log(movements.includes(-130));
const deposit = mov => mov > 0;
// SOME:CONDITION
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//every
console.log(movements.every(deposit));
// false

console.log(account4.movements.every(deposit)); // true because all the values are above 0


// separate callback
console.log(movements.filter(deposit));
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.findIndex(deposit));



//********************************* 
// 159 Flat and Flatmap
//*********************************
const arr = [1, 2, 3, [4, 5, 6], [6, 7, 8]];
console.log(arr.flat()); // flates the array



const arrDeep = [1, 2, 3, [4, 5, 6], [5, 6, 7, [57, 8, 12]], [6, 7, 8]];

console.log(arrDeep.flat(3)); // 3 is the depthlevel we want to go.

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);


// flat map combines flat and map all together

//flatmap

const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance2);






//********************************* 
// 160 Sorting Arrays
//*********************************

//strings
const owners = [`jonas`, `zack`, 'adam', `martha`];
console.log(owners.sort()); // mutates the original array

console.log(movements);
console.log(movements.sort());


//sort( ) works by converting first numbers to string and then sorts them, which is wrong order




//return < 0,a,b (keep order) 1 (can be anynumber positive)
//return > 0,b,a (switch order)-1 (can be any number negative)
// for ascending

// movements.sort((a, b) => {
//   if (a > b)
//     return 1;
//   if (b > a)
//     return -1;
// });

// since a is greater a-b will be positive.
movements.sort((a, b) => a - b);

console.log(movements);
// for ascending

// movements.sort((a, b) => {
//   if (a > b)
//     return -1;
//   if (b > a)
//     return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);


const arr6 = [1, 2, 3, 4, 5, 6, 7,];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
x.map(() => 5);
console.log(x);

x.fill(1, 3, 5)
console.log(x);
arr6.fill(23, 2, 6);
console.log(arr6);


// array.from

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);

console.log(z);



labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll(`.movements__value`), el => Number(el.textContent.replace('€', ' ')));
  console.log(movementsUI);

})