// 12/18/19
// const maximumScore = tileHand => {
// 	let score = 0
// 	for(let i = 0; i < tileHand.length; i++){
// 		score += tileHand[i].score
// 	}
// 	return score
// }

// a better version:
const maximumScore = tilehand => tilehand.reduce((a, b) => a + b.score, 0)

// console.log(maximumScore([{tile: 'N', score: 1}, {tile: 'K', score: 5},  {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}]))
// console.log((maximumScore([{tile: 'B', score: 2}, {tile: 'V', score: 4},  {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}]), 15))
// console.log((maximumScore([{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]), 18))
// console.log((maximumScore([{tile: 'A', score: 1}, {tile: 'E', score: 1},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]), 7))


// 12/20/19
const filterArray = (array) => array.filter(num => typeof num === "number")

// console.log(filterArray([1, 2, "a", "b"])) // ➞ [1, 2]
// console.log(filterArray([1, "a", "b", 0, 15])) // ➞ [1, 0, 15]
// console.log(filterArray([1, 2, "aasf", "1", "123", 123])) // ➞ [1, 2, 123]


// 12/27/19
// Write a function that takes a positive integer and return its factorial.
function factorial(z) {
	if(z === 0){
		return 1
	} else {
		let x = 1
		for(let i = 1; i < z + 1; i++){
			x *= i
		}
		return x
	}
}
// console.log(factorial(4)) // --> 24
// console.log(factorial(0)) // --> 1
// console.log(factorial(9)) // --> 362880
// console.log(factorial(1)) // --> 1
// console.log(factorial(2)) // --> 2


// 1/2/20
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element:

const getAbsSum = arr => {
	let sum = 0
	for(i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			sum -= arr[i]
		} else {
			sum += arr[i]
		}
	}
	return sum
}
// console.log(getAbsSum([2, -1, -3, 4, 8])) // -> 18
// console.log(getAbsSum([-1])) // -> 1
// console.log(getAbsSum([-1, -3, -5, -4, -10, 0])) // -> 23
// console.log(getAbsSum([8, 9, 10, 32, 101, -10])) // -> 170
// console.log(getAbsSum([500])) // -> 500


// 1/3/20
// fix this broken code:

// function checkEquals(arr1, arr2) {
// if (arr1 === arr2) {
// 	return true
//    } else {
// 	return false
//    }
//   }
function checkEquals (arr1, arr2) {
	if (arr1.toString() === arr2.toString()) {
  	return true 
  } else {
  	return false
  }
}
// console.log(checkEquals([1, 2], [1, 3])) // -> false
// console.log(checkEquals([1, 2], [1, 2])) // -> true
// console.log(checkEquals([4, 5, 6], [4, 5, 6])) // -> true
// console.log(checkEquals([4, 7, 6], [4, 5, 6])) // -> false


// 1/5/20
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change is represented in the following order: quarters, dimes, nickels, pennies.

// function changeEnough(change, amountDue) {
// 	let total = (change[0] * .25) + (change[1] * .1) + (change[2] * .05) + (change[3] * .01)
// 	if(total >= amountDue){
// 		return true
// 	} else {
// 		return false
// 	}
// }

// more concise:
const changeEnough = (change, amountDue) => {
	let total = (change[0] * .25) + (change[1] * .1) + (change[2] * .05) + (change[3] * .01)
	return (total >= amountDue)
}
// console.log(changeEnough([2, 100, 0, 0], 14.11)) // -> false
// console.log(changeEnough([0, 0, 20, 5], 0.75)) // -> true
// console.log(changeEnough([30, 40, 20, 5], 12.55)) // -> true
// console.log(changeEnough([10, 0, 0, 50], 13.85)) // -> false
// console.log(changeEnough([1, 0, 5, 219], 19.99)) // -> false
// console.log(changeEnough([1, 0, 2555, 219], 127.75)) // -> true
// console.log(changeEnough([1, 335, 0, 219], 35.21)) // -> true


// 1/17/20
// Create a function that takes a string as an argument. The string is a random name.
// If the last character of the name is an "n", return true.
// If the last character of the name is not an "n", return false.

