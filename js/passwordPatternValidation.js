const password = document.getElementById("userPassword");
const capital = document.getElementById("capital");
const capitalCross = document.getElementById("capitalCross");
const capitalMark = document.getElementById("capitalMark");
const letter = document.getElementById("letter");
const letterCross = document.getElementById("lettersCross");
const letterMark = document.getElementById("lettersMark");
const number = document.getElementById("number");
const numberCross = document.getElementById("numbersCross");
const numberMark = document.getElementById("numbersMark");
const symbol = document.getElementById("symbol");
const symbolCross = document.getElementById("symbolsCross");
const symbolMark = document.getElementById("symbolsMark");
const length = document.getElementById("length");
const lengthCross = document.getElementById("lengthCross");
const lengthMark = document.getElementById("lengthMark");

//Validation

// When the user starts to enter in the password field
password.onkeyup = function () {
  // Validate capital letters
  const upperCaseLetters = /[A-Z]/g;
  if (password.value.match(upperCaseLetters)) {
    capitalMark.classList.remove("noMark");
    capitalCross.classList.add("noCross");
    capital.classList.add("green");
  } else {
    capitalCross.classList.remove("noCross");
    capitalMark.classList.add("noMark");
    capital.classList.remove("green");
  }

  // Validate lowercase letters
  const lowerCaseLetters = /[a-z]/g;
  if (password.value.match(lowerCaseLetters)) {
    letterMark.classList.remove("noMark");
    letterCross.classList.add("noCross");
    letter.classList.add("green");
  } else {
    letterCross.classList.remove("noCross");
    letterMark.classList.add("noMark");
    letter.classList.remove("green");
  }

  // Validate numbers
  const numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
    numberMark.classList.remove("noMark");
    numberCross.classList.add("noCross");
    number.classList.add("green");
  } else {
    numberCross.classList.remove("noCross");
    numberMark.classList.add("noMark");
    number.classList.remove("green");
  }

  // Validate symbols
  const symbols = /[§±!@#$%^&*:;\|/?.,`~]/g;
  if (password.value.match(symbols)) {
    symbolMark.classList.remove("noMark");
    symbolCross.classList.add("noCross");
    symbol.classList.add("green");
  } else {
    symbolCross.classList.remove("noCross");
    symbolMark.classList.add("noMark");
    symbol.classList.remove("green");
  }

  // Validate length
  if (password.value.length >= 8) {
    lengthMark.classList.remove("noMark");
    lengthCross.classList.add("noCross");
    length.classList.add("green");
  } else {
    lengthCross.classList.remove("noCross");
    lengthMark.classList.add("noMark");
    length.classList.remove("green");
  }
};
