import React from 'react'
import './ArticleContainer.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticleContainer = ({articles}) => {

console.log(articles)

const displayCards = articles.map(article => {
    return <ArticleCard 
    image={article.multimedia[0].url}
    title={article.title}
    date={article.published_date}
    key={article.uri}/>
})
  return (
    <div className="article-container">
        {displayCards}
    </div>
  )
}

export default ArticleContainer