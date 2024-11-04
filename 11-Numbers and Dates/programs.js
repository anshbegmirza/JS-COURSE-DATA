// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:  
// arr = [
// {
//     employee_id: 1,
//     employee_name: "Aman",
// },
// {
//     employee_id: 2,
//     employee_name: "Bhargava",
// },
// {
//     employee_id: 3,
//     employee_name: "Chaitanya",
// },
//  ]

// Output: 
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ] 

'use strict';

const inputArray = [
  {
    employee_id: 1,
    employee_name: "Aman",
  },
  {
    employee_id: 2,
    employee_name: "Bhargava",
  },
  {
    employee_id: 3,
    employee_name: "Chaitanya",
  },
];

const modifyProperty = function (arr) {
  const modifiedArray = arr.map(employee => {
    if (employee.employee_id === 2) {
      return {
        ...employee,
        employee_name: "Rahul",
      };
    }
    return employee;
  });
  return modifiedArray;
}

const check = modifyProperty(inputArray);
console.log(check);
