import React from "react";
import styled from "styled-components";
import BgImage from "./assets/bg.jpg";
import Header from "./components/Header";
import Weather from "./components/Weather";

const Container = styled.div`
  background: url(${BgImage});
  height: 100vh;
  background-size: cover;
`;

const App = () => {
  return (
      <Container>
          <Header />
          <Weather />
      </Container>
  );
};

export default App;
