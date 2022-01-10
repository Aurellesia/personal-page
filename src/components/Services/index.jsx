import styled from "styled-components";
import {
  ContentContainer,
  Gray,
  BluePolice,
  CardContainer,
  Card,
  ContentText,
  TitleText,
  Text,
} from "components/personal-general-styling";

const CardList = [
  {
    title: "Digital Illustration",
    text: "I can create faceless human illustrations, illustrations for website assets, flat illustrations, icons and any other digital art according to your request.",
  },
  {
    title: "Frontend Development",
    text: "Let me done your website with interactive and responsive user interface using HTML, CSS, ...",
  },
  {
    title: "Backend Development",
    text: "I make sure your website work well with RESTFul API in PHP, Python, or Golang. Complete with MySQL or MongoDB. Choose what you like.",
  },
];

const CardBody = styled(Card)`
  border: 1px solid #fff;
  background-color: #fff;
`;

const CardTitle = styled(Text)`
  font-size: 24px;
  color: ${BluePolice};
  margin-bottom: 1rem;
`;
const CardText = styled(Text)`
  font-size: 15px;
  color: ${Gray};
`;

const CardLink = styled.a`
  color: ${BluePolice};
  bottom: 1rem;
  display: inline-block;
  font-size: 14px;
  margin-top: 1rem;
  text-decoration: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const Services = () => {
  return (
    <ContentContainer>
      <TitleText>Services</TitleText>
      <ContentText>
        This is my expertise and services I provide for my clients.
      </ContentText>
      <CardContainer>
        {CardList.map((item, index) => {
          return (
            <CardBody key={index}>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>
              <CardLink>Read more ... </CardLink>
            </CardBody>
          );
        })}
      </CardContainer>
    </ContentContainer>
  );
};

export default Services;
