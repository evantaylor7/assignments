// 1.
// function doubleNumbers(arr){
//     return arr.map(function(num){
//         return (num * 2)
//     })
// }
// console.log(doubleNumbers([2, 5, 100]))

// using es6:
const doubleNumbers = arr => arr.map(num => num * 2)
console.log(doubleNumbers([2, 5, 100]))

// 2.
const stringItUp = arr => arr.map(num => num.toString())
console.log(stringItUp([2, 5, 100]))

// 3.
const capitalizeNames = arr => arr.map(name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase())
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

// 4.
const namesOnly = arr => arr.map(arr => arr.name)
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))

// 5.
// const oldEnough = arr => arr.map(arr => {
//     if(arr.age >= 18){
//         return arr.name + " can go to the Matrix."
//     } else {
//         return arr.name + " is under age!!"
//     }
// })

// even simpler:
const oldEnough = arr => arr.map(arr => arr.age >= 18 ? arr.name + " can go to the Matrix." : arr.name + " is under age!!")
console.log(oldEnough([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))

// 6.
const readyToPutInTheDOM = arr => arr.map(arr => {
    return `<h1>${arr.name}</h1><h2>${arr.age}</h2>`
})

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))