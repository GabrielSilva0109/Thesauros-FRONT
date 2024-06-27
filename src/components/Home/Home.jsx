
import React, { useContext, useEffect } from 'react'
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
  width: 60%;
  backdrop-filter: blur(30px);
  background: rgb(179 179 179 / 28%);
  border-radius: 20px;
`

const Home = () => {
  const { state } = useLocation()
  const user = state?.user
  const navigate = useNavigate()
 
  const redirectToLogin = async () => {
    if (!user || user === null) {
        toast.warning("Faça o login para acessar a página Home.")
        await navigate('/')
    }
  }

  useEffect(() => {
    redirectToLogin()
  }, [user, navigate])

  return (
    <Container >
      <Header user={user}/>
      <Content>
        <Top>
          <h1>Bem vindo a Thesauros <br /> {user.name}</h1>
          <p>Content of the Home page styled based on the selected theme.</p>

        </Top>
      </Content>
      
      
    </Container>
  )
}

export default Home
