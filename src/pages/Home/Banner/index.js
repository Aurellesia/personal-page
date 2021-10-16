import React from "react";
import css from "./banner.module.css";
import Text from "components/Text";
import Button from "components/Button";
import Pict from "images/Pict.png";

const Banner = () => {
  return (
    <div className={css["banner-container"]}>
      <div className={css["caption-banner"]}>
        <Text
          size="semi-large"
          value="Hi There !"
          family="poppins"
          color="white"
        />
        <Text
          size="ultra-large"
          value="Aurellesia Warsito"
          family="poppins"
          color="white"
        />
        <Text
          size="ultra-large"
          value="A Digital Illustrator"
          family="poppins"
          color="white"
        />
        <Text
          size="normal"
          value="Also a web developer who focused on fullstack development. Intrigued by technology, art, and fabulous food. Seeking to be inspired, to work hard for anything worthwhile, and have been fortunate to do what I love."
          family="poppins"
          color="white"
        />
        <Button variant="secondary" value="View portfolio" />
      </div>
      <figure className={css["figure-banner"]}>
        <img className={css["img-banner"]} src={Pict} alt="Foto saya" />
      </figure>
    </div>
  );
};

export default Banner;
