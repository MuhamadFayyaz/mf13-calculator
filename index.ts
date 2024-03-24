#! /usr/bin/env node

import inquirer from "inquirer";
// await means wait for line 3 take input from user....[] this is array {message} is a object{message is a key which will appeare on screen for user,type:what will be the datatype , name is a variable to save the input}
const answer = await inquirer.prompt([
  { message: "ENTER your FIRST NUMBER", type: "number", name: "firstNumber" },
  { message: "ENTER your SECOND NUMBER", type: "number", name: "secondNumber" },
  {
    message: "SELECT ANY ONE OPERATOR TO PERFOME ACTION",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);


// conditional statement

if (answer.operators === "Addition" ){

  console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Subtraction"){
  console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication"){
  console.log(answer.firstNumber * answer.secondNumber);
}
else if ( answer.operators === "Divison"){
  console.log(answer.firstNumber / answer.secondNumber);
} 
else{
  console.log("invalid")
}
