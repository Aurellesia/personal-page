import Web2 from "assets/vegsupplies.png";
import styled from "styled-components";

import { PortfolioText } from "components/personal-general-styling";
import { ButtonProject } from "components/personal-general-styling";

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImagePortfolio = styled.img`
  width: 30%;
  height: auto;
  margin: 2rem 0 1rem 0;
  box-shadow: 1px 1px 10px 2px #d4d4d4;
  transition: 0.3s;
  :hover {
    transform: scale(1.3);
    transition: 0.5s;
  }
`;

const TitleProject = styled.div`
  margin: 2rem 0 1rem 0;
  background-color: none;
  color: #000;
  font-size: 2.5rem;
`;
const DescContainer = styled.div`
  padding: 1rem 12rem;
  text-align: justify;
`;

const GitContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 4rem 0;
`;

const ProjectTwo = () => {
  return (
    <>
      <ProjectContainer>
        <TitleProject>Vegsupplies</TitleProject>
        <PortfolioText>Simple online shop user interface.</PortfolioText>
        <ImagePortfolio src={Web2} />
      </ProjectContainer>
      <DescContainer>
        <TitleProject>Description</TitleProject>
        <PortfolioText>
          Vegsupplies is a simple user interface built with SASS and EJS
          template design. This user interface consists of simple shop profile
          and it's shop page.
        </PortfolioText>
        <TitleProject>Technology</TitleProject>
        <PortfolioText>ExpressJS, HTML, CSS, SASS, EJS</PortfolioText>
        <GitContainer>
          <ButtonProject>
            <a href="https://github.com/Aurellesia/mern-expressjs">
              View Github
            </a>
          </ButtonProject>
        </GitContainer>
      </DescContainer>
    </>
  );
};

export default ProjectTwo;
