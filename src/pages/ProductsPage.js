import React from "react";
import Product from "../components/Product";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ProductsPage = () => {
  return (
    <main>
      <Header />
      <Navigation />
      <Product />
      <Footer />
    </main>
  );
};

export default ProductsPage;
