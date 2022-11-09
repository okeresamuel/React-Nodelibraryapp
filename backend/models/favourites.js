const mongoose = require("mongoose")
const schema = new mongoose.Schema({
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

const favourite = new mongoose.model("Poem__favourite", schema)
module.exports = favourite