import React from "react";

import { useGlobalContext } from "../context/context";
import { footWears } from "../utils/Data";
import { Link } from "react-router-dom";

const ProductList = () => {
  const {
    products,
    price,
    max_price,
    min_price,
    sort,
    category,
    company,
    updatePrice,
    activeFilter,
    clearFilters,
  } = useGlobalContext();

  const noOfProducts = products.length;
  let categorylist = [];
  let company_list = [];

  {
    footWears.map((product) => {
      categorylist.push(product.categorylist);
    });
  }
  {
    footWears.map((product) => {
      company_list.push(product.company_list);
    });
  }
  return (
    <section className="container">
      <div>
        <h2>Products</h2>
      </div>
      <div>
        <h3>category</h3>
      </div>
      <ul>
        {["all", ...new Set(categorylist)].map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                category(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div>
        <h3>brand</h3>

        {/* <ul>
          {["all", ...new Set(company_list)].map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  company(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul> */}

        <div>
          <h3>price</h3>
          <p>${price}</p>
          <input
            type="range"
            name={price}
            min={min_price}
            max={max_price}
            value={price}
            onChange={(e) => updatePrice(e.target.value)}
          />
        </div>

        <div>
          <button onClick={clearFilters}>clear filters</button>
        </div>
      </div>

      <div>
        <h2>{noOfProducts} products are available</h2>
        <span>Sort by</span>
        <div>
          <select name="" onChange={(e) => sort(e.target.value)}>
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
            <option value="ascending">Name (A-Z)</option>
            <option value="descending">Name (Z-A)</option>
          </select>
        </div>
      </div>
      <div>
        {products.map((footWears) => {
          const { image, name, id, price } = footWears;
          return (
            <div key={id}>
              <div>
                <img src={image} alt={name} />
                <div>
                  <Link to={`/products/${id}`}>search</Link>
                </div>
              </div>
              <div>
                <h3>{name}</h3>
                <h2>${price}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
