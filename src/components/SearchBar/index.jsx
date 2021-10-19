import React, { useState } from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <input
      type="text"
      placeholder={"Search topics..."}
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
