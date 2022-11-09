import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {Registeruser} from "../../features/Authaction"
import {toast,} from "react-toastify"
import Loader from "../../components/Loader/Loader";
import {reset} from "../../features/Authslice"

function Register() {
const formFields = {
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
} 
const [form, setFormFields] = useState(formFields)    
const {name, email, password, confirmpassword} = form
const onchangeHandler = (e) => {
const {name,value}  = e.target
setFormFields({...form,  [name]:value})
}

const navigate = useNavigate()
const {loading, error,  message, user } = useSelector( state => state.auth)
const dispatch = useDispatch()


useEffect(()=>{
 if(user){
    toast.success(`welcome ${user.username}`)
    navigate("/Dashboard")
 }else if(error){
   toast.error(message)
   dispatch(reset())
}
},[error, message, user, navigate])


// sends Reigistration info to Redux action and then to data base
const Register = () =>{
 if(!name || !email || !password || !confirmpassword){
    toast.error("please fill in the fields")
 }else if(password !== confirmpassword){
    toast.error("passwords do not match") 
 }else{
    const RegisterInfo = {
        username: name,
        email:email,
        password:password
    }
    dispatch(Registeruser(RegisterInfo))
 } 
}


return (
    <>
        <div className="input__container">
            <h1>Sign Up</h1>
            <label for="name">Name</label>
            <input name="name" className="input" value={name} onChange={onchangeHandler} placeholder="Your name"></input>

            <label for="email">Email</label>
            <input name="email" className="input" value={email} onChange={onchangeHandler} placeholder="Your email"></input>

            <label for="password">password</label>
            <input name="password" className="input" value={password} onChange={onchangeHandler} placeholder="password"></input>

            <label for="confirmpassword">Confirm Password</label>
            <input name="confirmpassword" className="input"  value={confirmpassword} onChange={onchangeHandler} placeholder="confirm password"></input>
            <button type="submit"  className="input__btn" onClick={Register}>Submit</button>
        </div>
       {loading ? <Loader /> : "" }
    </>
  )
}

export default Register