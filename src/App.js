import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import Container from "./features/Dashboard/Container";
import {DashboardProvider} from "./common/contexts/DashboardContext";
import useFetch from "./common/hooks/useFetch";

const App = () => {
  return (<DashboardProvider>
    <DashboardShell/>
  </DashboardProvider>);
};

export default App;
