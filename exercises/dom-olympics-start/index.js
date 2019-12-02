const messageCount = document.getElementsByClassName("message")

// Adding header -->
const head1 = document.createElement("h1")
head1.textContent = "JavaScript Made This !!"
document.getElementById("header").appendChild(head1)

// Adding subheader -->
const subHead = document.createElement("h3")
const name = document.createElement("span")
name.textContent = "[Evan]"
name.className = "name"
const wrote = document.createElement("span")
wrote.textContent = " wrote the JavaScript"
subHead.appendChild(name)
subHead.appendChild(wrote)

document.getElementById("header").appendChild(subHead)

// Changing text to happier message -->
const messagesLeft = document.getElementsByClassName("left")
const messagesRight = document.getElementsByClassName("right")
messagesLeft[0].textContent = "Good day sir"
messagesRight[0].textContent = "And to you my fine fellow"
messagesLeft[1].textContent = "Yes indeed"
messagesRight[1].textContent = "Indubitably"

// Clearing text -->
const clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", function(e){
    for(let i = 0; i <messageCount.length; i++){
        messageCount[i].textContent = ""
        messageCount[i].style.padding = 0
    }
})

// Changing color style using select box -->
const dropDown = document.getElementById("theme-drop-down")
const left = document.getElementsByClassName("left")
const right = document.getElementsByClassName("right")
dropDown.addEventListener("change", function(e){
    for(let i = 0; i < message.length; i++){
        if(dropDown.value === "theme-two"){
            right[i].style.backgroundColor = "red";
            right[i].style.color = "black"
            left[i].style.backgroundColor = "black";
            left[i].style.color = "white";
        } else if(dropDown.value === "theme-one"){
            right[i].style.backgroundColor = "lightblue"
            right[i].style.color = "black"
            left[i].style.backgroundColor = "burlywood"
            left[i].style.color = "black"
        } else if(dropDown.value === "theme-three"){
            right[i].style.backgroundColor = "darkgreen"
            right[i].style.color = "white"
            left[i].style.backgroundColor = "purple"
            left[i].style.color = "white"
        } else if(dropDown.value === "theme-four"){
            right[i].style.backgroundColor = "maroon"
            right[i].style.color = "white"
            left[i].style.backgroundColor = "orange"
            left[i].style.color = "black"
        }
    }
})


// Adding new messages using the form -->
const newMessage = document.message
const input = document.getElementById("input")
// Why does this line (below) work when getting by id versus class?
const messages = document.getElementById("messages")
newMessage.addEventListener("submit", function(e){
    e.preventDefault()
    const newDiv = document.createElement("div")
    if(messageCount.length % 2 === 0){
        newDiv.className = "message left"
    } 
    if(messageCount.length % 2 === 1){
        newDiv.className = "message right"
    }
    newDiv.textContent = input.value
    messages.appendChild(newDiv)

    
})

// How do I make it so the color themes stay consistent with the new messages?