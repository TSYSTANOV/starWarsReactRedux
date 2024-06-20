import styles from "./HomePage.module.css";
import { ChooseSide } from "../../components/HomePage/ChooseSide";
function HomePage() {
  return (
    <>
      <h2 className="header__text">HomePage</h2>
      <ChooseSide />
    </>
  );
}
export { HomePage };
