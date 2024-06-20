import { NavLink } from "react-bootstrap";
import { Loader } from "../Loader/Loader";
import styles from "./SeacrPageInfo.module.css";
import { Link } from "react-router-dom";
function SeacrPageInfo({ people, loading, error, value }) {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {people.length > 0 ? (
            <ul className={styles.list__container}>
              {people.map(({ id, name, img }) => {
                return (
                  <Link to={`/people/${id}`} key={id}>
                    <li className={styles.list__item}>
                      <img
                        src={img}
                        alt={name}
                        className={styles.person__photo}
                      />
                      <p className={styles.person__name}>{name}</p>
                    </li>
                  </Link>
                );
              })}
            </ul>
          ) : (
            <p>No found for your search : {value}</p>
          )}
        </>
      )}
    </>
  );
}
export { SeacrPageInfo };
