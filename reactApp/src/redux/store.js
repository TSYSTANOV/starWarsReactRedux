import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import FavoriteSlice from "./slices/FavoriteSlice";

export const localStoraMiddleware = (state) => (next) => (action) => {
  const nextAction = next(action);
  if (
    action.type === "favorire/setPersonToFavorite" ||
    action.type === "favorire/removePersonToFavorite"
  ) {
    const localValue = state.getState().favoritePersons.fav;
    localStorage.setItem("favorite", JSON.stringify(localValue));
  }
  return nextAction;
};

export const store = configureStore({
  reducer: {
    favoritePersons: FavoriteSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(localStoraMiddleware);
  },
});

store.subscribe(() => {
  //very usefull for you...
  // console.log(store.liftedStore.getState());
  // console.log(store.getState());
});
