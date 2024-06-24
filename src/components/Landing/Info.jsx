import React, { useRef, useEffect } from "react"
import styled, { keyframes } from "styled-components"

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 70%;
    background: rgb(179 179 179 / 28%);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(30px);
`

const moveAndShapeAnimation = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
    border-radius: 50%;
  }
  25% {
    transform: translate(100px, -50px) scale(1.2);
    border-radius: 50%;
  }
  50% {
    transform: translate(-50px, 50px) scale(1.4);
    border-radius: 40%;
  }
  75% {
    transform: translate(-100px, 0) scale(1.1);
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

const Title = styled.h1`
  margin-bottom: 10px;
 
`

const Boxes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const Box = styled.div` 
    display: flex;
    flex-direction: column;
    width: 200px;
`

const SubTitle = styled.h1`
   background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
`

const Text = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
     color: gray;
`

const Info = () => {
  return (
    <>
      <Container>
        <Content>
          <Title>Info the new Crypto Games THESA</Title>
          
            <Boxes>
                <Box>
                    <SubTitle>100M</SubTitle>
                    <Text>
                        Max suplly is 100M Tokens
                    </Text>
                </Box>
                <Box>
                    <SubTitle>10K Users</SubTitle>
                    <Text>
                        News Users every days
                    </Text>
                </Box>
                <Box>
                    <SubTitle>+20 Games</SubTitle>
                    <Text>
                       The Best games
                    </Text>
                </Box>
            </Boxes>
        </Content>
       
        <RedBall />
      </Container>
    </>
  );
};

export default Info;
