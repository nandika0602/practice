import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FunctionSetter from "./FunctionSetter";
import UpdateImmediate from "./UpdateImmediate";
import ReferentialEquality from "./ReferentialEquality";
import FetchuseEffect from "./FetchuseEffect";
import Filter from "./Filtering/Filter.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <FunctionSetter />
    <UpdateImmediate />
    <ReferentialEquality />
    <FetchuseEffect />
    <Filter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
