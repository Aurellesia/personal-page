import Portfolio1 from "assets/Por1.png";
import Portfolio2 from "assets/Por2.png";
import Portfolio3 from "assets/Por3.jpg";
import Portfolio4 from "assets/Por4.jpg";
import Portfolio5 from "assets/Por5.jpg";
import Portfolio6 from "assets/Por6.jpg";
import {
  ContentContainer,
  PortfolioContainer,
  ImagePortfolio,
  TitleText,
} from "components/personal-general-styling";

const Portfolio = () => {
  return (
    <>
      <ContentContainer>
        <TitleText>My Latest Work</TitleText>
        <PortfolioContainer>
          <ImagePortfolio src={Portfolio1} />
          <ImagePortfolio src={Portfolio2} />
          <ImagePortfolio src={Portfolio3} />
          <ImagePortfolio src={Portfolio4} />
          <ImagePortfolio src={Portfolio5} />
          <ImagePortfolio src={Portfolio6} />
        </PortfolioContainer>
      </ContentContainer>
    </>
  );
};

export default Portfolio;
