import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

  const date = new Date().toLocaleString(
    'default', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  );

  return (
    <Link to={`/`}>
      <div className="header">

          <h1>THE NEW YORK TIMES</h1>
          <h2>NEWS READER</h2>
        <p className="date">{date}</p>

      </div>
    </Link>
  );
};

export default Header;
