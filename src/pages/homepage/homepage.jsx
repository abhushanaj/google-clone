import React, { useState } from "react";

import axios from "axios";

/* Child Components */
import GridIcon from "../../components/icons/grid-icon";
import SearchIcon from "../../components/icons/search-icon";
import MicIcon from "../../components/icons/mic-icon";
import Avatar from "../../components/avatar/avatar";
import JokeBox from "../../components/joke-box/joke-box";

/* Asset */

/* Styling */
import "./homepage.scss";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [joke, setJoke] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setJoke("");
  };

  const handleJokes = async (e) => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      setJoke(response.data.value);
    } catch (err) {
      setJoke("");
    }
  };

  return (
    <main className="homepage u-container">
      <nav className="navbar">
        <ul className="navbar__right">
          <li className="navbar__item">
            <a href="#!" className="navbar__link">
              Gmail
            </a>
          </li>
          <li className="navbar__item">
            <a href="#!" className="navbar__link">
              Images
            </a>
          </li>
          <li className="navbar__item">
            <a href="#!" className="navbar__link">
              <GridIcon />
            </a>
          </li>
          <li className="navbar__item">
            <Avatar />
          </li>
        </ul>
      </nav>

      <div className="homepage__body">
        <div className="logobox">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google brand logo"
          />
        </div>
        <form className="search" onSubmit={handleSubmit}>
          <div className="searchbox">
            <SearchIcon />
            <input
              type="text"
              className="searchbox__input"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setJoke("");
              }}
            />
            <MicIcon />
          </div>
          <div className="search__buttons">
            <button className="btn btn--gray" type="submit">
              Google Search
            </button>
            <button
              className="btn btn--gray"
              type="button"
              onClick={handleJokes}
            >
              I'm Feeling Lucky
            </button>
          </div>
        </form>
        {joke && <JokeBox joke={joke} />}
      </div>
    </main>
  );
};

export default HomePage;
