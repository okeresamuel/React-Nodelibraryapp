import {createAsyncThunk} from "@reduxjs/toolkit"
import axios  from "axios"

//  Register The user in database
export const Registeruser = createAsyncThunk("Registeruser", async (userInfo, {rejectWithValue})=>{
 try {
  const {data} =  await axios.post("https://storypoemapp.herokuapp.com/api/register", userInfo )
  localStorage.setItem("user", JSON.stringify(data))
  return data 
} catch (error) {
   return rejectWithValue(error.response.data)
} 
})


// Login user in database
 export const Loginuser = createAsyncThunk("logoutuser", async (userInfo, {rejectWithValue})=>{
 try {
    const {data} =  await axios.post("https://storypoemapp.herokuapp.com/api/login", userInfo ) 
    localStorage.setItem("user", JSON.stringify(data))
    return data  
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})




// Logout user in database
export const Logout = createAsyncThunk("logoutuser", async ()=>{
localStorage.removeItem("user")
})

