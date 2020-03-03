const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Movie Blueprint
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
        // unique: true --> etc. (go to mongoose's documentation on schemas to see all properties)
    },
    genre: {
        type: String,
        enum: ["fantasy", "horror", "action"],
        require: true
    },
    releaseYear: Number
})

module.exports = mongoose.model("Movie", movieSchema)