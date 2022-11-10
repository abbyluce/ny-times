import React from "react";
import "./ArticleDetails.css";
import { Link } from "react-router-dom";

const ArticleDetails = ({ article }) => {
  return (
    <div>
      <h4>{article[0].title}</h4>
      <h5>{article[0].byline}</h5>
      <p className="details-text">{article[0].abstract}</p>
      <img
        src={article[0].multimedia[0].url}
        alt={article[0].title}
        className="details-photo"
      />
      <p className="caption">
        <i>{article[0].multimedia[0].caption}</i>
      </p>
      <br></br>
      <a href={article[0].url} target="_blank">
        <u>View Full Article</u>
      </a>
      <br></br>
      <Link to={`/`}>
        <button>RETURN HOME</button>
      </Link>
    </div>
  );
};

export default ArticleDetails;
