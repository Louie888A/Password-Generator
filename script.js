const generateBtn = document.querySelector("#generate");

//arrays of upper and lower case letters
const upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//array of numbers and special characters
const numericChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specChars = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

//have the generate button ask about the different types of characters to use
function passwordOptions() {
  let passwordLength = parseInt(
    prompt("How many characters would you like to use between 8 and 128?")
  );

  if (passwordLength > 7 && passwordLength < 129) {
    let uppers = confirm("Would you like to use uppercase letters?");
    let lowers = confirm("Would you like to use lowercase letters?");
    let nums = confirm("Would you like to use numbers?");
    let specials = confirm("Would you like to use special characters?");

    let options = {
      strength: passwordLength,
      uppers: uppers,
      lowers: lowers,
      nums: nums,
      specials: specials,
    };
    //Sends the user password options out to generatePassword()
    return options;
  } else {
    alert("Please enter a number between 8 and 128");
  }
}

function generatePassword() {
  //calls in the user choices from passwordOptions()
  let userPasswordChoices = passwordOptions();
  let userChoice = "";
  let password = "";

  if (userPasswordChoices.uppers) {
    userChoice += upperCaseLetters.join("");
  }
  if (userPasswordChoices.lowers) {
    userChoice += lowerCaseLetters.join("");
  }
  if (userPasswordChoices.nums) {
    userChoice += numericChars.join("");
  }
  if (userPasswordChoices.specials) {
    userChoice += specChars.join("");
  }

  for (let i = 0; i < userPasswordChoices.strength; i++) {
    let random = Math.floor(Math.random() * userChoice.length);
    password += userChoice.charAt(random);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  const finalPassword = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
