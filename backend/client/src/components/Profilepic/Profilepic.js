import "../Profilepic/Profilepic.scss"
import {useSelector} from "react-redux"


function Profilepic() {
    const {user}= useSelector((state)=> state.auth)
    const readFile = (e) =>{
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onloadend = () =>{
        localStorage.setItem("image", JSON.stringify(reader.result))
     }
    }
    
    
    const changeImg = () =>{ 
      const storedPic = JSON.parse(localStorage.getItem("image")) 
        let profile__image = document.querySelector(".profile__img")
        profile__image ? profile__image.src = storedPic ? storedPic : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg": <></> 
    }
  
    setInterval(()=> changeImg(), 1000 ) 
   

 
  return (
    <div className='profile__container'>
      <label for="profile__pic" >
        {user? ( <img className='profile__img' src="" alt="profile icon"/>) : ("")}
      </label>
      <input type="file" id="profile__pic" className='profile__picInput' onChange={readFile}/>
    </div>
  )
}

export default Profilepic