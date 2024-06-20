import styles from "./PersonPhoto.module.css";
import { useFavorite } from "../../../hooks/useFavorite";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
function PersonPhoto({ src, alt, personName, id }) {
  const { inFavoriteList, dispatchFavoritePeople } = useFavorite({
    src,
    personName,
    id,
  });

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={src} alt={alt} />

        {inFavoriteList ? (
          <MdOutlineFavorite
            onClick={dispatchFavoritePeople}
            style={{
              color: "var(--color-yellow)",
              cursor: "pointer",
              width: "60px",
              height: "60px",
            }}
            className={styles.favorite}
          />
        ) : (
          <MdFavoriteBorder
            onClick={dispatchFavoritePeople}
            style={{
              color: "white",
              cursor: "pointer",
              width: "60px",
              height: "60px",
            }}
            className={styles.favorite}
          />
        )}
      </div>
    </>
  );
}
export { PersonPhoto };
