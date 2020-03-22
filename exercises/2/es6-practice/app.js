console.log("~~~~~1~~~~~")

const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


// Arrow Functions
console.log("~~~~~task 1~~~~~")
// task 1: re-write into an arrow function

// const carrots = ["bright orange", "ripe", "rotten"]
// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }


const carrots = ["bright orange", "ripe", "rotten"]
const mapVegetables = arr => arr.map(carrot => ({ type: "carrot", name: carrot }))
console.log(mapVegetables(carrots))


console.log("~~~~~task 2~~~~~")
// task 2: re-write into an arrow function
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

const filterForFriendly = arr => arr.filter(person => person.friendly)
console.log(filterForFriendly(people))


console.log("~~~~~task 3~~~~~")
// task 3: re-write into arrow functions

// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }

const doMathSum = (a, b) => a + b
console.log(doMathSum(3, 7))

const produceProduct = (a, b) => a * b
console.log(produceProduct(5, 3))


console.log("~~~~~task 4~~~~~")
// task 4: Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following: "Hi Kat Stark, how does it feel to be 40?"
const printString = (firstName = "Jane", lastName = "Doe", age = "100") => `Hi ${firstName} ${lastName}, how does it feel to be ${age} ?`
console.log(printString("Evan", "Taylor", "26"))


console.log("~~~~~task 5~~~~~")
// task 5: change this to shorthand syntax
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }

const filterForDogs = arr => arr.filter(animal => animal.type === "dog")
console.log(filterForDogs(animals))


console.log("~~~~~template literals~~~~~")
// template literals: write a function that takes location and name parameters and outputs message
const message = (location, name) => `Hi ${name}!

Welcome to ${location}.

I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
console.log(message("Hawaii", "Janice"))