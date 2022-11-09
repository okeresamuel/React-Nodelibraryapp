import {createAsyncThunk} from "@reduxjs/toolkit"
import axios  from "axios"

  //post favourite poems
  export const postFavourite__Poem = createAsyncThunk("postfavourite__poem", async ( info, thunkApi, )=>{
    const token = thunkApi.getState().auth.user.token
    const {rejectWithValue} = thunkApi
    const config = {
       headers:{
         Authorization: `Bearer ${token}`,
       }
     }
       try {
       const {data} = await axios.post(`https://storypoemapp.herokuapp.com/api/poems/favourite`, info, config) 
       return data
     } catch (error) {
       return rejectWithValue (error.response.data)
      }
   }) 

   //get favourite poems
  export const getFavourite__Poem = createAsyncThunk("getfavourite__poem", async ( _, thunkApi, )=>{
    const token = thunkApi.getState().auth.user.token
    const {rejectWithValue} = thunkApi
    const config = {
       headers:{
         Authorization: `Bearer ${token}`,
       }
     }
       try {
        const {data} = await axios.get(`https://storypoemapp.herokuapp.com/api/poems/favourite`, config) 
        return data
       } catch (error) {
         return rejectWithValue (error.response.data)
      }
   }) 

  
  //delete favourite poems
  export const deletefavourite__Poem = createAsyncThunk("deletefavourite__poem", async ( id, thunkApi, )=>{
    const token = thunkApi.getState().auth.user.token
    const {rejectWithValue} = thunkApi
    const config = {
       headers:{
         Authorization: `Bearer ${token}`,
       }
     }
       try {
        const {data} = await axios.delete(`https://storypoemapp.herokuapp.com/api/poems/favourite/${id}`, config) 
        return data
       } catch (error) {
         return rejectWithValue (error.response.data)
      }
   }) 