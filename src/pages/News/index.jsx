import React, { Component } from "react";
import axios from "axios";
import Card from "components/Card";
import { BrowserRouter as Router, Link } from "react-router-dom";
import css from "./news.module.css";
import SearchNews from "./SearchNews";
// import Navbar from "components/Navbar";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&category=general&apiKey=ace39ffa62e34c919e72c14b2fa3083f"
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
      <Router>
        <SearchNews />
        <div className={css["news-container"]}>
          {this.state.news.map((item) => {
            return (
              <Card variant="news" key={item.id}>
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
    );
  }
}
