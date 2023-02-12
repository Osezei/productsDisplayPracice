import React from "react";
import { footWears } from "../utils/Data";
import { Link } from "react-router-dom";
import Error from "./Error";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";

const Product = () => {
  if (footWears.length < 1) {
    return <Error />;
  }

  //className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}

  return (
    <Main className="container ">
      <div>
        <h2 className="text-3xl textbold mt-4 mb-2 text-center text-green-700 text-5xl font-bold">
          Features
        </h2>
      </div>
      <section className="grid grid-cols-3 relative">
        {footWears.slice(4, 7).map((footwear) => {
          return (
            <article key={footwear.id} className="box">
              <h4 className="display absolute font-bold text-3xl text-green-700 ">
                {footwear.name}
              </h4>
              <div className="">
                <img
                  className="image"
                  src={footwear.image}
                  alt={footwear.name}
                />
              </div>

              <h5>${footwear.price}</h5>
              {/* <Link to={`/products/${footwear.id}`}>Details</Link> */}
            </article>
          );
        })}
      </section>
    </Main>
  );
};

export default Product;
const Main = styled.article`
  .box {
    width: 15rem;
  }
  .image {
    width: 200px;
    height: 200px;
  }
  .image:hover {
    opacity: 0.3;
    transition: 0.3s;
  }
  .display {
    opacity: 0;
  }
  .display:hover {
    opacity: 1;
    transition: 0.3s;
  }
`;
