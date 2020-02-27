const express = require("express")
const bounty = express()
const uuid = require("uuid/v4")

bounty.use(express.json())

const bounties = [
    {firstName: "Morty", lastName: "Smith", living: false, bountyAmount: 20, type: "Jedi", _id: uuid()},
    {firstName: "Rick", lastName: "Sanchez", living: true, bountyAmount: 999, type: "Sith", _id: uuid()},
    {firstName: "Beth", lastName: "Smith", living: true, bountyAmount: 50, type: "Sith", _id: uuid()},
    {firstName: "Jerry", lastName: "Smith", living: true, bountyAmount: 10, type: "Jedi", _id: uuid()}
]

bounty.get("/bounties", (req, res) => {
    res.send(bounties)
})

bounty.post("/bounties", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    const {firstName, lastName} = newBounty
    res.send(`Successfully added ${firstName} ${lastName} to the database!`)
})

bounty.listen(4000, () => {
    console.log("The server is running on port 9000")
})

module.exports = bounty