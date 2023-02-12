import React from "react";
import styled from "styled-components";
import hero from "../Images/my_hero.png";

const Hero = () => {
  return (
    <Main className="container text-green-700 text-transform: capitalize">
      <div className="relative">
        <img src={hero} alt="my-hero" className="image" />
      </div>
      <div className="text-5xl font-bold absolute bottom-2 left-20">
        <p>
          grab upto 50% off on <br />
          selected kicks
        </p>
        <button className="text-white bg-green-700 p-2 pr-4 pl-4 rounded-full text-xl font-medium text-transform: capitalize">
          buy now
        </button>
      </div>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  .image {
    width: 100%;
    height: 40rem;
  }
`;
