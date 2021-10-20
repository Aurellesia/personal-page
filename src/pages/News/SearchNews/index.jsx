import React, { Component } from "react";
import axios from "axios";
import Card from "components/Card";
import { BrowserRouter as Router, Link } from "react-router-dom";
import css from "./searchnews.module.css";

export default class SearchNews extends Component {
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
        `https://newsapi.org/v2/everything?q=${this.state.keyword}&language=en&apiKey=ace39ffa62e34c919e72c14b2fa3083f`
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
      <div>
        <form onSubmit={this.handleSubmit} className={css["form"]}>
          <input value={this.state.keyword} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
        <Router>
          <div className={css["news-container"]}>
            {this.state.news.map((item, index) => {
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
        </Router>
      </div>
    );
  }
}
