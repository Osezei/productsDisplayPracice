import React from "react";
import { servicesOffer } from "../utils/Data";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import "../index.css";

const Services = () => {
  return (
    <section>
      {servicesOffer.map((services) => {
        return (
          <div key={services.id}>
            <h3>{services.service}</h3>
            <p>{services.text}</p>
            <span>{services.icon}</span>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
