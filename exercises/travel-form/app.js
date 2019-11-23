const userForm = document.userForm
userForm.addEventListener("submit", function(e){
    e.preventDefault()
    const firstName = userForm.firstName.value
    const lastName = userForm.lastName.value
    const age = userForm.age.value
    const gender = userForm.gender.value
    const destination = userForm.destination.value
    const diet = userForm.diet
    const dietChecked = []
    for(let i = 0; i < diet.length; i++){
        if(diet[i].checked){
            dietChecked.push(" " + diet[i].value)
        }
    }
    if(dietChecked.length === 0){
        dietChecked.push("none")
    }
    alert(
        `
        name: ${firstName} ${lastName}
        age: ${age}
        gender: ${gender}
        destination: ${destination}
        dietary restrictions: ${dietChecked}
        `
    )
    // console.log(firstName + " " + lastName + ", " + age + ", " + gender + ", " + destination + ", " + diet)
})