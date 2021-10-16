import React from "react";
import css from "./footer.module.css";
import Text from "components/Text";

import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className={css["social-media"]}>
        <AiFillInstagram size={28} className={css["icons"]} />
        <AiFillLinkedin size={28} className={css["icons"]} />
        <AiFillTwitterSquare size={28} className={css["icons"]} />
      </div>
      <div className={css["copyright"]}>
        <Text
          size="normal"
          color="black"
          family="poppins"
          value="Copyright &copy; 2021 Aurellesia. All rights reserved."
        />
      </div>
    </footer>
  );
};

export default Footer;
