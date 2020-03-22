console.log("~~~~~~~~~~~1~~~~~~~~~~~")
// 1.
// turn array of numbers into total of all the numbers
const total = arr => arr.reduce((final, num) => final += num)
console.log(total([1, 2, 3]))

// longhand:
// function total(arr){
//     console.log("arr", arr)
//     return arr.reduce(function(final, num){
//         final += num
//         return final
//     })
// }
// console.log(total([1,2,3]))

console.log("~~~~~~~~~~~2~~~~~~~~~~~")
// 2.
// turn array of numbers into a long string of those numbers
const stringConcat = arr => arr.reduce((final, num) => final += num.toString())
console.log(stringConcat([1, 2, 3]))

// longhand:
// function stringConcat(arr){
//     return arr.reduce(function(final, num){
//         final += num.toString()
//         return final
//     })
// }
// console.log(stringConcat([1, 2, 3]))

console.log("~~~~~~~~~~~3~~~~~~~~~~~")
// 3.
// count how many people voted
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const totalVotes = voters => voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
}, 0)
console.log(totalVotes(voters))

console.log("~~~~~~~~~~~4~~~~~~~~~~~")
// 4.
// return total price
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
const totalCost = wishlist => wishlist.reduce((final, item) => final += item.price, 0)
console.log(totalCost(wishlist))

// longhand:
// function totalCost(wishlist){
//     return wishlist.reduce(function(final, item){
//         final = final + item.price
//         return final
//     }, 0)
// }
// console.log(totalCost(wishlist))

console.log("~~~~~~~~~~~5~~~~~~~~~~~")
// 5.
// turn into single array
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
const flatten = arrays => arrays.reduce((final, arr) => final.concat(arr))
console.log(flatten(arrays))
// longhand:
// function flatten(array){
//     return array.reduce(function(final, arr){
//         final = final.concat(arr)
//         return final
//     })
// }
// console.log(flatten(arrays))

console.log("~~~~~~~~~~~6~~~~~~~~~~~")
// 6.
// return object showing results of vote
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
function voterResults(voters){
    return voters.reduce(function(final, voter){
        if(voter.age <= 25 && voter.voted){
            final.youngVotes++
        } else if(voter.age > 25 && voter.age <= 35 && voter.voted){
            final.midVotes++
        } else if(voter.age > 35 && voter.age <= 55 && voter.voted){
            final.oldVotes++
        }
        if(voter.age <= 25){
            final.youth++
        } else if(voter.age > 25 && voter.age <= 35){
            final.mids++
        } else if(voter.age > 35 && voter.age <= 55){
            final.olds++
        }
        return final
    }, { youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes:0, olds:0 })
}
console.log(voterResults(voters))

// to do: extra credit