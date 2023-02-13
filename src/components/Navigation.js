import React from "react";
import logo from "../Images/logo.png";
import styled from "styled-components";

import { FaKickstarter } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";

const Navigation = () => {
  return (
    <Main className="container">
      <h3 className="text-4xl text-green-700">
        <FaKickstarter />
      </h3>
    </Main>
  );
};

export default Navigation;

const Main = styled.div`
  .image {
    width: 5%;
  }
`;
