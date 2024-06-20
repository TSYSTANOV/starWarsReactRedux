import { useEffect, useRef, useState } from "react";
import { getApiResource } from "../utils/network";
import { API_SEARCH } from "../constants/api";
import { getPeopleID, getPeopleImage } from "../services/getPeopleData";

export const useSearch = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchInfo, setSearchInfo] = useState([]);

  function handlerInputChange(newValue) {
    setValue(newValue);
  }

  let timerForFetch = useRef();
  useEffect(() => {
    if (timerForFetch.current) {
      clearTimeout(timerForFetch.current);
    }
    timerForFetch.current = setTimeout(() => {
      (async () => {
        setLoading(true);
        setSearchInfo([]);
        const res = await getApiResource(API_SEARCH + value);

        setLoading(false);
        if (res) {
          const peopleList = res.results.map((item) => {
            return {
              id: getPeopleID(item.url),
              name: item.name,
              img: getPeopleImage(getPeopleID(item.url)),
            };
          });
          setSearchInfo(peopleList);
        } else {
          setError(true);
        }
      })();
    }, 1000);
  }, [value]);

  return { value, handlerInputChange, searchInfo, loading, error };
};
