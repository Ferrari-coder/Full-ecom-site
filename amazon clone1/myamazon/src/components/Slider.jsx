import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Div = styled.div`
  display: flex;
  overflow: hidden;
  margin:10px 0;
`;
const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  background-color: #${(props) => props.bg};
  transform: translateX(${props=>props.slideIndex * -100}vw);
  transition: all 1.5s ease;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  positon: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  margin: auto auto auto 10px;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const ArrowRight = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  positon: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto 10px auto auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 80vh;
  flex: 1;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Div>
      {sliderItems.map((item) => (
        <Container bg={item.bg} key={item.id} slideIndex={slideIndex}>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
          </Arrow>
          <Slide>
            <Wrapper>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc} </Desc>
                <Link to="/products"><Button>SHOP NOW!</Button></Link>
              </InfoContainer>
            </Wrapper>
          </Slide>
          <ArrowRight direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
          </ArrowRight>
        </Container>
      ))}
    </Div>
  );
};

export default Slider;
