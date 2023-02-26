import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useUserContext } from "../userContext";

const Cart = () => {
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
      <section>
        <div>
          <h2>Cart</h2>
          <h3>Your Cart is empty</h3>
          <Link to="/products">view products</Link>
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
                    <button onClick={() => removeItem(id)}>click</button>
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
    </section>
  );
};

export default Cart;
