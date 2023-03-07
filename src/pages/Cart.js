import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useUserContext } from "../userContext";
import { MdCancel } from "react-icons/md";

const Cart = function () {
  const {
    cart,
    clearCart,
    total_amount,
    increaseCart,
    decreaseCart,
    removeItem,
  } = useGlobalContext();

  //const { loginWithRedirect, myUser, logout } = useUserContext();

  if (cart.length < 1) {
    return (
      <section className="container page">
        <div className="">
          {/* <h2 className="pt-4 text-3xl font-semibold text-green-700">Cart</h2> */}
          <div className="text-center">
            <h3 className="text-4xl font-semibold pt-44 pb-10 text-green-700">
              Your Cart is empty
            </h3>
            <Link
              to="/"
              className="button bg-green-700 rounded-full  items-center font-semibold text-lg text-white px-10 py-4 hover:bg-[white] hover:text-green-700 border-4"
            >
              view products
            </Link>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="container page">
      <h2 className="text-3xl my-14 font-thin">
        <span className="text-4xl font-semibold">C</span>art
      </h2>
      <div className="hidden lg:block">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          {cart.map((item) => {
            const { image, name, price, amount, max, id } = item;
            return (
              <tbody key={id}>
                <tr>
                  <td className="flex items-center">
                    <MdCancel
                      className="w-5 h-5 cursor-pointer text-red-700"
                      onClick={() => removeItem(id)}
                    />
                    <img
                      src={image}
                      alt={name}
                      className="w-[5rem] h-[5rem] mx-5"
                    />
                    <p className="text-2xl">{name}</p>
                  </td>

                  <td>${price.toFixed(2)}</td>

                  <td className="text-3xl font-medium">
                    <div className="items-center">
                      <button
                        type="button"
                        onClick={() => decreaseCart(id, amount, max)}
                      >
                        -
                      </button>
                      <span className="mx-5">{amount}</span>
                      <button
                        type="button"
                        onClick={() => increaseCart(id, amount, max)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(price * amount).toFixed(2)}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      {cart.map((item) => {
        const { image, name, price, amount, max, id } = item;
        return (
          <div
            key={id}
            className="grid gap-x-5 grid-cols-3 items-center mb-7 lg:hidden"
          >
            <div className="flex items-center">
              <div>
                <MdCancel
                  className="w-5 h-5 cursor-pointer text-red-700"
                  onClick={() => removeItem(id)}
                />
              </div>
              <img src={image} alt={name} className="h-15 w-20" />
            </div>
            <div>
              <h2>{name}</h2>
              <span>${price.toFixed(2)}</span>
            </div>
            <div>
              <button onClick={() => decreaseCart(id, amount, max)}>-</button>
              <span>{amount}</span>
              <button onClick={() => increaseCart(id, amount, max)}>+</button>
            </div>
          </div>
        );
      })}
      <div className="mt-10 flex justify-center">
        <Link
          to="/"
          className="mr-4 bg-green-700 rounded-full  items-center font-semibold text-lg text-white px-10 py-4 hover:bg-[white] hover:text-green-700 border-4 button"
        >
          Continue Shopping
        </Link>

        <button
          onClick={clearCart}
          className="bg-red-700 rounded-full  items-center font-semibold text-lg text-white px-10 py-3 hover:bg-[white] hover:text-red-700 border-4 button"
        >
          Clear Shopping Cart
        </button>
      </div>
      <div>
        <div className="mt-5 flex border border-r-4 py-5 justify-center">
          <h2 className="mr-5">Order Total:</h2>
          <span className="font-semibold">${total_amount.toFixed(2)}</span>
        </div>
      </div>
      {/* {myUser ? (
        <Link to="/checkout">Proceed to checkout</Link>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )} */}
      <Link to="/checkout">Proceed to checkout</Link>
    </section>
  );
};

export default Cart;
