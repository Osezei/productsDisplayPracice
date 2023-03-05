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
    <Main className="container flex justify-between">
      <div className="flex">
        <Link to="/" className=" flex items-center text-xl font-semibold">
          <span className="text-2xl">
            <FaKickstarter />
          </span>
          icks
        </Link>
      </div>

      <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <FiUser />
      </div>
    </Main>
  );
};

export default Navigation;

const Main = styled.div``;
