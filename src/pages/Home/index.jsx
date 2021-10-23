import styled from "styled-components";
import { FaRegNewspaper } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { ContentText } from "components/personal-general-styling";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 6rem 0 3rem;
`;

const HomeBox = styled.div`
  background-color: #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2px solid #858585;
  margin: 0 6rem;
`;
const TitleBoxTop = styled.div`
  background-color: #dcdcdc;
  height: 3rem;
  border: 2px solid #858585;
  margin: 0 6rem;
  border-radius: 10px 10px 0 0;
`;

const TitleBoxBottom = styled.div`
  background-color: #dcdcdc;
  height: 3rem;
  border: 2px solid #858585;
  margin: 0 6rem;
  border-radius: 0 0 10px 10px;
`;
const HomeCircle = styled.div`
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  margin: 4rem 2rem;
  text-align: center;
  background-color: ${(props) => props.color};
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeLink to={"/classNews"}>
        <HomeCircle color="#FFFACD">
          <FaRegNewspaper
            size={100}
            style={{ padding: "4rem 0", opacity: "0.5" }}
          />
          <ContentText style={{ margin: "2rem 0" }}>News API Class</ContentText>
        </HomeCircle>
      </HomeLink>

      <HomeLink to={"/personalWebsite"}>
        <HomeCircle color="#FFF8DC">
          <BsPerson size={100} style={{ padding: "4rem 0", opacity: "0.5" }} />
          <ContentText style={{ margin: "2rem 0" }}>
            Personal Website
          </ContentText>
        </HomeCircle>
      </HomeLink>

      <HomeLink to={"/functionNews"}>
        <HomeCircle color="#FFEFDB">
          <FaRegNewspaper
            size={100}
            style={{ padding: "4rem 0", opacity: "0.5" }}
          />
          <ContentText style={{ margin: "2rem 0" }}>
            News API Function
          </ContentText>
        </HomeCircle>
      </HomeLink>
    </HomeContainer>
  );
};

export default Home;
