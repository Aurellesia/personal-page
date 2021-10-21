import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "components/Card";
import css from "./functionnews.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import FunctionSearchNews from "./FunctionSearchNews";

function FunctionNews() {
  const [news, setNews] = useState([]);
  const [renderGetAll, setRenderGetAll] = useState(true);

  useEffect(() => {
    if (renderGetAll) {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=id&category=general&apiKey=6afcaa913f334670b242b55ebc0a1a10"
        )
        .then((response) => {
          setNews(response.data.articles);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <>
      <Router>
        <FunctionSearchNews setRenderGetAll={setRenderGetAll} />
        {renderGetAll && (
          <div className={css["news-container"]}>
            {news.map((item, index) => {
              return (
                <Card variant="news" key={index}>
                  <img
                    src={item.urlToImage}
                    className={css["news-img"]}
                    alt={item.title}
                  />
                  <div>{item.title}</div>
                  <div className={css["news-desc"]}>{item.description}</div>
                  <Link
                    to={{
                      pathname: item.url,
                    }}
                    className={css["news-link"]}
                    target="_blank"
                  >
                    Read more ..
                  </Link>
                </Card>
              );
            })}
          </div>
        )}
      </Router>
    </>
  );
}

export default FunctionNews;
