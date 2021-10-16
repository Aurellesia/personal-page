import React from "react";
import css from "./portfolio.module.css";
import Text from "components/Text";
import Portfolio1 from "images/Por1.png";
import Portfolio2 from "images/Por2.png";
import Portfolio3 from "images/Por3.jpg";
import Portfolio4 from "images/Por4.jpg";
import Portfolio5 from "images/Por5.jpg";
import Portfolio6 from "images/Por6.jpg";

const Portfolio = () => {
  return (
    <div className={css["container"]} id="portfolio">
      <div className={css["title"]}>
        <Text
          size="large"
          value="My Latest Work"
          family="poppins"
          color="black"
        />
      </div>
      <div className={css["portfolio-container"]}>
        <img className={css["img-portfo"]} src={Portfolio1} alt="Portfolio1" />
        <img className={css["img-portfo"]} src={Portfolio2} alt="Portfolio2" />
        <img className={css["img-portfo"]} src={Portfolio3} alt="Portfolio3" />
        <img className={css["img-portfo"]} src={Portfolio4} alt="Portfolio4" />
        <img className={css["img-portfo"]} src={Portfolio5} alt="Portfolio5" />
        <img className={css["img-portfo"]} src={Portfolio6} alt="Portfolio6" />
      </div>
    </div>
  );
};

export default Portfolio;
