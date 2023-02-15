// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
/*var generatePassword ={
  length : 8,
  lowercase: [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z],
  uppercase: [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,],
  numeric:[1,2,3,4,5,6,7,8,9,0],
  //special:['!''"''#''$''%''&''()''*''+','-'''.''/''':'';''<''=''>''?''@''[''\]''^''_''`''{''|''}''~''"']

}*/


// Write password to the #password input
function writePassword() {

  //each prompt is for each contributting type of character 
var firstPrompt = prompt("how many characters?");
var secondPrompt = prompt(" lowercase ?");
var thirdPrompt = prompt("uppercase ?");
var fourthPrompt = prompt("special Characters?");


  //whatever is under generatePassword is what will show in box.
  function generatePassword(){
   return "hello";
 
  }

//this variable is what refers to the generatePass func.
  var password = generatePassword();
   passwordText = document.querySelector("#password");

 
//this displays what will show in the final 
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


