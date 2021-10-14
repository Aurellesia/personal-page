import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";
import css from "./button.module.css";

const Button = ({ id, variant, value }) => {
  return (
    <button id={id} className={css["btn-" + variant]}>
      {value}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.oneOfType(["primary", "secondary", "tertiary"]),
  value: PropTypes.string,
};

Button.defaultProps = {
  id: "",
  variant: "primary",
  value: "",
};

export default Button;
