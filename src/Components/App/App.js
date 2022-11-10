import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import SortForm from "../SortForm/SortForm";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import ArticleDetails from "../ArticleDetails/ArticleDetails";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [err, setErr] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      setErr(true)
      console.log(error);
    }
  };

  const findArticle = (publishedDate) => {
    return articles.filter((article) => {
      return article.published_date === publishedDate;
    });
  };

  const sortArticles = (sortBy) => {
    let sortedArticles;
    if (sortBy === "alphabet") {
      sortedArticles = articles.sort((a, b) => {
        return a.title === b.title ? 0 : a.title < b.title ? -1 : 1;
      });
      setArticles(sortedArticles);
      !sorted ? setSorted(true) : setSorted(false);
    } else if (sortBy === "date") {
      sortedArticles = articles.sort((a, b) => {
        return a.published_date === b.published_date
          ? 0 : a.published_date > b.published_date ? -1 : 1;
      });
      setArticles(sortedArticles);
      !sorted ? setSorted(true) : setSorted(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="app">
      <Header />
      <Switch>
        <Route
          exact
          path="/:date"
          render={({ match }) => {
            const clickedArticle = findArticle(match.params.date);
            return <ArticleDetails article={clickedArticle} />;
          }}
        />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <SortForm sortArticles={sortArticles} />
                {!err ? 
                <ArticleContainer sorted={sorted} articles={articles} />
                : <h2>Error 404. The data could not be fetched. Please reload and try again</h2>}
              </div>
            );
          }}
        />
      </Switch>
      <div className="footer">
        Copyright (c) 2022 The New York Times Company. All Rights Reserved.
      </div>
    </main>
  );
};

export default App;
