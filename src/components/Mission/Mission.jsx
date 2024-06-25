import React from "react";
import Navbar from "../Header/Navbar";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

// Estilos usando styled-components
const Container = styled.div`
  background-color: ${(props) => (props.theme.mode === "dark" ? "black" : "white")};
  color: ${(props) => (props.theme.mode === "dark" ? "white" : "black")};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`;

const Main = styled.div`
  width: 80%;
  max-width: 1200px;
`;

const Top = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;

  span {
    background: rgb(253, 29, 29);
    background: linear-gradient(
      90deg,
      rgba(253, 29, 29, 1) 0%,
      rgba(255, 0, 0, 1) 46%,
      rgba(252, 176, 69, 1) 100%
    );
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const Boxes = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Box = styled.div`
  width: 200px;
  padding: 10px;
  background-color: lightgray;
  border-radius: 8px;
`;

const SlideContent = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  border-radius: 8px;
`

const Mission = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <Main>
          <Top>
            <Title>
              Promote access to decentralized games and lotteries
              <br />
              <span>Transparency </span> - <span>Security </span> - <span>Winnings </span>
            </Title>
          </Top>

          
        </Main>
      </Content>

      
    </Container>
  )
}

export default Mission
