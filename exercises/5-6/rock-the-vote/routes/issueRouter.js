const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue.js')

// get all issues
issueRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// get issues by user
issueRouter.get('/user', (req, res, next) => {
    Issue.find({user: req.user._id}, (err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// upvote issue
issueRouter.put('/upvote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId},
        {$inc: {
            votes: 1}
        },
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

// downvote issue
issueRouter.put('/downvote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId},
        {$inc: {
            votes: -1}
        },
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

module.exports = issueRouter