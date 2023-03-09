import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import styled from "styled-components";
import "../index.css";

import { FaKickstarter } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { useGlobalContext } from "../context/context";
import { useUserContext } from "../userContext";

const Navigation = () => {
  const { total_items } = useGlobalContext();
  const [status, setStatus] = useState(false);
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const handleChange = (e) => {
    setStatus(e.target.checked);
  };
  return (
    <Main className="container flex justify-between text-center py-2 text-green-700">
      <div className="flex">
        <Link to="/" className=" flex items-center text-2xl font-semibold">
          <span className="text-4xl animate__animated animate__fadeInLeft">
            <FaKickstarter />
          </span>
          icks
        </Link>
      </div>
      {/* {set the link buttons to be active when clicked to avoid setting about and contact titles} */}
      <div className="flex my-auto text-xl font-semibold">
        <Link to="/about" className="mr-4 title">
          About
        </Link>
        <Link to="/contact" className="title">
          Contact
        </Link>
      </div>

      <div className="text-4xl">
        <FiUser />
      </div>
    </Main>
  );
};

export default Navigation;

const Main = styled.div`
  .title {
    position: relative;
  }

  .title::after {
    content: " ";
    position: absolute;
    bottom: -1;
    left: 0;
    display: block;
    height: 5px;
    width: 0;
    background: #288f5a;
    transition: 0.3s;
  }
  .title:hover::after {
    width: 100%;
    left: 0;
  }
`;
