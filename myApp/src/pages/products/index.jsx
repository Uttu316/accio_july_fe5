import Header from "../../components/header";
import HeroContainer from "../../components/heroContainer";
import PageContainer from "../../components/pageContainer";
import ProductsContainer from "../../components/productsContainer";
import ProductsHero from "../../components/productsHero";

const ProductsPage = () => {
  return (
    <PageContainer>
      <ProductsHero />
      <ProductsContainer />
    </PageContainer>
  );
};
export default ProductsPage;
