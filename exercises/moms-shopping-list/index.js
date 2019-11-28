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
    newListItem.appendChild(newEdit)
    const newX = document.createElement("button")
    newX.textContent = "X"
    newX.className = "delete"
    newX.addEventListener("click", function(e){
        e.target.parentNode.remove()
    })
    newListItem.appendChild(newX)
})
 
const deleteItem = document.getElementsByClassName("delete")

for(let i = 0; i < deleteItem.length; i++){
    console.log("fired", i)
    deleteItem[i].addEventListener("click", function(e){
        e.target.parentNode.remove()
    })
}