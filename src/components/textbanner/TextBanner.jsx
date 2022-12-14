import React from "react";
import styled from "styled-components";

const TextBanner = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default TextBanner;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.bgDefault};
`;

const Title = styled.div`
  color: tomato;

  @media only screen and (max-width: 600px) {
    margin: 0 10px;
  }
`;

const Subtitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin: 5px;
  color: ${(props) => props.theme.colors.primary};

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
