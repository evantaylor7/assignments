// first express server
const express = require("express")
const app = express()

// fake data:
const users = [
    {name: "joe", age: 20},
    {name: "moe", age: 24},
    {name: "bob", age: 10},
    {name: "larry", age: 22},
    {name: "mike", age: 21}
]

// Two arguments:
    // 1. Endpoint (mount path)
    // 2. Callback function
app.get("/users", (req, res) => {
    res.send(users)
})
// app.put()
// app.post()
// app.delete()

app.post("/users", (req, res) => {
    
})


// listen needs 2 arguments
    // 1: PORT
    // 2: CB
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})

// ! Important: control + C exits in terminal