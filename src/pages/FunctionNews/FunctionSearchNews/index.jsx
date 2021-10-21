import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "components/Card";
import css from "./functionsearchnews.module.css";
import { BrowserRouter as Link } from "react-router-dom";

function FunctionSearchNews({ setRenderGetAll }) {
  const [news, setNews] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");
  const [renderResult, setRenderResult] = useState(false);

  useEffect(() => {
    if (keyword) {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${keyword}&language=en&apiKey=6afcaa913f334670b242b55ebc0a1a10`
        )
        .then((response) => {
          setNews(response.data.articles);
          setRenderResult(true);
          setRenderGetAll(false);
        })
        .catch((error) => console.log(error));
    }
  }, [keyword]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    setKeyword(search);
    e.preventDefault();
  };

  const handleBack = (e) => {
    e.preventDefault();
    setRenderGetAll(true);
    setRenderResult(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css["form"]}>
        <input value={search} onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
      <div className={css["news-container"]}>
        {renderResult &&
          (news.length !== 0 ? (
            news.map((item, index) => {
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
            })
          ) : (
            <div style={{ textAlign: "center" }}>
              <p className={css["text-error"]}>Data tidak ditemukan</p>
              <button onClick={handleBack}>Back</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default FunctionSearchNews;
