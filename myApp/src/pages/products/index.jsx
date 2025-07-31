import Header from "../../components/header";
import HeroContainer from "../../components/heroContainer";
import ProductsContainer from "../../components/productsContainer";
import ProductsHero from "../../components/productsHero";

const ProductsPage = () => {
  return (
    <div className="page_container">
      <Header />
      <ProductsHero />
      <ProductsContainer />
    </div>
  );
};
export default ProductsPage;
