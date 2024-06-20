import styles from "./UI_Input.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
function UI_Input({ type, value, onChange, placeholder, classes = "" }) {
  return (
    <div className={`${styles.container} ${classes}`}>
      <input
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={placeholder}
        className={styles.input}
      />

      <IoIosCloseCircleOutline
        className={`${styles.clear} ${!value ? styles.disabled : ""}`}
        onClick={() => {
          onChange("");
        }}
      />
    </div>
  );
}
export { UI_Input };
