import React from "react";
import { Switch, Route } from "react-router-dom";

/* Page Components */
import HomePage from "./pages/homepage/homepage";
import SearchPage from "./pages/searchpage/searchpage";
import Footer from "./components/footer/footer";

/* Styling  */
import "./App.scss";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" exact component={SearchPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
