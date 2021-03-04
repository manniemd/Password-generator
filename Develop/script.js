
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// display value of slider when it is moved
var slider = document.getElementById("range");
var output = document.getElementById("number");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}



// password characters 
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const upperAlpha = lowerAlpha.toUpperCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*(){}[]=<>/,.+";


// Generate password function
var generatePassword = function () {

  // gets selected character types
  var length = slider.value;
  const confirmLower = document.getElementById('lowercase').checked;
  const confirmUpper = document.getElementById('uppercase').checked;
  const confirmNumber = document.getElementById('numbers').checked;
  const confirmSymbol = document.getElementById('special').checked;

  // variable that will build the password
  var charBuild = '';
  var generatedPassword = '';

  // counts how many character types are selected
  var countOptions = confirmLower + confirmUpper + confirmNumber + confirmSymbol;

  // if none are selected...
  if (countOptions === 0) {
    generatedPassword = generatedPassword + 'Please pick at least one character type!';
    return generatedPassword;
  }

  if (confirmLower) {
    charBuild = charBuild.concat(lowerAlpha);
  }
  if (confirmUpper) {
    charBuild = charBuild.concat(upperAlpha);
  }
  if (confirmNumber) {
    charBuild = charBuild.concat(numbers);
  }
  if (confirmSymbol) {
    charBuild = charBuild.concat(symbols);
  }

  // loop through the charsBuild, which includes all character types selected and grabs a random character each time
  for (i = 0; i < length; i++) {
    var randomi = Math.floor(Math.random() * charBuild.length);
    generatedPassword += charBuild[randomi];

  }

  return generatedPassword;



};





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);