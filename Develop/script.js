// Assignment Code
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



function generatePassword() {
  // debugger
  let passwordLength = prompt('How many characters? (8-128)');

  console.log(typeof passwordLength);
  var passwordEl = +passwordLength;
  console.log(passwordEl);

  if (isNaN(passwordEl)) {
    alert("Numbers only, please!");
    return generatePassword();
  }
  else if (passwordEl > min && passwordEl < max) {
    var validTypes = generateTypes();
    var types = []

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

    let newPassword = "";
    for (let i = 0; i < passwordEl; i++) {

      let randomNum = Math.floor(Math.random() * types.length);
      newPassword = newPassword + types[randomNum]
    }
    return newPassword
  }
  else {
    alert("Length has to be between 8 & 128!");
    return generatePassword();
  };

}

function generateTypes() {
  let specialEl = confirm('Would you like special characters? (!@#$...)');

  let numberEl = confirm('Would you like numbers? (0-9)');

  let upperEl = confirm("WOULD YOU LIKE UPPERCASE LETTERS?");

  let lowerEl = confirm("would you like lowercase letters?");

  return [specialEl, numberEl, upperEl, lowerEl];
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
