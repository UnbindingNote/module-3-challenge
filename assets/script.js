// Setting global variables

var generateBtn = document.querySelector("#generate");
var specialChar = [
  "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
  "-", "_", "+", "=", "[", "{", "]", "}", "|", ",", "<", ".",
  ">", "'", "?"
];

var number = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var upperCa = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z"
];

var lowerCa = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"
];

var min = 7

var max = 129
// End of the global variables

// Start of password generation
function generatePassword() {
  // Debugger
  // Asking for the length user wants
  let passwordLength = prompt('How many characters? (8-128)');

  // Convert string to number
  var passwordEl = +passwordLength;
  // console.log(typeof passwordLength);
  // console.log(passwordEl);

  // Check if not a number, restart
  if (isNaN(passwordEl)) {
    alert("Numbers only, please!");
    return generatePassword();
  }
  // Given password length is number, check if in range before proceeding
  else if (passwordEl > min && passwordEl < max) {

    // Get valid types from user input
    var validTypes = generateTypes();

    // Empty array valid types will be added to
    var types = []

    // Add variables to array if confirm windows return true
    // concat = add
    if (validTypes[0] == true) {
      types = types.concat(specialChar)
    };
    if (validTypes[1] == true) {
      types = types.concat(number)
    };
    if (validTypes[2] == true) {
      types = types.concat(upperCa)
    };
    if (validTypes[3] == true) {
      types = types.concat(lowerCa)
    };

    // Empty string to hold password
    let newPassword = "";

    // Loop over password length to grab random values as selected
    for (let i = 0; i < passwordEl; i++) {

      // Generates random index
      let randomNum = Math.floor(Math.random() * types.length);

      // Concat values to password using random index
      newPassword = newPassword + types[randomNum]
    }
    return newPassword
  }
  // Is a number but not within range, restart
  else {
    alert("Length has to be between 8 & 128!");
    return generatePassword();
  };

}

// Setting confirm windows to pull types used in generator
function generateTypes() {

  // Confirm windows for user to pick valid types
  let specialEl = confirm('Would you like special characters? (!@#$...)');

  let numberEl = confirm('Would you like numbers? (0-9)');

  let upperEl = confirm("WOULD YOU LIKE UPPERCASE LETTERS?");

  let lowerEl = confirm("would you like lowercase letters?");

  // Returns array of booleans for types
  return [specialEl, numberEl, upperEl, lowerEl];
}
// End of the password generator



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
