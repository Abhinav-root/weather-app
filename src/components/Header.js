import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  margin: 0px;
  text-align: center;
  font-family: "Dancing Script", cursive;
  color: #ffffe6;
  font-size: 3.6rem;
`;

const Header = () => {
  return (
    <div>
      <H1>Weather App</H1>
    </div>
  );
};

export default Header;
