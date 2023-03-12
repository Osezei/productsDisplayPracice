import React from "react";
import AboutPic from "../Images/my_hero.png";
import styled from "styled-components";
import "animate.css";

const About = () => {
  return (
    <Main className="container">
      <div className="block lg:flex lg:py-5">
        <img
          src={AboutPic}
          alt="aboutPic"
          className="w-full animate__animated animate__slideInUp"
        />
        <div className="my-auto animate__animated animate__slideInDown">
          <h2 className="hidden lg:block text-center text-green-700 text-4xl font-semibold pb-2">
            About
          </h2>
          <p className=" py-5 lg:px-5 about-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            voluptate corporis laudantium illum odit cum veritatis nisi at! Sunt
            modi, vel possimus, saepe error, harum totam consequatur cupiditate
            ut qui provident asperiores quasi voluptate quas iure recusandae
            iusto praesentium repellendus! Excepturi tenetur repudiandae
            consequuntur enim qui numquam ab quo dicta? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cupiditate nihil illum vitae
            nobis totam impedit, earum id doloribus quaerat tenetur optio
            laudantium quod ratione provident. Tempore dolor et ipsa vero
            reiciendis at doloremque tempora quasi nesciunt dolore aliquam ad
            accusantium modi porro dicta distinctio illum, totam nulla, ratione
            dolorum quia.
          </p>
        </div>
      </div>
    </Main>
  );
};

export default About;

const Main = styled.div`
  .trans {
    transform: scaleY(0);
  }
`;
