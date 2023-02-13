import React from "react";
import Product from "../components/Product";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <main>
      <Header />
      <Navigation />
      <ProductList />
      <Footer />
    </main>
  );
};

export default ProductsPage;
