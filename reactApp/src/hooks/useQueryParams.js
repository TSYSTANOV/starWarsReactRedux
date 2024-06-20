import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!Object.fromEntries(searchParams).page) {
      setNewPage(1);
    }
  }, []);

  function setNewPage(callback) {
    const prev = Object.fromEntries(searchParams);
    if (typeof callback === "number") {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        page: callback,
      });
      return;
    }
    setSearchParams({
      ...callback(prev),
    });
  }
  return { ...Object.fromEntries(searchParams), setNewPage };
};
