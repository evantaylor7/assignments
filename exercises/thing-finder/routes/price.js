const express = require('express')
const price = express.Router()
const data = require('../database')

price.get("/price", (req, res) => {
    const price = req.query.price
    console.log(req)
    const filteredPrices = price.filter(price => price === data.price)
    res.send(filteredPrices)
})

module.exports = price