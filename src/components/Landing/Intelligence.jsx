import React from 'react'
import styled from 'styled-components'

const Container = styled.div`


`

const Left = styled.div`

`

const Right = styled.div`

`

const Title = styled.h1`
  margin-bottom: 10px;
 
`

const SubTitle = styled.h1`
   background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
`

const Text = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
     color: gray;
`


const Intelligence = () => {
    return (
        <>
            <Container>
                <Left>
                    <SubTitle>

                    </SubTitle>
                    
                    <Title>

                    </Title>
                    <Text>

                    </Text>

                </Left>

                <Right>


                </Right>
            </Container>
        
        </>
    )
}

export default Intelligence