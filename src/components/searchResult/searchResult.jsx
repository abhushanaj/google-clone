import React from "react";

/* Styling */
import "./searchResult.scss";

const SearchResult = ({ display }) => {
  const { displayLink, formattedUrl, snippet, title } = display;
  return (
    <div className="result">
      <small>
        <a href={formattedUrl} target="_blank" rel="noopener noreferrer">
          {" "}
          {displayLink}
        </a>
      </small>
      <h3>
        <a href={formattedUrl} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p>{snippet}</p>
    </div>
  );
};

export default SearchResult;
