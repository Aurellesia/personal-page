import styled from "styled-components";
export const GreyCadet = "#90a2a8";
export const BluePolice = "#3e515c";
export const VeryPaleOrange = "#fadcc0";
export const DimGray = "#6c6d6c";
export const Gray = "#808080";
export const AuroMetalSaurus = "#6b797e";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const WorkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentContainer = styled(Container)`
  text-align: left;
  margin: 3rem 0;
  flex-direction: column;
`;

export const Text = styled.nav`
  display: block;
`;

export const Figure = styled.figure`
  text-align: center;
`;

export const ButtonProject = styled.div`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  background-color: ${GreyCadet};
  color: #000;
  font-size: 1.2rem;
  transition: 0.3s;
  :hover {
    background-color: #fff;
    color: ${GreyCadet};
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.09);
  }
`;

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  padding: 0 10rem;
  align-items: center;
  justify-content: center;
`;

export const PortfolioText = styled(Text)`
  font-size: 20px;
`;
export const PortfolioTitle = styled(Text)`
  font-size: 40px;
  text-align: left;
`;

export const WebPortfolio = styled.img`
  width: 95%;
  height: auto;
  margin: 0;
  box-shadow: 1px 1px 10px 2px #d4d4d4;
  transition: 0.3s;
  :hover {
    transform: scale(1.09);
    transition: 0.5s;
  }
`;

export const TitleProjectsPage = styled.div`
  margin-top: 2rem;
  width: 1rem;
  background-color: none;
  color: #000;
  font-size: 2rem;

  :hover {
    background-color: ${BluePolice};
    color: ${GreyCadet};
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const TitleProject = styled.div`
  margin: 2rem 0 1rem 0;
  background-color: none;
  color: #000;
  font-size: 2.5rem;
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

export const DescContainer = styled.div`
  padding: 1rem 12rem;
  text-align: justify;
`;

export const GitContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 4rem 0;
`;
