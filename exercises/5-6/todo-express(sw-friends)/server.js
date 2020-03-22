const express = require("express")
const app = express()
const {v4} = require("uuid")
const friends = require("./friendsDatabase")

app.use(express.json())

app.get("/", (req, res) => {
    res.send(friends)
})

app.get("/:friendId", (req, res) => {
    const friendId = req.params.friendId
    const foundFriend = friends.filter(friend => friend._id === friendId)
    res.send(foundFriend)
})

app.post("/", (req, res) => {
    const newFriend = req.body
    newFriend._id = v4()
    friends.push(newFriend)
    res.send(`New Star Wars friend ${newFriend.name} added!`)
})

app.put("/:friendId", (req, res) => {
    const friendId = req.params.friendId
    const friendIndex = friends.findIndex(friend => friend._id === friendId)
    const updatedFriends = Object.assign(friends[friendIndex], req.body)
    res.send(updatedFriends)
})

app.delete("/:friendId", (req, res) => {
    const friendId = req.params.friendId
    const friendIndex = friends.findIndex(friend => friend._id === friendId)
    friends.splice(friendIndex, 1)
    res.send(`${friends[friendIndex].name} is no longer your friend. Sad day.`)
})

app.listen(7777, () => {
    console.log("The server is running on Port 7777")
})