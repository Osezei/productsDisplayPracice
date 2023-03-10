import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hero3 from "../Images/unsplash.jpg";
import "animate.css";

const Hero = () => {
  return (
    <Main className="container">
      <div className="relative text-white">
        <img
          src={hero3}
          alt="my-hero"
          className="animate__animated animate__slideInUp"
        />

        <div className="absolute bottom-14 lg:bottom-52 left-10 animate__animated animate__slideInDown">
          <p className="text-3xl lg:text-5xl font-semibold capitalize mb-10">
            grab upto 50% off on <br />
            selected kicks
          </p>
          <Link
            to="/contact"
            className="button text-sm lg:text-lg font-medium capitalize bg-green-700 px-6 py-4 rounded-full hover:text-green-700 hover:bg-white"
          >
            get in touch
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
