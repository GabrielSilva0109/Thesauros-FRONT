import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${(props) => (props.theme.mode === 'dark' ? 'black' : 'white')};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`

const Content = styled.div`
  width: 80%;
  display: flex;
  gap: 20px;

  @media(max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`

const Left = styled.div`
  backdrop-filter: blur(30px);
  background: rgb(179 179 179 / 28%);
  border-radius: 20px;
  height: 200px;
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: 768px) {
    width: 100%;
  }
`

const Right = styled.div`
  backdrop-filter: blur(30px);
  background: rgb(179 179 179 / 28%);
  border-radius: 20px;
  width: 50%;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: 768px) {
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  background: linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(255, 0, 0, 1) 46%, rgba(252, 176, 69, 1) 100%);
  -webkit-background-clip: text;
  color: transparent;
  text-align: start;
`

const Text = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: gray;
  margin-bottom: 20px;
  text-align: start;

`

const Btn = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: black;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

const Main = () => {
  return (
    <Container>
      <Content>
        <Left>
          <Title>Strategic</Title>
          <Text>
            A strategic game where your skills and tactics lead you to victory. Develop your strategies, outsmart your opponents, and claim the top spot on the leaderboard.
          </Text>
          <Btn onClick={() => alert('Learn more about Strategic')}>
            Learn More
          </Btn>
        </Left>
        <Right>
          <Title>Luck</Title>
          <Text>
            Try your luck in this exciting game of chance. Spin the wheel, roll the dice, and see if fortune is on your side. Perfect for those who enjoy games of chance and luck.
          </Text>
          <Btn onClick={() => alert('Learn more about Luck')}>
            Learn More
          </Btn>
        </Right>
      </Content>
    </Container>
  )
}

export default Main
