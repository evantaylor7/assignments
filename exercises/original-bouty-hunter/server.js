const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

app.use("/bounties", require("./routes/bounties"))

app.listen(4000, () => {
    console.log("The server is running on port4000")
})