let clicks = localStorage.getItem("clicks") || 0
const tracker = document.getElementById("tracker")

window.addEventListener("click", function(){
    clicks++
    tracker.textContent = clicks
    localStorage.setItem("clicks", clicks)
})

const button = document.getElementById("reset")
button.addEventListener("click", function(){
    clicks = -1
})

tracker.textContent = clicks

// (to do) extra credit = countdown timer