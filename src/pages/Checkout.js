import React, { useState } from "react";
import { useGlobalContext } from "../context/context";

const publicKey = "pk_test_48943d1c6b316f95f54ff9bc7d5f15cdade0bef0";
const amount = 10000;

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { total_amount, clearCart } = useGlobalContext();

  const componentProps = {
    email,
    amount: total_amount * 100,
    metadata: { name, phone },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Thanks for doing business with us!");
      clearCart();
    },
    onClose: () => alert("You need this, don't go"),
  };

  return (
    <section>
      <h2>checkout</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone"
        />
      </div>
    </section>
  );
};

export default Checkout;
