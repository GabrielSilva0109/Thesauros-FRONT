import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Deposit from './Sections/Deposit'
import Main from './Main'

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

   @media (max-width: 768px) {
    width: 90%;
    height: ${(props) => (props.expanded ? 'auto' : '200px')};
  }
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

  border-bottom: ${(props) => (props.active ? '2px solid gray' : 'none')};
  padding-bottom: ${(props) => (props.active ? '5px' : '0')};

   @media (max-width: 768px) {
    font-size: 1rem;
  }

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
    gap: 10px;
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
   
  }
`

const Section = styled.div`
  margin-top: 20px;
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
`

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px;
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33.333% - 10px);
  box-sizing: border-box;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%; 
  }
`

export const Label = styled.label`
  text-align: start;
  margin-bottom: 5px;
  font-weight: bold;
`

export const Input = styled.input`
  background-color: ${(props) => (props.theme.mode === 'dark' ? '#1c1c1e' : 'white')};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
  border: none;
  border-radius: 20px;
  padding: 12px;
  font-size: 1rem;
  width: 90%;

   &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => (props.theme.mode === 'dark' ? '#2c2c2e' : '#f0f0f0')};
    box-shadow: none;
    opacity: 0.8;
  }

  &:not(:disabled):hover {
    border-color: ${(props) => (props.theme.mode === 'dark' ? '#FF6347' : '#FF4500')}; /* Efeito de borda ao passar o mouse */
    box-shadow: ${(props) => (props.theme.mode === 'dark' ? '0 0 5px #FF6347' : '0 0 5px #FF4500')}; /* Efeito de sombra ao passar o mouse */
  }
`

export const Button = styled.button`
  width: 200px;
  padding: 12px;
  margin: 10px;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  background: black;
  transition: 1s;
  cursor: pointer;

  &: hover{
    transform: scale(1.1)
  }
`

const Home = () => {
  // const URL = "https://thesauros.up.railway.app/api"
  const URL = "http://localhost:3333/api"

  const { state } = useLocation()
  const initialUser = state?.user
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState(false)
  const [content, setContent] = useState('')
  const [user, setUser] = useState(initialUser || null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    balance: '',
    address: '',
    created_at: '',
    date_birth: '',
  })

  const fetchUser = async () => {
    if (initialUser && initialUser.user_id) {
      try {
        const response = await fetch(`${URL}/user/${initialUser.user_id}`)
        if (response.ok) {
          const userData = await response.json()
          setUser(userData)
          setFormData({
            name: userData.name,
            email: userData.email,
            balance: userData.balance,
            address: userData.address,
            created_at: userData.created_at,
            date_birth: userData.date_birth,
          })
        } else {
          console.log('Failed to fetch user')
        }
      } catch (error) {
        console.log('Fetch user failed', error)
      }
    }
  }

  const redirectToLogin = async () => {
    if (!user) {
      toast.warning('Faça o login para acessar a página Home.')
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSave = async () => {
    try {
      const response = await fetch(`${URL}/user/${user.user_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (response.ok) {
        toast.success('User updated!')
        await fetchUser()
      } else {
        toast.error(`Erro ao atualizar usuário! ${result.message || 'Detalhes não disponíveis'}`)
      }
    } catch (error) {
      toast.error(`REQ ERRO: ${error.message}`)
    }
  }

  useEffect(() => {
    redirectToLogin()
  }, [user, navigate])

  useEffect(() => {
    fetchUser()
  }, [initialUser])

  return (
    <Container>
      <Header user={user} />
      <Content>
        <Top expanded={expanded}>
          <Title>
            Bem vindo a <span>Thesauros</span> <br />
            {user?.name || 'Carregando...'}
          </Title>
          <Boxes>
            <Box key="account">
              <SubTitle onClick={() => handleExpand('Account')} active={content === 'Account'}>Account</SubTitle>
            </Box>
            <Box key="transactions">
              <SubTitle onClick={() => handleExpand('Transactions')} active={content === 'Transactions'}>Transactions</SubTitle>
            </Box>
            <Box key="history">
              <SubTitle onClick={() => handleExpand('History')} active={content === 'History'}>History</SubTitle>
            </Box>
            <Box key="deposit">
              <SubTitle onClick={() => handleExpand('Deposit')} active={content === 'Deposit'}>Deposit</SubTitle>
            </Box>
          </Boxes>
          {expanded && (
            <Section>
              {content === 'Account' && (
                <>
                  <Info>
                    <InfoItem>
                      <Label>Name</Label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </InfoItem>
                    <InfoItem>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </InfoItem>                  
                    <InfoItem>
                      <Label>Address</Label>
                      <Input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </InfoItem>
                    <InfoItem>
                      <Label>Balance</Label>
                      <Input
                        type="text"
                        name="balance"
                        value={formData.balance}
                        onChange={handleChange}
                        disabled
                      />
                    </InfoItem>
                    <InfoItem>
                      <Label>Created At:</Label>
                      <Input
                        type="text"
                        name="created_at"
                        value={formData.created_at}
                        onChange={handleChange}
                        disabled
                      />
                    </InfoItem>
                    <InfoItem>
                      <Label>Date of Birth</Label>
                      <Input
                        type="text"
                        name="date_birth"
                        value={formData.date_birth}
                        onChange={handleChange}
                        disabled
                      />
                    </InfoItem>
                  </Info>
                  <Button onClick={handleSave}>Save</Button>
                </>
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
                  <p>Check your activity history here.</p>
                </div>
              )}
              {content === 'Deposit' && (
                <Deposit />
              )}
            </Section>
          )}
        </Top>
        
      </Content>
      <Main />
    </Container>
  )
}

export default Home