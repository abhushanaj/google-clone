import React from "react";

/* Styling */
import "./search-summary.scss";

const SearchSummary = ({ summary, message }) => {
  return (
    <>
      <p className="summary">
        About {summary.formattedTotalResults} results (
        {summary.formattedSearchTime} seconds){" "}
      </p>
      {message && (
        <p className="summary">
          The app is now displaying default result since, it has crossed the
          limit of 100 searches per day{" "}
          <span role="img" aria-label="Laughing Emoji">
            🤣
          </span>{" "}
          .
        </p>
      )}
    </>
  );
};

export default SearchSummary;
