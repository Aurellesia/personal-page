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
import Pict from "assets/me.png";

const ProjectContainer = styled.div`
  padding: 1rem 0 2rem 10rem;
`;

const ImageNavbar = styled.img`
  width: 50%;
`;
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProjectContainer>
        <ImageNavbar src={Pict} />
      </ProjectContainer>
    </>
  );
};

export default Navbar;
