import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const Contact = () => {
  return (
    <section className="container page">
      {/* <div className="text-center">
        <h2 className="font-semibold text-3xl text-green-700">Contact</h2>
      </div> */}
      <div className="pt-16">
        <p className="text-2xl lg:px-24 lg:text-center">
          Hi, I'm Osezei; a{" "}
          <span className="text-green-700 font-semibold">
            Frontend Developer
          </span>{" "}
          from Nigeria.This site was buit with love using React, tailwind, css
          and html.
        </p>
        <div className="pt-16 text-center">
          <h3 className="pb-10 uppercase text-xl text-text-color mb-2 text-green-700">
            Send me a message
          </h3>
          <div className="animate__animated animate__slideInUp">
            <a
              className=" text-5xl lg:text-6xl font-semibold text-text-color underline underline-offset-4 mail "
              href="mailto:john.osezei@yahoo.com"
              target="_blank"
              rel="noreferrer"
            >
              john.osezei@yahoo.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
