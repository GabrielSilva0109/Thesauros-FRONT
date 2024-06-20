
import React, { useContext } from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
  margin: 0;
`

const Home = () => {

  return (
    <Container >
      <Header />
      <h1>Home Page</h1>
      <p>Content of the Home page styled based on the selected theme.</p>
    </Container>
  );
}

export default Home;
