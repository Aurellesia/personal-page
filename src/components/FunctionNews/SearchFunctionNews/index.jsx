import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  NewsContainer,
  NewsCard,
  NewsLink,
  NewsImage,
  NewsDesc,
  NewsForm,
  NewsInput,
} from "components/news-general-styling";

function SearchFunctionNews({ setRenderGetAll }) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <NewsForm onSubmit={handleSubmit}>
        <NewsInput value={search} onChange={handleChange} />
        <NewsInput type="submit" value="Search" />
      </NewsForm>
      <NewsContainer>
        {renderResult &&
          (news.length !== 0 ? (
            news.map((item, index) => {
              return (
                <NewsCard key={index}>
                  <NewsImage src={item.urlToImage} alt={item.title} />
                  {item.title}
                  <NewsDesc>{item.description}</NewsDesc>
                  <NewsLink to={{ pathname: item.url }} target="_blank">
                    Read more ..
                  </NewsLink>
                </NewsCard>
              );
            })
          ) : (
            <div style={{ marginLeft: "2rem" }}>
              <p style={{ color: "grey" }}>Data tidak ditemukan</p>
              <button onClick={handleBack}>Back</button>
            </div>
          ))}
      </NewsContainer>
    </>
  );
}

export default SearchFunctionNews;
