const express = require('express')
const connectionToDb = require('./config/connection')
const UserRoute = require('./controllers/user.controller')
const cokkies = require("cookie-parser")
const app = express()
app.use(express.json())
require("dotenv").config()
app.use(cokkies())
app.use("/user", UserRoute)

app.listen(process.env.PORT, async()=>{
    try {
        await connectionToDb
        console.log("Connected to database")
    console.log(`listening on port ${process.env.PORT}`)

    } catch (error) {
        console.log(`Error connecting to database ${error.message}`)
    }
})