const express = require("express")
const app = express()

app.use(express.json())
app.use("/things", require("./routes/things.js"))
app.use("/things", require("./routes/price.js"))

app.listen(5000, () => {
    console.log("The server is running on Port 9000")
})