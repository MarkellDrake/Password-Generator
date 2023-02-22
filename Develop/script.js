// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//password index object
var passwordObject = {
  lowercase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  uppercase: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  numeric: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  special: [
    "!",
    "#",
    "$",
    "%",
    "&",
    "()",
    "*",
    "+",
    "-",
    ".",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "^",
    "|",
  ],
};

 //whatever is under generatePassword is what will show in box.

function generatePassword() {
  var finalPass = "";

//each prompt is for each contributting type of character
  var firstPrompt = prompt("how many characters?");
  if (firstPrompt >= 8 && firstPrompt <= 128) {
    var secondPrompt = confirm(" lowercase ?");
    var thirdPrompt = confirm("uppercase ?");
    var fourthPrompt = confirm("special Characters?");
    var fifthPrompt = confirm("numbers ?");

    //for loop runs the the promts until length is met 

    for (var i = 0; i < firstPrompt; i++) {
      if (secondPrompt && finalPass.length < firstPrompt ) {
        var index = Math.floor(Math.random() * passwordObject.lowercase.length);
        finalPass += passwordObject.lowercase[index];
      }
      if (thirdPrompt && finalPass.length < firstPrompt ) {
        var index = Math.floor(Math.random() * passwordObject.uppercase.length);
        finalPass += passwordObject.uppercase[index];
      }
      if (fourthPrompt && finalPass.length < firstPrompt ) {
        var index = Math.floor(Math.random() * passwordObject.special.length);
        finalPass += passwordObject.special[index];
      }
      if (fifthPrompt && finalPass.length < firstPrompt ) {
        var index = Math.floor(Math.random() * passwordObject.numeric.length);
        finalPass += passwordObject.numeric[index];
      }
    }
  } else {
    alert("invalid range");
  }
  return finalPass;


 
}
// Write password to the #password input
function writePassword() {
  
  //this variable is what refers to the generatePass func.
  var password = generatePassword();
  passwordText = document.querySelector("#password");

  //this displays what will show in the final area
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


