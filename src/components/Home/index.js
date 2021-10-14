import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "../Button";
import Navbar from "../Navbar";
import Card from "../Card";
import Input from "../Input";
import css from "./home.module.css";

const LinkList = [
  {
    url: "/home",
    value: "Home",
  },
  {
    url: "/about",
    value: "About",
  },
];
const CardList = [
  {
    title: "Ini title card pertama",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Ini title card kedua",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Home = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar variant="tertiary" list={LinkList} />
        </Router>
      </div>
      <div className={css["button-container"]}>
        <Button variant="primary" value="Ini Button" />
        <Button variant="secondary" value="Ini Button" />
        <Button variant="tertiary" value="Ini Button" />
      </div>

      <div className={css["card-container"]}>
        {CardList.map((item) => {
          return <Card variant="secondary" value={item} />;
        })}
      </div>
      <div className={css["card-container"]}>
        {CardList.map((item) => {
          return <Card variant="tertiary" value={item} />;
        })}
      </div>
      <div className={css["input-container"]}>
        <Input type="text" variant="primary" placeholder="Input primary" />
        <Input type="text" variant="secondary" placeholder="Input secondary" />
        <Input type="text" variant="tertiary" placeholder="Input tertiary" />
      </div>
    </>
  );
};

export default Home;
