import React, { useContext } from "react"
import Navbar from "../Header/Navbar"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
`

const Title = styled.h1`

`

const Text = styled.p`

`

const SubText = styled.p`

`

const Btns = styled.div`

`

const BtnBuy = styled.button`

`

const BtnGames = styled.button`

`

const Landing = () => {

  return (
    <Container >
      <Navbar />
      <Text>Discovery the new era for Games  |  <span>Explore </span></Text>
      <Title>Level up your game Expericience</Title>
      <SubText></SubText>
      <Btns>       
        <BtnGames>
          Play
        </BtnGames>
        <BtnBuy>
          Buy
        </BtnBuy>
      </Btns>
    </Container>
  )
}

export default Landing
