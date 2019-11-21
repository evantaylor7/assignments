function str(string){
    strArray = []
    for(var i = 0; i < string.length; i++){
        strArray.push(string[i])
    }
}
str("whatchamacallit")
console.log(strArray)

function stringCharacterPosition(string, c){
    for(var i = 0; i < string.length; i++){
        var result = string[i]
        if(result === c){
            return i
        } else if(i === string.length - 1){
            return "Character not found!"
        }
    }
}
console.log(stringCharacterPosition("antiestablishmentarian", "s"))

function numArray(numArray){
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] === 42){
            return "Found 42"
        } else if(i === numArray.length - 1){
            return "42 not found!"
        }
    }
}
console.log(numArray([2, 64, 23, 62, 24, 42, 45, 87, 22]))

var min = Infinity
function smallest(number){
    for(var i = 0; i < number.length; i++){
        if(number[i] < min){
            min = number[i]
        }
    }
    return min
}
console.log(smallest([23, 45, 43, 2, 4, 26, 17, 33, 12, 54]))