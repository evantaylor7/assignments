var sum = document.getElementById("add")

addForm.addEventListener("submit", function(e){
    e.preventDefault()
    var addAns = document.createElement("div")
    addAns.className = "add-answer"
    sum.appendChild(addAns)
    var input1 = Number(addForm.addNum1.value)
    var input2 = Number(addForm.addNum2.value)
    addAns.textContent = ("Sum = " + (input1 + input2))
})
// Could have also been:
// var input1 = addForm.addNum1
// var input2 = addForm.addNum2
// addAns.textContent = "sum = " + Number(input1.value + input2.value)

var difference = document.getElementById("subtract")

subtractForm.addEventListener("submit", function(e){
    e.preventDefault()
    var subtrAns = document.createElement("div")
    subtrAns.className = "subtract-answer"
    difference.appendChild(subtrAns)
    var input1 = Number(subtractForm.subtractNum1.value)
    var input2 = Number(subtractForm.subtractNum2.value)
    subtrAns.textContent = ("Difference = " + (input1 - input2))
})

var product = document.getElementById("multiply")

multiplyForm.addEventListener("submit", function(e){
    e.preventDefault()
    var prod = document.createElement("div")
    prod.className = "product"
    product.appendChild(prod)
    var input1 = Number(multiplyForm.multiplyNum1.value)
    var input2 = Number(multiplyForm.multiplyNum2.value)
    prod.textContent = ("Product = " + (input1 * input2))
})