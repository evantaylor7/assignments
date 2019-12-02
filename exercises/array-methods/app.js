var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function myFunc(){
    vegetables.pop()
        // console.log("vegetables: ", vegetables)
    fruit.shift()
        // console.log("fruit: ", fruit)
    fruit.indexOf("orange")
        // console.log(fruit.indexOf("orange"))
    fruit.push(fruit.indexOf("orange"))
        // console.log("fruit: ", fruit)
    vegetables.length
        // console.log(vegetables.length)
    vegetables.push(vegetables.length)
        // console.log("vegetables: ", vegetables)
    var food = fruit.concat(vegetables)
        // console.log("food: ", food)
    food.splice(4, 2)
        // console.log("food: ", food)
    food.reverse()
        // console.log("food: ", food)
    var foodStr = food.join(", ")
        return foodStr
} 
console.log(myFunc())