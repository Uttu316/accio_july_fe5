import { useContext, useMemo, useState } from "react";
import styles from "./productCard.module.css";
import { Link } from "react-router";
import { GlobalContext } from "../../contexts/GloabalContext";

const ProductCard = ({ product }) => {
  const { image, id, title, price, description } = product;

  const { addToCart, cart, removeFromCart, isInCart } =
    useContext(GlobalContext);

  const inCart = useMemo(() => {
    return isInCart(id);
  }, [id, cart]);

  const toggleCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (inCart) {
      removeFromCart(id);
    } else {
      addToCart(product);
    }
  };

  return (
    <Link className={styles.productLink} to={`/product/${id}`}>
      <div className={styles.product_card}>
        <img src={image} alt={title} className={styles.product_image} />
        <h3 className={styles.product_title}>{title}</h3>
        <p className={styles.product_price}>${price.toFixed(2)}</p>
        <p className={styles.product_description}>{description}</p>
        <button
          className={`${styles.cart_button} ${inCart ? styles.removeBt : ""}`}
          onClick={toggleCart}
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
