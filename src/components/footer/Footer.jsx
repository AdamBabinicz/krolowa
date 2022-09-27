import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Container>
        <Description>
          <Title>Zawartość torebki Elżbiety II</Title>
          Elżbieta II była bardzo rodzinną osobą i choć ślubowała służbę
          krajowi, z czego doskonale się wywiązywała, rodzina zawsze była dla
          niej ważna, dlatego nosiła w torebce zdjęcia najbliższych. W
          królewskiej torebce nie mogło też zabraknąć czegoś na kształt amuletów
          - były to figurki koni oraz psów.
        </Description>
        <MenuItems>
          <Title>Menu</Title>
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
        </MenuItems>
        <MenuItems>
          <Title>Linki</Title>
          <Menu>
            <a
              href="https://www.youtube.com/watch?v=a2Ox_XRy_Fc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuItem>Film</MenuItem>
            </a>
            <a
              href="https://pl.wikipedia.org/wiki/El%C5%BCbieta_II"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuItem href="#">Artykuł</MenuItem>
            </a>
          </Menu>
        </MenuItems>
      </Container>
      <CopyRight>Radom 2022 - {new Date().getFullYear()}.</CopyRight>
    </>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  color: ${(props) => props.theme.colors.bgDefault};
  background: ${(props) => props.theme.colors.light};
  background: black;
  width: 100%;
  margin-top: 5%;
  min-height: 40vh !important;

  @media only screen and (max-width: 600px) {
    width: 100%;
    /* height: 100vh !important; */
    padding-bottom: 5%;
  }

  @media only screen and (min-width: 600px) {
    height: 20% !important;
  }

  @media only screen and (min-width: 992px) {
    height: 30% !important;
  }
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.bgDefault};
  font-weight: bold;
  font-size: 20px;
  padding: 2%;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.textDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  width: 30%;
  text-align: left !important;

  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    font-size: 15px;
    padding: 2%;
  }

  @media only screen and (min-width: 600px) {
    width: 40%;
    font-size: 18px;
    text-align: center;
  }

  @media only screen and (min-width: 992px) {
    width: 30%;
    font-size: 20px;
    text-align: center;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.bgDefault};
  }
`;

const MenuItems = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  /* flex-direction: column; */
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background: ${(props) => props.theme.colors.textDark};
  color: ${(props) => props.theme.colors.bgDefault};
  font-size: 20px;
`;
