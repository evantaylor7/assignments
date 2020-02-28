const express = require("express")
const bounty = express()
const {v4} = require("uuid")

bounty.use(express.json())

const bounties = [
    {firstName: "Morty", lastName: "Smith", living: false, bountyAmount: 20, type: "Jedi", _id: v4()},
    {firstName: "Rick", lastName: "Sanchez", living: true, bountyAmount: 999, type: "Sith", _id: v4()},
    {firstName: "Beth", lastName: "Smith", living: true, bountyAmount: 50, type: "Sith", _id: v4()},
    {firstName: "Jerry", lastName: "Smith", living: true, bountyAmount: 10, type: "Jedi", _id: v4()}
]

bounty.get("/bounties", (req, res) => {
    res.send(bounties)
})

bounty.get("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.filter(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

bounty.post("/bounties", (req, res) => {
    const newBounty = req.body
    newBounty._id = v4()
    bounties.push(newBounty)
    const {firstName, lastName} = newBounty
    res.send(`Successfully added ${firstName} ${lastName} to the database!`)
})

bounty.put("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

bounty.delete("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully removed bounty!")
})

bounty.listen(4000, () => {
    console.log("The server is running on port 9000")
})

module.exports = bounty