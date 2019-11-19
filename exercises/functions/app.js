function sum(a, b){
    return a + b
}
var result = sum(4, 6)
console.log(result)


function largest(a, b, c){
    return Math.max(a, b, c)
}
var result = largest(4,6,3)
console.log(result)


function evenOdd(num1){
    if(num1 % 2 === 0){
        return "even"
    } else{
        return "odd"
    }
}
console.log(evenOdd(3))


function word(string){
    if(string.length <= 20){
        return string + string;
    } else{
        return string.substr(0, string.length / 2)
    }
}
var result = word("blasphemous")
console.log(result)
var result = word("antidisestablishmentarianism")
console.log(result)


function fib(n){
    var fibArray = []
    var sum = 0
    for(i = 0; i < n; i++){
        if(i === 0){
            fibArray.push(1)
        } else if(i === 1){
            fibArray.push(1)
        } else{
            fibArray.push(fibArray[i - 1] + fibArray[i - 2])
        }
    }
    for(j = 0; j < fibArray.length; j++){
        sum += fibArray[j]
    }
    return [fibArray, sum]
}
var result = fib(11)
console.log(result)


function letterCounter(string){
    // make a counter, counts our characters
    var max = 0
    var maxChar
    var array = string.split("")
    for(var i = 0; i < string.length; i++){
        var char = array[i]
        if (string.split(char).length > max){
            max = string.split(char).length;
            maxChar = char;
        }
    }
    console.log(maxChar);
}
letterCounter("slddfkjjslalddksllsdkdalkjddss")