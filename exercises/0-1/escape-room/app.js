var readlineSync = require("readline-sync")
var options = ["Put hand in hole", "Find the key", "Open the door"]
var newOptions = ["Put hand in hole", "Open the door"]
console.log("Hello and welcome to the escape room. Your task is to escape.")
var choice = readlineSync.keyInSelect(options, "Choose wisely")

while(choice === 2){
    console.log("You cannot use the door without the key");
    var choice = readlineSync.keyInSelect(options, "Choose more wisely");
}
if(choice === 0){
    console.log("You die")
} else if(choice === 1){
    console.log("You find the key")
    var escape = readlineSync.keyInSelect(newOptions, "Choose wisely")
    if(escape === 0 && choice === 1){
        console.log("You die")
    } else if(escape === 1 && choice === 1){
        console.log("You escape!")
    }
}