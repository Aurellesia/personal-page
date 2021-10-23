import About from "components/About";
import Banner from "components/Banner";
import Navbar from "components/Navbar";
import Portfolio from "components/Portfolio";
import Services from "components/Services";
import Contact from "components/Contact";
import FooterSection from "components/FooterSection";

const PersonalWeb = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <FooterSection />
    </>
  );
};

export default PersonalWeb;
