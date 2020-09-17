import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

/* Page Components */
import HomePage from "./pages/homepage/homepage";
import SearchPage from "./pages/searchpage/searchpage";
import Footer from "./components/footer/footer";

/* State Context Utilities */
import userAuthActionTypes from "./context/actiontypes/userAuthActionTypes";
import { useStateValue } from "./context/context";

/* Firebase Utilities */
import { auth } from "./firebase/firebase.utils";

/* Styling  */
import "./App.scss";

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        dispatch({
          type: userAuthActionTypes.SIGN_IN_USER,
          payload: {
            displayName,
            email,
            photoURL,
            uid,
          },
        });
      } else {
        dispatch({
          type: userAuthActionTypes.SIGN_OUT_USER,
        });
      }
    });
  }, [dispatch]);

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
