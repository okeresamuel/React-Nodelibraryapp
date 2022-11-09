import { configureStore } from '@reduxjs/toolkit';
import Authreducer from "../features/Authslice"
import Poemreducer from "../features/Poemslice"
import Favourites from "../features/Favourites/favouriteslice"
export const store = configureStore({
  reducer: {
  auth:Authreducer,
  poem:Poemreducer,
  Fav: Favourites
  },
});
