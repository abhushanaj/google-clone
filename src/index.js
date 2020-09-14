import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import StateProvider from "./context/context";

import searchReducer from "./context/reducers/searchReducer";

const initialState = {
  searchTerm: "",
};

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={searchReducer}>
        <App />
      </StateProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
