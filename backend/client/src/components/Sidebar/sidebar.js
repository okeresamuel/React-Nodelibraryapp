import Button from "../Button/Button"
import { useEffect,useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {Logout} from "../../features/Authaction"
import { reset } from "../../features/Authslice"
import {resetFavourites} from "../../features/Favourites/favouriteslice"
import "./sidebar.scss"
import {Link} from "react-router-dom"
import Profilepic from "../Profilepic/Profilepic"


 
  

function Sidebaricon() {

  // sidebarIcon
  // menu icon animation
  const [toggle__Nav, settoggleNav] = useState(false)
 
 
   function open__Close(){
    if(toggle__Nav){
      const side__Bar = document.querySelector(".side__Bar") 
      side__Bar.classList.remove("offset")
      settoggleNav(false)
    }else{
      const side__Bar = document.querySelector(".side__Bar") 
      side__Bar.classList.add("offset")
      settoggleNav(true)
    } 
  }
    
  return (
   <div className="outer__Container">
   <div id="menu__Container" onClick={(()=>{ open__Close()})}>
      <div className="inner__Iconcontainer">
      <span className="line__One"></span>
      <span className="line__Two"></span>
      <span className="line__Three"></span>
     </div>
  </div>
  </div>
    )
  }
  
  
function Sidebar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector(state => state.auth)
  const {favourite,} =  useSelector( state => state.Fav)
  
  // Logout the user
   const Logoutuser = () =>{
   dispatch(Logout())
   navigate("/Register")
   dispatch(reset()) 
   dispatch(resetFavourites()) 
   }  

  // condition to access pages if user is logged in
  useEffect(()=>{
    if(user){
      navigate("/write")
      navigate("/favourites")
      navigate("/Dashboard")
     }else{
      navigate("/login")
     }
  }, [])


function DisplayLogoutbtn({ user, }) {
  if (user) {
   return <>
    <Link to="/Dashboard" className="link">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
     <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
     </svg><br/>Dashboard
     </Link>
     <Button text="Logout" onClick={Logoutuser} className="logout__Btn"/>
     </>
  }else{
   return <>
    <Link to="/Register" className="link">Register</Link> 
    <Link to="/Login" className="link">Login</Link>
      </>
  }

}

return (
    <div className="side__Bar offset" >
    {/* profilepic */}
     <Profilepic />
    <div className="nav__Seconddiv">
    {/* Home Link */}

    <div className="nav__Links">
    <Link to="/" className="link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
    </svg><br/>HOME
    </Link>
   
     {/* if user show logout btn and dashboard else hide it  */}
    <DisplayLogoutbtn user={user}/>

    <Link to={user ? "/write" : "/Login"}  className="link">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg><br/>Write
    </Link>
       
    {favourite? <p className="favourite__Num">{favourite.length}</p> : ""}
    <Link to={user ? "/favourites" : "/Login"} className="link">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg><br/>Favourites
    </Link>
   </div>
   </div>
   </div>
  )
}
export  { Sidebaricon, Sidebar }