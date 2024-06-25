import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  overflow: hidden; /* Para esconder partes dos slides que estiverem fora do container */
`

const Boxes = styled.div`
  display: flex;
  gap: 5px;
  overflow-x: auto; /* Permite rolagem horizontal */
  scroll-snap-type: x mandatory; /* Define que a rolagem será feita em passos horizontais */
  -webkit-overflow-scrolling: touch; /* Melhora o scroll em dispositivos móveis */
  scrollbar-width: none; /* Esconde a barra de rolagem do navegador */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Esconde a barra de rolagem do WebKit */
  }

  @media (max-width: 768px) {
    gap: 0; /* Remove o espaço entre os slides em telas menores */
    scroll-snap-type: x mandatory; /* Mantém o comportamento de rolagem em passos */
    overflow-x: scroll; /* Permite rolagem horizontal em telas menores */
    -webkit-overflow-scrolling: touch; /* Melhora o scroll em dispositivos móveis */
    scrollbar-width: none; /* Esconde a barra de rolagem do navegador */
    -ms-overflow-style: none; /* IE and Edge */
  }
`

const Box = styled.div`
  color: white;
  width: 300px;
  height: 300px;
  text-align: center;
  flex-shrink: 0;
  background: rgb(179 179 179 / 28%);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(30px);
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%; /* Define que o slide ocupará toda a largura em telas menores */
    scroll-snap-align: start; /* Define o alinhamento do início do slide */
  }
`

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
  background: rgb(253, 29, 29);
  background: linear-gradient(
    90deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(255, 0, 0, 1) 46%,
    rgba(252, 176, 69, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
`

const RedBall = styled.div`
  position: absolute;
  top: 100px;
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  background: rgb(253, 29, 29);
  background: linear-gradient(
    90deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(255, 0, 0, 1) 46%,
    rgba(252, 176, 69, 1) 100%
  );
  border-radius: 50%;
  z-index: 0;
`

const Carrosel = () => {
  return (
    <>
      <Container>
        <Boxes>
          <Box>
            <Title>Transparency</Title>
          </Box>
          <Box>
            <Title>Security</Title>
          </Box>
          <Box>
            <Title>Winnings</Title>
          </Box>
        </Boxes>
        <RedBall />
      </Container>
    </>
  )
}

export default Carrosel
