import styled from "styled-components";
import Header from "../components/Header";

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <div className="home" id="home">
      <Header />
      <Title>Hello World</Title>
    </div>
  );
};

export default Home;
