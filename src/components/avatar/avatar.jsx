import React from "react";

/* Asset*/
import defaultPerson from "../../asset/default.jpg";
/* Styling */
import "./avatar.scss";

/* COntext Utilities */
import { useStateValue } from "../../context/context";

const Avatar = ({ onClick }) => {
  const [{ authDetails }] = useStateValue();
  const imageSrc = !authDetails ? defaultPerson : authDetails.photoURL;
  return (
    <span className="avatar" onClick={() => onClick()}>
      <img src={imageSrc} alt="Avatar of the person" />
    </span>
  );
};

export default Avatar;
