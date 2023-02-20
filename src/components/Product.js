import React from "react";
import { footWears } from "../utils/Data";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = () => {
  return (
    <Main className="container ">
      <div>
        <h2 className="text-2xl lg:text-3xl textbold text-white bg-green-700 font-bold text-center p-2">
          Features
        </h2>
      </div>
      <section className="grid grid-cols-3 relative gap-2 place-items-center ">
        {footWears.slice(4, 7).map((footwear) => {
          return (
            <article key={footwear.id} className="picture-container p-10 ">
              <div className="overlay">
                <Link to={`/products/${footwear.id}`}>
                  <h4 className="font-bold text-3xl text-green-700 ">
                    {footwear.name}
                  </h4>
                  <h5 className="font-bold text-xl text-white text-center">
                    ${footwear.price}
                  </h5>
                </Link>
              </div>
              <div className="image-container">
                <img
                  className="image w-3/4"
                  src={footwear.image}
                  alt={footwear.name}
                />
              </div>
            </article>
          );
        })}
      </section>
    </Main>
  );
};

export default Product;
const Main = styled.article`
  .picture-container {
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s;
    background-color: rgba(0, 0, 0, 0.9);
  }
  .overlay:hover {
    opacity: 1;
  }
  .overlay > * {
    transform: translateY(20px);
    transition: transform 0.25s;
  }
  .overlay:hover > * {
    transform: translateY(0);
  }
  .image-container {
    width: 100%;
  }
`;
