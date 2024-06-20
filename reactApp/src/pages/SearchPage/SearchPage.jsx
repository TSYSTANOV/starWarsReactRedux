import styles from "./SearchPage.module.css";
import { useSearch } from "../../img/useSearch";
import { SeacrPageInfo } from "../../components/SearchPageInfo/SearchPageInfo";
import { UI_Input } from "../../components/UI/UI_Input/UI_Input";
function SearchPage() {
  const { value, handlerInputChange, searchInfo, loading, error } = useSearch();

  return (
    <>
      <h1 className="header__text">Search Page</h1>
      <UI_Input
        type={"text"}
        value={value}
        onChange={handlerInputChange}
        placeholder={"Enter person name..."}
        classes={styles.input__search}
      />
      <SeacrPageInfo
        value={value}
        people={searchInfo}
        loading={loading}
        error={error}
      />
    </>
  );
}
export { SearchPage };
