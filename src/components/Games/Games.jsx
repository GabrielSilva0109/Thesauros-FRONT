import React from "react"
import Navbar from "../Header/Navbar"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  gap: 10px;
  margin-top: 50px;
`

const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 150px;

     @media(max-width: 800px){
      padding: 0 20px;
    }
 `

const Left = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 20px;
  // border-top-left-radius: 15px; 
  // border-bottom-left-radius: 15px;
   background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);

  @media(max-width: 768px){
    // display: none;
    
  }
`

const Right = styled.div`
  width: 40%;
  height: 100%;
  border-top-right-radius: 15px; 
  border-bottom-right-radius: 15px;
  align-items: start;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px){
    width: 80%;
    align-items: center;
  }
`

const Title = styled.h1`
    text-align: start;
    font-size: 2.8rem;
`

const SubTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(255, 0, 0, 1) 40%, rgba(252, 176, 69, 1) 80%);
  -webkit-background-clip: text;
  background-clip: text;
`

const Text = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    color: ${(props) => (props.theme.mode === 'dark' ? '#e3e3e3' : '#252525')};
    text-align: justify;
    padding: 0 15px 0 0;
    
    span {
        cursor: pointer;
        transition: 1s;
        color: transparent;
        background: linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(255, 0, 0, 1) 40%, rgba(252, 176, 69, 1) 80%);
        -webkit-background-clip: text;
    }
    
    &:hover span {
        transform: scale(1.5);
    }
`

const SubText = styled.p`
    font-size: 1.1rem;
    font-weight: bold;
     color: ${(props) => (props.theme.mode === 'dark' ? '#e3e3e3' : '#252525')};
    text-align: justify;
    padding: 0 15px 0 0;

`

const Games = () => {
  return (
    <Container>
      <Navbar />

      <Top>
        <Title>We develop the best games!!</Title>
        <Text>
           We develop games that challenge <span>Technical Skills</span>, <span>Strategic Thinking</span>, and, of course, 
           <span> Luck</span>, while our AI works continuously to promote fair gains and balance the financial 
           ecosystem. With an innovative and decentralized approach, we aim to provide a unique 
           experience where every player can explore their full potential, always with transparency and security.
           </Text>
      </Top>
      
      <Content>
        <Left>
        
        </Left>

        <Right>
          <SubTitle>Roulette</SubTitle>
           <SubText>
            In this game, the player chooses a color to bet on. If successful, they 
            recover their investment and can multiply it by 10x by hitting a specific
             color. This unique color offers a special multiplier, providing an exciting
              opportunity to significantly increase winnings.
           </SubText>
        </Right>
      </Content>

      <Content>
        <Left>
        
        </Left>

        <Right>
          <SubTitle>Minefield</SubTitle>
           <SubText>
           In Minefield, the player faces a grid of blocks,
            some containing mines. The goal is to avoid the mines and explore
             the safe blocks. Each safe block crossed without hitting a mine
              contributes to increasing earnings. The game becomes progressively
               challenging, offering additional rewards as the player advances
                without incidents.
           </SubText>
        </Right>
      </Content>
      
    </Container>
  )
}

export default Games
