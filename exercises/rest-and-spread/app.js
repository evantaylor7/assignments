// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
const collectAnimals = (...animals) => animals
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "antelope"))


// Write a function that returns a food object with the array names as properties using Object Literals:
const combineFruit = (fruit, sweets, vegetables) => `{fruit: ${fruit} 
sweets: ${sweets} 
vegetables: ${vegetables}}`
console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))


// Use destructuring to use the property names as variables:
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks",
    itemsToBring: ["suncreen", "shirt", "sandals"],
    hotelAddress: {
        street: "Idaho St."
    }
}
const {location, duration, hotelAddress:{street}, itemsToBring:[a, b, c]} = vacation
console.log(`We're going to have a blast in ${location} for an entire ${duration}!`)
console.log(`I will be on ${street} and I'm bringing a ${b}`)


// Use destructuring to make this code ES6:

// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }
const returnFirst = items => {
    const [firstItem] = items
    return firstItem
}
console.log(returnFirst(["this", "that", "other"]))


// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
// function returnFavorites(arr){
//     /*your code here*/
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
// }
// returnFavorites(favoriteActivities)

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"]
const returnFavorites = arr => {
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`
}
console.log(returnFavorites(favoriteActivities))


// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// function combineAnimals() {  
 
// }
// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 
// output: ["dog", "cat", "mouse", "jackolope", "platypus"]

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const combineAnimals = (realAnimals, magicalAnimals, mysteriousAnimals) => [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))


// Try to make the following functions more ES6xy:

// 1.
// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

const product = (a, b, c, d, e) => {  
    const numbers = [a,b,c,d,e]
    return numbers.reduce((acc, number) => {
        console.log(acc)
        return acc * number;
    }, 1)
}
product(/*3, 6, 2, 7, 4*/)
// not sure ^

//2.
// function unshift(array, a, b, c, d, e) {  
//     return [a, b, c, d, e].concat(array);
// }

const unshift = (array, a, b, c, d, e) => {  
    return [a, b, c, d, e].concat(array)
}
// console.log(unshift(2, 4, 3, 6, 5))
// not sure ^


// Write some destructuring code to help this function out. Use object literals to simplify it:
// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])

const populatePeople = names => {
    return names.map(name => {
        name.split(" ")
        [firstName, lastName] = name
        return `First Name: ${firstName}, Last Name: ${lastName}`
    })
}

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
// nope