const express = require('express')
const userIssueRouter = express.Router()
const Issue = require('../models/issue.js')

// get issues by user
userIssueRouter.get('/user', (req, res, next) => {
    Issue.find({user: req.user._id}, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// get one issue
userIssueRouter.get('/:issueId', (req, res, next) => {
    Issue.findOne(
        {_id: req.params.issueId}, 
        (err, issue) => {
            if(err){
                res.status(500)
                return next(err)
            }
        return res.status(200).send(issue)
    })
})

// post new issue
userIssueRouter.post('/post', (req, res, next) => {
    req.body.user = req.user._id
    req.body.postedBy = req.user.username
    const newIssue = new Issue(req.body)
    newIssue.save((err, issue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(issue)
    })
})

// delete an issue
userIssueRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete(
        {_id: req.params.issueId, user: req.user._id},
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
        return res.status(200).send(`Your issue \"${deletedIssue.title}\" was successfully deleted.`)
    })
})

// update an issue
userIssueRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.user._id},
        req.body,
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

// upvote issue
userIssueRouter.put('/upvote/:issueId', (req, res, next) => {
    Issue.findOne({_id: req.params.issueId}, (err, issue) => {
        if(issue.usersWhoHaveVoted.includes(req.user._id)){
            res.status(403)
            return next(Error('You can only vote once'))
        }else{
            Issue.findOneAndUpdate(
                {_id: req.params.issueId},
                {
                    $inc: {votes: 1},
                    $push: {usersWhoHaveVoted: req.user._id}
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
        }
    })
})

// downvote issue
userIssueRouter.put('/downvote/:issueId', (req, res, next) => {
    Issue.findOne({_id: req.params.issueId}, (err, issue) => {
        if(issue.usersWhoHaveVoted.includes(req.user._id)){
            res.status(403)
            return next(Error('You can only vote once'))
        }else{
            Issue.findOneAndUpdate(
                {_id: req.params.issueId},
                {
                    $inc: {votes: -1},
                    $push: {usersWhoHaveVoted: req.user._id}
                },
                {new: true},
                (err, updatedIssue) => {
                    if(err){
                        res.status(500)
                        return next(err)
                    }
                    return res.status(200).send(updatedIssue)
                }
            )
        }
    })
})

module.exports = userIssueRouter