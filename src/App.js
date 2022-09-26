import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import InfoBoxes from "./components/infoboxes/InfoBoxes";
import InfoSectionOne from "./components/infoSectionOne/InfoSectionOne";
import InfoSectionTwo from "./components/infoSectionTwo/InfoSectionTwo";
import InfoSectionThree from "./components/infoSectionThree/InfoSectionThree";
import Teams from "./components/team/Teams";
import InfoSectionFour from "./components/infoSectionFour/InfoSectionFour";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
import CookieConsent from "react-cookie-consent";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <ThemeProvider theme={mode ? darktheme : theme}>
      <GlobalStyles />
      <Container>
        <Navbar setMode={setMode} mode={mode} />
        <Hero />
        <InfoBoxes />
        <InfoSectionOne />
        <InfoSectionTwo />
        <InfoSectionThree />
        <InfoSectionFour />
        <Teams />
        <Blogs />
        <Footer />
      </Container>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </ThemeProvider>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Splash&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  body {
    background: ${(props) => props.theme.colors.bgDefault};
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  color: ${(props) => props.theme.colors.bgDefault};
  height: 100vh;
  width: 100%;
`;

const theme = {
  colors: {
    primary: "darkBlue",
    secondary: "tomato",
    light: "black",
    text: "snow",
    textDark: "gray",
    bgDefault: "white",
    bgPrimary: "darkBlue",
    bgSecondary: "darkBlue",
    bgLight: "aliceBlue",
    hoverColor: "aliceBlue",
  },
};

const darktheme = {
  colors: {
    primary: "white",
    secondary: "tomato",
    light: "yellow",
    text: "snow",
    textDark: "gray",
    bgDefault: "black",
    bgPrimary: "black",
    bgSecondary: "black",
    bgLight: "aliceBlue",
    hoverColor: "darkBlue",
  },
};
