import React from "react";

/* Child Components */
import SearchResult from "../searchResult/searchResult";
import SearchSummary from "../search-summary/search-summary";

/* Styling */
import "./search-showcase.scss";

const SearchShowcase = ({ data }) => {
  return (
    <div className="searchpage__body u-container">
      <SearchSummary
        summary={data.searchInformation}
        message={data.defaultMessage}
      />

      {data.items.map((item, id) => {
        return <SearchResult display={item} key={id} />;
      })}
    </div>
  );
};

export default SearchShowcase;
