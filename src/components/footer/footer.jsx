import React from "react";

/* Styling */
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer u-container">
        <div className="footer__upper">
          <p className="footer__line">
            Made by{" "}
            <span role="img" aria-label="Heart Emoji">
              ❤️{" "}
            </span>{" "}
            <a
              href="https://github.com/abhu-A-J"
              target="_blank"
              rel="noopener noreferrer"
            >
              abhu-A-J
            </a>
          </p>
        </div>
        <div className="footer__lower"></div>
      </div>
    </footer>
  );
};

export default Footer;
