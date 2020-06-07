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

// console.log(addTwoDigits(29)) // --> 11
// console.log(addTwoDigits(295)) // --> 16
// console.log(addTwoDigits(85)) // --> 13
// console.log(addTwoDigits(4758992)) // --> 44


// DAY 3: 
// given an array of numbers, return the first duplicate in the set. if there are no duplicates return -1
// ex: [3, 7, 3, 5, 8, 2, 7] should return 3, [5, 2, 4, 3, 2, 5] should return 2

function firstDuplicate(nums) {
    const checkedNums = []
    const firstDup = []
    for(let i = 0; i < nums.length; i++){
        if(checkedNums.includes(nums[i])){
            firstDup.push(nums[i])
        }
        checkedNums.push(nums[i])
    }
    if(firstDup.length > 0){
        return firstDup[0]
    } else {
        return -1
    }
}

// console.log(firstDuplicate([3, 7, 3, 5, 8, 2, 7])) // --> 3
// console.log(firstDuplicate([5, 2, 4, 3, 2, 5])) // --> 2
// console.log(firstDuplicate([2, 1, 3, 5, 3, 2])) // --> 3
// console.log(firstDuplicate([2, 1, 3, 5, 4, 6])) // --> -1

// better solution (cleaner, less code):
function firstDuplicate2(nums) {
    const firstDup = []
    for(let i = 0; i < nums.length; i++){
        if(firstDup.includes(nums[i])){
            return nums[i]
        } else {
            firstDup.push(nums[i])
        }
    }
    return -1
}

// console.log(firstDuplicate2([3, 7, 3, 5, 8, 2, 7])) // --> 3
// console.log(firstDuplicate2([5, 2, 4, 3, 2, 5])) // --> 2
// console.log(firstDuplicate2([2, 1, 3, 5, 3, 2])) // --> 3
// console.log(firstDuplicate2([2, 1, 3, 5, 4, 6])) // --> -1


// DAY 4:
// sum all the prime numbers, up to and including the provided number
// 10 should return 17, 977 should return 72179

function sumAllPrimes(num) {
    let primesTotal = 0
    for(let i = 2; i < num; i++){
        for(let j = 2; j <= i; j++){
            if(i === j){
                primesTotal += i
            }
            if(i % j === 0){
                break
            }
        }
    }
    return primesTotal
}

// console.log(sumAllPrimes(10)) // --> 17
// console.log(sumAllPrimes(977)) // --> 72179


// DAY 5:
// check if all digits of the given number are even
// 248622 should return true, 642386 should return false

function evenDigitsOnly(number) {
    const splitNum = number.toString().split('')
    for(let i = 0; i < splitNum.length; i++){
        if(splitNum[i] % 2 !== 0){
            return false
        }
    }
    return true
}

// console.log(evenDigitsOnly(248622)) // --> true
// console.log(evenDigitsOnly(642386)) // --> false

// alternate solution using every() and parseInt()
function evenDigitsOnly2(number){
    const splitNum = number.toString().split('')
    return splitNum.every(num => parseInt(num) % 2 === 0)
}

// console.log(evenDigitsOnly2(248622)) // --> true
// console.log(evenDigitsOnly2(642386)) // --> false

// super elegant one liner:
const evenDigitsOnly3 = number => number.toString().split('').every(num => parseInt(num) % 2 === 0)

// console.log(evenDigitsOnly3(248622)) // --> true
// console.log(evenDigitsOnly3(642386)) // --> false


// DAY 6:
// given an array of numbers, return the count of numbers that are missing from a consecutive list
// [6, 2, 3, 8] should return 3, [7, 9, 4, 2] should return 4

function makeArrayConsecutive(nums) {
    let missingNums = 0
    const sortedNums = nums.sort((a, b) => a - b)
    for(let i = 0; i < sortedNums.length - 1; i++){
        const difference = nums[i + 1] - nums[i]
        if(difference > 1){
            missingNums += difference - 1
        }
    }
    return missingNums
}

// console.log(makeArrayConsecutive([6, 2, 3, 8])) // --> 3
// console.log(makeArrayConsecutive([7, 9, 4, 2])) // --> 4


// DAY 7:
// return the given string with the correct capitalization for a proper noun: first letter uppercase and the rest of the letters lowercase. 'pARiS' should return 'Paris', 'John' should return 'John'

function properNounCorrection(str) {
    newStr = str.toLowerCase().split('')
    const firstLetter = newStr[0].toUpperCase()
    newStr.splice(0, 1, firstLetter)
    return newStr.join('')
}

console.log(properNounCorrection('pARiS')) // --> 'Paris'
console.log(properNounCorrection('John')) // --> 'John'
console.log(properNounCorrection('jACObsON')) // --> 'Jacobson'