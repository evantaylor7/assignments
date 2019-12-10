numArr = [1, 3, 5, 2, 90, 20]
// 1.
// sort least to greatest:
numArr.sort((a, b) => a - b)
console.log(numArr)

// 2. 
// sort greatest to least:
numArr.sort((a, b) => b - a)
console.log(numArr)


stringArr = ["dog", "wolf", "by", "family", "eaten"]
// 3.
// sort by shortest to longest string
stringArr.sort((a, b) => a.length - b.length)
console.log(stringArr)

// 4. 
// sort alphabetically
stringArr.sort()
console.log(stringArr)
// (default sort is alphabetical)

// 5.
// sort array by age
const byAge = arr => arr.sort((a, b) => a.age - b.age)
console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]))


// longhand:
// function byAge(arr){
//     arr.sort(function(a, b){
//         return a.age - b.age
//     })
//     return arr
// }
// console.log(byAge([
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]))