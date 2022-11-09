const asynchandler = require("express-async-handler")
const token = require("jsonwebtoken")
const User = require("../models/user")

// Register the user
const register = asynchandler( async (req, res) => {
 try {
    const {username, email, password} = req.body;
    const newuser = new User({username, email})
    const registeredUser = await User.register(newuser, password)
    if(registeredUser){
       res.status(200).json({
       id:registeredUser._id,
       username:registeredUser.username,
       email:registeredUser.email,
       token: getToken(registeredUser._id)
    })
 }
 } catch (error) {
    res.status(401).json(error.message)
 }
})


// Login The user
const login = asynchandler( async (req, res) => {
try {
  User.findOne({username:req.body.username}, (err, user)=>{
    if(user){
    res.status(200).json({
    id:user._id,
    username:user.username,
    email:user.email,
    token:getToken(user._id) 
    })
 }else{
    throw new err
 } 
})
} catch (error) {
    res.status(401).json(error.message)
}
})

const getToken = (id)=>{
   return token.sign({id}, process.env.jwt__secreat, {expiresIn:"30d"})
}

module.exports = {
 register,
 login,
}

