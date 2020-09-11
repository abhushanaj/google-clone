import React from "react";

/* Asset*/
import defaultPerson from "../../asset/default.jpg";
/* Styling */
import "./avatar.scss";

const Avatar = ({ image }) => {
  const imageSrc = image ? image : defaultPerson;
  return (
    <span className="avatar">
      <img src={imageSrc} alt="Avatar of the person" />
    </span>
  );
};

export default Avatar;
