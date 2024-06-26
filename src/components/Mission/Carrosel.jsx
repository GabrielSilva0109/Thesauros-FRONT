import React from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`

const Boxes = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Box = styled.div`
  color: white;
  width: 300px;
  height: 300px;
  text-align: center;
  flex-shrink: 0;
  background: rgb(179 179 179 / 38%);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(10px);
  z-index: 2;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
    backdrop-filter: blur(60px);
  }
`

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
  background: rgb(253, 29, 29);
  background: linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(255, 0, 0, 1) 46%, rgba(252, 176, 69, 1) 100%);
  -webkit-background-clip: text;
  color: transparent;
`

// Computer 
const RedBallAnimation = keyframes`
  0% {
    transform: translate(0, 0) scale(1) rotate(0);
    border-radius: 50%;
  }
  25% {
    transform: translate(300px, 220px) scale(1.2) rotate(90deg);
    border-radius: 0%;
  }
  50% {
    transform: translate(-200px, 220px) scale(1.4) rotate(-180deg);
    border-radius: 40%;
  }
  75% {
    transform: translate(170px, -70px) scale(1.1) rotate(270deg);
    border-radius: 20%;
  }
  100% {
    transform: translate(0, 0) scale(1) rotate(360deg);
    border-radius: 50%;
  }
`

// Mobile
const RedBallAnimation2 = keyframes`
  0% {
    transform: translate(0, 0) scale(1) rotate(0);
    border-radius: 50%;
  }
  25% {
    transform: translate(10px, 800px) scale(1.2) rotate(90deg);
    border-radius: 0%;
  }
  50% {
    transform: translate(-200px, 220px) scale(1.4) rotate(-180deg);
    border-radius: 40%;
  }
  75% {
    transform: translate(170px, -70px) scale(1.1) rotate(270deg);
    border-radius: 20%;
  }
  100% {
    transform: translate(0, 0) scale(1) rotate(360deg);
    border-radius: 50%;
  }
`

const RedBall = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background: rgb(253, 29, 29);
  background: linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(255, 0, 0, 1) 46%, rgba(252, 176, 69, 1) 100%);
  border-radius: 50%;
  z-index: 1;
  animation: ${RedBallAnimation} 15s ease-in-out infinite;

  @media (max-width: 768px) {
    top: 20px;
    animation: ${RedBallAnimation2} 15s ease-in-out infinite;
  }
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: 10px;
`

const Carrosel = () => {
  return (
    <>
      <Container>
        <Boxes>
          <Box>
            <Title>Transparency</Title>
            <List>
              <ListItem>Blockchain Audits: Utilization of smart contracts to ensure transparency in transactions and lottery results.</ListItem>
              <ListItem>Public Ledger: All transaction records and results are public and easily verifiable.</ListItem>
              <ListItem>Open Source: Open-source code allows anyone to review how the system operates and ensure its integrity.</ListItem>
            </List>
          </Box>
          <Box>
            <Title>Security</Title>

          </Box>
          <Box>
            <Title>Winnings</Title>

          </Box>
        </Boxes>
        
        <RedBall />
      </Container>
    </>
  )
}

export default Carrosel
