import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hero3 from "../Images/unsplash.jpg";

const Hero = () => {
  return (
    <Main className="container text-transform: capitalize static">
      <section className="relative">
        <img src={hero3} alt="my-hero" className="image" />

        <div className="sm:text-3xl md:text-5xl text-white font-bold">
          <div className="absolute bottom-40 left-3">
            <p className=" text-white">
              grab upto 50% off on <br />
              selected kicks
            </p>
          </div>
          <Link
            to="/products"
            className="absolute bottom-28 left-3 text-white sm:text-sm bg-green-700 p-2 pr-4 pl-4 rounded-full font-medium text-transform: capitalize lg:text-xl"
          >
            buy now
          </Link>
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
