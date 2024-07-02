import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { Input } from '../Home/Home'

const Container = styled.div`
    background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
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
  height: 450px;
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media(max-width: 768px) {
    width: 90%;
  }
`

const Right = styled.div`
  backdrop-filter: blur(20px);
  background: rgb(179 179 179 / 28%);
  border-radius: 20px;
  width: 50%;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

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
`

const Top = styled.div`
  display: flex;
`

const Users = () => {
  const { state } = useLocation()
  const initialUser = state?.user
  const navigate = useNavigate()
  const [user, setUser] = useState(initialUser || null)

  return (
    <Container>
      <Header user={user} />
      <Content>
        <Left>
          <Top>
            <Input placeholder='$00.00'/>
            <Input placeholder='Amount Mines' type='number'/>
          </Top>
          <Title>USers</Title>
          <Text>
            A strategic game where your skills and tactics lead you to victory. Develop your strategies, outsmart your opponents, and claim the top spot on the leaderboard.
          </Text>
          <Btn onClick={() => alert('Learn more about Strategic')}>
            Learn More
          </Btn>
        </Left>
        
      </Content>
    </Container>
  )
}

export default Users
