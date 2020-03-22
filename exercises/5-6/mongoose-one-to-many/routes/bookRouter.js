const express = require('express')
const bookRouter = express.Router()
const Book = require('../models/book.js')

// Get all books
bookRouter.get('/', (req, res, next) => {
    Book.find((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

// Get by Author
bookRouter.get('/:authorId', (req, res, next) => {
    Book.find({author: req.params.authorId}, (err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

// Add new book
bookRouter.post('/:authorId', (req, res, next) => {
    req.body.author = req.params.authorId
    const newbook = new Book(req.body)
    newbook.save((err, savedbook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedbook)
    })
})

// like a book
bookRouter.put('/like/:bookId', (req, res, next) => {
    Book.findOneAndUpdate(
        {_id: req.params.bookId},
        {
            $inc: {
                likes: 1
            },
            // can use multiple methods:
            // $pull: {
            //     relatedTopics: "some Topic"
            // }
        },
        {new: true},
        (err, updatedBook) => {
            if(err){
                res.status(500)
                next(err)
            }
            return res.status(201).send(updatedBook)
        }
    )
})

// find books by like range
bookRouter.get('/search/bylikes', (req, res, next) => {
    Book.where('likes').gte(5).exec((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

module.exports = bookRouter