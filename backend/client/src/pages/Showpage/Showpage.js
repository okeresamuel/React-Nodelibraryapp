import "../Showpage/Showpage.scss"
import {useDispatch} from "react-redux"
import {get__allpoem} from "../../features/Poemaction"
import {useEffect,} from "react"
import Poem from "../../components/Poem/Poem"


function Showpage({setformFields, setUpdatetext, setReading }) {
const dispatch = useDispatch()

useEffect(()=>{
dispatch(get__allpoem())
},[dispatch])

  return (
    <>
    <div className="poem__flexcontainer">
        <Poem  setformFields={setformFields} setUpdatetext={setUpdatetext} setReading={setReading} />
    </div>
    </>
  )
}

export default Showpage