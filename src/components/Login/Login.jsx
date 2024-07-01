import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Header/Navbar"
import styled from "styled-components"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
  width: 90%;

  background-color: ${(props) => (props.theme.mode === 'dark' ? '#1c1c1e' : 'white')};
   color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
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
  transition: 1s;
  cursor: pointer;

  &: hover{
    transform: scale(1.1)
  }
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
  cursor: pointer;

  &: hover{
    transform: scale(1.1)
  }
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
  // const URL = "https://thesauros.up.railway.app/api"
  const URL = "http://localhost:3333/api"
  const [showLogin, setShowLogin] = useState(true)
  const navigate = useNavigate()
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    date_birth: '',
  })

  const toggleForm = () => {
    setShowLogin(!showLogin)
  }

  // Get Input 
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleLogin = async () => {
    try {
      const response = await fetch(`${URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })
  
      if (response.ok) {
        const userData = await response.json()
        if (userData) {
          toast.success("Login successful!", userData.name)
          navigate('/home', { state: { user: userData } })
        } else {
          toast.error('Failed to get user information.')
        }
      } else {
        toast.error("Login failed. Please check your credentials.")
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Error logging in. Please try again later.")
    }
  };
  

  const handleSignup = async () => {
    try {
      const response = await fetch(`${URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email:  formData.email,
          password:  formData.password,
          date_birth:  formData.date_birth,
        }),
      })
      const data = await response.json()

      if(response.ok){
        toast.success("Signup sucessful!")
        toast.success("Go to Login!")
      } else {
        console.log(data)
        toast.error(`Signup fassiled: ${data.message || "Please try again."}`)
      }
      
    } catch (error) {
      console.error("Erro ao cadastrar:", error)
      toast.error("Error signing up. Please try again later.")
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
              <Input placeholder="example@mail.com"
                type="text" name="email"
                value={formData.email}
                onChange={handleInputChange}/>
              <Label>Password</Label>
              <Input placeholder="*******" 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}/>
            </Form>

            <Btns>
              <BtnLogin onClick={handleLogin}>Login</BtnLogin>
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
              <Input 
                placeholder="Your name" 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange}  />
              <Label>Email</Label>
              <Input  
                placeholder="example@mail.com" 
                type="text" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange}  />
              <Label>Password</Label>
              <Input 
                placeholder="*******" 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}/>
              <Label>Birth</Label>
              <Input 
                type="date" 
                name="date_birth"
                value={formData.date_birth}
                onChange={handleInputChange} />
            </Form>

            <Btns>
              <BtnLogin onClick={handleSignup}>Sign up</BtnLogin>     
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
      <ToastContainer />
    </Container>
  )
}

export default Login