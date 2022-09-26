import React, { useState } from "react";
import styled from "styled-components";
import img from "../../assets/10.png";
import img1 from "../../assets/15.jpg";
import "../hero/hero.css";

const Navbar = ({ mode, setMode }) => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Container>
      <Left>
        <Logo>
          <Image src={img} alt="..." />
        </Logo>
      </Left>
      <Center>
        <Menu>
          <a href="#start">
            <MenuItem>Start</MenuItem>
          </a>
          <a href="#monarchia">
            <MenuItem>Monarchia</MenuItem>
          </a>
          <a href="#panowanie">
            <MenuItem>Panowanie</MenuItem>
          </a>
          <a href="#hobby">
            <MenuItem>Hobby</MenuItem>
          </a>
          <a href="#pożegnanie">
            <MenuItem>Pożegnanie</MenuItem>
          </a>
          <a href="#ciekawostki">
            <MenuItem>Ciekawostki</MenuItem>
          </a>
        </Menu>
      </Center>
      <Right>
        <Button onClick={() => toggleTab(1)}>Zobacz</Button>
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
            <h3 className="services__modal-title">Elżbieta II (1926 - 2022)</h3>
            <p className="services__modal-description">
              Wiele kobiet mogłoby zaczerpnąć od Elżbiety II jej kilka trików -
              na przykład ten, że zawsze miała przy sobie haczyk na torebkę. To
              jednak nie wszystko! Podobno królowa zawsze podróżowała z własnym
              zapasem krwi - na wypadek, gdyby konieczna była transfuzja poza
              jej miejscem zamieszkania. Musicie przyznać, że to niezwykle
              pragmatyczne podejście...
            </p>
            <div className="services__modal-services">
              <img src={img1} alt="..." />
            </div>
          </div>
        </div>
        <DarkMode onClick={() => setMode(!mode)} />
      </Right>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.bgDefault};

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 8%;
  }

  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 5%;
  }

  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 10%;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

const Center = styled.div`
  display: flex;
  flex: 2;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
  }

  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.div`
  /* font-size: 20px;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer; */
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media only screen and (min-width: 600px) {
    font-size: 15px;
    margin-right: 15px;
  }

  @media only screen and (min-width: 992px) {
    margin-right: 30px;
    font-size: 15px;
  }
`;

const Button = styled.button`
  font-weight: bold;
  background: ${(props) => props.theme.colors.bgPrimary};
  border: 2px solid ${(props) => props.theme.colors.text};
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  padding: 10px 20px;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.bgLight};
    color: ${(props) => props.theme.colors.bgPrimary};
    border: 2px solid darkblue;
  }

  @media only screen and (min-width: 600px) {
    padding: 8px 15px;
  }

  @media only screen and (min-width: 992px) {
    padding: 10px 20px;
  }
`;

const DarkMode = styled.div`
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: ${(props) => props.theme.colors.light};
  height: 30px;
  width: 30px;
  border-radius: 100%;
  cursor: pointer;
`;
