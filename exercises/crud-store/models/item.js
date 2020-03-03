const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: String,
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Item', inventorySchema)