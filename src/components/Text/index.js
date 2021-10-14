import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import css from "./text.module.css";

const Text = ({ id, size, color, family, value }) => {
  const defineClass = classNames(css["size-" + size], css[color], css[family]);

  return (
    <span id={id} className={defineClass}>
      {value}
    </span>
  );
};

Text.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOfType([
    "normal",
    "semi-large",
    "large",
    "extra-large",
    "ultra-large",
  ]),
  color: PropTypes.oneOfType(["black", "white", "dark-blue"]),
  family: PropTypes.oneOfType(["sans-serif", "poppins"]),
  value: PropTypes.string,
};

Text.defaultProps = {
  id: "",
  size: "medium",
  color: "black",
  family: "sans-serif",
  value: "",
};

export default Text;
