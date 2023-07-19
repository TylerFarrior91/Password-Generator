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
  var passwordLength = prompt("How long would you like your password to be?(8-128)");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a length between 8 - 128. Please retry");
    generatePassword()
  }

  // Length of the password
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+="; // Characters to include in the password
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}
