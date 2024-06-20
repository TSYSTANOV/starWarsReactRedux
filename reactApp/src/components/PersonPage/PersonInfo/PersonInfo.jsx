import styles from "./PersonInfo.module.css";
function PersonInfo({ person }) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {person.map(({ title, data }) => {
          return (
            <li key={title} className={styles.item}>
              <span className={styles.item_title}>{title}: </span>
              {data !== "n/a" ? data : "Undefined"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export { PersonInfo };
