import React, { createContext } from "react";
import { sales } from "../../mocks";

const GlobalContext = createContext();

export default GlobalContext;

const initialState = {
  loading: true,
  error: "",
  data: sales,
  salesTotal: 100,
  subscriptionsTotal: 100,
};

export function GlobalContextProvider({children}) {
  return <GlobalContext.Provider value={{...initialState}}>
    {children}
  </GlobalContext.Provider>
}
