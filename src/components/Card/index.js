import React from "react";
import PropTypes from "prop-types";
import css from "./card.module.css";

const Card = ({ variant, value, children }) => {
  if (children) {
    return <div className={css[variant]}>{children}</div>;
  }
  return (
    <div className={css[variant]}>
      <h4 className={css["card-title-" + variant]}>{value?.title}</h4>
      <div className={css["card-content-" + variant]}>
        <p className={css["card-text-" + variant]}>{value?.text}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  variant: PropTypes.oneOfType(["primary", "secondary", "tertiary"]),
  value: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Card;
