import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  NewsContainer,
  NewsCard,
  NewsLink,
  NewsImage,
  NewsDesc,
  NewsForm,
  NewsInput,
} from "components/news-general-styling";

class SearchClassNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      news: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleSubmit = (e) => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${this.state.keyword}&language=en&apiKey=6afcaa913f334670b242b55ebc0a1a10`
      )
      .then((response) => {
        this.setState({
          news: response.data.articles,
        });
        this.state.news.length === 0
          ? alert(`Data dengan keyword ${this.state.keyword} tidak ada.`)
          : console.log(this.state.news);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    e.preventDefault();
  };

  render() {
    return (
      <>
        <NewsForm onSubmit={this.handleSubmit}>
          <NewsInput value={this.state.keyword} onChange={this.handleChange} />
          <NewsInput type="submit" value="Search" />
        </NewsForm>
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

export default SearchClassNews;
