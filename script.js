var generateBtn = document.querySelector("#generate");


//Characters to be used to generate password
var lettersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUppercase = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "{", "}", "[", "]", "~", ":", ";"];

//Global variables
var long;
var passwordVault;
var passwordCreation = "";





//Click event
generateBtn.addEventListener("click", writePassword);


//User criteria for password and creating it
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  
  var long = prompt("Requested password length.\nMust be between 8 and 128.")
  
  
  if (!long) {
    return   
    alert("Your password must contain at least 8 characters.")
    writePassword() 
  } else if (long < 8 || long > 128) {
    alert("Password must be between 8 and 128 characters")
    writePassword()
  } else if (isNaN(long)) {
    prompt("Not a number!\nLength must be between 8 and 128.")
  }
  
  
  var lower = confirm("Do you want to use lowercase letters?\nOK equals Yes.\nCancel equals No.")
  var upper = confirm("Do you want to use uppercase letters?\nOK equals Yes.\nCancel equals No.")
  var numb = confirm("Do you want to use numbers?\nOK equals Yes.\nCancel equals No.")
  var spec = confirm("Do you want to use special characters?\nOK equals Yes.\nCancel equals No.") 
  
  if (lower && upper && numb && spec) {
    passwordVault = lettersLowercase.concat(numbers, specialCharacters, lettersUppercase)
    createPassword()
    
  } else if (lower && upper && numb) {
    passwordVault = lettersLowercase.concat(numbers, lettersUppercase)
    createPassword()
    
  } else if (lower && upper && spec) {
    passwordVault = lettersLowercase.concat(specialCharacters, lettersUppercase)
    createPassword()
    
  } else if (lower && numb && spec) {
    passwordVault = numbers.concat(lettersLowercase, specialCharacters)
    createPassword()
    
  } else if (lower && upper) {
    passwordVault = lettersLowercase.concat(lettersUppercase)
    createPassword()
    
  } else if (lower && numb) {
    passwordVault = lettersLowercase.concat(numbers)
    createPassword()
    
  } else if (lower && spec) {
    passwordVault = lettersLowercase.concat(specialCharacters)
    createPassword()
    
  } else if (lower) {
    passwordVault = lettersLowercase
    createPassword()
    
  } else if (upper && numb && spec) {
    passwordVault = lettersUppercase.concat(numbers, specialCharacters)
    createPassword()
    
  } else if (upper && numb) {
    passwordVault = lettersUppercase.concat(numbers)
    createPassword()
    
  } else if (upper && spec) {
    passwordVault = lettersUppercase.concat(specialCharacters)
    createPassword()
    
  } else if (upper) {
    passwordVault = lettersUppercase
    createPassword()
    
  } else if (numb && spec) {
    passwordVault = numbers.concat(specialCharacters)
    createPassword()
    
  } else if (numb) {
    passwordVault = numbers
    createPassword()
    
  } else if (spec) {
    passwordVault = specialCharacters
    createPassword()
    
  } else {
    alert("Password must contain at least one character class.")
    writePassword()
  }  
  
  function createPassword() {
    
    for (var i = 0; i < long; i++) {
      passwordCreation = passwordCreation + passwordVault[Math.floor(Math.random() * passwordVault.length)]
      }
  
      console.log(passwordCreation)
      generatePassword() 
    }
  
    function generatePassword () {
      return passwordCreation
    }
}




  