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

// console.log(properNounCorrection('pARiS')) // --> 'Paris'
// console.log(properNounCorrection('John')) // --> 'John'
// console.log(properNounCorrection('jACObsON')) // --> 'Jacobson'



// JAVASCRIPT 10-DAY CHALLENGE! (scrimba JS challenges part 2) -->
// DAY 1:
// Write a functions that returns the sum of all numbers regardless of the number of parameters.

function add(param1, param2, ...rest) {
    const params = [param1, param2, ...rest]
    let sum = 0
    params.forEach(param => sum += param)
    return sum
}

// console.log(add(4, 2, 3)) // --> 9
// console.log(add(1, 5, 3, 2, 6)) // --> 17


// DAY 2:
// Given an array of strings, return another array with the longest strings

function allLongestStrings(array) {
    let longestLength = 0
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longestLength){
            longestLength = array[i].length
        }
    }
    return array.filter(str => str.length === longestLength)
}

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba", "a"])) // ['aba', 'vcd', 'aba']
// console.log(allLongestStrings(["sjdj", "d", "asdf", "as", "ds", "fkfj"])) // ['sjdj', 'asdf', 'fkfj']


// DAY 3:
// Given an array of numbers, return an array of the sum of evenly indexed numbers (i = 0/2/4) and the sum of oddly indexed numbers (i = 1/3/5). ex: [50, 60, 60, 45, 70] should return [180, 105].

function alternatingSums(array) {
    evensIndexSum = 0
    oddsIndexSum = 0
    for(let i = 0; i < array.length; i++){
        if(i % 2 === 0){
            evensIndexSum += array[i]
        } else {
            oddsIndexSum += array[i]
        }
    }
    return [evensIndexSum, oddsIndexSum]
}

// console.log(alternatingSums([50, 60, 60, 45, 70])) // [180, 105]
// console.log(alternatingSums([3, 5, 2, 4, 3, 9, 6])) // [14, 18]


// DAY 4:
// Given an array of integers, replace all occurances of elemToReplace with substitutionElem.
// ex: For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]

function arrayReplace(array, elemToReplace, substitutionElem) {
    return array.map(num => num === elemToReplace ? substitutionElem : num)
}

// console.log(arrayReplace([1, 2, 1], 1, 3)) // --> [3, 2, 3]
// console.log(arrayReplace([3, 6, 4], 4, 9)) // --> [3, 6, 9]


// DAY 5:
// Case insensitive palindrome: given a string, check if it can become a palindrome after case change.

function caseInsensitivePalindrome(str) {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}

// console.log(caseInsensitivePalindrome('AaBaa')) // --> true
// console.log(caseInsensitivePalindrome('abac')) // --> false


// DAY 6:
// given a string, enclose it in parenthesis 

function encloseInBrackets(str) {
    const solution1 = '(' + str + ')'
    const solution2 = `(${str})`
    const solution3 = '('.concat(str, ')')

    return solution3
}

// console.log(encloseInBrackets('Yo')) // --> '(Yo)'


// DAY 7:
// return  the factorial of the provided integer

const factorialNumber = num => {
    let multiplier = 1
    for(let i = 1; i <= num; i++){
        multiplier *= i
    }
    return multiplier
}

// console.log(factorialNumber(5)) // --> 120
// console.log(factorialNumber(9)) // --> 362880


// DAY 8:
// return the first number in a given string

function firstDigit(str) {
    const splitStr = str.split('')
    for(let i = 0; i < splitStr.length; i++){
        console.log(splitStr[i])
        if(parseInt(splitStr[i])){
            return splitStr[i]
        }
    }
}

// console.log(firstDigit("var_1__Int2")) // --> '1'
// console.log(firstDigit("q2q-q")) // --> '2'


// DAY 9:
// largest number: return the largest number possible given the number of integers (kind of confusing)
// 1 would be 9, 2 would be 99, 3 would be 999

function largestNumber(num) {
    let array = []
    for(let i = 0; i < num; i++){
        array.push(9)
    }
    return parseInt(array.join(''))
}

// console.log(largestNumber(1)) // --> 9
// console.log(largestNumber(2)) // --> 99
// console.log(largestNumber(5)) // --> 99999


// DAY 10: 
// given a divisor and a boundary, return the largest number that is divisible by the divisor, less than or equal to the boundary, and greater than 0

function maxMultiple(divisor, bound) {
    for(let i = bound; i > 0; i--){
        if(i % divisor === 0){
            return i
        }
    }
}

console.log(maxMultiple(3, 10)) // --> 9
console.log(maxMultiple(5, 57)) // --> 55
console.log(maxMultiple(4, 19)) // --> 16