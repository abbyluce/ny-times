import './App.css'
import React, { useState, useEfect, useEffect } from 'react'
import { Route } from "react-router-dom"
import Header from '../Header/Header'
import SortForm from '../SortForm/SortForm'
import ArticleContainer from '../ArticleContainer/ArticleContainer'

const App = () => {

  const [articles, setArticles] = useState([])

  const fetchData = async() => {
    try {
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      const data = await response.json()
      console.log(data)
      setArticles(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      <Header />
      <SortForm />
      <ArticleContainer articles={articles}/>
      <div className="footer">
        Copyright (c) 2022 The New York Times Company. All Rights Reserved.
      </div>
    </div>
  )
}

export default App
