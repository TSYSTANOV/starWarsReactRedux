import { useLocation, useParams } from "react-router-dom";
import imgNotFound from "../../img/notfound.png";
import styles from "./NotFount.module.css";
function NotFound() {
  const { pathname } = useLocation();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img className={styles.img} src={imgNotFound} alt="not-found" />
      <p className={styles.text}>
        No match for <strong>{pathname}</strong>
      </p>
    </div>
  );
}
export { NotFound };
