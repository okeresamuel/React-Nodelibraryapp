import {toast} from "react-toastify"
import {post__Poem, update__Poem} from  "../../features/Poemaction"
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {useSelector, useDispatch} from "react-redux"
import {useState} from "react"
import {reset} from "../../features/Poemslice"
import Loader from "../../components/Loader/LoaderTwo/LoaderTwo"
import previewImg from "../../components/assets/images/previewImg.jpg"
import "./Write.scss"
import { useNavigate } from "react-router-dom";

export default function Write({form, setformFields,  update}) {

 const dispatch = useDispatch()
 const navigate = useNavigate()
 const {user,} =  useSelector( state => state.auth)
 const {poemsuccess, poemloading} =  useSelector( state => state.poem)
 
//  if post was a success navigate to dashboard
  if(poemsuccess){
    dispatch(reset())
    navigate("/Dashboard")
  }

 //controlled form fields 
const { title, userpoem, select__bytype,} = form
const func = (e) =>{
const {name, value,} = e.target
setformFields({...form, [name]:value})
}

// get image from file input
const [newImage, setImage] = useState("")
const getfile = (e) =>{
 const reader = new FileReader()
 reader.readAsDataURL(e.target.files[0])
 reader.onloadend = () =>{
 setImage(reader.result)
 }
}
 
  // dispatch post poem
 const sendPoem = (e) =>{
 if(!title || !userpoem || !select__bytype){
   toast.error("missing fields can`t be published")
 }else{
   const info = {
      title,
      userpoem,
      image:newImage ? newImage : previewImg,
      type:select__bytype
     }
    dispatch(post__Poem(info))
 }
 }
 
//  updateing poem 
const sendUpdated_poem = (form) =>{
   const {image,} = form
  dispatch(update__Poem({...form, type:select__bytype, image:newImage ? newImage : image }))  
}




  return (
   <>
   <div className="poemInput__container">
     {/* Header text and poem Title */}
     <h2> {update ? update : ( `Draft in  ${user ? user.username : ""}` ) }</h2>
     <div className="poem__descriptions">
     <Input placeholder="Title" name="title" value={title} onChange={func} className="Poem__input"/>
    

     {/* select file and poem image */}
     <select onChange={func} name="select__bytype" className="Poem__input" value={select__bytype}>
       <option value="">select by type</option>
       <option value="Story">Story</option>
       <option value="Poem">Poem</option>
     </select>
     <img src={newImage ? newImage  : previewImg} alt="previewImage" className="preview__image"/>
     <input type="file" accept="image" className="Poem__inputImage" onChange={getfile}/> 
     </div>

     {/* White board area */}
     <textarea placeholder="start Writing" className="textarea" name="userpoem"  value={userpoem} onChange={func}></textarea> 
     {update ? 
     <Button  onClick={(()=>{sendUpdated_poem(form)})} text={poemloading ? "Updating..." : "Update"}  className="poem__btn" />
    :<Button text={poemloading ? "Publishing..." : "Publish"} onClick={sendPoem} className="poem__btn" />  }
     {poemloading ? <Loader /> : ""}
     </div>
  </>
  )
}

