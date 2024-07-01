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

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  padding: 5px;
`

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
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
  const [ user, setUser] = useState(initialUser)
  const [formData, setFormData] = useState({
    name: initialUser.name,
    email: initialUser.email,
    balance: initialUser.balance,
    address: initialUser.address,
    created_at: initialUser.created_at,
    date_birth: initialUser.date_birth,
  })

  const redirectToLogin = async () => {
    if (!initialUser || initialUser === null) {
      toast.warning('Do to login for access Home.')
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
      const response = await fetch(`${URL}/user/${initialUser.user_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        const updatedUser = await response.json()
        setUser(updatedUser)
        toast.success('User update!')
      } else {
        toast.error('Erro of update User!')
      }
    } catch (error) {
      toast.error('REQ ERRO')
    }
  }

  useEffect(() => {
    redirectToLogin()
  }, [initialUser, navigate])

  return (
    <Container>
      <Header user={user} />
      <Content>
        <Top expanded={expanded}>
          <Title>
            Bem vindo a <span>Thesauros</span> <br />
            {user.name}, {user.user_id }
          </Title>
          <Boxes>
            <Box key="account">
              <SubTitle onClick={() => handleExpand('Account')}>Account</SubTitle>
            </Box>
            <Box key="transactions">
              <SubTitle onClick={() => handleExpand('Transactions')}>Transactions</SubTitle>
            </Box>
            <Box key="history">
              <SubTitle onClick={() => handleExpand('History')}>History</SubTitle>
            </Box>
            <Box key="deposit">
              <SubTitle onClick={() => handleExpand('Deposit')}>Deposit</SubTitle>
            </Box>
          </Boxes>
          {expanded && (
            <Section>
              {content === 'Account' && (
                <>
                  <h2>Account Details</h2>
                  <Info>
                    <InfoItem>
                      <Label>Name:</Label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </InfoItem>
                    <InfoItem>
                      <Label>Email:</Label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </InfoItem>
                    <InfoItem>
                      <Label>Balance:</Label>
                      <Input
                        type="text"
                        name="balance"
                        value={formData.balance}
                        onChange={handleChange}
                      />
                    </InfoItem>
                    <InfoItem>
                      <Label>Address:</Label>
                      <Input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
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
                      <Label>Date of Birth:</Label>
                      <Input
                        type="text"
                        name="date_birth"
                        value={formData.date_birth}
                        onChange={handleChange}
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
                <div>
                  <h2>Deposit</h2>
                  <p>Manage your deposits here.</p>
                </div>
              )}
            </Section>
          )}
        </Top>
      </Content>
    </Container>
  )
}

export default Home
