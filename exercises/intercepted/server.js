const express = require("express")
const app = express()

app.use(express.json())

app.use("/user", require("./middleware.js"))

app.get("/", (req, res) => {
    req.body = {this: "thing", that: "stuff"}
    res.send(req.body)
})

app.get("/user/", (req, res) => {
    res.send(req.user)
})

app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})