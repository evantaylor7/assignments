// Preliminaries
// 1.
console.log("**1**")
for(var i = 0; i < 10; i++){
    console.log(i)
}

console.log("**2**")
// 2.
for(var i = 9; i >= 0; i--){
    console.log(i)
}

// 3.
console.log("**3**")
var fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

// Bronze
// 1. 
console.log("Bronze")
console.log("**1**")
var array = []
for(var i = 0; i < 10; i++){
    array.push(i)
}
console.log(array)

// alternate way (the way I should have used...)
var array = []
for(var i = 0; i < 10; i++){
    array[i] = i
}
console.log(array)

// 2.
console.log("**2**")
for(var i = 0; i < 101; i+= 2){
    console.log(i)
}

// 3.
console.log("**3**")
var fruitArr = []
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(var i = 0; i < fruit.length; i += 2){
    fruitArr.push(fruit[i])
}
console.log(fruitArr)

// Silver
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
// 1.
console.log("**1**")
for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
}

// 2.
console.log("**2**")
var names = []
var occupation = []
for(var i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name);
    occupation.push(peopleArray[i].occupation)
}
console.log(names)
console.log(occupation)

console.log("alternate")
var names = []
var occupation = []
for(var i = 0; i < peopleArray.length; i++){
    names[i] = peopleArray[i].name;
    occupation[i] = peopleArray[i].occupation
}
console.log(names)
console.log(occupation)

// 3.
console.log("**3**")
var names = []
var occupation = []
for(var i = 0; i < peopleArray.length; i += 2){
    names.push(peopleArray[i].name);
    occupation.push(peopleArray[i + 1].occupation)
}
console.log(names)
console.log(occupation)

// Gold
// 1.
console.log("Gold")
console.log("**1**")
// nestArray1 = []
// nestArray2 = []
// nestArray3 = []
// for(var i = 0; i < 1; i++){
//     for(var i = 0; i < 1; i++){
//         nestArray1.push(i, i, i)
//         nestArray2.push(i, i, i)
//         nestArray3.push(i, i, i)
//     }
// }
// console.log(nestArray1, nestArray2, nestArray3)

// nested for loop:
// for(var i = 0; i < 10; i++){
//     var myArray = []
//     myArray.push(i)
//     console.log(myArray)
//     for(var j = 0; j < myArray.length; j++){
//         console.log(j)
//     }
// }
// var multiArr = [[1,2,3],[4,5,6]]
// for(var i = 0; i < multiArr.length; i++){
//     for (var j = 0; j < multiArr[i].length - 1; j++){
//         console.log(j)
//     }
// }
for(var i = 0; i < 1; i++){
    var myArray = []
    myArray.push(i, i, i)
    for(var j = 0; j < myArray.length; j++){
        console.log(myArray)
    }
}
// NOT FINISHED
// console.log("could also be")
// grid
// for(var i = 0; i < 3; i++){
//     var myArray = []
//     for(var j = 0; j < 3; j++){
//         myArray.push(0)
//     }
//     myArray.push
// }
// console.log(myArray)

// 2.
console.log("**2**")
for(var i = 0; i < 3; i++){
    var myArray = []
    myArray.push(i, i, i)
    for(var j = 0; j < 1; j++){
        console.log(myArray)
    }
}

// 3. 
console.log("**3**")
for(var i = 0; i < 3; i++){
    var myArray = []
    myArray.push(0, 1, 2)
    for(var j = 0; j < 1; j++){
        console.log(myArray)
    }
}

// 4.
console.log("**4**")
// for(var i = 0; i < 3; i++){
//     var myArray = []
//     var x = myArray[i]
//     myArray.push(myArray[i], myArray[i], myArray[i])
//     for(var j = 0; j < 1; j++){
//         console.log(myArray)
//     }
// }
for(var i = x; i = x; i++){
    var myArray = []
    var x = myArray[i]
    myArray.push(x)
    for(var j = x; j < myArray.length; j++){
        console.log(myArray)
    }
}