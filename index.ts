#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";


let answer = await inquirer.prompt([
    {message: "Enter first number: ", type: "number", name: "firstnumber"},
    {message: "Enter second number : ", type: "number", name: "secondnumber"},
    {message: "Select operation you want to perfom : ", type: "list", name: "operator", 
    choices: ["Addition", "Substraction", "Multiplication", "Division"],},
]);

if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber)   
} else if (answer.operator === "Substraction") {
    console.log(answer.firstnumber - answer.secondnumber)   
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber)   
} else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber)   
} else console.log("Please select valid Operator !")

