import React from "react";

/* Styling */
import "./joke-box.scss";

const JokeBox = ({ joke }) => {
  return (
    <div className="joke__box">
      <h1>Here's a freshly brewed Chunk Norris Joke for ya!</h1>
      <p>{joke}</p>
    </div>
  );
};

export default JokeBox;
