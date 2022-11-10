import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ title, image, date }) => {
  const month = `${date[5]}${date[6]}`;
  const day = `${date[8]}${date[9]}`;
  const year = date.slice(0, 4);

  return (
    <Link to={`/${date}`}>
      <div className="article-card">
        <div className="wrapper">
          <img className="card-image" src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <p className="card-date">{`${month}/${day}/${year}`}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
