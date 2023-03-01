import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import styled from "styled-components";

import { FaKickstarter } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { useGlobalContext } from "../context/context";
import { useUserContext } from "../userContext";

const Navigation = () => {
  // const { total_items } = useGlobalContext();
  // const [status, setStatus] = useState(false);
  // const { loginWithRedirect, myUser, logout } = useUserContext();
  // const handleChange = (e) => {
  //   setStatus(e.target.checked);
  //};
  return (
    <Main className="container">
      {/* <Link to="/" className="bg-green-700">
        <span>
          <FaKickstarter />
        </span>
        icks
      </Link>

      <label htmlFor="check" className="flex lg:hidden">
        <input
          type="checkbox"
          id="check"
          value={status}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link> */}
      <h1>Navigation</h1>
    </Main>
  );
};

export default Navigation;

const Main = styled.div`
  .image {
    width: 5%;
  }
`;
