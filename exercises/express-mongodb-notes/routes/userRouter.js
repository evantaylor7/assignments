const express = require("express")
const userRouter = express.Router()
const {v4} = require("uuid")

const users = [
    {name: "joe", age: 20, _id: v4()},
    {name: "moe", age: 24, _id: v4()},
    {name: "bob", age: 10, _id: v4()},
    {name: "larry", age: 22, _id: v4()},
    {name: "mike", age: 21, _id: v4()}
]

// Get All
userRouter.get("/", (req, res) => {
    res.send(users)
})

// Get One
userRouter.get("/userId", (req, res) => {
    const userId = req.params.userId
    const foundUser = userId.find(user => user._id === userId)
    res.send(foundUser)
})

// Post One
userRouter.post("/", (req, res) => {
    const newUser = req.body
    newUser._id = v4()
    users.push(newUser)
    res.send(`Successfully added ${newUser.name} to the database`)
})

module.exports = userRouter