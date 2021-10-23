import styled from "styled-components";
import { RiMapPin2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  TitleText,
  ContentText,
  Input,
  Textarea,
  ContentContainer,
  BluePolice,
  VeryPaleOrange,
  Button,
} from "components/personal-general-styling";

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  text-align: left;
`;

const PartContact = styled.div`
  margin: 0 1rem;
  width: 30rem;
`;

const ContactLeft = styled.div`
  margin: 1rem 0;
`;

const InputContact = styled(Input)`
  width: 75%;
  border: 1px solid ${BluePolice};
`;

const TextareaContact = styled(Textarea)`
  width: 75%;
  border: 1px solid ${BluePolice};
`;

const ButtonContact = styled(Button)`
  background-color: ${BluePolice};
  color: #fff;
  border: 2px solid #fff;

  :hover {
    background-color: ${VeryPaleOrange};
    color: #000;
  }
`;
const Contact = () => {
  return (
    <ContentContainer>
      <TitleText>Contact Me</TitleText>
      <ContactContainer>
        <PartContact>
          <ContactLeft>
            <ContentText>
              <RiMapPin2Fill style={{ marginRight: "1rem" }} />
              Jl. Pisang Candi, Karangkates, Malang
            </ContentText>
          </ContactLeft>
          <ContactLeft>
            <ContentText>
              <MdEmail style={{ marginRight: "1rem" }} />
              aurellesia19@gmail.com
            </ContentText>
          </ContactLeft>
          <ContactLeft>
            <ContentText>
              <BsFillTelephoneFill style={{ marginRight: "1rem" }} />
              +6281-336-967-108
            </ContentText>
          </ContactLeft>
        </PartContact>

        <PartContact>
          <InputContact type="text" placeholder="Name" />
          <InputContact type="text" placeholder="Email" />
          <TextareaContact rows="5" placeholder="Message" />
          <ButtonContact>Send Message</ButtonContact>
        </PartContact>
      </ContactContainer>
    </ContentContainer>
  );
};

export default Contact;
