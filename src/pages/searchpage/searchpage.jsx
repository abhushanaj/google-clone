import React from "react";
import { Link } from "react-router-dom";

/* Context Consumer */
import { useStateValue } from "../../context/context";

/* Components */
import Search from "../../components/search/search";
import SearchResult from "../../components/searchResult/searchResult";

/* Hooks */
// import useGoogleSearch from "../../custom-hooks/useGoogleSearch";

/* Styling */
import "./searchpage.scss";

/* Sample Response Mocking */

import response from "../../sampleResponse";

const SearchPage = () => {
  const [state] = useStateValue();
  const { searchTerm } = state;

  // Real API Call
  // const { result } = useGoogleSearch(searchTerm);

  console.log(response);

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
      <div className="searchpage__body u-container">
        {response.items.map((item, id) => {
          return <SearchResult display={item} key={id} />;
        })}
      </div>
    </div>
  );
};

export default SearchPage;
