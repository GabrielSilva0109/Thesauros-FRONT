import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { Input } from '../Home/Home'

const Container = styled.div`
  background-color: ${(props) => (props.theme.mode === 'dark' ? 'black' : 'white')};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
  margin: 0;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  margin-top: 20px;
`

const Left = styled.div`
  backdrop-filter: blur(20px);
  background: rgb(179 179 179 / 40%);
  border-radius: 20px;
  height: 530px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media(max-width: 768px) {
    width: 90%;
  }
`

const Camp = styled.div`
  backdrop-filter: blur(20px);
  background: rgb(179 179 179 / 28%);
  border-radius: 20px;
  width: 80%;
  height: 380px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  padding: 20px;
  
  @media(max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
`;

const Block = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
  border-radius: 10px;
  overflow: hidden;
`;

const Front = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(255, 0, 0, 1) 46%, rgba(252, 176, 69, 1) 100%);
  border-radius: 10px;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: ${props => props.flipped ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
`;

const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  border-radius: 10px;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: ${props => props.flipped ? 'rotateY(0deg)' : 'rotateY(180deg)'};
`;

const BlockContainer = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  cursor: ${(props) => (props.gameOver || props.numMines === 0) ? 'default' : 'pointer'};
  perspective: 1000px;
  pointer-events: ${(props) => (props.gameOver || props.numMines === 0) ? 'none' : 'auto'};
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  background: linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(255, 0, 0, 1) 46%, rgba(252, 176, 69, 1) 100%);
  -webkit-background-clip: text;
  color: transparent;
  text-align: start;
`;

const Btn = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  background: rgb(253, 29, 29);
  background: linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(255, 0, 0, 1) 46%, rgba(252, 176, 69, 1) 100%);

  &:hover {
    transform: scale(1.05);
  }
`;

const Top = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Roulette = () => {
  const { state } = useLocation();
  const initialUser = state?.user;
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUser || null);
  const [flippedBlocks, setFlippedBlocks] = useState(Array.from({ length: 20 }, () => false));
  const [numMines, setNumMines] = useState(0)
  const [bombs, setBombs] = useState([]); 
  const [gameOver, setGameOver] = useState(false); 
  const [multiplier, setMultiplier] = useState(0); 
  const [investment, setInvestment] = useState(0);
  const [inputInvestment, setInputInvestment] = useState(0);


  const handleBlockClick = (index) => {
    if (gameOver) return
    
    const newFlippedBlocks = [...flippedBlocks];
    newFlippedBlocks[index] = true;
    setFlippedBlocks(newFlippedBlocks);

    if (bombs.includes(index)) {
      setGameOver(true);
      alert('Game Over! Você encontrou uma bomba.');
    } else {
      const newValue = investment * (1 + multiplier / 100);
      setInvestment(newValue);
    }
  };

  const handleStart = () => {
    
    const bombIndexes = []
    while (bombIndexes.length < numMines) {
      const randomIndex = Math.floor(Math.random() * 20);
      if (!bombIndexes.includes(randomIndex)) {
        bombIndexes.push(randomIndex);
      }
    }

    // Atualize o estado bombs com os índices das bombas
    setBombs(bombIndexes);
    setGameOver(false); // Reinicia o jogo
    setFlippedBlocks(Array.from({ length: 20 }, () => false)); // Reinicia os blocos virados

    
    const percentage = bombIndexes.length * 5
    setMultiplier(percentage)
    setInvestment(inputInvestment)
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 20) {
      setNumMines(value);
    }
  };

  const handleInvestmentChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value) && value >= 0) {
      setInputInvestment(value);
    }
  };
  

  return (
    <Container>
      <Header user={user} />
      <Content>
        <Left>
          <Top>
            <Input placeholder='$00.00' type='number' onChange={handleInvestmentChange} />
            <Input placeholder='Amount Mines' type='number' onChange={handleInputChange} />
            <Btn onClick={handleStart}>Start</Btn>
          </Top>
          <Text>Investment: ${investment.toFixed(2)}</Text>
          <Camp>
            {/* Rendering 20 blocks */}
            {Array.from({ length: 20 }).map((_, index) => (
              <BlockContainer key={index} onClick={() => handleBlockClick(index)} gameOver={gameOver} numMines={numMines}>
                <Front flipped={flippedBlocks[index] || gameOver} />
                <Back flipped={flippedBlocks[index] || gameOver}>{bombs.includes(index) ? 'bomb' : 'diamond'}</Back>
              </BlockContainer>
            ))}
          </Camp>
        </Left>
      </Content>
    </Container>
  );
};

export default Roulette;
