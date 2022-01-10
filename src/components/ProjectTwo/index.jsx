import Web2 from "assets/vegsupplies.png";
import { PortfolioText } from "components/personal-general-styling";
import { ButtonProject } from "components/personal-general-styling";
import { WorkContainer } from "components/personal-general-styling";
import { TitleProject } from "components/personal-general-styling";
import { DescContainer } from "components/personal-general-styling";
import { ImagePortfolio } from "components/personal-general-styling";
import { GitContainer } from "components/personal-general-styling";

const ProjectTwo = () => {
  return (
    <>
      <WorkContainer>
        <TitleProject>Vegsupplies</TitleProject>
        <PortfolioText>Simple online shop user interface.</PortfolioText>
        <ImagePortfolio src={Web2} />
      </WorkContainer>
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
