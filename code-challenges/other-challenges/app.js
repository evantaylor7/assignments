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
    for(let i = 0; i < sortedArr.length; i++){
        if((sortedArr[i + 1] - sortedArr[i]) > 1){
            return sortedArr[i] + 1
        }
    }
    return missingNum
}

//  console.log(findMissing([3, 5, 4, 8, 1, 2, 7])) // 6
//  console.log(findMissing([10, 14, 12, 11, 16, 18, 17, 13])) // 15


// 3/4/20
// Write a function that returns a 10 X 10 multiplication table (2D array).

function multTable(){
    let table = []
    for(let j = 1; j < 11; j++){
        let row = []
        for(let i = 1; i < 11; i++){
            row.push(i * j)
        }
        table.push(row)
    }
    return table
}
// console.log(multTable())

// Allow for the function to take a parameter n and return a table with n * n cells.
function multTableN(n){
    let table = []
    for(let j = 1; j <= n; j++){
        let row = []
        for(let i = 1; i <= n; i++){
            row.push(i * j)
        }
        table.push(row)
    }
    return table
}
// console.log('2:', multTableN(2))
// console.log('3:', multTableN(3))
// console.log('6:', multTableN(6))
// console.log('7:', multTableN(7))


// 3/5/20
// Write a program that returns an array of every word that appears more than once in the phrase:
// "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

function repeatWords(str){
    const splitStr = str.split(' ')
    const duplicatedWords = []
    for(let i = 0; i < splitStr.length; i++){
        let thisWord = splitStr[i]
        for(let j = 0; j < splitStr.length; j++){
            if(splitStr[j] === thisWord){
                duplicatedWords.push(splitStr[j])
            }
        }
    }
    return duplicatedWords
}

const str = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
console.log(repeatWords(str))
// ^ haven't figured it out yet