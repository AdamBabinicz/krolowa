import React from "react";
import styled from "styled-components";
import img from "../../assets/2.webp";
import img2 from "../../assets/3.webp";
import img3 from "../../assets/4.jpg";
import img4 from "../../assets/7.jpg";
import TextBanner from "../textbanner/TextBanner";

const Teams = () => {
  return (
    <Container id="pożegnanie">
      <TextBanner
        title={"Kres życia monarchini i pogrzeb"}
        subtitle={"8 września 2022"}
      />
      <Wrapper>
        <TeamCard>
          <CardImage src={img} />
          <TextWrapper>
            <MemberName>plejada.pl</MemberName>
            <TeamPosition>
              Myślę, że zdała sobie sprawę, że niewiele może zrobić, aby
              pojednać Williama i Harry'ego. I sądzę, że większość ludzi
              pomyśli, że to strasznie smutne, że ostatnie lata jej panowania,
              zostały zniszczone przez rozłam w rodzinie.
            </TeamPosition>
          </TextWrapper>
        </TeamCard>
        <TeamCard>
          <CardImage src={img2} />
          <TextWrapper>
            <MemberName>rmf24.pl</MemberName>
            <TeamPosition>
              Jej Wysokość poprosiła ją o utworzenie nowej Administracji. Pani
              Truss przyjęła ofertę Jej Królewskiej Mości i została mianowana
              Premierem i Pierwszym Lordem Skarbu Państwa. <br />
              <br />
            </TeamPosition>
          </TextWrapper>
        </TeamCard>
        <TeamCard>
          <CardImage src={img3} />
          <TextWrapper>
            <MemberName>rp.pl</MemberName>
            <TeamPosition>
              W ten sposób upodobało się Wszechmogącemu Bogu wyprowadzić z tego
              przejściowego życia ku Swojemu Bożemu Miłosierdziu zmarłego
              Najwyższego, Najpotężniejszego i Najwspanialszego Monarchę,
              Elżbietę II.
            </TeamPosition>
          </TextWrapper>
        </TeamCard>
        <TeamCard>
          <CardImage src={img4} />
          <TextWrapper>
            <MemberName>pap.pl</MemberName>
            <TeamPosition>
              Nasze myśli i modlitwy są z rodziną królewską w tym smutnym
              czasie. Dziękujemy za jej długie panowanie i wszystko, co
              osiągnęła w ciągu swoich 96 lat na tej ziemi. Modlimy się za
              naszego Króla i Królową Małżonkę.
            </TeamPosition>
          </TextWrapper>
        </TeamCard>
      </Wrapper>
    </Container>
  );
};

export default Teams;

const Container = styled.div`
  padding: 5%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TeamCard = styled.div`
  max-height: 350px;
  height: 100%;
  width: 280px;
  display: flex;
  margin: 1%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  -webkit-box-shadow: 0px -1px 15px -5px #000;
  box-shadow: 0px -1px 15px -5px #000;
`;

const CardImage = styled.img`
  overflow: hidden;
  height: 315px;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberName = styled.div`
  color: ${(props) => props.theme.colors.primary};
  margin: 5px 10px;
`;

const TeamPosition = styled.div`
  color: ${(props) => props.theme.colors.textDark};
  font-size: 13px;
  margin: 5px 10px;
`;
