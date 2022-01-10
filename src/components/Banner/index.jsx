import styled from "styled-components";
import Pict from "assets/Pict.png";
import { Container, Text, Figure } from "components/personal-general-styling";
import { useNavigate } from "react-router-dom";
import { ButtonProject } from "components/personal-general-styling";

const CaptionBanner = styled.div`
  margin-left: 8rem;
  width: 50%;
  flex-direction: column;
`;

const TextBannerGreet = styled(Text)`
  font-size: 20px;
`;

const TextBannerTitle = styled(Text)`
  font-size: 55px;
`;

const TextBannerIntro = styled(Text)`
  font-size: 20px;
`;

const FigureBanner = styled(Figure)`
  width: 50%;
`;

const ImageBanner = styled.img`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
`;

const Banner = () => {
  const navigate = useNavigate();
  return (
    <Container>
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
          <ButtonProject onClick={() => navigate("/projects")}>
            PROJECTS
          </ButtonProject>
        </ButtonContainer>
      </CaptionBanner>

      <FigureBanner>
        <ImageBanner src={Pict} />
      </FigureBanner>
    </Container>
  );
};

export default Banner;
