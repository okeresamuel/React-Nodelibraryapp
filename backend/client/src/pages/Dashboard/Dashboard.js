import {get__Poem,} from  "../../features/Poemaction"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import Poem from "../../components/Poem/Poem"
import Loader from "../../components/Loader/LoaderTwo/LoaderTwo"
import {getFavourite__Poem} from "../../features/Favourites/favouriteaction"
import "../Dashboard/Dashboard.scss"

function Dashboard({setformFields, setUpdatetext, setReading}) {

  const {favouriteLoading} =  useSelector( state => state.Fav)
  const dispatch = useDispatch()

  // get poems and favourite poems
  useEffect(()=>{
    dispatch(get__Poem())
    dispatch(getFavourite__Poem())
    setUpdatetext("")
    setformFields("")
  },[dispatch, setUpdatetext, setformFields])

   
  return (
   <div className="poem__flexcontainer">
    <Poem setformFields={setformFields} setUpdatetext={setUpdatetext} setReading={setReading}/>
    {favouriteLoading ? <Loader /> : ""}
    </div>
  );
}
export default Dashboard
