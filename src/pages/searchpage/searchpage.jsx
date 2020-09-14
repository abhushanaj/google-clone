import React from "react";
import { Link } from "react-router-dom";

/* Components */
import Search from "../../components/search/search";

/* Styling */
import "./searchpage.scss";

const SearchPage = () => {
  return (
    <div className="searchpage ">
      <div className="navbar__contain">
        <nav className="searchpage__navbar u-container">
          <div className="logo-box">
            <Link to="/">
              <img
                src="https://www.google.com/logos/doodles/2020/thank-you-coronavirus-helpers-april-25-26-copy-6753651837108821-s.png"
                alt="Google Logo"
              />
            </Link>
          </div>
          <Search hideButtons />
        </nav>
      </div>
    </div>
  );
};

export default SearchPage;
