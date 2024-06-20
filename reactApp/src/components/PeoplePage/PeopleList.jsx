import { NavLink } from "react-router-dom";
import styles from "./PeopleList.module.css";
import PropTypes from "prop-types";
function PeopleList({ people }) {
  return (
    <ul className={styles.list__containter}>
      {people.map(({ name, img, id }) => {
        return (
          <NavLink to={`/people/${id}`} key={id} className={styles.list__item}>
            <img src={img} className={styles.list__photo} />
            <p>{name}</p>
          </NavLink>
        );
      })}
    </ul>
  );
}
PeopleList.propTypes = {
  people: PropTypes.array,
};
export default PeopleList;
