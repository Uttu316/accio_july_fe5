import { useEffect, useState } from "react";
import ProductsList from "../products_list";
import ProductsFilters from "../productsFilters";
import styles from "./productsContainer.module.css";
import { getProducts } from "../../services/getproducts";

// console.log(styles);
const ProductsContainer = () => {
  const [status, setStatus] = useState("loading"); // api status
  const [products, setProducts] = useState([]); // storing products
  const [category, setCategory] = useState(""); // selected filter category
  //   const [filteredProduct, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      //   setFilteredProducts(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    // after first mount fetch products
    fetchProducts();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSucces = status === "done";

  return (
    <div className={styles.products_container}>
      <h2 className={styles.products_container_title}>Products</h2>

      {isLoading && <p className={styles.loadingMsg}>Loading...</p>}
      {isError && <p className={styles.erroMsg}>Something went wrong</p>}

      {isSucces && (
        <div className={styles.products_wrapper}>
          <ProductsFilters category={category} setCategory={setCategory} />

          <ProductsList category={category} products={products} />
        </div>
      )}
    </div>
  );
};
export default ProductsContainer;
