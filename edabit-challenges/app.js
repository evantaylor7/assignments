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

console.log(maximumScore([{tile: 'N', score: 1}, {tile: 'K', score: 5},  {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}]))
console.log((maximumScore([{tile: 'B', score: 2}, {tile: 'V', score: 4},  {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}]), 15))
console.log((maximumScore([{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]), 18))
console.log((maximumScore([{tile: 'A', score: 1}, {tile: 'E', score: 1},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]), 7))


// 12/20/19
const filterArray = (array) => array.filter(num => typeof num === "number")

console.log(filterArray([1, 2, "a", "b"])) // ➞ [1, 2]
console.log(filterArray([1, "a", "b", 0, 15])) // ➞ [1, 0, 15]
console.log(filterArray([1, 2, "aasf", "1", "123", 123])) // ➞ [1, 2, 123]