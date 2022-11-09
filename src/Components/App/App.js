import "./App.css";
import React, { useState, useEfect, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import SortForm from "../SortForm/SortForm";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import ArticleDetails from '../ArticleDetails/ArticleDetails'

const App = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const findArticle = (title) => {
    return articles.filter(article => {
      return article.title === title
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="app">
      <Header />
      <Switch>
        <Route
          exact
          path="/:title"
          render={({match}) => {
            const clickedArticle = findArticle(match.params.title)
            console.log(clickedArticle)
            return (
              <ArticleDetails article={clickedArticle}/>
              );
            }}
        />
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <div>
                    <SortForm />
                    <ArticleContainer articles={articles} />
                  </div>
                );
              }}
            />
        <div className="footer">
          Copyright (c) 2022 The New York Times Company. All Rights Reserved.
        </div>
      </Switch>
    </main>
  );
};

export default App;
