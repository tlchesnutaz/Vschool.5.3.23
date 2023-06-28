const express = require("express")
const app = express()
const morgan = require("morgan")


app.use(express.json())

app.use(morgan("dev"))

app.use("/api/bounties", require("./routes/bountyRouter.js"))

app.listen(7567, () => {
    console.log("The server is running on Port 7567")
})
