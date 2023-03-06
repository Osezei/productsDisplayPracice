import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useUserContext } from "../userContext";

const Cart = function () {
  const {
    cart,
    clearCart,
    total_amount,
    increaseCart,
    decreaseCart,
    removeItem,
  } = useGlobalContext();

  const { loginWithRedirect, myUser, logout } = useUserContext();

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
    <section>
      <h2>Cart</h2>
      <div>
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
                  <td>
                    <button type="button" onClick={() => removeItem(id)}>
                      click to remove
                    </button>
                    <img src={image} alt={name} />
                    {name}
                  </td>

                  <td>${price.toFixed(2)}</td>

                  <td>
                    <div>
                      <button
                        type="button"
                        onClick={() => decreaseCart(id, amount, max)}
                      >
                        -
                      </button>
                      <span>{amount}</span>
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
          <div key={id}>
            <div>
              <div>
                <button type="button" onClick={() => removeItem(id)}>
                  remove
                </button>
              </div>
              <img src={image} alt={name} />
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
      <div>
        <Link to="/products">continue shoppping</Link>

        <button onClick={clearCart}>clear shopping cart</button>
      </div>
      <div>
        <div>
          <h2>order total :</h2>
          <span>${total_amount.toFixed(2)}</span>
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
