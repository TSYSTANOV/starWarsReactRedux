import { useParams } from "react-router-dom";
import { getApiResource } from "../utils/network";
import { useEffect, useState } from "react";
import { BASE_URL, PEOPLE_URL } from "../constants/api";
import { getPeopleImage } from "../services/getPeopleData";
export const usePerson = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [personData, setPersonData] = useState(null);
  const [personName, setPersonName] = useState("");
  const [filmsList, setFilmsList] = useState(null);
  const [filmsLoading, setFilmsLoading] = useState(true);
  const [filmsURL, setFilmsURL] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const { person } = useParams();
  useEffect(() => {
    if (person) {
      (async () => {
        const res = await getApiResource(BASE_URL + PEOPLE_URL + `/${person}`);
        if (res) {
          setFilmsURL(res.films);
          setPersonName(res.name);
          setPersonPhoto(getPeopleImage(person));
          setPersonData([
            { title: "birth_year", data: res.birth_year },
            { title: "eye_color", data: res.eye_color },
            { title: "gender", data: res.gender },
            { title: "hair_color", data: res.hair_color },
            { title: "height", data: res.height },
            { title: "mass", data: res.mass },
            { title: "skin_color", data: res.skin_color },
          ]);
        } else {
          setError(true);
        }
        setLoading(false);
      })();
    }
  }, [person]);

  useEffect(() => {
    if (filmsURL) {
      (async () => {
        const data = await Promise.all(
          filmsURL.map(async (filmURL) => {
            const res = await getApiResource(filmURL);
            return res;
          })
        );
        setFilmsList(
          data
            .map((el) => {
              return { episode: el.episode_id, title: el.title };
            })
            .sort((a, b) => (a.episode > b.episode ? 1 : -1))
        );
        setTimeout(() => {
          setFilmsLoading(false);
        }, 1000);
      })();
    }
  }, [filmsURL]);
  return {
    loading,
    error,
    personData,
    personName,
    filmsList,
    personPhoto,
    filmsLoading,
    person,
  };
};
