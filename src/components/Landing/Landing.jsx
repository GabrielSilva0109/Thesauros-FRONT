import React, { useContext } from "react"
import Navbar from "../Header/Navbar"
import styled from "styled-components"
import Info from "./Info"
import Intelligence from "./Intelligence"

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
  display: flex;
  flex-direction: column;
  gap: 80px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
`

const Title = styled.h1`
    font-size: 3.3rem;
    font-weight: bold;
    cursor: pointer;
    margin: 10px;

    @media(max-width: 768px) {
    font-size: 2.5rem;
    }
`

const Text = styled.p`
    font-size: 0.9rem;
    color: gray;
    font-weight: bold;
    cursor: pointer;

    & span{
        background: rgb(253,29,29);
        background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);
        -webkit-background-clip: text;
        color: transparent;
    }

    @media(max-width: 768px) {
      font-size: 0.85rem;
    }
`

const SubText = styled.p`
  font-size: 1rem;
  color: gray;
  font-weight: 400;
  cursor: pointer;

   @media(max-width: 768px) {
      text-align: justify;
      padding: 0 50px;
    }
`

const Btns = styled.div`
    display: flex;
    gap: 20px;
    padding: 40px 0px;
`

const BtnBuy = styled.button`
  background: linear-gradient(90deg, rgb(227 227 227) 0%, rgb(147 147 147) 50%, rgb(55 55 55) 100%);
  padding: 12px 26px;
  text-decoration: none;
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona sombra ao fundo */

  &:hover {
    background: linear-gradient(90deg, rgba(150, 150, 150, 1) 0%, rgba(192, 192, 192, 1) 50%, rgba(0, 0, 0, 1) 100%);
  }
`

const BtnGames = styled.button`
 background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);
  padding: 12px 26px;
  text-decoration: none;
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
  border: none;

  &:hover {
    background: darkred;
  }
`

const Landing = () => {

  return (
    <Container >
      <Navbar />
      <Content>
        <Text>DISCOVERY THE NEW ERA FOR GAMES | <span> EXPLORE </span></Text>
        <Title>Level up your <br></br> gaming Expericience</Title>
        <SubText>Explore the decentralized gaming platform where fun and innovation converge,
           with unique opportunities to earn tokens</SubText>
        <Btns>       
          <BtnGames>
            Play
          </BtnGames>
          <BtnBuy>
            Buy
          </BtnBuy>
        </Btns>
      </Content>

      <Info />

      <Intelligence/>
    </Container>
  )
}

export default Landing