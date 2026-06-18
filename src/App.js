import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./Components/cart";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    const exist = cart.find(
      (item) => item.id === product.id
    );

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
       <Route  path="/menu" element={ <Menu  cart={cart} addToCart={addToCart} setCart={setCart} /> }/>
        <Route path="/about"  element={<About />}  />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={ <Cart  cart={cart} setCart={setCart}  /> } />
      </Routes>
    </>
  );
}

export default App;