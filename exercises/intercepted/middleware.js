const express = require("express")
const middleware = express.Router()

middleware.get("/", (req, res, next) => {
    req.user = {name: "Evan", age: 26, hometown: "Fairfax"}
    next()
})

module.exports = middleware