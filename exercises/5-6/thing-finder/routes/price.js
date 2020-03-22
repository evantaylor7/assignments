const express = require('express')
const price = express.Router()
const data = require('../database')

// this allows a search for a min and max price
price.get("/price", (req, res) => {
    const minPrice = Number(req.query.min)
    const maxPrice = Number(req.query.max)
    const filteredPrices = data.filter(item => minPrice <= item.price && maxPrice >= item.price)
    res.send(filteredPrices)
})

module.exports = price