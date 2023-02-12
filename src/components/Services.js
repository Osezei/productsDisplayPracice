import React from "react";
import styled from "styled-components";
import { servicesOffer } from "../utils/Data";
import { Link } from "react-router-dom";
import "../index.css";

const Services = () => {
  return (
    <Main className="container ">
      <h2 className="text-3xl textbold mt-4 mb-2 text-center text-green-700 text-5xl font-bold">
        Services
      </h2>
      <section className="grid grid-cols-3">
        {servicesOffer.map((services) => {
          return (
            <article className="text-center p-2 relative ">
              <div key={services.id} className="box p-5">
                <h3 className="text-xl font-bold capitalize text-gray-700">
                  {services.service}
                </h3>
                <p className="text-green-700 font-">{services.text}</p>
                <span className="absolute top-9 right-6 text-green-700">
                  {services.icon}
                </span>
              </div>
            </article>
          );
        })}
      </section>
    </Main>
  );
};

export default Services;

const Main = styled.div`
  .box {
    height: 14rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  .box:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
