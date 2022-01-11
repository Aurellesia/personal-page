import styled from "styled-components";
import Pict from "assets/me.png";
import { Container, Text, Figure } from "components/personal-general-styling";
import { useNavigate } from "react-router-dom";
import { ButtonProject } from "components/personal-general-styling";

const CaptionBanner = styled.div`
  margin-left: -4rem;
  width: 50%;
  flex-direction: column;
`;

const TextBannerGreet = styled(Text)`
  font-size: 20px;
`;

const TextBannerTitle = styled(Text)`
  font-size: 80px;
`;

const TextBannerIntro = styled(Text)`
  font-size: 20px;
  background-color: #fff;
  padding: 0 0.4rem;
`;

const FigureBanner = styled(Figure)`
  width: 50%;
`;

const ImageBanner = styled.img`
  width: 120%;
`;

const ButtonContainer = styled.div`
  margin-left: 10rem;
`;

const ButtonProjectBanner = styled(ButtonProject)`
  width: 0.5rem;
`;

const Banner = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <FigureBanner>
        <ImageBanner src={Pict} />
      </FigureBanner>
      <CaptionBanner>
        <TextBannerGreet>Hi,</TextBannerGreet>
        <TextBannerTitle>I'm Irell</TextBannerTitle>
        <br />
        <TextBannerIntro>
          I'm a web developer from Malang, Indonesia.
        </TextBannerIntro>
        <br />
        <TextBannerIntro>
          I learn programming since 2017 by starting from backend development.
          Right now, I'm focusing on fullstack development using MERN
        </TextBannerIntro>
        <br />
        <TextBannerIntro>
          You can usually find me on{" "}
          <a href="https://www.linkedin.com/in/aurellesiawarsito/">Linkedin</a>{" "}
          or <a href="https://www.facebook.com/aurellesia.warsi/">Facebook</a>{" "}
          as well.
        </TextBannerIntro>
        <ButtonContainer>
          <ButtonProjectBanner onClick={() => navigate("/projects")}>
            PROJECTS
          </ButtonProjectBanner>
        </ButtonContainer>
        <ButtonContainer>
          <ButtonProjectBanner onClick={() => navigate("/projects")}>
            ARTICLES
          </ButtonProjectBanner>
        </ButtonContainer>
      </CaptionBanner>
    </Container>
  );
};

export default Banner;
