import HomePage from "./pages/home";
import PracticePage from "./pages/practice";
import ProductsPage from "./pages/products";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ProductPage from "./pages/product";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./pages/notFoundPage";
import CartPage from "./pages/cart";
import { useState } from "react";
import GloabalProvider from "./contexts/GloabalContext";

function App() {
  return (
    <GloabalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GloabalProvider>
  );
}

export default App;
