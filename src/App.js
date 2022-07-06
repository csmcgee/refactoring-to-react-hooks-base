import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import { GlobalContextProvider } from "./common/contexts/GlobalContext";

const App = () => {
  return <GlobalContextProvider>
    <DashboardShell />;
  </GlobalContextProvider>
};

export default App;
