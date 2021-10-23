import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const NavContainer = styled(Container)`
  position: fixed;
  top: 0;
  padding: 0 1rem;
  z-index: 1;
`;

export const ContentContainer = styled(Container)`
  text-align: center;
  margin: 3rem 0;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
  text-align: left;
  justify-content: center;
  margin: 2rem;
  padding: 0 10rem;
`;
export const Text = styled.nav`
  display: block;
`;

export const TitleText = styled(Text)`
  color: #000;
  font-size: 28px;
  margin-bottom: 2rem;
`;

export const ContentText = styled(Text)`
  font-size: 15px;
  color: ${Gray};
  margin: 0 5rem;
`;

export const Figure = styled.figure`
  text-align: center;
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 10px;
  display: inline-block;
  text-decoration: none;
  width: fit-content;
  margin-top: 2rem;

  :hover {
    cursor: pointer;
  }
`;

export const LinkButton = styled(Link)`
  font-size: 15px;
  text-align: center;
  padding: 20px 40px;
  text-decoration: none;
  transition: 0.3s;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  width: 100%;
  margin: 0 5px;
  box-shadow: 10px 10px 10px ${BluePolice};
`;

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  padding: 0 10rem;
`;

export const ImagePortfolio = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
`;

export const Input = styled.input`
  border-radius: 10px;
  font-size: 0.9rem;
  margin: 0.3rem;
  padding: 0.3rem;
  height: 30px;
`;

export const Textarea = styled.textarea`
  border-radius: 10px;
  font-size: 0.9rem;
  margin: 0.3rem;
  padding: 0.3rem;
`;

export const Footer = styled.footer`
  margin-top: 1.25rem;
  text-align: center;
  padding-top: 2rem;
`;

export const SocMed = styled.div`
  margin-bottom: 1.5rem;
`;
