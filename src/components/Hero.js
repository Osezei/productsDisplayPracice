import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hero3 from "../Images/unsplash.jpg";

const Hero = () => {
  return (
    <Main className="container text-transform: capitalize">
      <img src={hero3} alt="my-hero" className="image relative w-full h-full" />

      <div className=" text-5xl font-bold absolute w-full">
        <p className="absolute left-10 bottom-44 text-white">
          grab upto 50% off on <br />
          selected kicks
        </p>
        <Link
          to="/products"
          className="text-white bg-green-700 p-2 pr-4 pl-4 rounded-full text-xl font-medium text-transform: capitalize absolute left-10 bottom-28"
        >
          buy now
        </Link>
      </div>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  .image {
  }
  .box {
    transform: translate(-50%, -50%);
  }
`;
