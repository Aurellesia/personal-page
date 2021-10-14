import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";
import css from "./input.module.css";

const Input = ({ id, big, variant, placeholder, type }) => {
  if (big) {
    return (
      <textarea
        id={id}
        className={css[variant]}
        placeholder={placeholder}
      ></textarea>
    );
  }
  return (
    <input
      id={id}
      className={css[variant]}
      type={type}
      placeholder={placeholder}
    />
  );
};

Input.propType = {
  id: PropTypes.string,
  big: PropTypes.bool,
  variant: PropTypes.oneOfType(["primary", "secondary", "tertiary"]),
  placeholder: PropTypes.string,
  type: PropTypes.oneOfType(["text", "email", "password"]),
};

Input.defaultProps = {
  id: "",
  big: false,
  variant: "primary",
  placeholder: "",
  type: "text",
};

export default Input;
