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
    e.preventDefault();
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${this.state.keyword}&language=en&apiKey=ace39ffa62e34c919e72c14b2fa3083f`
      )
      .then((response) => {
        this.setState({
          news: response.data.articles,
        });
      })
      .catch(() => alert(`Data dengan tidak dapat ditemukan.`));
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
            {this.state.news.map((item) => {
              return (
                <Card variant="news" key={item.id}>
                  <img
                    src={item.urlToImage}
                    className={css["news-img"]}
                    alt="ini gambar.."
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
