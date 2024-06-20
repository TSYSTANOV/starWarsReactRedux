import { useState } from "react";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

export function withErrorApi(Component) {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);
    const [loading, setLoading] = useState(true);
    return (
      <>
        {errorApi ? (
          <ErrorMessage />
        ) : (
          <Component
            loading={loading}
            setErrorApi={setErrorApi}
            {...props}
            setLoading={setLoading}
          />
        )}
      </>
    );
  };
}
