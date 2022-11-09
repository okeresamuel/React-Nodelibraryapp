import { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {getFavourite__Poem, deletefavourite__Poem} from "../../features/Favourites/favouriteaction"
import "../Favourites/Favourites.scss"
import Button from "../../components/Button/Button"
import Loader from "../../components/Loader/LoaderTwo/LoaderTwo"
import {useNavigate} from "react-router-dom"


function Favourites({setReading}) {
const dispatch = useDispatch()
const navigate  = useNavigate()
const {favourite, favouriteLoading,} =  useSelector( state => state.Fav)

//get favourite poem 
useEffect(()=>{
  dispatch(getFavourite__Poem())  
}, [])



// delete favourite poem
function deletefavouritePoem(id){
  dispatch(deletefavourite__Poem(id))
}

// show favourite poem when you click the btn
function showFavouriteReadingPage(favouritePoem){
  navigate("/Reading")
 setReading(favouritePoem)
}

  return (
    <div className="Favavourites__flexcontainer" >
      {favourite ? favourite.map( favourites => (
        <div className="poem__Box" key={favourites._id}>
        <img className="poem__image" src={favourites.image} alt="poemImage"/>
    
        <div className="contents">  
         <span className="remove__text" onClick={(()=>{deletefavouritePoem(favourites._id)})}>
         Remove <svg className="removefavourite__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="hotpink"  viewBox="0 0 16 16">
         <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
        </span>
        
        <p>{favourites.title}</p>
        <p>{`${favourites.userpoem.slice(0, 16)} ...`}</p>
        <span>{`A ${favourites.type}`}</span>
        <Button text="Start Reading" className="Poem__btn" onClick={(()=>{showFavouriteReadingPage(favourites.userpoem)})} />
        </div>
        </div>
      )) : ""} 
      {favouriteLoading ? <Loader /> : ""}
    </div>

  
  )
}

export default Favourites