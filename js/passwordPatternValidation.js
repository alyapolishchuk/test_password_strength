const password = document.getElementById("userPassword");
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
const easy = document.getElementById("easy");
const average = document.getElementById("average");
const strong = document.getElementById("strong");

//Validation

// When the user starts to enter in the password field
password.onkeyup = function () {
  // Validate letters
  const caseLetters = /[a-zA-Z]/g;
  if (password.value.match(caseLetters)) {
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

  if (password.value.length === 0) {
    easy.classList.remove("red");
    average.classList.remove("red");
    strong.classList.remove("red");
  }

  if (password.value.length <= 7) {
    easy.classList.add("red");
    average.classList.add("red");
    strong.classList.add("red");
  } else {
    easy.classList.remove("red");
    average.classList.remove("red");
    strong.classList.remove("red");
  }

  if (password.value.length >= 8) {
    lengthMark.classList.remove("noMark");
    lengthCross.classList.add("noCross");
    length.classList.add("green");
  } else {
    lengthCross.classList.remove("noCross");
    lengthMark.classList.add("noMark");
    length.classList.remove("green");
  }

  // Validate strength - easy
  if (password.value.length >= 8 && password.value.match(symbols)) {
    easy.classList.add("red");
  } else if (password.value.length >= 8 && password.value.match(numbers)) {
    easy.classList.add("red");
  } else if (password.value.length >= 8 && password.value.match(caseLetters)) {
    easy.classList.add("red");
  }

  // Validate strength - average
  if (
    password.value.length >= 8 &&
    password.value.match(symbols) &&
    password.value.match(numbers)
  ) {
    easy.classList.add("yellow");
    average.classList.add("yellow");
  } else if (
    password.value.length >= 8 &&
    password.value.match(numbers) &&
    password.value.match(caseLetters)
  ) {
    easy.classList.add("yellow");
    average.classList.add("yellow");
  } else if (
    password.value.length >= 8 &&
    password.value.match(symbols) &&
    password.value.match(caseLetters)
  ) {
    easy.classList.add("yellow");
    average.classList.add("yellow");
  } else {
    easy.classList.remove("yellow");
    average.classList.remove("yellow");
  }

  // Validate strength - strong
  if (
    password.value.length >= 8 &&
    password.value.match(symbols) &&
    password.value.match(numbers) &&
    password.value.match(caseLetters)
  ) {
    easy.classList.add("green");
    average.classList.add("green");
    strong.classList.add("green");
  } else {
    easy.classList.remove("green");
    average.classList.remove("green");
    strong.classList.remove("green");
  }

  // If there is no one of the characters

  if (
    password.value.length === 0 &&
    !password.value.match(symbols) &&
    !password.value.match(numbers) &&
    !password.value.match(caseLetters)
  ) {
    easy.classList.remove("red");
    average.classList.remove("red");
    strong.classList.remove("red");
  }
};
