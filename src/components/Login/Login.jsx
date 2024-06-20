import React, { useContext } from "react"
import Navbar from "../Header/Navbar"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
`

const Login = () => {

  return (
    <Container >
      <Navbar />
        <h1>Login </h1>
        <p>Content of the Home page styled based on the selected theme.</p>
    </Container>
  
  )
}

export default Login