// function isLastCharacterN(word) {
// 	for(let i = 0; i < word.length; i++){
// 		if(word[word.length - 1] === "n"){
// 			return true
// 		} else
// 			return false
// 	}
// }

// more concice
const isLastCharacterN = word => {
	for(let i = 0; i < word.length; i++){
		return word[word.length - 1] === "n"
	}
}
// console.log(isLastCharacterN("Aiden")) // -> true
// console.log(isLastCharacterN("Roxy")) // -> false
// console.log(isLastCharacterN("Bert")) // -> false
// console.log(isLastCharacterN("Dean")) // -> true
// console.log(isLastCharacterN("Ian")) // -> true
// console.log(isLastCharacterN("Brian")) // -> true
// console.log(isLastCharacterN("Daniel")) // -> false


// 1/18/20
// CHALLENGE DIFFICULTY: HARD (it really isn't that hard...)
// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

const sevenBoom = arr => arr.toString().includes(7) ?
	`Boom!`
	:
	`there is no 7 in the array`

// console.log(sevenBoom([2, 6, 7, 9, 3])) // -> "Boom!"
// console.log(sevenBoom([33, 68, 400, 5])) // -> "there is no 7 in the array"
// console.log(sevenBoom([86, 48, 100, 66])) // -> "there is no 7 in the array"
// console.log(sevenBoom([76, 55, 44, 32])) // -> "Boom!"
// console.log(sevenBoom([35, 4, 9, 37])) // -> "Boom!"


// 1/20/20
// another HARD challenge
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

function oddishOrEvenish(num) {
	let sumNum = num.toString().split('').map(Number).reduce((a, b) => a + b, 0)
	return sumNum % 2 === 0 ? "Evenish" : "Oddish"
}

// console.log(oddishOrEvenish(43)) // -> "Oddish"
// console.log(oddishOrEvenish(373)) // -> "Oddish"
// console.log(oddishOrEvenish(55551)) // -> "Oddish"
// console.log(oddishOrEvenish(694)) // -> "Oddish"
// console.log(oddishOrEvenish(4433)) // -> "Evenish"
// console.log(oddishOrEvenish(11)) // -> "Evenish"
// console.log(oddishOrEvenish(211112)) // -> "Evenish"


// 1/21/20
// MEDIUM challenge
// Create a function that takes width and height and finds the perimeter of a rectangle.
const findPerimeter = (height, width) => (height * 2) + (width * 2)
// console.log(findPerimeter(6, 7)) // -> 26
// console.log(findPerimeter(20, 10)) // -> 60
// console.log(findPerimeter(2, 9)) // -> 22


// 1/22/20
// HARD challenge
// Create a Book constructor that has two properties: 1. Title, 2. Author
// and two methods:
// 1. A method named getTitle that returns: "Title: " + the instance title.
// 2. A method named getAuthor that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:
// 1. Pride and Prejudice - Jane Austen (PP)
// 2. Hamlet - William Shakespeare (H)
// 3. War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.
function Book(title, author) {
	this.title = title
	this.author = author
	this.getTitle = () => `Title: ${this.title}`
	this.getAuthor = () => `Author: ${this.author}`
}
const PP = new Book("Pride and Prejudice", "Jane Austen")
const H = new Book("Hamlet", "William Shakespeare")
const WP = new Book("War and Peace", "Leo Tolstoy")

// console.log(PP.title) // -> "Pride and Prejudice"
// console.log(PP.author) // -> "Jane Austen"
// console.log(PP.getTitle()) // -> 'Title: Pride and Prejudice'
// console.log(PP.getAuthor()) // -> 'Author: Jane Austen'

// console.log(H.title) // -> "Hamlet"
// console.log(H.author) // -> "William Shakespeare"
// console.log(H.getTitle()) // -> 'Title: Hamlet'
// console.log(H.getAuthor()) // -> 'Author: William Shakespeare'

// console.log(WP.title) // -> "War and Peace"
// console.log(WP.author) // -> "Leo Tolstoy"
// console.log(WP.getTitle()) // -> 'Title: War and Peace'
// console.log(WP.getAuthor()) // -> 'Author: Leo Tolstoy'


