// Adding list items
addItem.addEventListener("submit", function(e){
    e.preventDefault()
    const newListItem = document.createElement("li")
    list.appendChild(newListItem)
    newListItem.className = "list-item"
    const newDiv = document.createElement("div")
    newDiv.textContent = title.value
    newListItem.appendChild(newDiv)
    const newEdit = document.createElement("button")
    newEdit.textContent = "edit"
    newEdit.className = "edit"
    // Adding form to edit / editing
    const newForm = document.createElement("form")
    const saveButton = document.createElement("button")
    saveButton.textContent = "save"
    newForm.appendChild(saveButton)
    const editInput = document.createElement("input")
    newForm.appendChild(editInput)
    newForm.style.display = "none"
    list.appendChild(newForm)
    newEdit.addEventListener("click", function(e){
        newForm.style.display = "block"
        newForm.style.textAlign = "center"
        editInput.value = newDiv.textContent
    })
    saveButton.addEventListener("click", function(e){
        e.preventDefault()
        newDiv.textContent = editInput.value
        newForm.style.display = "none"
    })
    newListItem.appendChild(newEdit)
    const newX = document.createElement("button")
    newX.textContent = "X"
    newX.className = "delete"
    newX.addEventListener("click", function(e){
        e.target.parentNode.remove()
    })
    newListItem.appendChild(newX)
})
 
// Deleting an item
const deleteItem = document.getElementsByClassName("delete")
for(let i = 0; i < deleteItem.length; i++){
    deleteItem[i].addEventListener("click", function(e){
        e.target.parentNode.remove()
    })
}



// Editing an item (already existing items)
// couldn't figure this out -->

// const edit = document.getElementsByClassName("edit")
// const listItem = document.getElementsByClassName("list-item")
// const divContent = document.getElementsByClassName("div-content")
// const newForm = document.createElement("form")
// const saveButton = document.createElement("button")
// saveButton.textContent = "save"
// newForm.appendChild(saveButton)
// const editInput = document.createElement("input")
// newForm.appendChild(editInput)
// newForm.style.display = "none"
// list.appendChild(newForm)
// for(let i = 0; i < edit.length; i++){
//     edit.addEventListener("click", function(e){
//         newForm.style.display = "block"
//         newForm.style.textAlign = "center"
//         editInput.value = divContent.textContent
//     })
//     saveButton.addEventListener("click", function(e){
//         e.preventDefault()
//         newDiv.textContent = editInput.value
//         newForm.style.display = "none"
//     })
// }

// for(let i = 0; i < edit.length; i++){
//     edit[i].addEventListener("click", function(e){
//         e.target.textContent = "save"
//         const inputForm = document.createElement("form")
//         const editInput = document.createElement("input")
//         editInput.textContent = "wut"
//         console.log(editInput)
//         divContent.appendChild(inputForm)
//         inputForm.appendChild(editInput)
//         }
//     )
// }