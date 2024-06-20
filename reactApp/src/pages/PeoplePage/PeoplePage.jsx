import "./PeoplePage.module.css";
import { getApiResource } from "@utils/network";
import { API_PEOPLE } from "@constants/api";
import { useEffect, useState } from "react";
import { getPeopleID, getPeopleImage } from "@services/getPeopleData";
import PeopleList from "@components/PeoplePage/PeopleList";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { useQueryParams } from "../../hooks/useQueryParams";
import { PeopleNavigation } from "../../components/PeoplePage/PeopleNavigation";

function PeoplePage({ setErrorApi, setLoading, loading }) {
  const { page, setNewPage } = useQueryParams();
  const [lastPage, setLastPage] = useState(false);
  const [people, setPeople] = useState([]);
  const getResource = async (url) => {
    setLoading(true);
    setPeople([]);
    const res = await getApiResource(url);
    if (res) {
      setErrorApi(false);
      if (!res.next) {
        setLastPage(true);
      } else {
        setLastPage(false);
      }
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleID(url);
        const img = getPeopleImage(id);
        return { name, url, img, id };
      });
      setPeople(peopleList);
      setLoading(false);
    } else {
      setErrorApi(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page) {
      getResource(API_PEOPLE + `/?page=${page}`);
    }
  }, [page]);

  return (
    <>
      <PeopleNavigation
        setNewPage={setNewPage}
        page={page}
        lastPage={lastPage}
        disabled={loading}
      />
      {loading ? (
        <div className="container" style={{ margin: "50px auto" }}>
          <div className="spinner"></div>
        </div>
      ) : (
        people.length > 0 && <PeopleList people={people} />
      )}
    </>
  );
}

export default withErrorApi(PeoplePage);
