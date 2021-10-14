import React from "react";
import css from "./navbar.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ variant, list }) => {
  return (
    <div className={css[variant]}>
      {list?.map((item, index) => {
        return (
          <Link key={index} to={item?.url} className={css["link-" + variant]}>
            {item?.value}
          </Link>
        );
      })}
    </div>
  );
};

Navbar.propTypes = {
  list: PropTypes.any,
  variant: PropTypes.oneOfType(["primary", "secondary", "tertiary"]),
};

Navbar.defaultProps = {
  list: [],
};

export default Navbar;
