import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { footWears } from "../utils/Data";
import { Link } from "react-router-dom";

const ProductList = function () {
  const {
    products,
    price,
    max_price,
    min_price,
    sortHandler,
    categoryHandle,
    companyHandle,
    updatePrice,
    activeFilter,
    clearFilters,
  } = useGlobalContext();

  const noOfProducts = products.length;
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
    <Main className="container py-10 page">
      <div className="hidden">
        <div className="text-base font-medium pr-1">
          <h3>Category:</h3>
        </div>
        <ul className="flex text-base font-medium cursor-pointer">
          {["all", ...new Set(category)].map((item, index) => {
            return (
              <li
                key={index}
                className={`${
                  activeFilter === item.toLowerCase()
                    ? "text-green-700 px-1"
                    : "px-1"
                }`}
                onClick={() => {
                  categoryHandle(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden">
        <h3 className="pr-1 font-medium">Brand:</h3>
        <ul className="flex font-medium cursor-pointer">
          {["all", ...new Set(company)].map((item, index) => {
            return (
              <li
                key={index}
                className={`${
                  activeFilter === item.toLowerCase()
                    ? "text-green-700 px-1"
                    : "px-1"
                }`}
                onClick={() => {
                  companyHandle(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full md:flex justify-between">
        {/* section */}
        <section>
          <div className="flex justify-between">
            <div className="flex items-center justify-between text-sm font-normal lg:text-lg lg:font-medium">
              <h3 className="">Price :</h3>
              <p className=" pl-1 w-12 lg:w-20 lg:px-2">${price}</p>
              <input
                type="range"
                name={price}
                min={min_price}
                max={max_price}
                value={price}
                onChange={(e) => updatePrice(e.target.value)}
                className="w-20 mr-2 lg:mr-5"
              />
            </div>

            <div>
              <button
                onClick={clearFilters}
                className="rounded-sm md:rounded-full p-1 py-1 lg:px-2 bg-green-700 hover:bg-red-700 text-white text-sm"
              >
                Clear filters
              </button>
            </div>
          </div>
        </section>
        <div className="flex justify-between items-center text-sm lg:text-lg">
          <span className="pr-1 lg:pr-2">Sort by</span>
          <div>
            <select
              name=""
              onChange={(e) => sortHandler(e.target.value)}
              className=" border-black border-solid border-0 md:border-2 rounded-full"
            >
              <option value="lowest">Price (Lowest)</option>
              <option value="highest">Price (Highest)</option>
              <option value="ascending">Name (A-Z)</option>
              <option value="descending">Name (Z-A)</option>
            </select>
          </div>
        </div>
      </div>

      {/* end of list */}
      <div className="pt-16 pb-4 font-semibold text-2xl">
        <p>{noOfProducts} products are available!</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        {products.map((footWears) => {
          const { image, name, id, price, description } = footWears;
          return (
            <div key={id} className=" text-black pt-4 pb-4">
              <div className="image-container pb-4 relative">
                <img src={image} alt={name} className="image rounded-md" />
              </div>
              <div className="flex justify-between text-xl font-semibold">
                <h3>{name.substring(0, 15)}...</h3>
                <h2>
                  <span className=" text-sm">$</span>
                  {price}
                </h2>
              </div>
              <div className="pt-2 pb-2 text-sm font-normal">
                <p>{description.substring(0, 50)} ...</p>
              </div>
              <div className="text-sm font-semibold pt-6 pb-3 ">
                <Link
                  className="border-solid border-2 pt-4 pb-4 pr-10 pl-10 border-green-700 rounded-full hover:text-white hover:bg-green-700"
                  to={`/products/${id}`}
                >
                  View Product
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Main>
  );
};

export default ProductList;

const Main = styled.div`
  .page-height {
  }
  .image-container {
    width: 100%;
    height: 200px;
    margin-right: auto;
    margin-left: auto;
  }
  .image {
    width: 100%;
    height: 100%;
  }
`;
