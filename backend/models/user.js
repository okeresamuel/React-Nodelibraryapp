const passportlocalmongoose = require("passport-local-mongoose")
const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase:true
    },
})
schema.plugin(passportlocalmongoose)
const user = mongoose.model("Poemuser", schema)
module.exports = user;