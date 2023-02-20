import React from "react";
import Navigation from "../components/Navigation";
import SideBar from "../components/SideBar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Product from "../components/Product";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <SideBar />
      <Hero />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;
