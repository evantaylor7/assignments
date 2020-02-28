// first express server
const express = require("express")
const app = express()
// const uuid = require("uuid/v4")

// Middleware (for every request) - a function that fires on the inbetween
app.use(express.json()) // Looks for a request body, and turns it into 'req.body'
// first argument is endpoint; optional --> app.use("/", express.json())

// fake data:
// const users = [
//     {name: "joe", age: 20, _id: uuid()},
//     {name: "moe", age: 24, _id: uuid()},
//     {name: "bob", age: 10, _id: uuid()},
//     {name: "larry", age: 22, _id: uuid()},
//     {name: "mike", age: 21, _id: uuid()}
// ]

// Routes //
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/users", require("./routes/userRouter"))

// Middleware
app.use("/items", (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECTUED")
    next()
})

app.use("/items", (req, res, next) => {
    req.body = { name: "Rick" }
    next()
})

app.get("/items", (req, res, next) => {
    console.log("GET REQUEST RECEIVED")
    res.send(req.body)
})

// Two arguments:
    // 1. Endpoint (mount path)
    // 2. Callback function
// app.get("/users", (req, res) => {
//     res.send(users)
// })
// app.put()
// app.post()
// app.delete()

// app.post("/users", (req, res) => {
//     const newUser = req.body
//     newUser._id = uuid()
//     users.push(newUser)
//     res.send(`Successfully added ${newUser.name} to the database`)
// })


// listen needs 2 arguments
    // 1: PORT
    // 2: CB
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})

// ! Important: control + C exits in terminal