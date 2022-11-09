import { createSlice } from "@reduxjs/toolkit";
import { postFavourite__Poem, getFavourite__Poem, deletefavourite__Poem } from "./favouriteaction";
const initialState = {
  favourite: [],
  favouriteLoading: false,
  favouriteError: false,
  favouriteSuccess: false,
  favouriteMessage: false,
};

const favourite = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    resetFavourites: (state)=>{
      state.favourite = []
      state.favouriteLoading = false
      state.favouriteError = false
      state.favouriteSuccess = false
      state.favouriteMessage = false
    }
  },
  extraReducers: {
   
    //posting poems
    [postFavourite__Poem.pending]: (state) => {
      state.favouriteLoading = true;
    },
    [postFavourite__Poem.fulfilled]: (state, action) => {
      state.favourite = [action.payload, ...state.favourite];
      state.favouriteLoading = false;
      state.favouriteSuccess = true;
      state.favouriteError = false;
      state.favouriteMessage = "";
    },
    [postFavourite__Poem.rejected]: (state, action) => {
      state.favouriteLoading = false;
      state.favouriteSuccess = false;
      state.favouriteError = true;
      state.favouriteMessage = action.payload;
    },

      //get favourite  poems
      [getFavourite__Poem.pending]: (state) => {
        state.favouriteLoading = true;
      },
      [getFavourite__Poem.fulfilled]: (state, action) => {
        state.favouriteLoading = false;
        state.favouriteSuccess = true;
        state.favourite = action.payload;
      },
      [getFavourite__Poem.rejected]: (state, action) => {
        state.favourite = null
        state.favouriteLoading = false;
        state.favouriteSuccess = false;
        state.favouriteError = true;
        state.favouriteMessage = action.payload;
      },

 //delete favourite poems
 [deletefavourite__Poem.pending]: (state) => {
  return{...state,  favouriteLoading: true, }
},
[deletefavourite__Poem.fulfilled]: (state, action) => {
  state.favourite = state.favourite.filter((item)=> item._id !== action.payload._id)
  state.favouriteLoading = false
  state.favouriteSuccess = true   
},
[deletefavourite__Poem.rejected]: (state, action) => {
return {
...state,
favouriteLoading: false,
favouriteSuccess: false,
favouriteError: true,
favouriteMessage:  action.payload
}
}

  },
});

export const {resetFavourites} = favourite.actions
export default favourite.reducer;
