import React from "react";
import { footWears } from "../utils/Data";
import { Link } from "react-router-dom";

const Product = () => {
  const {
    id,
    image,
    name,
    rating,
    stock,
    company,
    category,
    price,
    description,
  } = footWears;
  if (footWears.length < 1) {
    return <h5>sorry, no products matched your search</h5>;
  }

  //className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
  return (
    <div>
      {footWears.map((footwear) => {
        return (
          <article key={footwear.id}>
            <h4>{footwear.name}</h4>
            <img src={footwear.image} alt={footwear.name} />
            <p>{footwear.description.substring(0, 150)}...</p>
            <h5>{footwear.price}</h5>
            {/* <Link to={'/'}>Details</Link> */}
          </article>
        );
      })}
    </div>
  );
};

export default Product;
