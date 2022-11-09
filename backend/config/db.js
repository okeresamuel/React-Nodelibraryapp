const mongoose = require("mongoose")
const connectionURL = process.env.mongodburl
mongoose.connect(connectionURL) ? console.log("connecting to mongodb ...".yellow) : console.log("mongo db err")

mongoose.connection.on("connected", ()=>{
    console.log("mongodb connected".yellow)
})
mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected".red)
})
