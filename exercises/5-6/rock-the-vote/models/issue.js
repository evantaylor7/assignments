const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postedBy: {
        type: Schema.Types.String,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    usersWhoHaveVoted: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        default: []
    }
})

module.exports = mongoose.model('Issue', issueSchema)