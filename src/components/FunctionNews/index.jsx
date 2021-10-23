import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  NewsContainer,
  NewsCard,
  NewsLink,
  NewsImage,
  NewsDesc,
} from "components/news-general-styling";
import SearchFunctionNews from "./SearchFunctionNews";

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
  }, [renderGetAll]);

  return (
    <>
      <SearchFunctionNews setRenderGetAll={setRenderGetAll} />
      {renderGetAll && (
        <NewsContainer>
          {news.map((item, index) => {
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
          })}
        </NewsContainer>
      )}
    </>
  );
}

export default FunctionNews;
