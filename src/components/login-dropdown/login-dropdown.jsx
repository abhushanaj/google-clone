import React from "react";

/* Styling*/
import "./login-dropdown.scss";

/* Firebase Utilities */
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

/* Context Utilities */
import { useStateValue } from "../../context/context";

/* Asset */
import defaultImage from "../../asset/default.jpg";

const LoginDropdown = () => {
  const [{ authDetails }] = useStateValue();

  const imageSrc = authDetails ? authDetails.photoURL : defaultImage;

  return (
    <div className="login__dropdown">
      <div className="person__image">
        <img src={imageSrc} alt="Person Avatar" />
      </div>
      {authDetails ? (
        <div className="person__details">
          <h2>{authDetails.displayName}</h2>
          <p>{authDetails.email}</p>
        </div>
      ) : null}

      {authDetails ? (
        <div className="signout__container">
          <button className="btn btn--gray" onClick={() => auth.signOut()}>
            Sign Out
          </button>
        </div>
      ) : (
        <div className="signin__container">
          <button
            className="btn btn--gray"
            onClick={async () => await signInWithGoogle()}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
