import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import styled from "styled-components";

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
  margin-top: 50px;
`

const Left = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 20px;
  background: rgb(253, 29, 29);
  background: linear-gradient(90deg, rgba(253, 29, 29, 1) 0%, rgba(255, 0, 0, 1) 46%, rgba(252, 176, 69, 1) 100%);
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

const Label = styled.label``

const Input = styled.input``

const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
`

const BtnLogin = styled.button``

const BtnGoogle = styled.button``

const BtnSing = styled.button`
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
`
const Text = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: ${(props) => (props.theme.mode === 'dark' ? '#e3e3e3' : '#252525')};
  text-align: justify;
  padding: 20px;
`

const SignupForm = styled(Form)`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
`

const BackToLogin = styled(BtnSing)`
  margin-top: 10px;
`

const Login = () => {
  const [showLogin, setShowLogin] = useState(true)

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

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
              <BtnGoogle>Login with Google</BtnGoogle>
            </Btns>

            <Text>
              Don't have an account?
              <BtnSing onClick={toggleForm}>Sign up</BtnSing>
            </Text>
          </Left>

          <Right></Right>
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
              {/* Example back button to switch back to login */}
              <BackToLogin onClick={toggleForm}>Back to Login</BackToLogin>
            </Btns>

            <Text>
              Already have an account?
              <BtnSing onClick={toggleForm}>Sign in</BtnSing>
            </Text>
          </Left>
        </Content>
      )}
    </Container>
  );
};

export default Login;
