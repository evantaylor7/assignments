const express = require("express")
const bounties = express.Router()
const {v4} = require("uuid")
const data = require("../bountyData.js")

bounties.get("/", (req, res) => {
    res.send(data)
})

bounties.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = data.filter(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

bounties.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = v4()
    data.push(newBounty)
    const {firstName, lastName} = newBounty
    res.send({newBounty, success: `Successfully added ${firstName} ${lastName} to the list!`})
})

bounties.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = data.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(data[bountyIndex], req.body)
    res.send(updatedBounty)
})

bounties.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = data.findIndex(bounty => bounty._id === bountyId)
    data.splice(bountyIndex, 1)
    res.send("Successfully removed bounty!")
})

module.exports = bounties