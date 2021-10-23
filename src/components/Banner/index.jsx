import styled from "styled-components";
import Pict from "assets/Pict.png";
import {
  VeryPaleOrange,
  BluePolice,
  GreyCadet,
  Container,
  Text,
  Figure,
  Button,
} from "components/personal-general-styling";

const BannerContainer = styled(Container)`
  background-color: ${GreyCadet};
  padding-top: 63px;
`;

const CaptionBanner = styled.div`
  margin-left: 8rem;
  width: 50%;
  flex-direction: column;
`;

const TextBanner = styled(Text)`
  color: white;
`;
const TextBannerGreet = styled(TextBanner)`
  font-size: 20px;
`;

const TextBannerTitle = styled(TextBanner)`
  font-size: 55px;
`;

const TextBannerIntro = styled(TextBanner)`
  font-size: 14px;
`;

const FigureBanner = styled(Figure)`
  width: 50%;
`;

const ImageBanner = styled.img`
  width: 100%;
`;

const ButtonBanner = styled(Button)`
  background-color: ${BluePolice};
  color: #fff;
  border: 2px solid #fff;

  :hover {
    background-color: ${VeryPaleOrange};
    color: #000;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <CaptionBanner>
        <TextBannerGreet>Hi There</TextBannerGreet>
        <TextBannerTitle>Aurellesia Warsito</TextBannerTitle>
        <TextBannerTitle>A Digital Illustrator</TextBannerTitle>
        <TextBannerIntro>
          Also a web developer who focused on fullstack development. Intrigued
          by technology, art, and fabulous food. Seeking to be inspired, to work
          hard for anything worthwhile, and have been fortunate to do what I
          love.
        </TextBannerIntro>
        <ButtonBanner>View Portfolio</ButtonBanner>
      </CaptionBanner>

      <FigureBanner>
        <ImageBanner src={Pict} />
      </FigureBanner>
    </BannerContainer>
  );
};

export default Banner;
