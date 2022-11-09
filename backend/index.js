const express = require("express")
const app = express()
const colors = require("colors")
const path = require("path")
const poem = require("./models/poem")
const dotenv = require("dotenv").config()
const database = require("./config/db")
const User = require("./models/user")
const cors = require("cors")
const session = require("express-session")
const passport = require("passport")
const strategy = require("passport-local")
const helmet = require("helmet")

app.use(session({
    secret: process.env.session__secreat,
    resave: true,
    saveUninitialized: true,
}))

app.use(helmet())
app.use(passport.session())
app.use(passport.initialize())
passport.use(new strategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


app.use(cors())
app.use(express.json({limit:"30mb"}))
app.use(express.urlencoded({limit:"30mb", extended: false}))
app.use("/", require("./routes/Poem"), require("./routes/User"))


const port = process.env.PORT || 3000
app.listen(port, console.log(`app is listening on port ${port}`.cyan.underline))