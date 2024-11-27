// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

'use strict';

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];


const calcDifference = function (arr1, arr2) {
  let unique = [];
  //checking in 1st
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      unique.push(arr2[i]);
    }
  }

  //checking in 2nd
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      unique.push(arr1[i]);
    }
  }
  return unique;
};

console.log(calcDifference(arr1, arr2));
