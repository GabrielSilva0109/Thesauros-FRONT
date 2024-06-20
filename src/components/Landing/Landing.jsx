import React, { useContext } from "react"
import Navbar from "../Header/Navbar"
import styled from "styled-components"


const Container = styled.div`

`

const Landing = () => {

  return (
    <Container >
     <h1>Lading Page</h1>
     <p>Content of the Home page styled based on the selected theme.</p>
    </Container>
  
  )
}

export default Landing
