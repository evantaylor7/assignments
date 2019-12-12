// countdown timer
// const timer = document.getElementById("timer")
// let count = 5
// let intervalId
// timer.textContent = count

// const countdownTimer = () => {
//     count--
//     timer.textContent = count
// }

// window.addEventListener("load", () => {
//     intervalId = setInterval(countdownTimer, 1000)
// })
// if(intervalId === 5000){
//     clearInterval(intervalId)
//     count = 0
// }
// NEEDS WORK

// click tracker
let clicks = localStorage.getItem("clicks") || 0
const tracker = document.getElementById("tracker")

window.addEventListener("click", () => {
    clicks++
    tracker.textContent = clicks
    localStorage.setItem("clicks", clicks)
    if(count === 0){
        clicks = tracker.textContent
    }
})

const button = document.getElementById("reset")
button.addEventListener("click", () => clicks = -1)

tracker.textContent = clicks
