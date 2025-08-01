import HomePage from "./pages/home";
import PracticePage from "./pages/practice";
import ProductsPage from "./pages/products";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ProductPage from "./pages/product";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./pages/notFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice" element={<PracticePage />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
