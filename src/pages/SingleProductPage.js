import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import styled from "styled-components";

const SingleProductPage = function () {
  const { id } = useParams();

  const { allKicks, addToCart, increaseAmount, decreaseAmount, tempStock } =
    useGlobalContext();

  const single = allKicks.find((product) => product.id === +id);

  const tempRating = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {single.rating >= index + 1 ? (
          <BsStarFill />
        ) : single.rating > number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Main className="py-10">
      <section className="container page">
        <div className="flex py-10">
          <p className="flex text-base">
            <Link to="/" className="flex items-center font-medium pr-1">
              View Products /
            </Link>{" "}
            <span className="font-semibold"> {single.name}</span>
          </p>
        </div>

        {/* picture and info section */}
        <div className="grid grid-cols-1 lg:flex pb-7 lg:pb-0 gap-x-20">
          <div className="">
            <img
              src={single.image}
              alt={single.name}
              className="w-[80rem] h-[30rem] mb-5 rounded-sm"
            />
          </div>
          <div className="h-1/2">
            <h3 className="font-semibold text-4xl pb-4">{single.name}</h3>
            <p>{single.description}</p>
            <h1 className="flex pt-2 pb-2 text-green-700">{tempRating}</h1>
            <h2 className="font-semibold text-xl pt-4">
              <span className="font-medium ">Price :</span> ${single.price}
            </h2>

            <div className="font-medium text-xl">
              <span>
                Brand :{" "}
                <span className="capitalize font-semibold">
                  {single.company}
                </span>
              </span>
              <br />
              <span>
                Sku : <span className="font-semibold">{single.id}</span>
              </span>
            </div>

            <div className="text-2xl mb-6 bg-gray-100 items-center rounded-full py-3 px-10 w-48">
              <button
                type="button"
                onClick={() => decreaseAmount(tempStock, single.stock)}
                className="font-medium"
              >
                -
              </button>
              <span className="font-semibold px-7">{tempStock}</span>
              <button
                type="button"
                onClick={() => increaseAmount(tempStock, single.stock)}
                className="font-medium"
              >
                +
              </button>
            </div>
            {/* <p> {tempStock}</p> */}
            <Link
              to="/cart"
              onClick={() => addToCart(single.id, tempStock, single)}
              className=" bg-green-700 rounded-full  items-center font-semibold text-lg text-white px-10 py-4 hover:bg-[white] hover:text-green-700 border-4"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default SingleProductPage;
const Main = styled.div`
  .image {
    width: 100%;
  }
`;
