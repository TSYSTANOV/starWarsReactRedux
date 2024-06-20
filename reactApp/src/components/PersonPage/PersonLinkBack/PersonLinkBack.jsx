import { useNavigate } from "react-router-dom";
import styles from "./PersonLinkBack.module.css";
import { ReactComponent as ArrowBack } from "../../../img/arrowLeft.svg";
function PersonLinkBack() {
  const navigate = useNavigate();
  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <a href="#" onClick={handleGoBack} className={styles.link}>
      <ArrowBack className={styles.img} />
      <span className={styles.text}>Go back</span>
    </a>
  );
}
export { PersonLinkBack };
