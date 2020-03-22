const express = require("express")
const bounties = express.Router()
const Bounty = require('../models/bounty.js')

// BEFORE USING MONGOOSE:
// const {v4} = require("uuid")
// const data = require("../bountyData.js")

// bounties.get("/", (req, res) => {
//     res.send(data)
// })

// bounties.get("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = data.filter(bounty => bounty._id === bountyId)
//     res.send(foundBounty)
// })

// bounties.post("/", (req, res) => {
//     const newBounty = req.body
//     newBounty._id = v4()
//     data.push(newBounty)
//     const {firstName, lastName} = newBounty
//     res.send({newBounty, success: `Successfully added ${firstName} ${lastName} to the list!`})
// })

// bounties.put("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const bountyIndex = data.findIndex(bounty => bounty._id === bountyId)
//     const updatedBounty = Object.assign(data[bountyIndex], req.body)
//     res.send(updatedBounty)
// })

// bounties.delete("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const bountyIndex = data.findIndex(bounty => bounty._id === bountyId)
//     data.splice(bountyIndex, 1)
//     res.send("Successfully removed bounty!")
// })

bounties.get('/', (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bounties.post('/', (req, res, next) => {
    const newBounty = new Bounty(req.body)
    // const {firstName, lastName} = newBounty
    newBounty.save((err, bounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        // return res.status(201).send(`${firstName} ${lastName} was added!`)
        return res.status(200).send(bounty)
    })
})

bounties.delete('/:bountyId', (req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, bounty) => {
        const {firstName, lastName} = bounty
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`${firstName} ${lastName} was deleted from the database.`)
    })
})

bounties.put('/:bountyId', (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId}, 
        req.body, 
        {new: true}, 
        (err, bounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(bounty)
    })
})

module.exports = bounties