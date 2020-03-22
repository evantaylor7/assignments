// 1.
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0
for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        count++
    }
}
console.log(count)

// 2.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ", " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + "," + " is old enough")
      } else{
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ", " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + "," + " is not old enough")
      }
  }

  // bonuses:
  // 1.
  console.log("**BONUSES**")
  console.log("#1")
  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max")
      } else{
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max")
      }
  }

  // 2.
  console.log("#2")
  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
          var gend = "him"
      } else{
          var gend = "her"
      }
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let " + gend + " in")
      } else{
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let " + gend + " in")
      }
  }

  // Optional Bonus
  console.log("Optional Bonus")
  var light = [2, 3, 2]
  var toggle = 0
  for(var i = 0; i < light.length; i++){
      toggle += light[i]
  }

  if(toggle % 2 === 1){
      console.log("the light is on")
  } else{
      console.log("the light is off")
  }

  // DONE AND EVERYTHING WORKS!!