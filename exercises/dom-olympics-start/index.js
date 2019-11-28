const head1 = document.createElement("h1")
head1.textContent = "JavaScript Made This !!"
document.getElementById("header").appendChild(head1)

const subHead = document.createElement("h3")
const name = document.createElement("span")
name.textContent = "[Evan]"
name.className = "name"
const wrote = document.createElement("span")
wrote.textContent = " wrote the JavaScript"
subHead.appendChild(name)
subHead.appendChild(wrote)

document.getElementById("header").appendChild(subHead)

const messagesLeft = document.getElementsByClassName("message left")
const messagesRight = document.getElementsByClassName("message right")
messagesLeft[0].textContent = "Good day sir"
messagesRight[0].textContent = "And to you my fine fellow"
messagesLeft[1].textContent = "Yes indeed"
messagesRight[1].textContent = "Indubitably"

const clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", function(e){
    messagesRight[0].textContent = ""
    messagesLeft[0].textContent = ""
    messagesRight[1].textContent = ""
    messagesLeft[1].textContent = ""
    messagesRight[0].style.padding = 0
    messagesLeft[0].style.padding = 0
    messagesRight[1].style.padding = 0
    messagesLeft[1].style.padding = 0
})

// NEEDS WORK

// const dropDown = document.getElementById("theme-drop-down")
// dropDown.addEventListener("change", function(e){
//     for(var i = 0; i < messagesRight.length; i++){
//         if(dropDown.toggle("theme-two")){
//             messagesRight[i].style.backgroundColor = "red";
//         } else if(dropDown.classList.toggle("theme-one")){
//             messageRight[i].style.backgroundColor = "brown"
//         }
//     }
//     for(var i = 0; i < messagesLeft.length; i++){
//         if(dropDown.classList.toggle("theme-two")){
//             messagesLeft[i].style.backgroundColor = "black";
//             messagesLeft[i].style.color = "white";
//         } else if(dropDown.classList.toggle("theme-one")){
//             messagesLeft[i].style.backgroundColor = "blue"
//         }
//     }
// })

// dropDown.addEventListener("change", function(e){
//     for(var i = 0; i < messagesRight.length; i++){
//         messagesRight[i].classList.toggle("theme-one");
//         messageRight[i].style.backgroundColor = "brown"
//     }
//     for(var i = 0; i < messagesLeft.length; i++){
//         messagesLeft[i].classList.toggle("theme-one");
//         messagesLeft[i].style.backgroundColor = "blue"
//     }
// })