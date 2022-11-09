import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {Loginuser} from "../../features/Authaction"
import {toast,} from "react-toastify"
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button"
import {reset} from "../../features/Authslice"

function Login() {

const formFields = {
        name: "",
        password: "",
} 
const [form, setFormFields] = useState(formFields)    
const {name, password} = form
const onchangeHandler = (e) => {
const {name,value}  = e.target
setFormFields({...form,  [name]:value})
}
const {loading, error,  message, user} = useSelector( state => state.auth)
const navigate = useNavigate()
const dispatch = useDispatch()

useEffect(()=>{
if(user){
    navigate("/Dashboard")
    toast.success(`welcome back ${user.username}`)
}else if(error){
   toast.error(`${message} please check your internet email or password`)
   dispatch(reset())
}
},[error, user, navigate])




// check for validations and send user login details to the backend 
const userLogin = () => {
 if(!name || !password){
    toast.error("please fill in the fields")
 }else{
   const loginInfo = {
      username: name,
      password: password
   }
  dispatch(Loginuser(loginInfo))
 }

}
return (
    <>
        <div>
        <div className="input__containerSignin">
            <h1>Sign In</h1>
            <label for="name"></label>
            <input name="name" className="input"  value={name} onChange={onchangeHandler} placeholder="Your name"></input>
     
            <label for="password"></label>
            <input name="password" className="input"  value={password} onChange={onchangeHandler} placeholder="password"></input>
            <button  className="input__btn" onClick={userLogin}>Sign in</button>
         </div>
        </div>
        {loading ? <Loader /> : "" }
    </>
  )
}

export default Login