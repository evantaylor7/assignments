function largest(myArray){
    
    for(let i = 0; i < myArray.length; i++){
        myArray.sort(function(a, b){return b - a})
        return myArray[0]
    }
}
console.log(largest([3, 5, 2, 8, 1]))
console.log(largest([234, 237, 626, 2342, 2112]))

function lettersWithStrings(array2, char){
    let arr = []
    for(let i = 0; i < array2.length; i++){
        if (array2[i].includes(char)) {
            arr.push(array2[i])
        }
    }
    return arr
}
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))
console.log(lettersWithStrings(["and", "farm", "lice", "pick", "apple"], "a"))


function isDivisible(num1, num2){
    if(num1 % num2 === 0){
        return true
    } else {
        return false
    }
}
console.log(isDivisible(4, 2))
console.log(isDivisible(9, 3))
console.log(isDivisible(15, 4))
console.log(isDivisible(2360, 20))
console.log(isDivisible(34, 5))