// 1/23/20
// challenge rating: HARD
// In the image below, squares are either empty or filled with a circle.
// (Images show squares with grids of smaller squares, some with circles and some empty)
// Create a function that takes a number step (which equals HALF the width of a square) and returns the amount of empty squares. The image shows the squares with step 1, 2 and 3. The return value is the number of cells not on a diagonal, which is 0 for the first square, 8 for the second, and 24 for the third.
const emptySq = step => (step * 4) * (step - 1)
// console.log(emptySq(3)) // -> 24
// console.log(emptySq(1)) // -> 0
// console.log(emptySq(27)) // -> 2808
// console.log(emptySq(3)) // -> 24
// console.log(emptySq(0)) // -> 0, 'Even though the box is unexisting, the amount of empty squares is also 0.'
// console.log(emptySq(10)) // -> 360
// console.log(emptySq(19)) // -> 1368
// console.log(emptySq(60)) // -> 14160
// console.log(emptySq(7)) // -> 168


// 1/25/20
// challenge rating: HARD
// Write a function that returns the least common multiple (LCM) of two integers.
const lcm = (n1, n2) => n2 % n1 === 0 ? n2 : n2 * n1
// console.log(lcm(9, 18)) // -> 18
// console.log(lcm(8, 5)) // -> 40
// console.log(lcm(17, 11)) // -> 187
// console.log(lcm(17, 5)) // -> 85
// console.log(lcm(3, 12)) // -> 12
// console.log(lcm(9, 9)) // -> 9


// 1/28/20
// Create a function that returns true when num1 is equal to num2.
const isSameNum = (num1, num2) => num1 === num2
// console.log(isSameNum(4, 8)) // -> false
// console.log(isSameNum(2, 2)) // -> true
// console.log(isSameNum(0, 6)) // -> false
// console.log(isSameNum(2, "2")) // -> false


// 1/30/20
// Write a function that takes an integer and:
// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
function helloWorld(num) {
	if(num === 3){
		return "Hello"
	} else if(num === 5){
		return "World"
	} else {
		return "Hello World"
	}
}
// console.log(helloWorld(3)) // -> "Hello"
// console.log(helloWorld(5)) // -> "World"
// console.log(helloWorld(15)) // -> "Hello World"


// 1/30/20
// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
const greaterThanOne = frac => eval(frac) > 1
// console.log(greaterThanOne("1/2")) // -> false 
// console.log(greaterThanOne("7/4")) // -> true
// console.log(greaterThanOne("10/10")) // -> false
// console.log(greaterThanOne("12/30")) // -> false
// console.log(greaterThanOne("28/3")) // -> true
// console.log(greaterThanOne("35/31")) // -> true
// console.log(greaterThanOne("11/27")) // -> false


// 2/1/20
// Create a function that takes an array and returns the sum of all numbers in the array.

// function getSumOfItems(arr) {
// 	let sum = 0
// 	for(let i = 0; i < arr.length; i++){
// 		sum += arr[i]
// 	}
// 	return sum
// }

// could have also been:
const getSumOfItems = arr => arr.reduce((a, b) => a + b)

// console.log(getSumOfItems([2, 7, 4])) // -> 13
// console.log(getSumOfItems([45, 3, 0])) // -> 48
// console.log(getSumOfItems([-2, 84, 23])) // -> 105


// 2/7/20
// Create the function that takes an array with objects and returns the sum of people's budgets.
// function getBudgets(arr) {
// 	let count = 0
// 	for(let i = 0; i < arr.length; i++){
// 		count += arr[i].budget
// 	}
// 	return count
// }

// using reduce:
const getBudgets = arr => arr.reduce((a, b) => a + b.budget, 0)

