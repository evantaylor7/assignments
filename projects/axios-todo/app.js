const toDoForm = document["to-do-form"]
const toDoList = document.getElementById("todo-list")

function getTodos () {
    axios.get("https://api.vschool.io/evantaylor/todo")
        .then(response => {
            list(response.data)
        })
        .catch(error => console.log(error))
}

getTodos()


const clear = () => {
    while(toDoList.firstChild){
        toDoList.removeChild(toDoList.firstChild)
    }
}

function list(data){
    clear()
    data.reverse()
    for(let i = 0; i < data.length; i++){
        const listDiv = document.createElement("div")
        listDiv.className = "list-div"

        const title = document.createElement("h2")
        title.textContent = data[i].title
        listDiv.appendChild(title)

        const description = document.createElement("p")
        description.textContent = data[i].description
        listDiv.appendChild(description)

        const price = document.createElement("p")
        price.textContent = "Price: $" + data[i].price
        listDiv.appendChild(price)

        const img = document.createElement("img")
        img.src = data[i].imgUrl
        listDiv.appendChild(img)

        const complDiv = document.createElement("div")
        complDiv.style.margin = "20px"
        const complLabel = document.createElement("label")
        complDiv.textContent = "Completed: "
        complDiv.appendChild(complLabel)
        const completedItem = document.createElement("input")
        completedItem.type = "checkbox"
        completedItem.checked = data[i].completed
        completedItem.addEventListener("click", function(){
            const updates = {
                completed: !data[i].completed
            }

            axios.put(`https://api.vschool.io/evantaylor/todo/${data[i]._id}`, updates)
                .then(response => getTodos())
                .catch(err => console.log(err))
        })
        complDiv.appendChild(completedItem)
        listDiv.appendChild(complDiv)
        
        if(data[i].completed === true){
            title.style["text-decoration"] = "line-through"
            description.style["text-decoration"] = "line-through"
            price.style["text-decoration"] = "line-through"
            listDiv.style["background-color"] = "grey"
        }

        const deleteItem = document.createElement("button")
        deleteItem.textContent = "Delete"
        deleteItem.addEventListener("click", function(){
            axios.delete(`https://api.vschool.io/evantaylor/todo/${data[i]._id}`)
                .then(response => getTodos())
                .catch(err => console.log(err))
        })
        listDiv.appendChild(deleteItem)
        
        const editForm = document.createElement("form")
        editForm.appendChild(document.createElement("br"))
        editForm.style.display = "none"
        const editTitleLabel = document.createElement("label")
        editTitleLabel.textContent = "Title: "
        editForm.appendChild(editTitleLabel)
        editForm.appendChild(document.createElement("br"))
        const editTitle = document.createElement("input")
        editTitle.className = "title"
        editTitle.value = data[i].title
        editForm.appendChild(editTitle)
        editForm.appendChild(document.createElement("br"))
        const editDescLabel = document.createElement("label")
        editDescLabel.textContent = "Description: "
        editForm.appendChild(editDescLabel)
        editForm.appendChild(document.createElement("br"))
        const editDesc = document.createElement("textarea")
        editDesc.value = data[i].description
        editForm.appendChild(editDesc)
        editForm.appendChild(document.createElement("br"))
        const editPriceLabel = document.createElement("label")
        editPriceLabel.textContent = "Price: "
        editForm.appendChild(editPriceLabel)
        editForm.appendChild(document.createElement("br"))
        const priceIndicator = document.createElement("label")
        priceIndicator.textContent = "$"
        editForm.appendChild(priceIndicator)
        const editPrice = document.createElement("input")
        editPrice.className = "price"
        editPrice.value = data[i].price
        editPrice.type = "number"
        editPrice.step = ".01"
        editForm.appendChild(editPrice)
        editForm.appendChild(document.createElement("br"))
        const editImgLabel = document.createElement("label")
        editImgLabel.textContent = "Image URL: "
        editForm.appendChild(editImgLabel)
        editForm.appendChild(document.createElement("br"))
        const editImg = document.createElement("textarea")
        editImg.value = data[i].imgUrl
        editForm.appendChild(editImg)
        editForm.appendChild(document.createElement("br"))
        const saveButton = document.createElement("button")
        saveButton.textContent = "save"
        editForm.appendChild(saveButton)
        listDiv.appendChild(editForm)

        const editButton = document.createElement("button")
        editButton.textContent = "Edit"
        editButton.addEventListener("click", function(){
            editForm.style.display = "block"
            editButton.style.display = "none"
            
            editForm.addEventListener("submit", function(e){
                e.preventDefault()
                const updates = {
                    title: editTitle.value,
                    description: editDesc.value,
                    price: editPrice.value,
                    imgUrl: editImg.value
                }
                axios.put(`https://api.vschool.io/evantaylor/todo/${data[i]._id}`, updates)
                    .then(response => getTodos())
                    .catch(err => console.log(err))
            })
        })

        listDiv.appendChild(editButton)

        toDoList.appendChild(listDiv)
    }
}


toDoForm.addEventListener("submit", e => {
    e.preventDefault()

    const newItem = {
        title: toDoForm.title.value,
        description: toDoForm.description.value,
        price: toDoForm.price.value || 0,
        imgUrl: toDoForm.imageUrl.value
    }

    toDoForm.title.value = ""
    toDoForm.description.value = ""
    toDoForm.price.value = 0
    toDoForm.imageUrl.value = ""

    axios.post("https://api.vschool.io/evantaylor/todo", newItem)
        .then(response => getTodos())
        .catch(err => console.log(err))
})