const theThang = document.getElementById("dj-box")
console.log(theThang)
console.dir(document)
theThang.addEventListener("mouseover", function(e){
    console.log("hovered");
    e.target.style.backgroundColor = "blue"
})
// This way also works
// theThang.addEventListener("mouseover", function(){
//     console.log("hovered");
//     theThang.style.backgroundColor = "blue"
// })
theThang.addEventListener("mousedown", function(e){
    console.log("mouse button press");
    e.target.style.backgroundColor = "red"
})
theThang.addEventListener("mouseup", function(e){
    console.log("mouse button release");
    e.target.style.backgroundColor = "yellow"
})
theThang.addEventListener("dblclick", function(e){
    console.log("double click");
    e.target.style.backgroundColor = "green"
})
document.addEventListener("scroll", function(){
    console.log("scrolling");
    theThang.style.backgroundColor = "orange"
})

// keydowns to change colors
document.addEventListener("keydown", function(){
    console.log(event.which);
    if(event.which === 82){
        theThang.style.backgroundColor = "red"
    }
})
document.addEventListener("keydown", function(){
    console.log(event.which);
    if(event.which === 89){
        theThang.style.backgroundColor = "yellow"
    }
})
document.addEventListener("keydown", function(){
    console.log(event.which);
    if(event.which === 66){
        theThang.style.backgroundColor = "blue"
    }
})
document.addEventListener("keydown", function(){
    console.log(event.which);
    if(event.which === 71){
        theThang.style.backgroundColor = "green"
    }
})
document.addEventListener("keydown", function(){
    console.log(event.which);
    if(event.which === 79){
        theThang.style.backgroundColor = "orange"
    }
})