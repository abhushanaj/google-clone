import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import StateProvider from "./context/context";

import rootReducer from "./context/reducers/rootReducer";

const initialState = {
  searchTerm: "",
  authDetails: null,
};

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={rootReducer}>
        <App />
      </StateProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
