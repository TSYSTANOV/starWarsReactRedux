import { createSlice } from "@reduxjs/toolkit";

const FavoriteSlice = createSlice({
  name: "favorire",
  initialState: {
    fav: localStorage.getItem("favorite")
      ? JSON.parse(localStorage.getItem("favorite"))
      : [],
  },
  reducers: {
    setPersonToFavorite: (state, action) => {
      state.fav.push(action.payload);
    },
    removePersonToFavorite: (state, action) => {
      state.fav = state.fav.filter((item) => {
        return Object.keys(item)[0] !== action.payload;
      });
    },
  },
});
export const { setPersonToFavorite, removePersonToFavorite } =
  FavoriteSlice.actions;
export default FavoriteSlice.reducer;
