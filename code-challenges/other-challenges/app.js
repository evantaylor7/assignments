// 2/24/20
// HARD challenge
// Write a function that takes a string and returns an object stating how many of each characters are in that string
// "code challenges" => {c:2, o:1, d:1, e:3, d:1, h:1, l:2, n:1, g:1, s:1}
// extra credit, return the highest occurring character

const stringToObject = str => {
    const letters = str.split('')

}


// 2/25/20
// given an array of strings and a string, count how many instances of that string are in the array
// countStrings(["cat", "cow", "cat"], "cat") => 2

// function countStrings(array, string){
//     return array.filter(word => word === string).length
// }

const countStrings = (array, string) => array.filter(word => word === string).length

// console.log(countStrings(["cat", "cow", "cat"], "cat")) // -> 2
// console.log(countStrings(["no", "yes", "yes", "yes", "no"], "yes")) // -> 3


// 2/27/20
// Write a function that takes an unsorted array as a parameter, and returns the missing number.
// The missing number is the one missing from the array of numbers if the numbers were sorted from least to greatest.

function findMissing(arr){
    const sortedArr = arr.sort((a, b) => a - b)
    let missingNum
    for(let i = 0; i < sortedArr.length; i++){
        if((sortedArr[i + 1] - sortedArr[i]) > 1){
            missingNum = sortedArr[i] + 1
        }
    }
    return missingNum
}

 console.log(findMissing([3, 5, 4, 8, 1, 2, 7])) // 6
 console.log(findMissing([10, 14, 12, 11, 16, 18, 17, 13])) // 15