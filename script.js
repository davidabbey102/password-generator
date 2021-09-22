// Assignment Code
var generateBtn = document.querySelector("#generate");

var choicesBtn = document.querySelector("#choices");



//Characters to be used to generate password
var lettersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersUppercase = ["A", "B", "C", "D"," E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "{", "}", "[", "]", "~", ":", ";"];




// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

console.log(Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0, 5))


console.log(lettersLowercase[Math.floor(Math.random() * lettersLowercase.length)])

console.log(document.querySelector("#password"))

console.log(specialCharacters)
console.log(lettersLowercase.length)

parseInt

var test = 

// Add event listener to generate button generateBtn.addEventListener("click", writePassword); 
generateBtn.addEventListener("click", writePassword);

function writePassword() {

  var length = prompt("Requested password length.\nMust be between 8 and 128.")
   
  if (!length) {
    alert("Your password must contain at least 8 characters.")
    writePassword()    
  } else if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters")
    writePassword()
  } else if (isNaN(length)) {
    prompt("Not a number!\nLength must be between 8 and 128.")
  }

  var lower = confirm("Do you want to use lowercase letters?\nOK equals Yes.\nCancel equals No.")
  var upper = confirm("Do you want to use uppercase letters?\nOK equals Yes.\nCancel equals No.")
  var numb = confirm("Do you want to use numbers?\nOK equals Yes.\nCancel equals No.")
  var spec = confirm("Do you want to use special characters?\nOK equals Yes.\nCancel equals No.") 
  
  if (lower && upper && numb && spec) {
    console.log("TEST TEST TEST TEST")
    
  } else if (lower && upper && numb) {

  } else if (lower && upper && spec) {

  } else if (lower && numb && spec) {

  } else if (lower && upper) {
      
  } else if (lower && numb) {

  } else if (lower && spec) {

  } else if (lower) {

  } else if (upper && numb && spec) {

  } else if (upper && numb) {
      
  } else if (upper && spec) {

  } else if (upper) {
    
  } else if (numb && spec) {

  } else if (numb) {

  } else if (spec) {

  } else if (!lower && !upper && !numb && !spec) {
    alert("Password must contain at least one character class.")
    writePassword()
  }
  }
  




// function generatePassword(){
//   return "password"
// }

function genPassword() {
  
}

function getLower() {

}

//for boolean about wanted characters


