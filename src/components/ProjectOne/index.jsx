import Web1 from "assets/Project1.png";
import { PortfolioText } from "components/personal-general-styling";
import { ButtonProject } from "components/personal-general-styling";
import { WorkContainer } from "components/personal-general-styling";
import { TitleProject } from "components/personal-general-styling";
import { ImagePortfolio } from "components/personal-general-styling";
import { DescContainer } from "components/personal-general-styling";
import { GitContainer } from "components/personal-general-styling";

const ProjectOne = () => {
  return (
    <>
      <WorkContainer>
        <TitleProject>Geht</TitleProject>
        <PortfolioText>
          A web based social network application built with MERN.
        </PortfolioText>
        <PortfolioText>
          The features are inspired by Facebook and Instagram.
        </PortfolioText>
        <ImagePortfolio src={Web1} />
      </WorkContainer>
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
