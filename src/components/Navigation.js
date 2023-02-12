import React from "react";
import logo from "../Images/logo.png";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Main className="container">
      <div>
        <img src={logo} alt="logo-name" className="image" />
      </div>
    </Main>
  );
};

export default Navigation;

const Main = styled.div`
  .image {
    width: 5%;
  }
`;
