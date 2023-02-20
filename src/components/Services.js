import React from "react";
import styled from "styled-components";
import { servicesOffer } from "../utils/Data";
import "../index.css";

const Services = () => {
  return (
    <Main className="container ">
      <h2 className="">Services</h2>
      <section className="">
        {servicesOffer.map((services) => {
          return (
            <article key={services.id} className=" ">
              <div className="">
                <h3 className="">{services.service}</h3>
                <p className="">{services.text}</p>
                <span className="">{services.icon}</span>
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  .box:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
