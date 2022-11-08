import React from 'react'
import './ArticleCard.css'

const ArticleCard = ({title, image, date}) => {
  return (
    <div className="article-card">
        <img className="card-image" src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{date}</p>
    </div>
  )
}

export default ArticleCard