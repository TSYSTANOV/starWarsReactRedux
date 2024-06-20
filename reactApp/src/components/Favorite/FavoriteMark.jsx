import { useSelector } from "react-redux";
import styles from "./FavoriteMark.module.css";
import { FaBookmark } from "react-icons/fa";
function FavoriteMark() {
  const { fav } = useSelector((state) => state.favoritePersons);
  return (
    <div className={styles.container}>
      <span className={styles.counter}>{fav.length}</span>
      <FaBookmark
        style={{ color: "var(--fiolet)", width: "40px", height: "40px" }}
      />
    </div>
  );
}
export { FavoriteMark };
