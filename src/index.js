import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
// @todo: is this the best way to bootstrap mocking/mirage functionality?
import'./mocks';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
