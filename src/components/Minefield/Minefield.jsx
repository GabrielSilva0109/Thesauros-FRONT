
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

const Minefield = () => {
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
      <h1>Game Minefield {user.name}</h1>
    
    </Container>
  )
}

export default Minefield
