const express = require('express')
const inventory = express.Router()
const Item = require('../models/item.js')

inventory.get('/', (req, res, next) => {
    Item.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

inventory.post('/', (req, res, next) => {
    const newItem = new Item(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

inventory.delete('/:itemId', (req, res, next) => {
    Item.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.name} from database`)
    })
})

inventory.put('/:itemId', (req, res, next) => {
    Item.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, (err, editedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(editedItem)
    })
})

module.exports = inventory