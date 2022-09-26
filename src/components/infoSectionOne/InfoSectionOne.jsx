import React from "react";
import img1 from "../../assets/1.png";
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

const InfoSectionOne = () => {
  return (
    <Container id="panowanie">
      <Wrapper direction={"row"}>
        <Right>
          <Image src={img1} alt="..." />
        </Right>
        <Left>
          <Title>
            Mówiła z dumą: „Jestem głową monarchii, której tradycje sięgają IX
            wieku”.
          </Title>
          <Header>Elżbieta II przeżyła 16 premierów i 7 papieży</Header>
          <Description>
            Miała 130 milionów poddanych. Jako królowa przeżyła niemal wszystko:
            zimną wojnę, powstanie i upadek muru berlińskiego, brexit; rewolucję
            technologiczną i rewolucję seksualną, lot człowieka na księżyc.
            Królowała od Rolling Stonsów po Adele. Za jej czasów świat zmienił
            się właściwie tak bardzo, że sama monarchia wydawała się niektórym
            już tylko pięknym, kosztownym reliktem.
          </Description>
          <List>
            <ListItem>Winston Churchill</ListItem>
            <ListItem>Margaret Thatcher</ListItem>
            <ListItem>John Major</ListItem>
            <ListItem>Tony Blair</ListItem>
            <ListItem>Gordon Brown</ListItem>
            <ListItem>David Cameron</ListItem>
            <ListItem>Theresa May</ListItem>
            <ListItem>Boris Johnson</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionOne;
