import React, { useState } from "react";
import styled from "styled-components";
import heroImage from "../../assets/9.png";
import "./hero.css";
import img1 from "../../assets/12.png";
import img2 from "../../assets/11.jpg";

const Hero = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Container id="start">
      <Left>
        <Title>Siedem dekad Elżbiety II</Title>
        <Description>
          Jej panowanie, które trwało 70 lat i 214 dni jest najdłuższym ze
          wszystkich brytyjskich monarchów i najdłuższą odnotowaną w historii
          kobietą głową państwa.
        </Description>
        <ButtonsContainer>
          <Button onClick={() => toggleTab(1)}>Czytaj</Button>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Elżbieta II</h3>
              <p className="services__modal-description">
                Elżbieta II (ang. Elizabeth Alexandra Mary; ur. 21 kwietnia 1926
                w Londynie, zm. 8 września 2022 w Balmoral) – królowa
                Zjednoczonego Królestwa Wielkiej Brytanii i Irlandii Północnej z
                dynastii Windsorów od 6 lutego 1952 (koronowana 2 czerwca 1953)
                do 8 września 2022.
              </p>
              <ul className="services__modal-services">
                <img src={img1} alt="..." />
              </ul>
            </div>
          </div>

          <Button onClick={() => toggleTab(2)}>Więcej</Button>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Początki</h3>
              <p className="services__modal-description">
                Jej ojciec wstąpił na tron w 1936 r. po abdykacji swojego brata,
                króla Edwarda VIII, czyniąc Elżbietę pretendentką do tronu.
                Kształciła się prywatnie w domu i zaczęła podejmować obowiązki
                publiczne podczas II wojny światowej, służąc w Pomocniczej
                Służbie Terytorialnej.
              </p>
              <ul className="services__modal-services grid">
                <img src={img2} alt="..." />
              </ul>
            </div>
          </div>
        </ButtonsContainer>
      </Left>
      <Right>
        <Image src={heroImage} alt="Siedem" />
      </Right>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  height: 90%;
  background: ${(props) => props.theme.colors.bgDefault};

  @media only screen and (max-width: 600px) {
    height: 60%;
  }

  @media only screen and (min-width: 600px) {
    height: 50%;
  }

  @media only screen and (min-width: 992px) {
    height: 80%;
  }
`;

const Left = styled.div`
  width: 60%;
  background: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    width: 50%;
  }

  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;

const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 30px;
  }

  @media only screen and (min-width: 600px) {
    width: 85%;
    font-size: 30px;
  }

  @media only screen and (min-width: 992px) {
    width: 85%;
  }
`;

const Description = styled.p`
  width: 70%;
  font-size: 20px;
  margin-bottom: 2%;
  color: ${(props) => props.theme.colors.textDark};

  @media only screen and (max-width: 600px) {
    width: 80%;
    text-align: center;
  }

  @media only screen and (min-width: 600px) {
    width: 70%;
  }

  @media only screen and (min-width: 992px) {
    width: 70%;
  }
`;

const Right = styled.div`
  width: 40%;
  background: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 500px;
  background: ${(props) => props.theme.colors.bgDefault};

  @media only screen and (min-width: 600px) {
    width: 400px;
  }

  @media only screen and (min-width: 992px) {
    width: 500px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  margin-left: 5px;
  background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.bgLight} 50%,
      ${(props) => props.theme.colors.bgSecondary} 50%
    )
    right bottom/200% 100%;
  transition: all 0.5s ease-out;
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;

  &:hover {
    color: ${(props) => props.theme.colors.bgPrimary};
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-position: left bottom;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    padding: 10px 25px;
  }

  @media only screen and (min-width: 600px) {
    padding: 10px 30px;
  }

  @media only screen and (min-width: 992px) {
    padding: 10px 30px;
  }
`;
