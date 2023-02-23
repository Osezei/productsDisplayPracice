import React from "react";
import AboutPic from "../Images/my_hero.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <section>
      <Header />
      <Navigation />
      <main className="container">
        <h3>About</h3>
        <div className="flex">
          <img src={AboutPic} alt="aboutPic" className="w-full" />

          <p className="p-10 mt-auto mb-auto">
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
      </main>
      <Footer />
    </section>
  );
};

export default About;
