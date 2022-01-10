import Web1 from "assets/Project1.png";
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

const ProjectOne = () => {
  return (
    <>
      <ProjectContainer>
        <TitleProject>Geht</TitleProject>
        <PortfolioText>
          A web based social network application built with MERN.
        </PortfolioText>
        <PortfolioText>
          The features are inspired by Facebook and Instagram.
        </PortfolioText>
        <ImagePortfolio src={Web1} />
      </ProjectContainer>
      <DescContainer>
        <TitleProject>Description</TitleProject>
        <PortfolioText>
          Geht is a web based social network application that allows users to
          share information or ideas in the form of text or images. The name of
          the application is taken from German language means “go”, which means
          that no need to go anywhere to connect with other people. I worked on
          this application for about 1 month starting from the design, created
          API, and consumed it in the front end development.
        </PortfolioText>
        <TitleProject>Technology</TitleProject>
        <PortfolioText>
          NodeJS, PassportJS, ExpressJS, RestAPI, MongoDB, HTML, CSS, SASS,
          Redux, Axios
        </PortfolioText>
        <GitContainer>
          <ButtonProject>
            <a href="https://github.com/Aurellesia/social-network-mern">
              View Github
            </a>
          </ButtonProject>
        </GitContainer>
      </DescContainer>
    </>
  );
};

export default ProjectOne;
