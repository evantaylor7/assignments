let gameActive = true

class Player {
    constructor(){
        this.name = ""
        this.totalCoins = 0
        this.status = "Small"
        this.hasStar = false
        if(this.hasStar === true){
            console.log("You have a star")
        }
    }
    setName(){
        const chance = Math.floor(Math.random() * 2)
        if(chance === 0){
            this.name = "Mario"
        } else {
            this.name = "Luigi"
        }
    }
    gotHit(){
        if(this.hasStar){
            console.log("Your star deflected the hit")
            this.hasStar = false
        } else{
            if(this.status === "Powered Up"){
                this.status = "Big"
            } else if(this.status === "Big"){
                this.status = "Small"
            } else if(this.status === "Small"){
                this.status = "Dead"
                gameActive = false
            }
        }
    }
    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Powered Up"
        } else if(this.status === "Powered Up"){
            this.hasStar = true
            console.log("You got a star!")
        }
    } 
    addCoin(){
        this.totalCoins += 1
    }
    print(){
        console.log(`
        Name: ${this.name}
        Total Coins: ${this.totalCoins}
        Status: ${this.status}
        
        `)
    }
}
let player1 = new Player()
player1.setName()
const randomNumber = (chance = 3) => Math.floor(Math.random() * chance)
const intervalId = setInterval(gamePlay, 1000)
function gamePlay(){
    if(player1.status === "Dead"){
        clearInterval(intervalId)
    }
    player1.print()
    let chance = randomNumber()
    if(chance === 0){
        player1.gotHit()
    } else if (chance === 1){
        player1.gotPowerup()
    } else if (chance === 2){
        player1.addCoin()
    }
}