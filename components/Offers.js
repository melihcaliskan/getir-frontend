import { ArrowLeft, ArrowRight } from './icons'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import React, { useState } from 'react';

import Separator from "../components/Separator"
import styled from 'styled-components'

const Container = styled.section`
  margin-top:5em;

  img{
    border-radius:20px;
    margin:3em 0;
  }

  .carousel-item{
    width:80%;
    margin-left:10%;
  }

  @media only screen and (max-width: 740px) {
    margin-top:1.5em;
  }
`
const Title = styled.p`
  text-align:center;
  font-size:24px;
  @media only screen and (max-width: 960px) {
    font-size:20px;
  }
`

const ButtonContainer = styled.div`
  display:flex;
  justify-content:center;
  @media only screen and (max-width: 960px) {
    margin-top:-3em;
  }
`


const CarouselButton = styled.div`
  display:inline-flex;
  justify-content:center;
  align-items:center;

  width:48px;
  height:48px;
  margin:1em;
  border-radius:50%;

  background:#EDE9FF;
  cursor:pointer;
  transition: background-color .4s;

  svg path{
      fill:#5D3EBC;
  }

  &:hover, &:focus{
    background:#5D3EBC;
    svg path{
      fill:white;
    }
  }

  @media only screen and (max-width: 960px) {
    width:36px;
    height:36px;
  }
`

const Categories = ({ isMobile }) => {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <Title>Kampanyalar</Title>
      <Separator
        center
        borderRadius={10}
        width={"24px"}
        height={"2px"}
        marginTop={-10}
        marginBottom={-10}
        color="#5D3EBC" />

      <Carousel
        value={value}
        onChange={(val) => setValue(val)}
        plugins={[
          'infinite',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: isMobile ? 1 : 2
            }
          },
        ]}>
        <a href="#"><img className="carousel-item" width="320px" src="/offer-1.png" /></a>
        <a href="#"> <img className="carousel-item" width="320px" src="/offer-2.png" /></a>
        <a href="#"><img className="carousel-item" width="320px" src="/offer-1.png" /></a>
        <a href="#"> <img className="carousel-item" width="320px" src="/offer-2.png" /></a>
      </Carousel>

      <ButtonContainer>
        <CarouselButton onClick={() => setValue(value - 1)}>
          <ArrowLeft />
        </CarouselButton>
        <CarouselButton onClick={() => setValue(value + 1)}>
          <ArrowRight />
        </CarouselButton >
      </ButtonContainer>

    </Container>
  )
}

export default Categories