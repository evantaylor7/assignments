// Scrimba's one week of JavaScript challenges!
// DAY 1:

// add a border of * around entire matrix of strings like so:
// [
// '*****',
// '*abc*',
// '*ded*',
// '*****'
// ]

function addBorder(array) {
    newArr = ['*****']
    for(let i = 0; i < array.length; i ++){
        const strToArr = array[i].split('')
        strToArr.push('*')
        strToArr.unshift('*')
        const newStr = strToArr.join('')
        newArr.push(newStr)
    }
    newArr.push('*****')
    return newArr
}

const array = ['abc', 'ded']

// console.log(addBorder(array))


// DAY 2:

// take a two (or more) digit number and return the sum of their numbers
function addTwoDigits(num)  {
    const arr = num.toString().split('')
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += Number(arr[i])
    }
    return sum
}

console.log(addTwoDigits(29)) // --> 11
console.log(addTwoDigits(295)) // --> 16
console.log(addTwoDigits(85)) // --> 13
console.log(addTwoDigits(4758992)) // --> 44