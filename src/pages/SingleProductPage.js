import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

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
    <div>
      <Header />
      <Navigation />
      <SideBar />
      <section className="container page">
        <div className="flex pt-10 pb-20">
          <Link
            to="/products"
            className="flex bg-green-700 pt-2 pb-2 pr-4 pl-4 rounded-full items-center font-semibold text-white"
          >
            <span className="pr-2">
              <AiOutlineArrowLeft />
            </span>
            View Products <span className="pl-1">/ {single.name}</span>
          </Link>{" "}
        </div>
        {/* <h3>{single.name}</h3> */}
        {/* picture and info section */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <img src={single.image} alt={single.name} />
          </div>
          <div>
            <h3 className="font-semibold text-4xl pb-4">{single.name}</h3>
            <p>{single.description}</p>
            <h1 className="flex pt-2 pb-2 text-green-700">{tempRating}</h1>
            <h2 className="font-semibold text-xl">
              <span className="font-medium">Price :</span> ${single.price}
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

            <div className="flex items-center  pb-4">
              <button
                type="button"
                onClick={() => decreaseAmount(tempStock, single.stock)}
                className="text-2xl pr-3 pl-3"
              >
                -
              </button>
              <span className="font-semibold text-4xl pr-5 pl-5">
                {tempStock}
              </span>
              <button
                type="button"
                onClick={() => increaseAmount(tempStock, single.stock)}
                className="text-2xl pr-3 pl-3"
              >
                +
              </button>
            </div>
            <Link
              to="/cart"
              onClick={() => addToCart(single.id, tempStock, single)}
              className="capitalize bg-green-700 pt-2 pb-2 pr-4 pl-4 rounded-full  items-center font-semibold text-white"
            >
              add to cart
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
