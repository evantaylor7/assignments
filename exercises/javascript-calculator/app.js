const readline = require("readline-sync")
const firstNum = readline.question("Please enter your first number: ")
// const num1 = Number(firstNum.value)
const secondNum = readline.question("Please enter your second number: ")
// const num2 = Number(secondNum.value)
const operations = ["add", "subtract", "multiply", "divide"]
const operation = readline.keyInSelect(operations, "Please enter the operation to perform: ")

if(operation === 0){
    function add(firstNum, secondNum){
        return +firstNum + +secondNum
    }
    console.log("Result: " + add(firstNum, secondNum))
} else if (operation === 1){
    function subtract(firstNum, secondNum){
        return firstNum - secondNum
    }
    console.log("Difference: " + subtract(firstNum, secondNum))
} else if (operation === 2){
    function multiply(firstNum, secondNum){
        return firstNum * secondNum
    }
    console.log("Product: " + multiply(firstNum, secondNum))
} else if (operation === 3){
    function divide(firstNum, secondNum){
        return firstNum / secondNum
    }
    console.log("Quotient: " + divide(firstNum, secondNum))
}
