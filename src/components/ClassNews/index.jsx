import React, { Component } from "react";
import axios from "axios";

import {
  NewsContainer,
  NewsCard,
  NewsLink,
  NewsImage,
  NewsDesc,
} from "components/news-general-styling";
import SearchClassNews from "./SearchClassNews";

class ClassNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&category=general&apiKey=6afcaa913f334670b242b55ebc0a1a10"
      )
      .then((response) =>
        this.setState({
          news: response.data.articles,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <SearchClassNews />
        <NewsContainer>
          {this.state.news.map((item, index) => {
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
      </>
    );
  }
}

export default ClassNews;
