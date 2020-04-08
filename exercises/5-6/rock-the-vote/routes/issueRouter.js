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
    Issue.find({user: req.user._id}, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

module.exports = issueRouter