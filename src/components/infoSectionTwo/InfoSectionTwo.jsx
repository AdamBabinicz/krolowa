import React from "react";
import styled from "styled-components";
import img8 from "../../assets/7.webp";

const InfoSectionTwo = () => {
  return (
    <Container sectionImage={img8}>
      <TextWrapper>
        <Title>Odbyła ponad 250 podróży (więcej niż Jan Paweł II)</Title>
        <Description>
          W 1996 roku przyleciała do Polski, odwiedziła wtedy m.in. Liceum im.
          Stefana Batorego w Warszawie. Oglądając szkolne przedstawienie „Pana
          Tadeusza” po angielsku, zasiadła w fotelu, który uchował się jeszcze
          sprzed wojny. „Wyglądała jak prawdziwa królowa z bajki”, mówiła
          wieloletnia dyrektorka „Batorego” Małgorzata Oszmaniec.
        </Description>
        <Description>
          Gdyby wymienić listę prezydentów, premierów i znanych osobistości, z
          którymi się spotykała – od Johnna Kennedy’ego po Baraka i Michelle
          Obamów - nie wystarczyło by tu miejsca.
        </Description>
      </TextWrapper>
    </Container>
  );
};

export default InfoSectionTwo;

export const Container = styled.div`
  margin-top: 10%;
  height: ${({ Height }) => Height};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
    url(${({ sectionImage }) => sectionImage}) top / cover no-repeat fixed;

  @media only screen and (max-width: 600px) {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.4)
      ),
      url(${({ sectionImage }) => sectionImage}) center / cover no-repeat fixed;
    height: fit-content;
  }

  @media only screen and (min-width: 600px) {
    background-size: 100% 100% / cover;
  }

  @media only screen and (min-width: 992px) {
    background-size: cover;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.bgDefault};
  font-size: 30px;
  font-weight: bold;
  padding: 2%;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.bgDefault};
  width: 40%;
  margin-bottom: 5%;
  font-weight: lighter;
  font-size: 20px;

  @media only screen and (max-width: 600px) {
    width: 90%;
    font-size: 18px;
  }

  @media only screen and (min-width: 600px) {
    width: 80%;
  }

  @media only screen and (min-width: 992px) {
    width: 40%;
  }
`;
