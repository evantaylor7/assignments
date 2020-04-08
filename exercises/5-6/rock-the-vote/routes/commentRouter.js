const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')

// get all comments by post
commentRouter.get('/:issueId', (req, res, next) => {
    req.body.issue = req.params.issueId
    Comment.find({issue: req.body.issue}, (err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// post new comment
commentRouter.post('/post/:issueId', (req, res, next) => {
    req.body.issue = req.params.issueId
    req.body.user = req.user._id
    req.body.postedBy = req.user.username
    const newComment = new Comment(req.body)
    newComment.save((err, newComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newComment)
    })
})

// delete a comment
commentRouter.delete('/:commentId', (req, res, next) => {
    Comment.findOneAndDelete(
        {_id: req.params.commentId, user: req.user._id},
        (err, comment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Your comment was successfully deleted.`)
    })
})

// update a comment
commentRouter.put('/:commentId', (req, res, next) => {
    Comment.findOneAndUpdate(
        {_id: req.params.commentId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedComment)
        }
    )
})

module.exports = commentRouter