import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";

/* Context Usage */
import { useStateValue } from "../../context/context";

/* Action Types */
import searchActionTypes from "../../context/actiontypes/searchActionTypes";

/* Child Components */
import SearchIcon from "../icons/search-icon";
import MicIcon from "../icons/mic-icon";

/* Styling */
import "./search.scss";

const Search = ({ hideButtons }) => {
  const [{ searchTerm }, dispatch] = useStateValue();

  const [search, setSearch] = useState(searchTerm);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch Action to set the search query
    if (search.length < 1) {
      return;
    } else {
      console.log("Triggered!");
      dispatch({
        type: searchActionTypes.SET_SEARCH,
        payload: search,
      });
      history.push("/search");
    }
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
