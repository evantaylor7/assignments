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
console.log(isLastCharacterN("Aiden")) // -> true
console.log(isLastCharacterN("Roxy")) // -> false
console.log(isLastCharacterN("Bert")) // -> false
console.log(isLastCharacterN("Dean")) // -> true
console.log(isLastCharacterN("Ian")) // -> true
console.log(isLastCharacterN("Brian")) // -> true
console.log(isLastCharacterN("Daniel")) // -> false