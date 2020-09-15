import React from "react";
import { Link } from "react-router-dom";

/* Context Consumer */
import { useStateValue } from "../../context/context";

/* Components */
import Search from "../../components/search/search";
// import SearchResult from "../../components/searchResult/searchResult";
// import SearchSummary from "../../components/search-summary/search-summary";
import SearchShowcase from "../../components/search-showcase/search-showcase";

/* Hooks */
import useGoogleSearch from "../../custom-hooks/useGoogleSearch";

/* Styling */
import "./searchpage.scss";

const SearchPage = () => {
  const [state] = useStateValue();
  const { searchTerm } = state;

  // Real API Call
  const { response } = useGoogleSearch(searchTerm);
  // console.log(response);

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
      {response.items !== undefined && <SearchShowcase data={response} />}
    </div>
  );
};

export default SearchPage;
