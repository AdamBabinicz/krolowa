import React, { useState } from "react";
import TextBanner from "../textbanner/TextBanner";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardTitle,
  Description,
  Button,
} from "../styles/styled.Cards";
import "../hero/hero.css";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/13.png";
import img3 from "../../assets/4.svg";
import img4 from "../../assets/8.webp";
import img5 from "../../assets/14.png";
import img6 from "../../assets/15.png";
import img7 from "../../assets/16.png";

const InfoBoxes = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div id="monarchia">
      <TextBanner
        title={
          "W lutym 1952 roku po śmierci ojca, Elżbieta – wówczas 25-letnia – została królową siedmiu niezależnych krajów Wspólnoty:"
        }
        subtitle={"Niezależne kraje Wspólnoty"}
      />
      <Container>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Wielka Brytania</CardTitle>
            <Description>
              Zjednoczone Królestwo Wielkiej Brytanii i Irlandii Północnej (ang.
              United Kingdom of Great Britain and Northern Ireland) – unitarne
              państwo wyspiarskie w Europie Zachodniej. W skład Wielkiej
              Brytanii zalicza się Anglia, Walia i Szkocja położone na wyspie
              Wielka Brytania oraz Irlandia Północna leżąca w północnej części
              wyspy Irlandia. Na wyspie tej znajduje się jedyna granica lądowa
              Zjednoczonego Królestwa z innym państwem – Irlandią. Poza nią
              Wielka Brytania otoczona jest przez Ocean Atlantycki na zachodzie
              i północy, Morze Północne na wschodzie, kanał La Manche na
              południu i Morze Irlandzkie na zachodzie.
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
                <h3 className="services__modal-title">Panowanie</h3>
                <p className="services__modal-description">
                  Oprócz godności królowej Zjednoczonego Królestwa Wielkiej
                  Brytanii i Irlandii Północnej była również głową 14 innych
                  państw: Antigui i Barbudy, Australii, Bahamów, Belize,
                  Grenady, Kanady, Jamajki, Nowej Zelandii, Papui-Nowej Gwinei,
                  Saint Kitts i Nevis, Saint Lucia, Saint Vincent i Grenadyn,
                  Tuvalu i Wysp Salomona, które razem z Wielką Brytanią mają
                  status tzw. Commonwealth realm. Liczba państw, w których
                  panowała Elżbieta II zmieniała się podczas jej panowania.
                  Wszystkich państw, które uznawały ją za głowę państwa było 33.
                </p>
                <div className="services__modal-services grid">
                  <img src={img1} alt="..." />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Kanada</CardTitle>
            <Description>
              Państwo położone w Ameryce Północnej, rozciągające się od Oceanu
              Atlantyckiego na wschodzie do Oceanu Spokojnego na zachodzie i
              Oceanu Arktycznego na północy. Na południu i północnym zachodzie
              graniczy ze Stanami Zjednoczonymi, granice morskie: na północy z
              należącą do Danii Grenlandią (posiada również granicę lądową z
              Danią na wyspie Hansa) i na wschodzie z wyspami Saint-Pierre i
              Miquelon, wspólnotą zamorską Francji. Drugie państwo świata pod
              względem powierzchni (po Rosji) oraz 38. pod względem ludności.
              Kanada jest członkiem ONZ, NAFTA, Wspólnoty Narodów, Frankofonii,
              NATO, G7, APEC.
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
                <h3 className="services__modal-title">Kanada</h3>
                <p className="services__modal-description">
                  W 1867 cztery kolonie wchodzące w skład Brytyjskiej Ameryki
                  Północnej uchwaliły Konfederację Kanady i powołały do życia
                  nowe państwo – Kanadę. Stopniowy proces uniezależniania się od
                  Wielkiej Brytanii osiągnął punkt kulminacyjny w 1982, gdy
                  uchwalenie nowej Ustawy o Kanadzie (ang. Canada Act 1982, fr.
                  Loi de 1982 sur le Canada) zerwało ostatnie więzi zależności
                  od parlamentu brytyjskiego.
                </p>
                <div className="services__modal-services grid">
                  <img src={img2} alt="..." />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Australia</CardTitle>
            <Description>
              Państwo demokratyczne, położone na półkuli południowej, obejmujące
              kontynent Australia, wyspę Tasmanię i inne znacznie mniejsze wyspy
              na Oceanie Indyjskim i Spokojnym. Stolicą kraju jest Canberra,
              największym miastem jest Sydney. Jest szóstym pod względem
              powierzchni państwem świata i jedynym państwem na świecie
              obejmującym cały kontynent. Jest zamieszkiwane przez 25 mln osób,
              z czego 2/3 populacji mieszka w pięciu największych australijskich
              metropoliach.
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
                <h3 className="services__modal-title">Nowa Zelandia</h3>
                <p className="services__modal-description">
                  Podczas II wojny światowej Brytyjskie Imperium na Dalekim
                  Wschodzie przestało istnieć, a Wielka Brytania straciła
                  możliwość obrony swoich australijskich kolonii przed japońską
                  inwazją. Australijczycy zwrócili się więc o pomoc Stanów
                  Zjednoczonych, które zgodziły się bronić suwerenności Związku
                  Australijskiego. Po wojnie, w 1951 roku, w obliczu nowej
                  sytuacji geopolitycznej Australia zawarła porozumienie obronne
                  z USA oraz Nową Zelandią zwane jako Pakt Bezpieczeństwa
                  Pacyfiku.
                </p>
                <div className="services__modal-services grid">
                  <img src={img3} alt="..." />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Nowa Zelandia</CardTitle>
            <Description>
              Kraj Długiej Białej Chmury – państwo wyspiarskie położone na
              południowo-zachodnim Pacyfiku, w Australazji, na południowy wschód
              od Australii. Składa się z dwóch głównych wysp (Północnej i
              Południowej) oraz szeregu mniejszych, w tym wyspy Stewart i wysp
              Chatham. W skład Nowej Zelandii (a dokładniej w skład królestwa
              stowarzyszeniowego Nowej Zelandii, połączonego unią personalną z
              Wielką Brytanią i innymi królestwami stowarzyszeniowymi) wchodzą
              również terytoria stowarzyszone z Nową Zelandią lub od niej
              zależne: Wyspy Cooka i Niue, które są samorządne oraz Tokelau i
              Dependencja Rossa. Stolicą jest Wellington, natomiast największym
              miastem jest Auckland, w którym mieszka 1,5 mln osób (ok. 29%
              ludności państwa).
            </Description>
            <Button onClick={() => toggleTab(4)}>Czytaj więcej</Button>
            <div
              className={
                toggleState === 4
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">Państwo</h3>
                <p className="services__modal-description">
                  Nowa Zelandia jest monarchią konstytucyjną bez konstytucji
                  (oficjalny status dominium brytyjskiego) o
                  parlamentarno-gabinetowym systemie rządów, członkiem
                  brytyjskiej Wspólnoty Narodów. Kraj nie posiada konstytucji w
                  rozumieniu europejskim. Podobnie jak w Wielkiej Brytanii, za
                  ustawę zasadniczą obowiązuje zbiór aktów prawnych uchwalanych
                  w różnym czasie i często sprzecznych ze sobą. Głową państwa
                  jest brytyjski monarcha, który jest reprezentowany przez
                  Gubernatora generalnego. Jest on wybierany w porozumieniu
                  monarchy i rządu Nowej Zelandii na pięcioletnią kadencję.
                </p>
                <div className="services__modal-services grid">
                  <img src={img4} alt="..." />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>RPA</CardTitle>
            <Description>
              Republika Południowej Afryki, RPA (ang. Republic of South Africa,
              afr. Republiek van Suid-Afrika) – państwo położone na południowym
              krańcu Afryki, u styku Oceanu Atlantyckiego i Indyjskiego. Zajmuje
              powierzchnię 1 219 090 km² i liczy 56 978 635 mieszkańców (2021).
              Państwo jest republiką parlamentarną. Funkcję stolicy pełnią trzy
              miasta: Pretoria (siedziba władzy wykonawczej), Kapsztad (siedziba
              władzy ustawodawczej) i Bloemfontein (siedziba władzy
              sądowniczej). Największym miastem jest Johannesburg. Walutą jest
              rand. Południowa Afryka jest krajem wieloetnicznym i
              wielokulturowym. Około 80% społeczeństwa stanowią czarnoskórzy, 9%
              koloredzi a 8% biali. Jedenaście języków ma status języka
              urzędowego (afrikaans, angielski, xhosa, ndebele, pedi, soto,
              suazi, tsonga, tswana, venda, zulu). Znaczna część społeczeństwa
              jest wielojęzyczna. Język angielski używany jest na szeroką skalę
              w administracji publicznej, mediach i świecie biznesu.
            </Description>
            <Button onClick={() => toggleTab(5)}>Czytaj więcej</Button>
            <div
              className={
                toggleState === 5
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">Historia</h3>
                <p className="services__modal-description">
                  W 1931 roku ogłoszono niepodległość państwa. Razem z Wielką
                  Brytanią, ZPA uczestniczyło w II wojnie światowej po stronie
                  alianckiej, wypowiadając wojnę Niemcom 6 września 1939 roku. W
                  okresie wojny grupy białych rasistów w proteście przeciwko
                  udziałowi RPA w wojnie przeciwko Niemcom przeprowadziły
                  zamachy terrorystyczne na cele rządowe.
                </p>
                <div className="services__modal-services grid">
                  <img src={img5} alt="..." />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Pakistan</CardTitle>
            <Description>
              Państwo w południowej części Azji, położone wzdłuż Indusu i
              liczące ponad 200 milionów mieszkańców. Pakistan odłączył się od
              Indii Brytyjskich w 1947. Gdy Brytyjczycy zorganizowali na
              przełomie 1945 i 1946 wybory do władz ustawodawczych, Liga
              Muzułmańska zdobyła większość w rządach Bengalu i Sindhu, zaś w
              Pendżabie utworzyła rząd koalicyjny. Tym samym roszczenia
              muzułmanów do stworzenia państwa islamskiego stały się
              uzasadnione. W 1947 ostatni wicekról Indii, lord Louis
              Mountbatten, opracował plan, na podstawie którego kolonia
              brytyjska podzielona została na dwa suwerenne państwa: Indie i
              Pakistan. 14 sierpnia 1947 Pakistan uzyskał niepodległość (do 1956
              jako dominium brytyjskie z generalnym gubernatorem reprezentującym
              brytyjskiego monarchę; w 1956 proklamowano republikę).
            </Description>
            <Button onClick={() => toggleTab(6)}>Czytaj więcej</Button>
            <div
              className={
                toggleState === 6
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">Z dziejów</h3>
                <p className="services__modal-description">
                  W latach 1971–1977 premierem Pakistanu był Zulfikar Ali
                  Bhutto. W okresie rządów Bhutto Pakistan stał się „Republiką
                  Islamską” z parlamentarną formą rządów i zapoczątkował reformę
                  ograniczającą własność ziemi i przejęcie przez rząd ponad
                  miliona akrów feudałów które zostały rozdystrybuowane
                  bezrolnym chłopom.
                </p>
                <div className="services__modal-services grid">
                  <img src={img6} alt="..." />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Sri Lanka (Cejlon)</CardTitle>
            <Description>
              Państwo w Azji Południowej, na wyspie Cejlon (pod tą nazwą znane
              do 1972) wraz z mniejszymi przybrzeżnymi wyspami. Oddzielone od
              Półwyspu Indyjskiego Cieśniną Palk i Zatoką Mannar. Od wschodu
              oblewane przez Zatokę Bengalską, od południa otwartym Oceanem
              Indyjskim. Największe miasta kraju to: Kolombo, Dehiwala,
              Moratuwa, Dżafna, Kandy, Galle, Kalmunai. Sri Lanka jest
              demokratyczno-socjalistyczną republiką w ramach Wspólnoty Narodów.
              Zgodnie z konstytucją z 16 sierpnia 1978 głową państwa jest
              prezydent, który stoi na czele rządu i jest naczelnym dowódcą
              armii. Wybierany jest w wyborach powszechnych maksymalnie na dwie
              6-letnie kadencje. Prezydent, spośród członków parlamentu,
              powołuje premiera i w konsultacji z nim ministrów rządu. Premier
              zastępuje prezydenta we wszystkich przypadkach uniemożliwiających
              pełnienie przez niego swojej funkcji.
            </Description>
            <Button onClick={() => toggleTab(7)}>Czytaj więcej</Button>
            <div
              className={
                toggleState === 7
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">Cejlon</h3>
                <p className="services__modal-description">
                  Nazwa państwa Sri Lanka, przyjęta w 1972 (wcześniej jako
                  Cejlon), oznacza w sanskrycie „olśniewający kraj”. Obecna
                  nazwa jest współczesną adaptacją nazwy występującej w
                  Ramajanie, gdzie wyspa znana jest jako Lanka. W Ramajanie
                  wyspa znana jest także jako Lankadweepa (dwepa – wyspa) oraz
                  Lakdiva (diva – wyspa). Późniejszą tradycyjną nazwą była
                  Lakbima. Lak to skrót od Lanka. Podobną etymologię nazwy wyspy
                  ma tamilska İlankai.
                </p>
                <div className="services__modal-services grid">
                  <img src={img7} alt="..." />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default InfoBoxes;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: ${(props) => props.theme.colors.bgDefault};
`;
