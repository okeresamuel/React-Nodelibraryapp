import { createSlice } from "@reduxjs/toolkit";
import {
  get__Poem,
  post__Poem,
  update__Poem,
  delete__Poem,
  get__allpoem,
} from "./Poemaction";

const initialState = {
  poems: [],
  poemloading: false,
  poemerror: false,
  poemsuccess: false,
  poemmessage: "",
};

const Poemslice = createSlice({
  name: "Poem",
  initialState,
  reducers: {
    reset: (state) => {
      state.poems = [];
      state.poemloading = false;
      state.poemerror = false;
      state.poemsuccess = false;
      state.poemmessage = "";
    },
  },
  extraReducers: {
    //  get user poems
    [get__Poem.pending]: (state) => {
      state.poems = [];
      state.poemloading = true;
      state.poemsuccess = false;
      state.poemerror = false;
      state.poemmessage = "";
    },
    [get__Poem.fulfilled]: (state, action) => {
      state.poems = action.payload;
      state.poemloading = false;
      state.poemsuccess = true;
      state.poemerror = false;
      state.poemmessage = "";
    },
    [get__Poem.rejected]: (state, action) => {
      state.poems = [];
      state.poemloading = false;
      state.poemsuccess = false;
      state.poemerror = true;
      state.poemmessage = action.payload;
    },

    //posting poems
    [post__Poem.pending]: (state) => {
      state.poems = [];
      state.poemloading = true;
      state.poemsuccess = false;
      state.poemerror = false;
      state.poemmessage = "";
    },
    [post__Poem.fulfilled]: (state, action) => {
      state.poems = state.poems.push(action.payload);
      state.poemloading = false;
      state.poemsuccess = true;
      state.poemerror = false;
      state.poemmessage = "";
    },
    [post__Poem.rejected]: (state, action) => {
      state.poems = [];
      state.poemloading = false;
      state.poemsuccess = false;
      state.poemerror = true;
      state.poemmessage = action.payload;
    },

    //updating poem
    [update__Poem.pending]: (state) => {
      state.poemloading = true;
    },
    [update__Poem.fulfilled]: (state, action) => {
       state.poems = state.poems = state.poems.map((poem) =>
        poem._id === action.payload._id ? action.payload : poem
      );
      state.poemloading = false;
      state.poemsuccess = true;
      state.poemerror = false;
      state.poemmessage = "";
    },
    [update__Poem.rejected]: (state, action) => {
      state.poems = [];
      state.poemloading = false;
      state.poemsuccess = false;
      state.poemerror = true;
      state.poemmessage = action.payload;
    },

    //deleting  user poems
    [delete__Poem.pending]: (state) => {
      state.poemloading = true;
    },
    [delete__Poem.fulfilled]: (state, action) => {
      state.poemloading = false;
      state.poemsuccess = state.poems = state.poems.filter(
        (poem) => poem._id !== action.payload._id
      );
    },
    [delete__Poem.rejected]: (state, action) => {
      state.poemloading = false;
      state.poemsuccess = false;
      state.poemerror = true;
      state.poemmessage = action.payload;
    },

    //get all  poems
    [get__allpoem.pending]: (state) => {
      state.poemloading = true;
    },
    [get__allpoem.fulfilled]: (state, action) => {
      state.poemloading = false;
      state.poemsuccess = true;
      state.poems = action.payload;
    },
    [get__allpoem.rejected]: (state, action) => {
      state.poemloading = false;
      state.poemsuccess = false;
      state.poemerror = true;
      state.poemmessage = action.payload;
    },
  },
});

export const { reset } = Poemslice.actions;
export default Poemslice.reducer;
