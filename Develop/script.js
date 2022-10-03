// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = [
  "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
  "-", "_", "+", "=", "[", "{", "]", "}", "|", ",", "<", ".",
  ">", "'", "?"
];

var numbers = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var upperCase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z"
];

var lowerCase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"
];



// Write password to the #password input
function writePassword() {
  // THEN I am presented with a series of prompts for password criteria
  // When prompted
  // Then I pick the criteria to use in the password
  // When prompted for length
  // Then I choose a length of at least 8 and max 128 characters
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
