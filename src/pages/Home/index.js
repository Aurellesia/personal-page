import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services/services";
import Portfolio from "./Portfolio/portfolio";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";

const LinkList = [
  {
    url: "/home",
    value: "Home",
  },
  {
    url: "/about",
    value: "About",
  },
  {
    url: "/services",
    value: "Services",
  },
  {
    url: "/portfolio",
    value: "Portfolio",
  },
  {
    url: "/contact",
    value: "Contact",
  },
];

const Home = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar variant="secondary" list={LinkList} />
          <Banner />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default Home;
