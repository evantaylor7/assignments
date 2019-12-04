// RPG Approach
const readline = require("readline-sync")

// Global Variables
const choices = ["walk", "check stats"]
const combatChoices = ["attack", "run away"]
let gameover = false
const player = {
    name: "",
    health: 100,
    items: []
}
const enemies = [{
    type: "general rapscallion",
    health: 100,
    catchphrase: "'I'm gonna hurt yous!'"
},
{
    type: "vagabond gypsy",
    health: 80,
    catchphrase: "'The moon and stars have aligned in my favor!'"
},
{
    type: "overly-friendly hipster",
    health: 30,
    catchphrase: "utters unintelligible liberal garble"
}]

// Game Functions
function walk() {
    const randomNum = generateRandomChance(3)
    if (randomNum === 0) {
        console.log("\n\t\t--You get in a fight!--")
        generateEnemy()
    } else {
        console.log("\n\t\tNothing happened")
    }
}
function generateEnemy() {
    const enemyChoice = generateRandomChance(3)
    if (enemyChoice === 0) {
        console.log("\n\tIt's an " + enemies[enemyChoice].type + " with " + enemies[enemyChoice].health + " HP. He says " + enemies[enemyChoice].catchphrase)
    } else if (enemyChoice === 1) {
        console.log("\n\tIt's a " + enemies[enemyChoice].type + " with " + enemies[enemyChoice].health + " HP. She says " + enemies[enemyChoice].catchphrase)
    } else if (enemyChoice === 2) {
        console.log("\n\tIt's a " + enemies[enemyChoice].type + " with " + enemies[enemyChoice].health + " HP. He " + enemies[enemyChoice].catchphrase)
    }
    enemyMove()
    function enemyMove() {
        const choice = readline.keyInSelect(combatChoices, "\tHow do you respond?")
        if (choice === 0) {
            console.log("\n\tYou decide to attack the enemy")
            const attackPower = generateRandomChance(100)
            const enemyHealth = Math.max(0, enemies[enemyChoice].health - attackPower)
            if (enemyChoice === 1) {
                console.log("\tYou damage " + enemies[enemyChoice].type + " by " + attackPower + " HP. Her health is reduced to " + enemyHealth + "!")
            } else {
                console.log("\tYou damage " + enemies[enemyChoice].type + " by " + attackPower + " HP. His health is reduced to " + enemyHealth + "!")
            }
        } else if (choice === 1) {
        console.log("\n\tYou try to run away")
        } else {
        console.log("\n\tYou die of old age.")
        process.exit()
        }
    }
}
function generateRandomChance(chance) {
    return Math.floor(Math.random() * chance)
}

// Game Loop
console.log("\n~ ~ Welcome! You have been chosen to participate in this role-playing adventure. Enjoy. ~ ~")
player.name = readline.question("\nWhat is your name?: ")
console.log("\t\t\t~ Hello " + player.name + ". Good luck! ~")
while (!gameover) {
    const userChoice = readline.keyInSelect(choices, "\tWhat now?: ")
    if (userChoice === 0) {
        walk()
    }
    if (userChoice === 1) {
        console.log(player)
    }
    if (userChoice === -1) {
        console.log("You die of old age.")
        process.exit()
    }
}