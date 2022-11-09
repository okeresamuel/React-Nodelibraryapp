const asynchandler = require("express-async-handler")
const jwttoken = require("jsonwebtoken")
const User = require("../models/user")

const protect = asynchandler ( async(req, res, next)=>{
try {
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
     token = req.headers.authorization.split(" ")[1]
     decodetoken = jwttoken.verify(token, process.env.jwt__secreat)
     req.user = await User.findById(decodetoken.id).select("-password")
     next()
   }
   if(!token){
       res.status(404).json("unauthorized no Token found")
   }   
} catch (error) {
    res.status(401).json(error.message)
}
 
})

module.exports = { protect }