// const and let

const manName = "John"
let name = ""
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        // console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    // console.log("man name: ", manName)
    return petObjects
}

// runForLoop(["cat", "dog"])

// // arrow functions

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map => (function(carrots) {
//         return { type: "carrot", name: carrots }
//     })
// }

// console.log(mapVegetables())