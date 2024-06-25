import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`

const Boxes = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const Box = styled.div`
  background: gray;
  color: white;
  border-radius: 40px;
  padding: 20px;
  width: 300px;
  height: 300px;
  text-align: center;
  flex-shrink: 0;
`

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
`

const SubTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;

  & span:hover {
    background: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Text = styled.div`
  color: #dbdbdb;
  font-size: 1rem;
  font-weight: bold;
  text-align: justify;
`

const Carrosel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Total de slides
  const slideInterval = 5000; // Intervalo de troca em milissegundos (5 segundos)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Função para trocar de slide
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, slideInterval);

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  const renderSlides = () => {
    
    const slides = [
      {
        title: "Slide 1",
        subtitle: "Subtítulo do Slide 1",
        text: "Texto do Slide 1"
      },
      {
        title: "Slide 2",
        subtitle: "Subtítulo do Slide 2",
        text: "Texto do Slide 2"
      },
      {
        title: "Slide 3",
        subtitle: "Subtítulo do Slide 3",
        text: "Texto do Slide 3"
      },
      {
        title: "Slide 4",
        subtitle: "Subtítulo do Slide 4",
        text: "Texto do Slide 4"
      },
      {
        title: "Slide 5",
        subtitle: "Subtítulo do Slide 5",
        text: "Texto do Slide 5"
      }
    ];

    return slides.map((slide, index) => (
      <Box key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
        <Title>{slide.title}</Title>
        <SubTitle>
          <span>{slide.subtitle}</span>
        </SubTitle>
        <Text>{slide.text}</Text>
      </Box>
    ));
  };

  return (
    <Container>
      <Boxes>
        {renderSlides()}
      </Boxes>
    </Container>
  );
}

export default Carrosel;
