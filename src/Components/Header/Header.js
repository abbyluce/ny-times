import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Link to={`/`}>
      <div className="header">
        <h1>THE NEW YORK TIMES</h1>
        <h2>NEWS READER</h2>
      </div>
    </Link>
  );
};

export default Header;
