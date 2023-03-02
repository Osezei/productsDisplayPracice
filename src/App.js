import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/products/:id" element={<SingleProductPage />} />

        <Route
          exact
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        <Route exact path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
