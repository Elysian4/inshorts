import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/niyati-gupta-951a6a243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="__blank">
          Niyati Gupta
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/snow_drop_n/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/niyati-gupta-951a6a243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://niyati-portfolio4.netlify.app/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
