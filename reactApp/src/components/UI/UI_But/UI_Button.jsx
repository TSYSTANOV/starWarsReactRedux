import styles from "./UI_Button.module.css";
function UI_Button({
  disabled,
  classes,
  lastPage,
  setNewPage,
  text,
  page,
  up,
  theme = "dark",
}) {
  return (
    <>
      <button
        className={`${styles.buttons} ${styles[theme]} ${classes}`}
        disabled={lastPage || +page === 1 || disabled}
        onClick={() => {
          setNewPage((prev) => {
            return {
              ...prev,
              page: up ? +prev.page + 1 : +prev.page - 1,
            };
          });
        }}
      >
        {text}
      </button>
    </>
  );
}
export { UI_Button };
