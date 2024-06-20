import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FavoriteMark } from "../Favorite/FavoriteMark";

import { ThemeList, useTheme } from "../../context/ThemeProvider";
function Header() {
  const { theme } = useTheme();

  return (
    <div className={styles.container}>
      <ul className={styles.list_container}>
        <div className={"header__icon"}>{ThemeList[theme]}</div>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not-Found</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
      </ul>
      <Link to="/favorite">
        <FavoriteMark />
      </Link>
    </div>
  );
}
export { Header };
