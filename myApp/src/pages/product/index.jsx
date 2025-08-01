import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/header";
import styles from "./product.module.css";
import productImage from "../../assets/hero.svg"; // placeholder image, can be replaced
import { useParams } from "react-router";
import { getProduct } from "../../services/getProduct";

const ProductPage = () => {
  const { productId } = useParams();
  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);

  const fetchProduct = useCallback(async () => {
    try {
      const data = await getProduct(productId);
      setProduct(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  }, [productId]);

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";

  const hasProduct = isDone && product !== null;
  const noProduct = isDone && product === null;

  return (
    <div className={styles.page_container}>
      <Header />
      {isLoading && (
        <h2 className={styles.loading}>Loading Product Details...</h2>
      )}
      {isError && <h2 className={styles.error}>Something Went Wrong</h2>}
      {noProduct && <h2 className={styles.noProduct}>No Product Found</h2>}
      {hasProduct && (
        <div className={styles.product_section}>
          <div className={styles.image_container}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.product_image}
            />
          </div>
          <div className={styles.details_container}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.rating}>Rating: {product.rating.rate}/5</p>
            <p className={styles.category}>Category: {product.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
