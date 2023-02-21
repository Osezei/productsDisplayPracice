import React from "react";
import { BsTelephone } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import styled from "styled-components";

const Header = () => {
  return (
    <Main className="bg-green-700">
      <div className="container flex justify-between  font-normal text-sm text-white pt-2 pb-2">
        <div className="hidden lg:flex justify-between">
          <span className="pr-2 icon-arrangement">
            <BsTelephone />
          </span>
          <p>08055223390</p>
        </div>
        <div className="flex justify-between ml-auto mr-auto">
          <p className="pr-3 ">Get 50% Off on Selected Items</p> |{" "}
          <p className="pl-3">Shop Now</p>
        </div>
        <div className="hidden lg:flex justify-between">
          <p className="pr-1">Eng</p>
          <span className="icon-arrangement pr-1">
            <BsArrowDownShort />
          </span>
        </div>
        <div className="hidden lg:flex justify-between">
          <p className="pr-1">Location </p>
          <span className="icon-arrangement">
            <BsArrowDownShort />
          </span>
        </div>
      </div>
    </Main>
  );
};

export default Header;

const Main = styled.div`
  text-align: center;

  .icon-arrangement {
    margin-top: auto;
    margin-bottom: auto;
  }
`;
