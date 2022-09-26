import React from "react";
import { Container } from "../infoSectionTwo/InfoSectionTwo";
import img4 from "../../assets/8.jpg";
import styled from "styled-components";

const InfoSectionFour = () => {
  return (
    <Container sectionImage={img4} Height={"300px"}>
      <Card>
        <CardContent>
          <Number>1977</Number>
          <Subtitle>Jubileusz srebrny</Subtitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Number>2002</Number>
          <Subtitle>Jubileusz złoty</Subtitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Number>2012</Number>
          <Subtitle>Jubileusz diamentowy</Subtitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Number>2022</Number>
          <Subtitle>Jubileusz platynowy</Subtitle>
        </CardContent>
      </Card>
    </Container>
  );
};

export default InfoSectionFour;

const Card = styled.div`
  width: 250px;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Number = styled.div`
  font-weight: bold;
  font-size: 50px;
  color: ${(props) => props.theme.colors.text};
`;

const Subtitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.colors.bgDefault};
`;
