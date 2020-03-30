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
issueRouter.put('/upvote/:issueId', async (req, res, next) => {
    try{
        const issue = await Issue.findOne({_id: req.params.issueId})
        if(issue.usersWhoHaveVoted.includes(req.user._id)){
            res.status(403)
            throw new Error('You can only vote once')
        }
        const updatedIssue = await Issue.findOneAndUpdate(
            {_id: req.params.issueId},
            {
                $inc: {votes: 1},
                $push: {usersWhoHaveVoted: req.user._id}
            },
            {new: true}
        )
            return res.status(201).send(updatedIssue)
        }catch(err){
            res.status(500)
            return next(err)
        }
})

// downvote issue
issueRouter.put('/downvote/:issueId', async (req, res, next) => {
    try{
        const issue = await Issue.findOne({_id: req.params.issueId})
        if(issue.usersWhoHaveVoted.includes(req.user._id)){
            res.status(403)
            throw new Error('You can only vote once')
        }
        const updatedIssue = await Issue.findOneAndUpdate(
            {_id: req.params.issueId},
            {
                $inc: {votes: -1},
                $push: {usersWhoHaveVoted: req.user._id}
            },
            {new: true}
        )
            return res.status(200).send(updatedIssue)
    }catch(err){
        res.status(500)
        return next(err)
    }
})

module.exports = issueRouter