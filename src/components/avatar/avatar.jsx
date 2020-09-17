import React from "react";

/* Asset*/
import defaultPerson from "../../asset/default.jpg";
/* Styling */
import "./avatar.scss";

const Avatar = ({ image, onClick }) => {
  const imageSrc = image ? image : defaultPerson;
  return (
    <span className="avatar" onClick={() => onClick()}>
      <img src={imageSrc} alt="Avatar of the person" />
    </span>
  );
};

export default Avatar;
