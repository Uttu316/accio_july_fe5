import ProductCard from "../productCard";
import styles from "./productslist.module.css";
const ProductsList = ({ products, category }) => {
  const filterProducts =
    category === ""
      ? products
      : products.filter((i) => i.category === category);

  const isProducts = filterProducts.length > 0;
  const noProduct = filterProducts.length === 0;
  return (
    <div className={styles.products_list}>
      {isProducts &&
        filterProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} />
        ))}
      {noProduct && <p>No Product Available</p>}
    </div>
  );
};
export default ProductsList;
