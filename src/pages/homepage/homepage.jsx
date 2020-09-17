import React, { useState } from "react";

/* Child Components */
import GridIcon from "../../components/icons/grid-icon";
import Avatar from "../../components/avatar/avatar";
import Search from "../../components/search/search";
import LoginDropdown from "../../components/login-dropdown/login-dropdown";

/* Asset */

/* Styling */
import "./homepage.scss";

const HomePage = () => {
  const [showLoginDropdown, setLoginDropdown] = useState(false);
  return (
    <main className="homepage u-container">
      <nav className="navbar">
        <ul className="navbar__right">
          <li className="navbar__item">
            <a href="#!" className="navbar__link">
              Gmail
            </a>
          </li>
          <li className="navbar__item">
            <a href="#!" className="navbar__link">
              Images
            </a>
          </li>
          <li className="navbar__item">
            <a href="#!" className="navbar__link">
              <GridIcon />
            </a>
          </li>
          <li className="navbar__item">
            <Avatar onClick={() => setLoginDropdown(!showLoginDropdown)} />
            {showLoginDropdown ? <LoginDropdown /> : null}
          </li>
        </ul>
      </nav>

      <div className="homepage__body">
        <div className="logobox">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google brand logo"
          />
        </div>
        <Search />
      </div>
    </main>
  );
};

export default HomePage;
