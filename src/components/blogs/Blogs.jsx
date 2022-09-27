import React, { useState } from "react";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardTitle,
  Description,
  Button,
  CardImage,
} from "../styles/styled.Cards";
import img from "../../assets/2.png";
import img2 from "../../assets/6.png";
import img3 from "../../assets/17.png";
import TextBanner from "../textbanner/TextBanner";
import "../hero/hero.css";
import img1 from "../../assets/13.webp";
import img4 from "../../assets/14.webp";
import img5 from "../../assets/23.jpg";

const Blogs = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div id="ciekawostki">
      <TextBanner title={"Z życia Elżbiety II"} subtitle={"Ciekawostki"} />
      <Container>
        <Card>
          <CardContent padding={"0.5%"}>
            <CardImage src={img} />
            <CardTitle>Królowa w reklamie</CardTitle>
            <Description>
              Jeden z filmów o Bondzie nosi tytuł „Nigdy nie mów nigdy”. To
              wyrażenie pasuje doskonale do historii o filmie promującym
              igrzyska olimpijskie w Londynie w 2012 roku, w którym Daniel Craig
              wystąpił u boku królowej Elżbiety II i wspólnie promowali oni
              wspomnianą imprezę.
            </Description>
            <Button onClick={() => toggleTab(1)}>Czytaj więcej</Button>
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
                <h3 className="services__modal-title">Elżbieta II i Bond</h3>
                <p className="services__modal-description">
                  Film z królową Elżbietą II i Jamesem Bondem w głównych rolach
                  został wyemitowany podczas ceremonii otwarcia Igrzysk
                  Olimpijskich. Za reżyserię odpowiadał Danny Boyle, a zdjęcia
                  kręcone były w Pałacu Buckingham. Początek wideo pokazuje
                  Bonda (w tej roli Daniel Craig), który podjeżdża pod Pałac
                  Buckingham limuzyną i eskortuje królową Elżbietę II do
                  śmigłowca.
                </p>
                <div className="services__modal-services grid">
                  <img src={img1} alt="..." />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"0.5%"}>
            <CardImage src={img2} />
            <CardTitle>Stroje królowej</CardTitle>
            <Description>
              Przeglądając książkę autorstwa brytyjskiej dziennikarki Sali
              Hughes „Our Rainbow Queen”, poświęconą stylowi Jej Wysokości,
              szybko orientujemy się, że żaden kolor jej nie straszny, nawet
              trudna w noszeniu jaskrawa żółć czy neonowa zieleń.
            </Description>
            <Button onClick={() => toggleTab(2)}>Czytaj więcej</Button>
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
                <h3 className="services__modal-title">
                  Różne okazje, te same stylizacje
                </h3>
                <p className="services__modal-description">
                  Osobista garderobiana królowej, Angela Kelly, opowiadała, że
                  królewskie ubrania były zawsze starannie przemyślane, a czas
                  życia stroju mógł wynosić nawet 25 lat. W książce „The Other
                  Side Of The Coin: The Queen, The Dresser And The Wardrobe”
                  Kelly napisała: „Jej Królewska Mość jest zawsze oszczędna i
                  lubi, gdy jej ubrania nadają się do ponownego użycia.
                </p>
                <div className="services__modal-services grid">
                  <img src={img4} alt="..." />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"0.5%"}>
            <CardImage src={img3} />
            <CardTitle>Gesty królowej</CardTitle>
            <Description>
              Za pośrednictwem torebki królowa komunikuje się ze swoimi
              współpracownikami. Przykład? Kiedy monarchini przekłada torebkę z
              lewej ręki do prawej – to znak, że chce zakończyć spotkanie.
              <br /> <br />
            </Description>
            <Button onClick={() => toggleTab(3)}>Czytaj więcej</Button>
            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">Torebka Elżbiety II</h3>
                <p className="services__modal-description">
                  Królowa Elżbieta II miała kiedyś powiedzieć, że bez torebki
                  nie czuje się ubrana. Jednym z najbardziej rozpoznawalnych i
                  stałych elementów outfitu monarchini była czarna torebka marki
                  Launer London. Torebka od Launer London towarzyszyła królowej
                  aż do końca - także na kilka dni przed jej śmiercią, podczas
                  mianowania Liz Truss premierem Wielkiej Brytanii.
                </p>
                <div className="services__modal-services grid">
                  <img src={img5} alt="..." />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Blogs;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
