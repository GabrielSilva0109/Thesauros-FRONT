import React from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  position: relative;
`

const Boxes = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative; /* Adicionado para controlar o posicionamento dos elementos */
`

const Box = styled.div`
  color: white;
  width: 300px;
  height: 300px;
  text-align: center;
  flex-shrink: 0;
  background: rgb(179 179 179 / 28%);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(30px);
  z-index: 2; /* Z-index maior para que os Box estejam à frente da RedBall */
`

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
  background: rgb(253, 29, 29);
  background: linear-gradient(
    90deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(255, 0, 0, 1) 46%,
    rgba(252, 176, 69, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
`

const moveAndShapeAnimation = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
    border-radius: 50%;
  }
  25% {
    transform: translate(300px, 220px) scale(1.2);
    border-radius: 50%;
  }
  50% {
    transform: translate(-200px, 220px) scale(1.4);
    border-radius: 40%;
  }
  75% {
    transform: translate(150px, 0) scale(1.1);
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
  background: linear-gradient(
    90deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(255, 0, 0, 1) 46%,
    rgba(252, 176, 69, 1) 100%
  );
  border-radius: 50%;
  z-index: 1; /* Z-index menor para que a RedBall esteja atrás dos Box */
  animation: ${moveAndShapeAnimation} 15s ease-in-out infinite;
`

const Carrosel = () => {
  return (
    <>
      <Container>
        <Boxes>
          <Box>
            <Title>Transparency</Title>
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
