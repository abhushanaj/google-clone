import React from "react";
import { Link } from "react-router-dom";

/* Context Consumer */
import { useStateValue } from "../../context/context";

/* Components */
import Search from "../../components/search/search";
import SearchResult from "../../components/searchResult/searchResult";
import SearchSummary from "../../components/search-summary/search-summary";

/* Hooks */
import useGoogleSearch from "../../custom-hooks/useGoogleSearch";

/* Styling */
import "./searchpage.scss";

/* Sample Response */
import sampleResponse from "../../sampleResponse";

const SearchPage = () => {
  const [state] = useStateValue();
  const { searchTerm } = state;

  // Real API Call
  const { response } = useGoogleSearch(searchTerm);

  const data = response ? response : sampleResponse;

  console.log("Final Result to display", data);

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
        <SearchSummary summary={data.searchInformation} />
        {data.items.map((item, id) => {
          return <SearchResult display={item} key={id} />;
        })}
      </div>
    </div>
  );
};

export default SearchPage;
