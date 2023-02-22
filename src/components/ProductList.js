import React from "react";
import styled from "styled-components";
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
  let category_list = [];
  let company_list = [];

  // {
  //   footWears.map((product) => {
  //     category_list.push(product.category_list);
  //   });
  // }
  // {
  //   footWears.map((product) => {
  //     company_list.push(product.company_list);
  //   });
  // }
  return (
    <Main className="container py-10 page">
      {/* <div className="text-3xl textbold mt-4 mb-4 text-center text-green-700 font-bold">
        <h2 className="">Products</h2>
      </div> */}
      {/* listing */}
      <div className="flex justify-between">
        {/* section */}
        <section>
          {/* <div>
            <h3>category</h3>
          </div> */}
          {/* <ul>
            {["all", ...new Set(category_list)].map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    activeFilter === item ? "text-[red] font-bold" : null
                  }`}
                  onClick={() => {
                    category(item);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul> */}
          <div className="flex justify-between">
            {/* <h3>brand</h3>
            <ul>
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

            <div className="flex justify-between">
              <h3 className="font-medium text-lg">Price :</h3>
              <p className="font-medium text-lg  pl-2 pr-2 w-20">${price}</p>
              <input
                type="range"
                name={price}
                min={min_price}
                max={max_price}
                value={price}
                onChange={(e) => updatePrice(e.target.value)}
                className="mr-5"
              />
            </div>

            <div>
              <button
                onClick={clearFilters}
                className=" rounded-full py-1 pr-2 pl-2 bg-green-700 hover:bg-red-700 text-white text-sm"
              >
                Clear filters
              </button>
            </div>
          </div>
        </section>
        <div className="flex justify-between items-center">
          <span className="pr-2">Sort by</span>
          <div>
            <select
              name=""
              onChange={(e) => sort(e.target.value)}
              className=" border-black border-solid border-2 rounded-full"
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
      <div className="grid grid-cols-3 gap-10">
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