// console.log(getBudgets([{name: "John",  age: 21, budget: 23000}, {name: "Steve",  age: 32, budget: 40000}, {name: "Martin",  age: 16, budget: 2700}])) // -> 65700
// console.log(getBudgets([{name: "John",  age: 21, budget: 29000}, {name: "Steve",  age: 32, budget: 32000}, {name: "Martin",  age: 16, budget: 1600}])) // -> 62600
// console.log(getBudgets([{name: "John",  age: 21, budget: 19401}, {name: "Steve",  age: 32, budget: 12321}, {name: "Martin",  age: 16, budget: 1204}])) // -> 32926
// console.log(getBudgets([{name: "John",  age: 21, budget: 10234}, {name: "Steve",  age: 32, budget: 21754}, {name: "Martin",  age: 16, budget: 4935}])) // -> 36923


// 2/9/20
// Throughout the 12 days of Christmas, my true love gave me in total 364 items.
// Create a function where given n days as an argument, return the total amount of items received throughout those days as an integer.

const xmasItems = n => (n * (n + 1) * (n + 2)) / 6

// console.log(xmasItems(0)) // -> 0
// console.log(xmasItems(1)) // -> 1
// console.log(xmasItems(21)) // -> 1771
// console.log(xmasItems(12)) // -> 364
// console.log(xmasItems(54)) // -> 27720
// console.log(xmasItems(14)) // -> 560
// console.log(xmasItems(11)) // -> 286
// console.log(xmasItems(9)) // -> 165
// console.log(xmasItems(13)) // -> 455
// console.log(xmasItems(19)) // -> 1330

// 2/22/20
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
function reverseAndNot(i){
	return Number(i.toString().split('').reverse().join('') + i)
}
// console.log(reverseAndNot(123)) // -> 321123
// console.log(reverseAndNot(123456789)) // -> 987654321123456789


// 2/29/20
// Challenge: MEDIUM
// Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.

const REGEXP = /blue flag|red flag/g

const str1 = "red flag blue flag"
const str2 = "yellow flag red flag blue flag green flag"
const str3 = "pink flag red flag black flag blue flag green flag red flag"
const str4 = "blue flag red flag red flag blue flag green flag red flag"

const validate = (REGEXP) => {
	if(!/\|/.test(String(REGEXP))) return () => "invalid" 
	return function testReg(str) {
		//console.log(str.match(REGEXP))
		return str.match(REGEXP)
	}
}

const testExp = validate(REGEXP)

// console.log(testExp(str1)) // -> ["red flag", "blue flag"]
// console.log(testExp(str2)) // -> ["red flag", "blue flag"]
// console.log(testExp(str3)) // -> ["red flag", "blue flag", "red flag"]
// console.log(testExp(str4)) // -> ["blue flag", "red flag", "red flag", "blue flag", "red flag"]


// 3/6/20
// Create a regexp to find ellipsis: 3 (or more?) dots in a row:

const REGEXP2 = /\.{3,}/g

const str = "Hello!... Wait. How goes?..... GoodBye!.."

const validate2 = (REGEXP2) => {
	 if(!/\{.*\}/.test(String(REGEXP2))) return () => "invalid" 
	 return function testReg(str) {
		return str.match(REGEXP2);
	 }
}
const testExp2 = validate2(REGEXP2)

// console.log(testExp2(str)) // -> ["...", "....."]

// 7/15/20
// Create a function that returns the characters from an array or string r on odd or even positions, depending on the specifier s. The specifier will be "odd" for items on odd positions (1, 3, 5, ...) and "even" for items on even positions (2, 4, 6, ...).

function charAtPos(r, s) {
	const specifier = s === 'even' ? 0 : 1
	const result = []
	for(let i = 0; i < r.length; i++){
		(i + 1) % 2 === specifier && result.push(r[i])
	}
	if(typeof r === 'string'){
		return result.join('')
	} else {
		return result
	}
}

console.log(charAtPos([2,4,6,8,10], "even")) // --> [4,8]
console.log(charAtPos([1,2,3,4,5,6,7,8,9,10], "odd")) // --> [1,3,5,7,9]
console.log(charAtPos("EDABIT", "even")) // --> "DBT"
console.log(charAtPos("EDABIT", "odd")) // --> "EAI"
console.log(charAtPos(["A","R","B","I","T","R","A","R","I","L","Y"], "odd")) // --> ["A","B","T","A","I","Y"]