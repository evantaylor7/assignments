const express = require("express")
const movieRouter = express.Router()
const Movie = require("../models/movie.js")
// const {v4} = require("uuid")

// PRE-MONGOOSE:
// const movies = [
//     {title: "movie1", genre: "action", _id: v4()},
//     {title: "movie2", genre: "romance", _id: v4()},
//     {title: "movie3", genre: "fantasy", _id: v4()},
//     {title: "movie4", genre: "sci-fi", _id: v4()},
//     {title: "movie5", genre: "documentary", _id: v4()},
// ]

// Get All
// PRE-MONGOOSE:
// movieRouter.get("/", (req, res) => {
//     res.status(200)
//     res.send(movies)
// })

// POST-MONGOOSE:
movieRouter.get('/', (req, res, next) => {
    Movie.find((err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

// Get One
// movieRouter.get("/:movieId", (req, res, next) => {
//     const movieId = req.params.movieId
//     const foundMovie = movies.find(movie => movie._id === movieId)
//     // error handler:
//     if(!foundMovie){
//         const error = new Error("The item was not found.")
//         res.status(500)
//         return next(error)
//     }
//     res.status(200).send(foundMovie)
// })

// PRE-MONGOOSE:
// Get by genre
// movieRouter.get("/search/genre", (req, res, next) => {
//     const genre = req.query.genre
//     if(!genre){
//         const error = new Error("You must provide a genre")
//         res.status(500)
//         return next(error)
//     }
//     const filteredMovies = movies.filter(movie => movie.genre === genre)
//     res.status(200).send(filteredMovies)
// }) 

// POST-MONGOOSE:
movieRouter.get("/search/genre", (req, res, next) => {
    Movie.find({ genre: req.query.genre }, (err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
    
})

// PRE-MONGOOSE:
// Post One
// movieRouter.post("/", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = v4()
//     movies.push(newMovie)
//     res.status(201).send(newMovie)
// })

// POST-MONGOOSE:
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})

// PRE-MONGOOSE:
// Delete One
// movieRouter.delete("/:movieId", (req, res) => {
//     const movieId = req.params.movieId
//     const movieIndex = movies.findIndex(movie => movie._id === movieId)
//     movies.splice(movieIndex, 1)
//     res.send("Successfully deleted movie!")
// })

// POST-MONGOOSE:
movieRouter.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete({ _id: req.params.movieId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully delete item ${deletedItem.title} from the database`)
    })
})

// PRE-MONGOOSE:
// Update One
// movieRouter.put("/:movieId", (req, res) => {
//     const movieId = req.params.movieId
//     const movieIndex = movies.findIndex(movie => movie._id === movieId)
//     const updatedMovie = Object.assign(movies[movieIndex], req.body)
//     res.status(201).send(updatedMovie)
// })

// POST-MONGOOSE:
movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId }, // find this one to update
        req.body, // update the object with this data
        { new: true }, // send back the updated version please
        (err, updatedMovie) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})

// movieRouter.route("/")
//     .get((req, res) => {
//         res.send(movies)
//     })
//     .post((req, res) => {
//         const newMovie = req.body
//         newMovie._id = v4()
//         movies.push(newMovie)
//         res.send(`Successfully added ${newMovie.title} to the database!`)
//     })

module.exports = movieRouter