// RPG Approach
const readline = require("readline-sync")

// Global Variables
const choices = ["walk", "check stats"]
const combatChoices = ["attack", "run away", "check stats"]
let gameover = false
const player = {
    name: "",
    health: 100,
    items: []
}
const enemies = [{
    type: "common rapscallion",
    health: 100,
    healthChange: 100,
    catchphrase: "'I'm gonna hurt yous!'",
    finishingMove: "grabs you, stabs you 25 times in the chest and torso with a butterknife and says, 'Why'd it have to be this way?'",
    itemDrop: "butterknife"
},
{
    type: "vagabond gypsy",
    health: 80,
    healthChange: 80,
    catchphrase: "'The moon and stars have aligned in my favor!'",
    finishingMove: "stabs you in the arm with her hair pin. She lets you leave but the deadly poison contained within the pin slowly kills you over the next week. As you die, the gypsy's annoying cackle fills your ears.",
    itemDrop: "hair pin"
},
{
    type: "overly-friendly hipster",
    health: 30,
    healthChange: 30,
    catchphrase: "utters unintelligible liberal garble",
    finishingMove: "throws his fixie at you, making you stumble and fall onto the ground. Then he smothers you to death with his satchel.",
    itemDrop: "satchel"
}]

// Game Functions
function gameComplete(){
    if(player.items.includes("satchel") && player.items.includes("hair pin") && player.items.includes("butterknife")){
        console.log("You have collected all of the items! You win!")
        const keepPlaying = readline.keyInYN("Do you want to keep playing?")

        if(keepPlaying){
            walk()
        } else {
            console.log("Good job.")
            process.exit()
        }
    }
}
function walk() {
    const randomNum = generateRandomChance(3)
    if (randomNum === 0) {
        console.log("\n\t\t--You get in a fight!--")
        generateEnemy()
    } else {
        console.log("\n\t\tYou walk forward, and avoid getting in a fight.")
    }
}
function generateEnemy() {
    const enemyChoice = generateRandomChance(3)
    if (enemyChoice === 0 || enemyChoice === 2) {
        console.log("\n\tIt's an " + enemies[enemyChoice].type + " with " + enemies[enemyChoice].health + " HP. He says " + enemies[enemyChoice].catchphrase)
    } else if (enemyChoice === 1) {
        console.log("\n\tIt's a " + enemies[enemyChoice].type + " with " + enemies[enemyChoice].health + " HP. She says " + enemies[enemyChoice].catchphrase)
    }
    userMove()
    function userMove() {
        const choice = readline.keyInSelect(combatChoices, "\tHow do you respond?")
        if (choice === 0) {
            console.log("\n\tYou decide to attack the enemy")
            userAttack()
            if(enemies[enemyChoice].healthChange > 0){
                enemyAttack()
            } else {
                console.log("\nYou defeated the " + enemies[enemyChoice].type + "! You gain 20 HP.")
                player.health = player.health + 20
                enemies[enemyChoice].healthChange = enemies[enemyChoice].health
                const itemChance = generateRandomChance(2)
                if(itemChance === 0){
                    player.items.push(enemies[enemyChoice].itemDrop)
                    console.log("You picked up the " + enemies[enemyChoice].type + "\'s " + enemies[enemyChoice].itemDrop)
                }
                gameComplete()
            }
        } else if (choice === 2){
            console.log(player)
            userMove()
        } else if (choice === 1) {
            console.log("\n\tYou try to run away")
            const runChance = generateRandomChance(2)
            if(runChance === 0){
                console.log("\tbut the " + enemies[enemyChoice].type + " " + enemies[enemyChoice].finishingMove)
                console.log("\n\t--GAME OVER--")
                process.exit()
            } else if(runChance === 1){
                console.log("\tand you somehow escape")
            }
        } else {
            console.log("\n\tYou die of old age.")
            process.exit()
        } 
    }
    function userAttack(){
        const attackPower = generateRandomChance(100)
        const enemyHealth = Math.max(0, enemies[enemyChoice].healthChange -= attackPower)
        if(enemyChoice === 1) {
            console.log("\tYou damage the " + enemies[enemyChoice].type + " by " + attackPower + " HP. Her health is reduced to " + enemyHealth + "!")
        } else {
            console.log("\tYou damage the " + enemies[enemyChoice].type + " by " + attackPower + " HP. His health is reduced to " + enemyHealth + "!")
        }
    }
    function enemyAttack(){
        const enemyAttack = generateRandomChance(80)
        player.health = player.health - enemyAttack
        console.log("\nThe " + enemies[enemyChoice].type + " punches you in the gut, dealing " + enemyAttack + " damage points.")
        if(player.health < 1){
            console.log("The " + enemies[enemyChoice].type + " " + enemies[enemyChoice].finishingMove)
            console.log("--GAME OVER--")
            process.exit()
        } else {
            userMove()
        }
    }
}
function generateRandomChance(chance) {
    return Math.floor(Math.random() * chance)
}
// Game Loop
console.log("\n~ ~ Welcome! You have been chosen to participate in this role-playing adventure. Your quest is to collect all 3 types of items from the villians. ~ ~")
player.name = readline.question("\nWhat is your name?: ")
console.log("\t\t\t~ Hello " + player.name + ". Good luck! ~")
while(!gameover) {
    const userChoice = readline.keyInSelect(choices, "\tWhat now?: ")
    if(userChoice === 0){
        walk()
    }
    if(userChoice === 1){
        console.log(player)
    }
    if(userChoice === -1){
        console.log("You die of old age.")
        process.exit()
    }
}