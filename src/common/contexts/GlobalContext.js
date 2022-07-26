import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";
const GlobalContext = createContext();

export default GlobalContext;

const initialState = {
  loading: true,
  error: "",
  data: [],
};

export function GlobalContextProvider({children}) {
  const [url, setUrl] = useState();
  const state = useFetch(url);

  return <GlobalContext.Provider
    value={{
      url,
      setUrl,
      ...state
    }}
  >
    {children}
  </GlobalContext.Provider>
}
