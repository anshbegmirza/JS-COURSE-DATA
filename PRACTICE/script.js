// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]
'use strict';

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];


const mergeArrayAndRemoveDuplicates = function (arr1, arr2) {
  //Merging two arrays
  arr1 = arr1.concat(arr2);

  //Removing Duplicates
  for (let i = 0; i < arr1.length; i++) {

    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] === arr1[j]) {
        arr1.splice(j, 1); // remove duplicate
        j--; // adjusted index
      }
    }
  }
  return arr1;
}

console.log(mergeArrayAndRemoveDuplicates(arr1, arr2));














/*
const mergeArray = function (arr1, arr2) {
  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    let isInArray3 = false;

    for (let j = 0; j < arr3.length; j++) {
      if (arr2[i] === arr3[j]) {
        isInArray3 = true;
        break;
      }
    }

    if (!isInArray3) {
      arr3.push(arr2[i]);
    }
  }

  return arr3;
}

// console.log(mergeArray(arr1, arr2));

const arr3 = [2, 3, 13, 2, 3, 5];
const arr4 = [2, 3, 3, 4, 5, 6, 7,];
console.log(mergeArray(arr3, arr4));*/