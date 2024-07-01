import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    background-color: ${(props) => (props.theme.mode === 'dark' ? 'black' : 'white')};
    color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;

    
`

const Content = styled.div`
    width: 80%;
    display: flex;
    gap: 20px;

    @media(max-width: 768px) {
        flex-direction: column;
        width: 90%;
    }
`

const Left = styled.div`
    backdrop-filter: blur(30px);
    background: rgb(179 179 179 / 28%);
    border-radius: 20px;
    height: 200px;
    width: 50%;

    @media(max-width: 768px) {
       width: 100%;
    }
`

const Right = styled.div`
    backdrop-filter: blur(30px);
    background: rgb(179 179 179 / 28%);
    border-radius: 20px;
    width: 50%;
    height: 200px;

      @media(max-width: 768px) {
       width: 100%;

    }
`

const Main = () => {
    return (
        <Container>

            <Content>
            <Left>
                
            </Left>

            <Right>
                a
            </Right>
            </Content>
        </Container>
            
    
    )
}

export default Main