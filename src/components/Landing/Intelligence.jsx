import React from 'react'
import styled from 'styled-components'
import thesa from '../../IMG/Icons/Thesauros.png'

const Container = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    height: 400px;

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
        height: auto;
    }
`

const Left = styled.div`
    float: left;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;

    @media(max-width: 768px){
        width: 70%;
    }
`

const Right = styled.div`
    float: right;
    width: 38%;
    background: rgb(253,29,29);
    background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);
    border-radius: 20px;

    @media(max-width: 768px){
        width: 70%;
    }
`

const Title = styled.h1`
    text-align: start;
    margin: 0px;
    font-size: 1.8rem;
`

const SubTitle = styled.h1`
   background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1rem;
  font-weight: bold;

`

const Text = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: gray;
    text-align: start;
    padding: 0 15px 0 0;
`

const Img = styled.img`
    width: 300px;

    @media(max-width: 850px){
        width: 250px;
    }
`

const Intelligence = () => {
    return (
        <>
            <Container>
                <Left>
                    <SubTitle>What is our difference?</SubTitle>
                    <Title>Innovative AI to manage platform’s financial ecosystem</Title>
                    <Text>
                    We employ revolutionary AI to efficiently manage the financial ecosystem. Our AI optimizes resource allocation, ensures precise financial management by analyzing real-time data, and predicts trends. It promotes fair resource distribution, maximizes gains, minimizes risks, enhances transparency and security, and fosters sustainable growth. This innovative approach positions our platform as a leader, delivering an advanced and reliable user experience.
                    </Text>
                </Left>

                <Right>
                    <Img src={thesa}/>

                </Right>
            </Container>
        
        </>
    )
}

export default Intelligence