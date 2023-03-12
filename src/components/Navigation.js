import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";

import { BsCart4 } from "react-icons/bs";

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
    <Main className="container relative flex justify-between text-center py-2 text-green-700">
      <div className="">
        <Link to="/" className=" flex items-center text-2xl font-semibold">
          <span className="text-4xl animate__animated animate__fadeInLeft">
            <FaKickstarter />
          </span>
          icks
        </Link>
      </div>
      <div>
        <div>
          <label htmlFor="check" className="flex menu lg:hidden">
            <input
              type="checkbox"
              id="check"
              value={status}
              onChange={(e) => handleChange(e)}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div>
          {status && (
            <div className="text-xl bg-white font-semibold w-[20rem] absolute top-[5rem] right-[2rem] z-40 shadow-lg">
              <div className="grid grid-cols-1 items-center gap-y-2 pt-2">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                {myUser && <Link to="/checkout">Checkout</Link>}
              </div>
              <div className="flex justify-center py-3 text-2xl ">
                <Link to="/cart" className="flex items-center pr-10">
                  Cart
                  <span className="relative">
                    <BsCart4 className="ml-1" />
                    <span className="bg-green-700 text-white absolute top-[-10px] right-[-10px] text-lg p-1 w-7 h-7 flex items-center justify-center rounded-full">
                      {total_items}
                    </span>
                  </span>
                </Link>
                {myUser ? (
                  <button
                    className="flex"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Logout
                    <span>
                      <FiUserCheck />
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="flex"
                    onClick={loginWithRedirect}
                  >
                    Login{" "}
                    <span>
                      <FiUser className="ml-1" />
                    </span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden lg:flex my-auto text-xl font-semibold">
        <Link to="/about" className="mr-4 title">
          About
        </Link>
        <Link to="/contact" className="title">
          Contact
        </Link>
        {myUser && <Link to="/checkout">Checkout</Link>}
      </div>

      <div className="hidden lg:flex text-2xl font-semibold">
        <Link to="/cart" className="flex items-center">
          Cart
          <span className="relative">
            <BsCart4 />
            <span className="bg-green-700 text-white absolute top-[-12px] right-[-15px] text-lg p-1 w-7 h-7 flex items-center justify-center rounded-full">
              {total_items}
            </span>
          </span>
        </Link>
        {myUser ? (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
            <span>
              <FiUserCheck />
            </span>
          </button>
        ) : (
          <button
            onClick={loginWithRedirect}
            className="pl-5 flex items-center"
          >
            Login
            <span className="pl-1">
              <FiUser />
            </span>
          </button>
        )}
      </div>
      {/* <div>
        {status && (
          <div className="text-2xl bg-white font-semibold w-[20rem] absolute top-[5rem] right-[2rem] z-40 shadow-lg">
            <div className="grid grid-cols-1 items-center gap-y-2">
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
              {myUser && <Link to="/checkout">Checkout</Link>}
            </div>
            <div>
              <Link to="/cart" className="flex text-2xl items-center">
                Cart
                <span className="relative">
                  <BsCart4 />
                  <span className="bg-green-700 text-white absolute top-[-16px] right-[-15px] text-lg p-1 w-7 h-7 flex items-center justify-center rounded-full">
                    {total_items}
                  </span>
                </span>
              </Link>
              {myUser ? (
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Logout
                  <span>
                    <FiUserCheck />
                  </span>
                </button>
              ) : (
                <button type="button" className="" onClick={loginWithRedirect}>
                  Login{" "}
                  <span>
                    <FiUser />
                  </span>
                </button>
              )}
            </div>
          </div>
        )}
      </div> */}
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
