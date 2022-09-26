import React from "react";
import img1 from "../../assets/8.png";
import {
  Container,
  Description,
  Header,
  Image,
  Left,
  List,
  ListItem,
  Right,
  Title,
  Wrapper,
} from "../styles/styled.Section";
import styled from "styled-components";

const InfoSectionThree = () => {
  return (
    <Container id="hobby">
      <Wrapper direction={"row-reverse"}>
        <Right>
          <Image src={img1} alt="..." />
        </Right>
        <Left>
          <Title>
            Za jej panowania rozpadło się Imperium brytyjskie, ale Elżbieta II
            rozumiała ten proces
          </Title>
          <Header>Jaka była monarchini</Header>
          <Description>
            Królowa zgodziła się płacić osobisty podatek dochodowy, i ograniczyć
            apanaże. Żeby zmniejszyć przepaść między „Koroną a ludem” wybrała
            się nawet do McDonalda, a na 50. rocznicę koronacji zaśpiewała z
            Eltonem Johnem „All you need is love”. W ogóle w dużo większym
            stopniu korzystała z pop kultury niż kiedyś. Ale czy to dało jej
            popularność? W ostatnich latach popierało ją 80 procent
            Brytyjczyków.
          </Description>
          <Description>Jakie hobby miała królowa?</Description>
          <List>
            <ListItem>konie</ListItem>
            <ListItem>gołębie pocztowe</ListItem>
            <ListItem>psy rasy corgi</ListItem>
            <ListItem>fotografia</ListItem>
            <ListItem>kryminały</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionThree;
