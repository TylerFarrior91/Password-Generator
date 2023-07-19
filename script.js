// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate a random password
function generatePassword() {
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Characters to include in the password
  var charLower = "abcdefghijklmnopqrstuvwxyz".split("");
  var charNumber = "0123456789".split("");
  var charSpecial = "!@#$%^&*()_-+=".split("");
  
  var passwordHat = []
  var password = "";
  
  
  var passwordLength = prompt("How long would you like your password to be?(8-128)");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a length between 8 - 128. Please retry");
    generatePassword()
  }

  if(confirm("Do you want uppercase letters in your password?")) {
    passwordHat = passwordHat.concat(charUpper)
  } 
  if(confirm("Do you want lowercase letters in your password?")) {
    passwordHat = passwordHat.concat(charLower)
  }
  if(confirm("Do you want numbers in your password?")) {
    passwordHat = passwordHat.concat(charNumber)
  }
  if(confirm("Do you want special characters in your password?")) {
    passwordHat = passwordHat.concat(charSpecial)
  }
  if(passwordHat.length === 0) {
    alert("You need to choose atleast one type of character, to build a password. Please retry");
    return "";
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordHat.length);
    password += passwordHat[randomIndex];
  }

  return password;
}
