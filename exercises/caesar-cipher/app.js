var readline = require("readline-sync")
var input = readline.question("What phrase would you like to encrypt? ").toLowerCase()
var shift = parseInt(readline.question("How many letters would you like to shift? "))

let cipher = ""
function caesar(string, num){
    for(let i = 0; i < string.length; i++){
        if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
            let code = string.charCodeAt(i)
            code -= 97
            code = (code + num) % 26
            code += 97
            cipher += String.fromCharCode(code)
        } else {
            cipher += string[i]
        }
    }
    return cipher
}
console.log(caesar(input, shift))