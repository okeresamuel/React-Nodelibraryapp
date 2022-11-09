const mongoose = require("mongoose")
const schema = new mongoose.Schema(
  {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
  },
  title:String,
  userpoem:String,
  image:String, 
  type:String
},{
  timestamps: true  
})

const poem = mongoose.model("poem", schema)
module.exports = poem