import React from "react";

/* Styling */
import "./search-summary.scss";

const SearchSummary = ({ summary }) => {
  return (
    <p className="summary">
      About {summary.formattedTotalResults} results (
      {summary.formattedSearchTime} seconds){" "}
    </p>
  );
};

export default SearchSummary;
