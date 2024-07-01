import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
  margin: 0;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`

const Top = styled.div`
  width: 80%;
  backdrop-filter: blur(30px);
  background: rgb(179 179 179 / 28%);
  border-radius: 20px;
  height: ${(props) => (props.expanded ? '500px' : '200px')};
  transition: height 0.3s ease;
`

const Title = styled.h1`
  span {
    background: rgb(253, 29, 29);
    background: linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(255, 0, 0, 1) 46%, rgba(252, 176, 69, 1) 100%);
    -webkit-background-clip: text;
    color: transparent;
  }
`

const SubTitle = styled.h1`
  background: rgb(253, 29, 29);
  background: linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(255, 0, 0, 1) 46%, rgba(252, 176, 69, 1) 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`

const Text = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: gray;
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
  width: 25%;
  height: 50px;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
    backdrop-filter: blur(60px);
  }
`

const Section = styled.div`
  margin-top: 20px;
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
`

const Home = () => {
  const { state } = useLocation()
  const user = state?.user
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState(false)
  const [content, setContent] = useState('')

  const redirectToLogin = async () => {
    if (!user || user === null) {
      toast.warning("Faça o login para acessar a página Home.")
      await navigate('/')
    }
  }

  const handleExpand = (newContent) => {
    if (expanded && content === newContent) {
      setExpanded(false)
      setContent('')
    } else {
      setExpanded(true)
      setContent(newContent)
    }
  }

  useEffect(() => {
    redirectToLogin()
  }, [user, navigate])

  return (
    <Container>
      <Header user={user} />
      <Content>
        <Top expanded={expanded}>
          <Title>Bem vindo a <span>Thesauros</span> <br />{user.name}</Title>
          <Boxes>
            <Box>
              <SubTitle onClick={() => handleExpand('Account')}>Account</SubTitle>
            </Box>
            <Box>
              <SubTitle onClick={() => handleExpand('Transactions')}>Transactions</SubTitle>
            </Box>
            <Box>
              <SubTitle onClick={() => handleExpand('History')}>History</SubTitle>
            </Box>
            <Box>
              <SubTitle onClick={() => handleExpand('Deposit')}>Deposit</SubTitle>
            </Box>
          </Boxes>
          {expanded && (
            <Section>
              {content === 'Account' && (
                <div>
                  <h2>Account Details</h2>
                  <p>Here you can manage your account settings and information.</p>
                </div>
              )}
              {content === 'Transactions' && (
                <div>
                  <h2>Transactions</h2>
                  <p>View and manage your transactions here.</p>
                </div>
              )}
              {content === 'History' && (
                <div>
                  <h2>History</h2>
                  <p>Check your activity asdfasdhistory here.</p>
                </div>
              )}
              {content === 'Deposit' && (
                <div>
                  <h2>Deposit</h2>
                  <p>Manage your deposits here.</p>
                </div>
              )}
            </Section>
          )}
        </Top>
      </Content>n
    </Container>
  )
}

export default Home
