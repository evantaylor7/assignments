const express = require("express")
const things = express.Router()
const data = require('../database')

// get all
things.get("/", (req, res) => {
    // instead of another things.get you could also use:
    // if(req.query)
    res.send(data)
})

// get by type
things.get("/search", (req, res) => {
    const type = req.query.type
    const filteredThings = data.filter(thing => thing.type === type)
    res.send(filteredThings)
})

module.exports = things