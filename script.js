// Array of special characters to be included in password
var specialCharacters = [
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

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

//Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = parseInt(
    prompt("How many characters would you like to use between 8 and 128?")
  );

  if (passwordLength >= 8 && passwordLength < 129) {
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
// Function to generate password with user input
function generatePassword() {
  let userPasswordChoices = getPasswordOptions();
  let userChoice = "";
  let password = "";

  if (userPasswordChoices.uppers) {
    userChoice += upperCasedCharacters.join("");
  }
  if (userPasswordChoices.lowers) {
    userChoice += lowerCasedCharacters.join("");
  }
  if (userPasswordChoices.nums) {
    userChoice += numericCharacters.join("");
  }
  if (userPasswordChoices.specials) {
    userChoice += specialCharacters.join("");
  }

  for (let i = 0; i < userPasswordChoices.strength; i++) {
    let random = Math.floor(Math.random() * userChoice.length);
    password += userChoice.charAt(random);
  }

  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
