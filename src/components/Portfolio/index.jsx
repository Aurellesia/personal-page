import Web1 from "assets/Project1.png";
import Web2 from "assets/vegsupplies.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PortfolioText } from "components/personal-general-styling";
import {
  ContentContainer,
  PortfolioContainer,
  WebPortfolio,
} from "components/personal-general-styling";
import { PortfolioTitle } from "components/personal-general-styling";
import { TitleProjectsPage } from "components/personal-general-styling";
import { ButtonProject } from "components/personal-general-styling";

const ProjectContainer = styled.div`
  padding: 1rem 0 0 10rem;
`;

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProjectContainer>
        <TitleProjectsPage>Projects</TitleProjectsPage>
        <PortfolioText>
          These are some of the projects I have worked on. <br />
          Some of them don't have online links but you can see the source code
          on the github link I attached.
        </PortfolioText>
      </ProjectContainer>

      <ContentContainer>
        <PortfolioContainer>
          <WebPortfolio src={Web1} />
          <div>
            <PortfolioTitle>Geht</PortfolioTitle>
            <br />
            <PortfolioText>
              A web based social network application built with MERN. The
              features are inspired by Facebook and Instagram.
            </PortfolioText>
            <ButtonProject onClick={() => navigate("/project-one")}>
              View Details
            </ButtonProject>
          </div>
        </PortfolioContainer>
        <br />
        <PortfolioContainer>
          <WebPortfolio src={Web2} />
          <div>
            <PortfolioTitle>Vegsupplies</PortfolioTitle>
            <br />
            <PortfolioText>
              Simple online shop user interface built with ExpressJS, SASS and
              EJS template engines.
            </PortfolioText>
            <ButtonProject onClick={() => navigate("/project-two")}>
              View Details
            </ButtonProject>
          </div>
        </PortfolioContainer>
      </ContentContainer>
    </>
  );
};

export default Portfolio;
