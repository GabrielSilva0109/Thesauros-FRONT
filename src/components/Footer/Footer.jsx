import React from "react"
import styled from "styled-components"

import thesa from '../../IMG/Icons/Thesauros2.png'

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Content = styled.div`
    display: flex;
    justify-content: space-around;
`

const Separetor = styled.div`
    width: 80%;
    border-top: 1px solid gray;
`

const Icons = styled.div`

`

const Icon = styled.img`
    width: 50px;
`

const Text = styled.div`
`


const Footer = () => {
  return (
    <>
    <Container>

        <Separetor/>
        <Content>
            <Text>
                © 2024 Thesauros Todos os direitos reservados.
            </Text>

            <Icons>
                <Icon src={thesa}/>
            </Icons>

            <Text>
                @ Gabriel Silva 
            </Text>
        </Content>
    </Container>
    </>
  )
}

export default Footer
