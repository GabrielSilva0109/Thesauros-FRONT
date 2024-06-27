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
  height: 330px;
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
    transform: translate(170px, -70px) scale(0.7) rotate(270deg);
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
    padding: 0;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: start;
    text-align: start;
`

const ListItem = styled.li`
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
  margin-bottom: 10px;
  font-weight: 600;

  & span{
    background: rgb(253, 29, 29);
    background: linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(255, 0, 0, 1) 46%, rgba(252, 176, 69, 1) 100%);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.05rem;
    font-weight: bold;
  }
  
`

const Carrosel = () => {
  return (
    <>
      <Container>
        <Boxes>
          <Box>
            <Title>Transparency</Title>
            <List>
              <ListItem><span>Blockchain Audits</span> <br /> Utilization of smart contracts to ensure transparency in transactions and lottery results.</ListItem>
              <ListItem><span>Public Ledger </span> <br /> All transaction records and results are public and easily verifiable.</ListItem>
              <ListItem><span>Open Source </span> <br /> Open-source code allows anyone to review how the system operates and ensure its integrity.</ListItem>
            </List>
          </Box>
          <Box>
            <Title>Security</Title>
            <List>
              <ListItem><span>Decentralized Storage</span> <br /> Data stored in a decentralized manner to avoid single points of failure and increase security.</ListItem>
              <ListItem><span>Encryption:</span> <br /> Robust encryption methods used to protect sensitive data and transactions.</ListItem>
              <ListItem><span>Multi-factor Authentication </span> <br /> Additional layers of authentication to ensure secure access to user accounts.</ListItem>
            </List>
          </Box>
          <Box>
            <Title>Winnings</Title>
            <List>
              <ListItem><span>Instant Payouts</span> <br /> Automatic and instant payout of prizes directly into users' digital wallets.</ListItem>
              <ListItem><span>Fair RNG </span> <br /> Transparent and auditable random number generators (RNG) to ensure fair outcomes.</ListItem>
              <ListItem><span>Jackpots and Bonuses </span> <br /> Attractive jackpots and bonuses offered to increase player participation and winnings.</ListItem>
            </List>
          </Box>
        </Boxes>
        
        <RedBall />
      </Container>
    </>
  )
}

export default Carrosel
