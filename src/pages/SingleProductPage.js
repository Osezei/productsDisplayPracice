import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useParams } from "react-router-dom";

const SingleProductPage = function () {
  const { id } = useParams();

  const { allKicks, addToCart, increaseAmount, decreaseAmount, tempStock } =
    useGlobalContext();

  const single = allKicks.find((product) => product.id === +id);

  const tempRating = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {single.rating >= index + 1
          ? "hello"
          : single.rating > number
          ? "no olis"
          : "hey"}
      </span>
    );
  });
  return (
    <section>
      <div>
        <Link to="/products">view products</Link>
      </div>
      <h3>{single.name}</h3>

      <div>
        <img src={single.image} alt={single.name} />
      </div>
      <div>
        <h3>{single.name}</h3>
        <h1>{tempRating}</h1>
        <h2>${single.price}</h2>
        <p>{single.description}</p>
        <div>
          <span>
            sku : <span>{single.id}</span>
          </span>
          <span>
            price : <span>${single.price}</span>
          </span>
          <span>
            brand: <span>{single.company}</span>
          </span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => increaseAmount(tempStock, single.stock)}
          >
            add
          </button>
          <span>{tempStock}</span>
          <button
            type="button"
            onClick={() => decreaseAmount(tempStock, single.stock)}
          >
            minus
          </button>
        </div>
        <Link
          to="/cart"
          onClick={() => addToCart(single.id, tempStock, single)}
        >
          add to cart
        </Link>
      </div>
    </section>
  );
};

export default SingleProductPage;
