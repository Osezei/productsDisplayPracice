import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hero3 from "../Images/unsplash.jpg";

const Hero = () => {
  return (
    <Main className="container text-transform: capitalize">
      <section className="relative">
        <img src={hero3} alt="my-hero" className="image" />

        <div className="text-3xl md:text-5xl text-white font-bold">
          <div className="absolute bottom-40 left-10">
            <p className=" text-white">
              grab upto 50% off on <br />
              selected kicks
            </p>
            <Link
              to="/products"
              className="text-white text-sm bg-green-700 p-2 pr-4 pl-4 rounded-full font-medium text-transform: capitalize md:text-xl"
            >
              buy now
            </Link>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  .image {
  }
`;
