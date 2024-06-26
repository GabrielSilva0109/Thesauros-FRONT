import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import styled from "styled-components";


import thesa from '../../IMG/Icons/Thesauros2.png'


const Container = styled.div`
  background-color: ${(props) => (props.theme.mode === 'dark' ? 'black' : 'white')};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  gap: 10px;
  margin-top: 100px;

  @media(max-width: 768px){
    flex-direction: column;
  }
`

const Left = styled.div`
  width: 30%;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  background: rgb(179 179 179 / 28%);
  margin-right: -250px;

    @media(max-width: 768px){
      width: 80%;
      margin-right: 0px;
  }
`

const Right = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 20px;
`

const Title = styled.h1`
  text-align: start;
  font-size: 2rem;
  padding: 0 20px;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 20px;
`

const Label = styled.label`
  padding: 10px;
`

const Input = styled.input`
  border: none;
  border-radius: 20px;
  padding: 12px;
  font-size: 1rem;
`

const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`

const BtnLogin = styled.button`
  width: 200px;
  padding: 12px;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  background: black;
`

const BtnGoogle = styled.button`
  width: 200px;
  padding: 12px;
  border-radius: 20px;
  border: none;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  background: white;
`

const BtnSing = styled.button`
  border: none;
  background: none;
  background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);
  -webkit-background-clip: text;
  color: transparent;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
`

const Text = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: black;
  text-align: justify;
  padding: 20px;
`

const SignupForm = styled(Form)`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
`

const BackToLogin = styled(BtnSing)`
  margin-top: 10px;
`

const Img = styled.img`
  width: 500px;
  margin-top: -70px;

  @media(max-width: 768px){
    width: 300px;
    margin-top: -300px;
  }
`

const Login = () => {
  const URL = "https://thesauros.up.railway.app/api"


  const [showLogin, setShowLogin] = useState(true)

  const toggleForm = () => {
    setShowLogin(!showLogin)
  }

  const handleLogin = async () => {
    try {
      const response = await fetch(`${URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "email@example.com",
          password: "senha123",
        }),
      })


      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error("Erro ao fazer login:", error)
    }
  }

  const handleSignup = async () => {
    try {
      const response = await fetch(`${URL}/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Nome do Usuário",
          email: "email@example.com",
          password: "senha123",
        }),
      });
      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.error("Erro ao cadastrar:", error)
    }
  }

  return (
    <Container>
      <Navbar />
      {showLogin ? (
        <Content>
          <Left>
            <Title>Login</Title>
            <Form>
              <Label>Email</Label>
              <Input placeholder="example@mail.com" />
              <Label>Password</Label>
              <Input placeholder="*******" />
            </Form>

            <Btns>
              <BtnLogin>Login</BtnLogin>
              <BtnGoogle>Sing in Google</BtnGoogle>
            </Btns>

            <Text>
              Don't have an account?
              <BtnSing onClick={toggleForm}>Sign up</BtnSing>
            </Text>
          </Left>

          <Right>

            <Img src={thesa}/>
          </Right>
        </Content>
      ) : (
        <Content>
          <Left>
            <Title>Sign up for free</Title>
            <Form>
              <Label>Name</Label>
              <Input placeholder="Your name" />
              <Label>Email</Label>
              <Input placeholder="example@mail.com" />
              <Label>Password</Label>
              <Input placeholder="*******" />
            </Form>

            <Btns>
              <BtnLogin>Sign up</BtnLogin>
             
            </Btns>

            <Text>
              Already have an account?
              <BtnSing onClick={toggleForm}>Sign in</BtnSing>
            </Text>
          </Left>

          <Right>

            <Img src={thesa}/>
          </Right>
        </Content>
      )}
    </Container>
  )
}

export default Login