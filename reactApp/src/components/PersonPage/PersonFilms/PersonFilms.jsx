import { Loader } from "../../Loader/Loader";
import styles from "./PersonFilms.module.css";
function PersonFilms({ films, loading }) {
  return (
    <div>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {loading ? (
            <Loader />
          ) : (
            <>
              {films.map(({ episode, title }) => {
                return (
                  <li key={episode} className={styles.item}>
                    <span className={styles.item_episode}>
                      Episode: {episode}
                    </span>
                    <span className={styles.item_column}>:</span>
                    <span className={styles.item_title}>{title}</span>
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
export { PersonFilms };
