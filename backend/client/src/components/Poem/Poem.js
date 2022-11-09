import Button from "../Button/Button"
import "../Poem/Poem.scss"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {delete__Poem, } from "../../features/Poemaction"
import {postFavourite__Poem} from "../../features/Favourites/favouriteaction"
import Exiticon from "../../components/assets/images/exitIcon.png"
import Updateicon from "../../components/assets/images/updateImage.png"
import Loader from "../Loader/LoaderTwo/LoaderTwo"
import {toast} from "react-toastify"


function Poem({setformFields,  setUpdatetext, setReading}) {
  const {poems, poemloading} = useSelector( state => state.poem)
  const {favouriteError, favouriteMessage} =  useSelector( state => state.Fav)
  const {user} =  useSelector( state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()




 //posting favourite poem 
 const addFavourite = (poems) => {
  dispatch(postFavourite__Poem(poems))
}
//  toast success if favourite poem exist
  function checkFavourite(){
    if(favouriteError){
      toast.success(favouriteMessage)
    }
  }
  
// pass updating poems to input fields. on write page
  function updateFunc (poems){
    setformFields(poems) 
    navigate("/write")
    setUpdatetext(`Updating ${poems.title}`)
  }
  

  function showReadingPage (poem){
  navigate("/Reading")
  setReading(poem)
  }
 

  return (
    <>
      {/* display all poems */}
      <div className="userpoems__Dashboard">
      {poems && poems.length > 0 ? (
      <div className="userpoems__Dashboard">
  
      {poems?.map((poems)=> (
      <div className="poem__Box">
      <img className="poem__image" src={poems.image} alt="poemImage"/>
      <div className="contents"> 
      {user && user.id === poems.user ? (
        
        <>
        <section className="poem__icons">
        <img src={Exiticon} alt="deleteIcon" className="poem__deleteIcon" onClick={()=> dispatch(delete__Poem(poems._id)) }/>
        <img src={Updateicon} alt="deleteIcon" className="poem__updateIcon" onClick={()=> updateFunc(poems)}/>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="hotpink" onClick={()=>{addFavourite(poems) (checkFavourite())}} style={{cursor: "pointer"}} viewBox="0 0 16 16">
        <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
        </section>

        <h3>{`Created by you ${user.username}`}</h3>
        <p>{poems.title}</p>
        <p>{`${poems.userpoem.slice(0, 16)} ...`}</p>
        <span>{`A ${poems.type}`}</span>
        <Button text="Start Reading" className="Poem__btn" onClick={(()=>{ showReadingPage(poems.userpoem)})}/>
        </>
       
       ) : (
        
        <>
        <p>{poems.title}</p>
        <p>{`${poems.userpoem.slice(0, 16)} ...`}</p>
        <span>{`A ${poems.type}`}</span>
        <Button text="Start Reading" className="Poem__btn" onClick={(()=>{showReadingPage(poems.userpoem)})}/>
        </>
         )}        
    </div>
   </div>
   ))}
   </div>
   ) : (<h3>No poem available</h3>)}
  </div>
  {poemloading ? <Loader /> : ""}
   </>
  )
}
export default Poem