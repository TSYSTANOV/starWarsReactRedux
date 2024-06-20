import { useDispatch, useSelector } from "react-redux";
import {
  removePersonToFavorite,
  setPersonToFavorite,
} from "../redux/slices/FavoriteSlice";
import { useMemo } from "react";

export const useFavorite = ({ src, personName, id }) => {
  const { fav } = useSelector((state) => state.favoritePersons);
  const inFavoriteList = useMemo(() => {
    return fav.some((item) => Object.keys(item)[0] === id);
  }, [fav]);
  const dispatchFavoritePeople = () => {
    if (inFavoriteList) {
      remove();
    } else {
      add();
    }
  };
  const dispatch = useDispatch();
  const add = () => {
    dispatch(setPersonToFavorite({ [id]: { img: src, name: personName } }));
  };
  const remove = () => {
    dispatch(removePersonToFavorite(id));
  };

  return { dispatchFavoritePeople, inFavoriteList };
};
