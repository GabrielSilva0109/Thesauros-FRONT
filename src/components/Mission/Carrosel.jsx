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
     z-index: 1;
`

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
`

const SubTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;

  & span:hover {
    background: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Text = styled.div`
  color: #dbdbdb;
  font-size: 1rem;
  font-weight: bold;
  text-align: justify;
`

const moveAndShapeAnimation = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
    border-radius: 50%;
  }
  25% {
    transform: translate(300px, -50px) scale(1.2);
    border-radius: 50%;
  }
  50% {
    transform: translate(-200px, 50px) scale(1.4);
    border-radius: 40%;
  }
  75% {
    transform: translate(50px, 0) scale(1.1);
    border-radius: 50%;
  }
`

const RedBall = styled.div`
  position: absolute;
  top: 100px; 
  left: calc(50% - 50px); 
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
  z-index: 0; 
  animation: ${moveAndShapeAnimation} 15s ease-in-out infinite; 
`

const Carrosel = () => {

  return (
    <>
    <Container>
        <Boxes>
            <Box>
            1
            </Box>
            <Box>
            3
            </Box>
            <Box>
            3
            </Box>

        </Boxes>
        
        <RedBall />
     
    </Container>
     </>
  )
}

export default Carrosel