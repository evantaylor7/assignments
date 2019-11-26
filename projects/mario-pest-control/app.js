const form1 = document.form1
const results = document.getElementById("results")

form1.addEventListener("submit", function(e){
    e.preventDefault()

    const formObject = {
        cost: 0,
        cost2: 0,
        cost3: 0
    }
    formObject.cost = form1.cost.value
    formObject.cost2 = form1.cost2.value
    formObject.cost3 = form1.cost3.value

    const totalCost = (formObject.cost * 5) + (formObject.cost2 * 7) + (formObject.cost3 * 11)
    console.log(totalCost)
    results.textContent = "Total cost of duties performed: " + (totalCost) + " coins"
})