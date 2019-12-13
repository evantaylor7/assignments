let gameActive = true

class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked){
        this.namePicked = namePicked
    }
    gotHit(){
        if(this.status === "Powered Up"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Small"
        } else if(this.status === "Small"){
            this.status = "Dead"
            gameActive = false
        }
    }
    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Powered Up"
        }
    } 
    addCoin(){
        this.totalCoins++
    }
    print(){
        console.log(`Name: ${this.name}
        Total Coins: ${this.totalCoins}
        Status: ${this.status}
        ${this.hasStar}`)
    }
}
const player1 = new Player("Evan", 0, "Big", false)
const randomNumber = (chance = 3) => Math.floor(Math.random() * chance)
const gamePlay = (randomNumber) => {
    if(randomNumber === 0){
        gotHit()
    } else if(randomNumber === 1){
        gotPowerup()
    } else if(randomNumber === 2){
        addCoin()
    }
}

const statuses = ["Powered Up", "Big", "Small", "Dead"]
const namePicked = ["Mario", "Luigi"]

gamePlay(1)