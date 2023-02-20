import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hero3 from "../Images/unsplash.jpg";

const Hero = () => {
  return (
    <Main className="container">
      <div className="relative text-white">
        <img src={hero3} alt="my-hero" className="" />

        <div className="absolute bottom-14 lg:bottom-52 left-10">
          <p className="text-3xl lg:text-5xl font-semibold capitalize mb-3">
            grab upto 50% off on <br />
            selected kicks
          </p>
          <Link
            to="/products"
            className="text-xl lg:text-2xl font-semibold capitalize bg-green-700 px-4 py-2 rounded-full"
          >
            buy now
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  .image {
  }
`;
