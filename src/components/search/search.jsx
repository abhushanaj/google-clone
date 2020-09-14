import React, { useState } from "react";
// import axios from "axios";

import SearchIcon from "../icons/search-icon";
import MicIcon from "../icons/mic-icon";

/* Styling */

import "./search.scss";

const Search = ({ hideButtons }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted >>>", search);
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <div className="searchbox">
          <SearchIcon />
          <input
            type="text"
            className="searchbox__input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <MicIcon />
        </div>
        {hideButtons ? (
          <div className="search__buttons">
            <button className="btn btn--gray hidden" type="submit">
              Google Search
            </button>
            <button className="btn btn--gray hidden" type="button">
              I'm Feeling Lucky
            </button>
          </div>
        ) : (
          <div className="search__buttons">
            <button className="btn btn--gray " type="submit">
              Google Search
            </button>
            <button className="btn btn--gray" type="button">
              I'm Feeling Lucky
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default Search;
