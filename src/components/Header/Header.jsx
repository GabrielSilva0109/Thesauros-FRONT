import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`


const Header = () => {
  return (
    <Container>
      Header
    </Container>
  )
}

export default Header
