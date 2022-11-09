import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({title, image, date}) => {

    const month = `${date[5]}${date[6]}`
    const day = `${date[8]}${date[9]}`
    const year = date.slice(0,4)

  return (
    <Link to={`/${title}`}>
        <div className="article-card">
            <img className="card-image" src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{`${month}/${day}/${year}`}</p>
        </div>
    </Link>
  )
}

export default ArticleCard