import { UI_Button } from "../UI/UI_But/UI_Button";
import "../../components/UI/index.css";
import styles from "./PeopleNavigation.module.css";
function PeopleNavigation({ setNewPage, lastPage, page, disabled }) {
  return (
    <>
      <div className="container">
        <UI_Button
          setNewPage={setNewPage}
          page={page}
          text="Previous"
          up={false}
          disabled={disabled}
        />
        <UI_Button
          setNewPage={setNewPage}
          lastPage={lastPage}
          text="Next"
          up={true}
          classes={styles.test}
          disabled={disabled}
        />
      </div>
    </>
  );
}
export { PeopleNavigation };
