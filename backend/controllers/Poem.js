const poem = require("../models/poem")
const favourite = require("../models/favourites")
const asynchandler = require("express-async-handler")
const cloudinary = require("../cloudinary/index")

// poem get route
 const get__poem = asynchandler(async (req, res)=>{
  const Allpoem = await poem.find({user:req.user.id})
  Allpoem ? res.status(200).json(Allpoem) : "";
 })

 

// poem post route 
 const post__poem = asynchandler(  async (req, res)=>{
  try {
  const {title,  userpoem, image, type } = req.body 
  const realImg =  await cloudinary.uploader.upload(image, {"upload_preset": "poems"})
  const newpoem = await poem.create({title,  userpoem, image:realImg.url, type, user:req.user.id})
  newpoem ? res.status(200).json(newpoem) : "" 
} catch (error) {
  res.status(200).json(error) 
  }

})


 //poem update route
 const patch__poem = asynchandler(async(req, res)=>{
 try {
  const {id} = req.params
  const [user] = await poem.find({user:req.user.id})
   
   if(user.user.toString() === req.user.id){
   const updatedPoem = await poem.findByIdAndUpdate(id, req.body, {new: true})
   if(updatedPoem){
      res.status(200).json(updatedPoem)
   } else{
     res.status(401)
     throw new error, "no poem found"
  }
 
}
 } catch (error) {
  res.status(401).json(error)
 }
 })


//  poem delete routes
 const delete__poem = asynchandler( async(req, res)=>{   
 try {
  const [user] = await poem.find({user:req.user.id})
  if(user.user.toString() === req.user.id){
    const deleted = await poem.findByIdAndDelete(req.params.id)  
    deleted ? res.status(200).json(deleted)  : ""
  } 
 } catch (error) {
  res.status(401).json(error.response.data)
 }
})


//Get all poems
const get__allpoems = async (req, res) =>{
const allpoems   =  await poem.find()
allpoems ? res.status(200).json(allpoems) : res.status(402).json("was unable to fetch all post")
}


// -----------------------------------------------------
// post favourite poems
const postfavourite__poem = asynchandler( async (req, res)=>{
  
  try{
  const {title,  userpoem, image, type, } = req.body 
  const favouritepoem =  new favourite({title,  userpoem, image, type, user:req.user.id})
  const favouritePoem__found = await favourite.findOne({title:favouritepoem.title })
   // if the item exist send back "saved items" else save it
   favouritePoem__found ? res.status(401).json("saved to favourites") :  res.status(200).json(await favouritepoem.save())
} catch (error) {
  res.status(200).json(error.response.data) 
  }
})


// get favourite poems
const getfavourite__poem = asynchandler( async (req, res)=>{
  try{
  const found = await favourite.find({user:req.user.id}) 
  found ? res.status(200).json(found) : res.status(401).json("No poems found")
} catch (error) {
  res.status(200).json(error.response.data) 
  }
})


// delete favourite poems
const deletefavourite__poem = asynchandler( async (req, res)=>{
  const {id } = req.params
  try{
  const deleted = await favourite.findByIdAndDelete(id) 
  deleted ? res.status(200).json(deleted) : res.status(401).json("error trying to delete a favorite poem")
} catch (error) {
  res.status(401).json(`There was a error trying to delete a favourite poem${error.response.data}`) 
  }
})


 module.exports = {
  get__poem,
  post__poem,
  patch__poem,
  delete__poem,
  get__allpoems,
  postfavourite__poem,
  deletefavourite__poem,
  getfavourite__poem,
 }