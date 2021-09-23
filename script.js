

// Assignment Code
var generateBtn = document.querySelector("#generate");

// function generatePassword() {
//   return "password" 
// }

//Characters to be used to generate password
var lettersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersUppercase = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "{", "}", "[", "]", "~", ":", ";"];

var passwordVault = ""

var lengths = ""



  generateBtn.addEventListener("click", writePassword);
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

    function generatePassword() {
    //   console.log(passwordVault[Math.floor(Math.random() * (passwordVault.length))])
    
      for (let i = 0; i < lengths; i+=) {
        var random = passwordVault[i]
        
        
        // console.log(password.length)

      
    
        // console.log(passwordText)
      }
        // console.log(passwordText.value)
        
        // alert(passwordText)
      }

  var lengths = prompt("Requested password length.\nMust be between 8 and 128.")
  
    
  if (!lengths) {
    // alert("Your password must contain at least 8 characters.")
    // writePassword() 
    return   
  } else if (lengths < 8 || lengths > 128) {
    alert("Password must be between 8 and 128 characters")
    writePassword()
  } else if (isNaN(lengths)) {
    prompt("Not a number!\nLength must be between 8 and 128.")
  }

  
  var lower = confirm("Do you want to use lowercase letters?\nOK equals Yes.\nCancel equals No.")
  var upper = confirm("Do you want to use uppercase letters?\nOK equals Yes.\nCancel equals No.")
  var numb = confirm("Do you want to use numbers?\nOK equals Yes.\nCancel equals No.")
  var spec = confirm("Do you want to use special characters?\nOK equals Yes.\nCancel equals No.") 
  
  if (lower && upper && numb && spec) {
    passwordVault = lettersLowercase.concat(lettersUppercase, numbers, specialCharacters)
    generatePassword()
    
  } else if (lower && upper && numb) {
    passwordVault = lettersLowercase.concat(lettersUppercase, numbers)
   generatePassword()

  } else if (lower && upper && spec) {
    passwordVault = lettersLowercase.concat(lettersUppercase, specialCharacters)
   generatePassword()

  } else if (lower && numb && spec) {
    passwordVault = lettersLowercase.concat(numbers, specialCharacters)
    generatePassword()

  } else if (lower && upper) {
    passwordVault = lettersLowercase.concat(lettersUppercase)
    generatePassword()

  } else if (lower && numb) {
    passwordVault = lettersLowercase.concat(numbers)
    generatePassword()

  } else if (lower && spec) {
    passwordVault = lettersLowercase.concat(specialCharacters)
    generatePassword()

  } else if (lower) {
    passwordVault = lettersLowercase
    generatePassword()

  } else if (upper && numb && spec) {
    passwordVault = lettersUppercase.concat(numbers, specialCharacters)
    generatePassword()

  } else if (upper && numb) {
    passwordVault = lettersUppercase.concat(numbers)
    generatePassword()

  } else if (upper && spec) {
    passwordVault = lettersUppercase.concat(specialCharacters)
    generatePassword()

  } else if (upper) {
    passwordVault = lettersUppercase
    generatePassword()

  } else if (numb && spec) {
    passwordVault = numbers.concat(specialCharacters)
    generatePassword()

  } else if (numb) {
    passwordVault = numbers
    generatePassword()

  } else if (spec) {
    passwordVault = specialCharacters
    generatePassword()

  } else {
    alert("Password must contain at least one character class.")
    writePassword()
  }

  
  console.log(passwordVault[Math.floor(Math.random() * (passwordVault.length))])

  

  

  }



  