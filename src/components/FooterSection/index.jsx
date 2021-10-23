import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import styled from "styled-components";
import {
  GreyCadet,
  Footer,
  SocMed,
  AuroMetalSaurus,
} from "components/personal-general-styling";

const FooterContainer = styled(Footer)`
  background-color: ${GreyCadet};
`;

const Copyright = styled.div`
  background-color: ${AuroMetalSaurus};
  padding: 1.5rem 1rem;
`;

const FooterSection = () => {
  return (
    <FooterContainer>
      <SocMed>
        <AiFillInstagram size={28} style={{ margin: "0 1.5rem" }} />
        <AiFillLinkedin size={28} style={{ margin: "0 1.5rem" }} />
        <AiFillTwitterSquare size={28} style={{ margin: "0 1.5rem" }} />
      </SocMed>
      <Copyright>
        Copyright &copy; 2021 Aurellesia. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default FooterSection;
