// // const password = document.getElementById("userPassword");
// // const easyPassword = document.getElementById("easy");
// // const averagePassword = document.getElementById("average");
// // const strongPassword = document.getElementById("strong");

// // const letter = /[a-z]/g;
// // const capital = /[A-Z]/g;
// // const symbol = /[§±!@#$%^&*:;|/?.,`~]/g;
// // const number = /[0-9]/g;

// // Проверка сложности пароля
// // function checkDifficulty() {
// //   let passwordValue = password.value;
// //   if (passwordValue.length < 8) {
// //     easyPassword.className.add("red");
// //     averagePassword.className.add("red");
// //     strongPassword.className.add("red");
// //   } else {
// //     easyPassword.className.remove("red");
// //     averagePassword.className.remove("red");
// //     strongPassword.className.remove("red");
// //   }

// //   var difficulty = 0;
// //   if (password.search(lowerCasePattern) >= 0) difficulty++;
// //   if (password.search(upperCasePattern) >= 0) difficulty++;
// //   if (password.search(digitsPattern) >= 0) difficulty++;
// //   if (password.search(specialCharsPattern) >= 0) difficulty++;

// //   switch (difficulty) {
// //     case 1:
// //       showMessage(Messages.IS_TOO_EASY, Colors.ERROR);
// //       break;
// //     case 2:
// //       showMessage(Messages.EASY, Colors.EASY);
// //       break;
// //     case 3:
// //       showMessage(Messages.MEDIUM, Colors.MEDIUM);
// //       break;
// //     case 4:
// //       showMessage(Messages.HARD, Colors.HARD);
// //       break;
// //   }
// // }










// const password = document.getElementById("password");
// const easyPassword = document.getElementById("easy");
// const averagePassword = document.getElementById("average");
// const strongPassword = document.getElementById("strong");

// const lowerCasePattern = /[a-z]/g;
// const upperCasePattern = /[A-Z]/g;
// const digitsPattern = /[0-9]/g;
// const specialCharsPattern = /[§±!@#$%^&*:;\|/?.,`~]/g;

// const Colors = Object.freeze({
//   EASY: "#FFCE44",
//   AVERAGE: "#4C8BF5",
//   STRONG: "#18A15F",
// });

// const Messages = Object.freeze({
//   EASY: "EASY!",
//   AVERAGE: "AVERAGE!",
//   STRONG: "AVERAGE!",
// });

// function checkDifficulty() {
//   const passwordValue = password.value;
//   if (passwordValue.length < 8) {
//     showMessage(Messages.EASY, Colors.ERROR);
//     return;
//   }

//   var difficulty = 0;
//   if (passwordValue.search(lowerCasePattern) >= 0) difficulty++;
//   if (passwordValue.search(upperCasePattern) >= 0) difficulty++;
//   if (passwordValue.search(digitsPattern) >= 0) difficulty++;
//   if (passwordValue.search(specialCharsPattern) >= 0) difficulty++;

//   switch (difficulty) {
//     case 1:
//       showMessage(Messages.IS_TOO_EASY, Colors.ERROR);
//       break;
//     case 2:
//       showMessage(Messages.EASY, Colors.EASY);
//       break;
//     case 3:
//       showMessage(Messages.MEDIUM, Colors.MEDIUM);
//       break;
//     case 4:
//       showMessage(Messages.HARD, Colors.HARD);
//       break;
//   }
// }

// function changeColor(text, color) {
//   if (color === undefined) color = Colors.NONE;
//   passwordDifficultyLabel.style.color = color;
//   passwordDifficultyLabel.innerText = text;
//   return true;
// }



      var passwordBox = document.getElementById("userPassword");
      var passwordDifficultyLabel = document.getElementById(
        "password-difficulty"
      );

      var invalidPattern =
        /[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\-\+\=\\\|\/\.\,\:\;\[\]\{\}]/g;
      var lowerCasePattern = /[a-z]/g;
      var upperCasePattern = /[A-Z]/g;
      var digitsPattern = /[0-9]/g;
      var specialCharsPattern =
        /[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\\\|\/\.\,\:\;\[\]\{\}]/g;

      var Colors = Object.freeze({
        NONE: "#000000",
        ERROR: "#DD5044",
        EASY: "#FFCE44",
        MEDIUM: "#4C8BF5",
        HARD: "#18A15F",
      });

      var Messages = Object.freeze({
        IS_TOO_SHORT: "Пароль слишком короткий!",
        IS_TOO_EASY: "Пароль слишком простой!",
        HAS_INVALID_CHARS: "Пароль содержит недопустимые символы!",
        EASY: "Ненадежный пароль!",
        MEDIUM: "Надежный пароль!",
        HARD: "Очень надежный пароль!",
      });

      function checkDifficulty() {
        var password = passwordBox.value;
        if (password.length < 6) {
          showMessage(Messages.IS_TOO_SHORT, Colors.ERROR);
          return;
        }
        if (password.search(invalidPattern) >= 0) {
          showMessage(Messages.HAS_INVALID_CHARS, Colors.ERROR);
          return;
        }

        var difficulty = 0;
        if (password.search(lowerCasePattern) >= 0) difficulty++;
        if (password.search(upperCasePattern) >= 0) difficulty++;
        if (password.search(digitsPattern) >= 0) difficulty++;
        if (password.search(specialCharsPattern) >= 0) difficulty++;

        switch (difficulty) {
          case 1:
            showMessage(Messages.IS_TOO_EASY, Colors.ERROR);
            break;
          case 2:
            showMessage(Messages.EASY, Colors.EASY);
            break;
          case 3:
            showMessage(Messages.MEDIUM, Colors.MEDIUM);
            break;
          case 4:
            showMessage(Messages.HARD, Colors.HARD);
            break;
        }
      }

      function showMessage(text, color) {
        if (color === undefined) color = Colors.NONE;
        passwordDifficultyLabel.style.color = color;
        passwordDifficultyLabel.innerText = text;
        return true;
      }