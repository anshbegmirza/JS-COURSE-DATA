// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//055 Setting up vscode and prettier.

//056 Installing NODE JS

//057 Learning how to code

// type code and understand how it works

// practice more frequently

//keep in mind a big project you want to build which will help you keep discipline

//practice on codewars and leetcode

//practice coding on your own without a course.

//the difficult the path the bigger the victory

// don't be stuck in tutorial hell

// embrace the fact you will never know everything.

// start by building more advanced projects and stick to it.

// NEVER STOP LEARNING so keep on learning new concepts.

//We work for a company building a smart home thermometer. Our most recent task is this : "Given an array of temperatyres of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."


/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const calcTime = temps[i];
    if (calcTime > max) {
      max = calcTime;
    }
    if (calcTime < min) {
      min = calcTime;
    }
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitude(temperatures));

// console.log(calcTempAmplitude);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };

  // debugger; // to use debugger in browser.
  // console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
}
console.log(measureKelvin());


*/

//////////////////////////////////
// Coding Challenge #1
/* Given an array of forecasted maximum temperature, the thermometer displays a string with these temperatures.

Example : [17,21,23] will print "...17°C in 1dats ... 21°C in 2days ... 23°C in 3 days"

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Test Data 1 : [17,21,23]
Test data 2: [12,5,-5,0,4]
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (array) {
  let str = '... ';
  for (let i = 0; i < array.length; i++) {
    str = str + `${array[i]}°C` + ` in ${i + 1} days` + ' ... '
  }
  console.log(str);

}
typeof data1;
console.log(typeof (data1));

printForecast(data1);
printForecast(data2);

