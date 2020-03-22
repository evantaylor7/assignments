function upperLower(str){
    return str.toUpperCase() + str.toLowerCase()
}
console.log(upperLower("EvaNtAYLOr"))

function halfRoundedDown(str){
    return Math.floor(str.length / 2)
}
console.log(halfRoundedDown("whatchamacallit"))

function firstHalf(str){
    return str.slice(0, halfRoundedDown(str))
}
console.log(firstHalf("whatchamacallit"))

function upperLowerHalves(str){
    return str.slice(0, halfRoundedDown(str)).toUpperCase() + str.slice(halfRoundedDown(str), str.length).toLowerCase()
}
console.log(upperLowerHalves("whatchamacallit"))
console.log(upperLowerHalves("this part changes to uppercase AAAND THIS PART DOES OPPOSITE"))

function capitalizeCorrectly(str){
    const splitStr = str.split(" ")
    for(let i = 0; i < splitStr.length; i++){
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    return splitStr.join(" ")

}
console.log(capitalizeCorrectly("this function should capitalize the first letter of each word after a space"))