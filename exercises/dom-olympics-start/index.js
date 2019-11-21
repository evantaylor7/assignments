const h1 = document.createElement("h1")
h1.className = "title"
h1.textContent = "JavaScript Made This!!"
document.getElementById("header").appendChild(h1)

const span = document.createElement("span")
span.className = "name"
span.textContent = "Evan"
document.getElementById("subHead").appendChild(span)

const subTitle = document.createElement("span")
subTitle.className = "sub-title"
subTitle.textContent = " wrote the JavaScript"
document.getElementById("subHead").appendChild(subTitle)

const messagesLeft = document.getElementsByClassName("message left")
const messagesRight = document.getElementsByClassName("message right")
messagesLeft[0].textContent = "Good day sir"
messagesRight[0].textContent = "And to you my fine fellow"
messagesLeft[1].textContent = "Yes indeed"
messagesRight[1].textContent = "Indubitably"

const messages = document.getElementsByClassName("messages")
// console.log(messages)
// console.log(messagesLeft[1].textContent)

const clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", function(e){
    messagesRight[0].textContent = ""
    messagesLeft[0].textContent = ""
    messagesRight[1].textContent = ""
    messagesLeft[1].textContent = ""
})

const dropDown = document.getElementById("theme-drop-down")
dropDown.addEventListener("change", function(e){
    for(var i = 0; i < messagesRight.length; i++) {
        messagesRight[i].classList.toggle("theme-two");
    }
    for(var i = 0; i < messagesLeft.length; i++) {
        messagesLeft[i].classList.toggle("theme-two");
    }
    
})
// console.log(dropDown.classList.toggle("theme-one"))