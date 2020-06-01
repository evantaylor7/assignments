// Scrimba's one week of JavaScript challenges!
// DAY 1

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

console.log(addBorder(array))