import styles from "./PersonPage.module.css";
import { usePerson } from "../../hooks/usePerson";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { PersonPhoto } from "../../components/PersonPage/PersonPhoto/PersonPhoto";
import { PersonInfo } from "../../components/PersonPage/PersonInfo/PersonInfo";
import { PersonLinkBack } from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";
import { PersonFilms } from "../../components/PersonPage/PersonFilms/PersonFilms";
import { Loader } from "../../components/Loader/Loader";

function PersonPage() {
  const {
    filmsLoading,
    filmsList,
    loading,
    error,
    personData,
    personName,
    personPhoto,
    person: id,
  } = usePerson();

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {personName && (
          <>
            <span className={styles.person_name}>{personName}</span>
            <div className={styles.container}>
              <PersonPhoto
                src={personPhoto}
                alt={personName}
                personName={personName}
                id={id}
              />
              <PersonInfo person={personData} />

              {filmsList && (
                <PersonFilms films={filmsList} loading={filmsLoading} />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
export { PersonPage };
