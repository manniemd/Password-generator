// Assignment Code
const generateBtn = document.querySelector("#generate");
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberChar = "0123456789"

function generator(length, charList) {
  let password = "";

  for (let i = 0; i < length; i += 1) {
    password += charList[Math.floor(Math.random() * (charList.length))];
  }

  return password;
}

function generatePassword() {
  let passwordLength;
  let IncludeLowercase;
  let IncludeUppercase;
  let IncludeNumeric;
  let charList = "";

  // <8>128).
  while (!passwordLength || passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength)) {
    passwordLength = parseInt(prompt("pick a number from 8 - 128 this will be the lenght of your password"), 10);

    if (Number.isNaN(passwordLength) && !passwordLength) {
      alert("Please specify a number");
    }

    if (passwordLength < 8 || passwordLength > 128) {
      alert("sorry You can't generate a password less then 8 characters or greater than 128. please try again")
    }
  }

  // choose one.
  while (!IncludeLowercase && !IncludeUppercase && !IncludeNumeric) {
    IncludeLowercase = confirm("Can the Password have lowercase character?");
    IncludeUppercase = confirm("Can the Password have uppercase character?");
    IncludeNumeric = confirm("Can the Password have number character?");


    if (!IncludeLowercase && !IncludeUppercase && !IncludeNumeric) {
      alert("please choose an option to continue.");
    }
  }
  if (IncludeLowercase) {
    charList += lowerChar;
  }

  if (IncludeUppercase) {
    charList += upperChar;
  }

  if (IncludeNumeric) {
    charList += numberChar;
  }


  return generator(passwordLength, charList);
}

//  #password 
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);