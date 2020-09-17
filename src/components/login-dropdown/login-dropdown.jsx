import React, { useState } from "react";

/* Styling*/
import "./login-dropdown.scss";

/* Asset */
import defaultImage from "../../asset/default.jpg";

const LoginDropdown = ({ image, name, email }) => {
  const imageSrc = image ? image : defaultImage;
  const [isLoggedIn] = useState(false);

  return (
    <div className="login__dropdown">
      <div className="person__image">
        <img src={imageSrc} alt="Person Avatar" />
      </div>
      {isLoggedIn ? (
        <div className="person__details">
          <h2>Abhushan Adhikari Joshi</h2>
          <p>abhushanadhikarijoshi@gmail.com</p>
        </div>
      ) : null}

      {isLoggedIn ? (
        <div className="signout__container">
          <button className="btn btn--gray">Sign Out</button>
        </div>
      ) : (
        <div className="signin__container">
          <button className="btn btn--gray">Sign In</button>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
