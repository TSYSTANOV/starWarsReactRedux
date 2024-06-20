import { useSelector } from "react-redux";
import styles from "./FavoritePage.module.css";
import PeopleList from "../PeoplePage/PeopleList";
import { useMemo } from "react";
function FavoritePage() {
  const { fav } = useSelector((state) => state.favoritePersons);
  const people = useMemo(() => {
    return fav.map((item) => {
      return { ...Object.entries(item)[0][1], id: Object.entries(item)[0][0] };
    });
  }, [fav.length]);
  return (
    <>
      <h2 className="header__text">Favorites Persons</h2>
      {people.length > 0 ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.comment}>No data</h2>
      )}
    </>
  );
}
export { FavoritePage };
