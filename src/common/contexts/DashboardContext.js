import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const DashboardContext = createContext();

export default DashboardContext;

const initialState = {
  loading: true,
  error: "",
  salesTotal: 0,
  subscriptionsTotal: 0,
  data: [{ timestamp: new Date().toISOString(), amount: 0 }],
};

export function DashboardProvider({children}) {
  const [url, setUrl] = useState("");
  const {loading, error, ...state} = useFetch(url);
  const data = state.data ? state.data : [];

  return <DashboardContext.Provider value={{url, setUrl, ...initialState, loading, error, data}}>
    {children}
  </DashboardContext.Provider>
}
