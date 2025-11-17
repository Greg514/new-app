import React from "react";
import logo from "../src/assets/logo.png";

const Nav = () => {
  return (
    <div className="container">
        <div>
          <img className="logo"src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

    </div>
  );
};

export default Nav;
