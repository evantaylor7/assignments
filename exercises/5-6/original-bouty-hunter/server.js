const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect('mongodb://localhost:27017/bounties',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Mongoose is connected to the DB')
)

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.messages})
})

app.use("/bounties", require("./routes/bounties"))

app.listen(4000, () => {
    console.log("The server is running on port4000")
})