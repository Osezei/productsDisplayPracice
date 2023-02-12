import React from "react";
import { useGlobalContext } from "../context/context";
import { footWears } from "../utils/Data";

const Filter = () => {
  const { products } = useGlobalContext();

  const TotalProducts = products.length;

  let category = [];
  let company = [];

  {
    footWears.map((product) => {
      category.push(product.category);
    });
  }
  {
    footWears.map((product) => {
      company.push(product.company);
    });
  }

  return (
    <div>
      {products.map((footWear) => {
        const { image, name, id, price } = footWear;
        return (
          <div key={id}>
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
