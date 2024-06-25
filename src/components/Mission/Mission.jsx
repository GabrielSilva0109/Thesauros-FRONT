import React, { useContext } from "react"
import Navbar from "../Header/Navbar"
import styled from "styled-components"
import Carrosel from "./Carrosel"

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    gap: 50px;
`

const Main = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    width: 100%;
`

const Top = styled.div`
    width: 60%;

    @media(max-width: 768px){
      width: 90%;
    }
`

const Title = styled.h1`
    margin: 0px;
    font-size: 2rem;

    & span {
      background: rgb(253,29,29);
      background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);
      -webkit-background-clip: text;
      color: transparent;
  }

  @media(max-width: 768px){
      font-size: 1.2rem;
  }
`

const SubTitle = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    width: 80%;
`

const Text = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: gray;
    text-align: start;
    padding: 0 15px 0 0;
`

const Separator = styled.div`
    width: 80%;
    border: 1px solid gray;
`

const Mission
 = () => {

  return (
    <Container >
      <Navbar />
      <Content>
        <Top>
          <Title>
            Promote access to decentralized games and lotteries<br></br>
            <span>Transparency </span> - <span>Security </span> - <span>Winnings </span> 
          </Title>
        </Top>
       

        <SubTitle>
          <Title>
          <span>HOW TO DO THIS?</span>
          </Title>
        </SubTitle>

        <Main>
          <Carrosel />
        </Main>
      </Content>
    </Container>
  
  )
}

export default Mission
