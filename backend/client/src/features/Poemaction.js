import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


   //  fetch all poems
  export const get__allpoem = createAsyncThunk("get__poem", async ( _, {rejectWithValue}  )=>{  
    try {
        const {data} = await axios.get("https://backend-reactnodelibrary.onrender.com/api/poems/general",) 
        return data 
     } catch (error) {
        return rejectWithValue(error.response.data)
 }
}) 


// fetch user poems 
export const get__Poem = createAsyncThunk("get__poem", async ( _, thunkApi,  )=>{
const token = thunkApi.getState().auth.user.token
const {rejectWithValue} = thunkApi
 const config = {
    headers:{
      Authorization: `Bearer ${token}` 
    }
  }
    try {
     const {data} = await axios.get("https://backend-reactnodelibrary.onrender.com/api/poems", config) 
     return data 
    } catch (error) {
     return  rejectWithValue(error)
    }
}) 


// post  poems to db
export const post__Poem = createAsyncThunk("post__poem", async ( info, thunkApi, )=>{
  const token = thunkApi.getState().auth.user.token
  const {rejectWithValue} = thunkApi
  const config = {
     headers:{
       Authorization: `Bearer ${token}`,
     }
   }
     try {
      const {data} = await axios.post("https://backend-reactnodelibrary.onrender.com/api/poems", info, config) 
      return data 
     } catch (error) {
      return rejectWithValue (error.response.data)
     }
 
    }) 
 

    // delete user poems
    export const delete__Poem = createAsyncThunk("delete__poem", async ( id, thunkApi, )=>{
      const token = thunkApi.getState().auth.user.token
      const {rejectWithValue} = thunkApi
      const config = {
         headers:{
           Authorization: `Bearer ${token}`,
         }
       }
         try {
          const {data} = await axios.delete(`https://backend-reactnodelibrary.onrender.com/api/poems/${id}`,config) 
          return data 
         } catch (error) {
          return rejectWithValue (error.response.data)
        }
     
    }) 



    // update user poems
    export const update__Poem = createAsyncThunk("update__poem", async ( info, thunkApi, )=>{
      const token = thunkApi.getState().auth.user.token
      const {rejectWithValue} = thunkApi
      const config = {
         headers:{
           Authorization: `Bearer ${token}`,
         }
       }
        
        const {_id} = info
         try {
          const {data} = await axios.patch(`https://backend-reactnodelibrary.onrender.com/api/poems/${_id}`, info, config) 
          return data 
         } catch (error) {
          return rejectWithValue (error.response.data)
        } 

      }) 