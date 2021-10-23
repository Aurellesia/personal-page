import styled from "styled-components";
import { Link } from "react-router-dom";

export const NewsContainer = styled.div`
  margin: 0 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 0.3rem;
`;
export const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  width: 300px;
  margin: 0 5px;
  border: 1px solid #fff;
  background-color: #fff;
  box-shadow: 5px 5px 10px #6b6c6d;
  margin: 1rem;
  width: 75%;
`;

export const NewsLink = styled(Link)`
  font-size: 10px;
  margin-top: 1rem;
  text-decoration: none;
  color: grey;
  width: fit-content;
  padding: 0.4rem;
  border: 1px solid lavender;
  border-radius: 5px;
  background-color: lavender;
`;

export const NewsImage = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;
export const NewsDesc = styled.div`
  font-size: 10px;
  margin-top: 1rem;
  text-decoration: none;
`;
export const NewsForm = styled.form`
  margin-left: 5rem;
  margin-top: 3rem;
`;

export const NewsInput = styled.input`
  font-size: 0.9rem;
  margin: 0.3rem;
  padding: 0.3rem;
`;
