
import React, { useContext } from 'react';
import styled from 'styled-components'

const Container = styled.div`

`

const Home = () => {

  return (
    <Container >
      <h1>Home Page</h1>
      <p>Content of the Home page styled based on the selected theme.</p>
    </Container>
  );
}

export default Home;
