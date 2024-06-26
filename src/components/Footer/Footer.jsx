import React from "react"
import styled from "styled-components"


//Icons
import thesa from '../../IMG/Icons/Thesauros2.png'
import insta from '../../IMG/Icons/Insta48.png'


const Container = styled.div`
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
`
const Content = styled.div`
    
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    padding: 20px 40px;
`

const Separetor = styled.div`
    width: 80%;
    
`

const Icons = styled.div`
    @media(max-width: 768px) {
        display: none;
    }
`

const Icon = styled.img`
    width: 35px;
    transition: 1s;
    &:hover{
        transform: scale(1.2);
    }
`

const Text = styled.div`
    color: #333333;
    font-weight: bold;

    &:hover {
        background: rgb(253, 29, 29);
        background: linear-gradient(
            90deg,
            rgba(253, 29, 29, 1) 0%,
            rgba(255, 0, 0, 1) 46%,
            rgba(252, 176, 69, 1) 100%
        );
        -webkit-background-clip: text;
        color: transparent;
       
    }
`

const A = styled.a`
    transition: 1.5s;
    text-decoration: none;
    color: inherit;

    &:hover {
        background: rgb(253, 29, 29);
        background: linear-gradient(
            90deg,
            rgba(253, 29, 29, 1) 0%,
            rgba(255, 0, 0, 1) 46%,
            rgba(252, 176, 69, 1) 100%
        );
        -webkit-background-clip: text;
        color: transparent;
       
    }
`

const Footer = () => {
  return (
    <>
    <Container>

        <Separetor/>
        <Content>
            <Text>
                ©Thesauros All rights reserved
            </Text>

            <Icons>
                <Icon src={insta}/>
                <Icon src={insta}/>
                <Icon src={insta}/>
                <Icon src={insta}/>
            </Icons>

            <Text>
                <A href="https://gabriel-silva-dev.vercel.app/" target="blank">@Gabriel Silva</A>
            </Text>
        </Content>
    </Container>
    </>
  )
}

export default Footer
