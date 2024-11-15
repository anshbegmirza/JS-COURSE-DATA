'use strict';

const generateBtn = document.getElementById('generate-password');

const displayPassword = document.getElementById('password');

const copyBtn = document.getElementById('copybtn')


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const numbers = "0123456789";
const symbols = "@#$_+%=^&*()-_+=~`!?:;'.,/|\<>[]{} "
const allChars = upperCase + lowerCase + numbers + symbols;

const createPassword = function () {
  let password = ""
  let length = 12;
  while (length > password.length) {

    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  displayPassword.value = password;
  // console.log(password);

};

const copyToClipboard = function () {
  displayPassword.select();
  navigator.clipboard.writeText(displayPassword.value);
}


generateBtn.addEventListener('click', createPassword);

copyBtn.addEventListener('click', copyToClipboard)