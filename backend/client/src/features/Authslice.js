import {createSlice} from "@reduxjs/toolkit"
import {Registeruser, Loginuser} from "../features/Authaction"

const user =  JSON.parse(localStorage.getItem("user"))
const initialState = {
    user: user ? user : null,
    loading:false,
    error:false,
    success:false,
    message: ""
}

const Authslice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
     reset:(state)=>{
       state.user = null
       state.error = false
       state.success = false
       state.loading = false
       state.message = ""
     }
    },
    extraReducers:{
      [Registeruser.pending]: (state)=>{
       state.loading = true
       state.error = false
      },
      [Registeruser.fulfilled]:(state, action)=>{
        state.loading = false
        state.error = false
        state.user = action.payload
        state.success = true
      },
      [Registeruser.rejected]: (state, action)=>{
        state.loading = false
        state.error = true
        state.message = action.payload
        state.success = false
      },
      
      //Login the user  
      [Loginuser.pending]: (state)=>{
        state.loading = true
        state.error = false
       },
       [Loginuser.fulfilled]:(state, action)=>{
         state.loading = false
         state.error = false
         state.user = action.payload
         state.success = true
       },
       [Loginuser.rejected]: (state, action)=>{
         state.loading = false
         state.error = true
         state.message = action.payload
         state.success = false
       },
    }
})

export const { reset } = Authslice.actions
export default  Authslice.reducer