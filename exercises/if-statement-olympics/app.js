// prelims
// 1.
console.log("Preliminaries")

if(5 > 3){
    console.log("1. is greater than")
}

// 2. --> is there a way to do this without defining a variable first?
var cat = "cat"
if(cat.length === 3){
    console.log("2. is the length")
} else{
    console.log("2. something went wrong")
}

// 3.
if("cat" === "dog"){
    console.log("3. equal")
} else{
    console.log("3. not the same")
}

// ^ same as above with length
var dog = "dog"
// cat is already defined
if(cat.length === dog.length){
    console.log("3.5. words are the same length")
} else{
    console.log("3.5. words are not the same length")
}

// bronze
// 1.
console.log("Bronze")
var person = {
    name: "Bobby",
    age: 12
  }

  if(person.age >= 18){
      console.log("1." + person.name + " is allowed to go to the movie")
  } else{
      console.log("1." + person.name + " is not allowed to go to the movie")
  }

  // 2.
  if(person.name[0] === "B"){
      console.log("2." + person.name + " is allowed to go to the movie")
  } else{
      console.log("2." + person.name + " is not allowed to go to the movie")
  }

  // 3.
  if(person.name[0] === "B" && person.age >= 18){
      console.log("3." + person.name + " is allowed to go to the movie")
  } else{
      console.log("3." + person.name + " is not allowed to go to the movie")
  }

  // silver
  console.log("Silver")
  // 1.
  if(1 === "1"){
      console.log("1. strict")
  } else if(1 == "1"){
      console.log("1. loose")
  } else{
      console.log("1. not equal at all")
  }

  // 2.
  if(1 <= 2 && 2 === 4){
      console.log("yes")
  } else{
      console.log("no")
  }

  // gold
  console.log("Gold")
  // 1.
  //dog = "dog"
  if(typeof "dog" === "string"){
      console.log("1. dog is a string")
  }

  // 2.
  if(typeof true === "boolean"){
      console.log("2. it's a boolean")
  } else{
      console.log("2. it's not a boolean")
  }

  // 3.
  var myvar = "it's a sentence"
  if(myvar === undefined){
      console.log("3. it's not defined")
  } else{
      console.log("3. it's defined")
  }

  // practice
console.log("LOOK HERE")
  var otherVar
  if(otherVar === undefined){
      console.log("it's undefined")
  } else{
      console.log("something went wrong")
  }

  // 4.
  if("s" > 12){
      console.log("4. s is greater than 12")
  } else{
      console.log("4. the're obviously two totally different things")
  }

  // 5.
  if("s" > "i"){
    console.log("5. yeah")
} else{
    console.log("5. no...")
}

//6. **Need Help With This**
// var myNum = 10
// (myNum % 2 === 0)?
//     console.log("EVEN"):
//     console.log("ODD")