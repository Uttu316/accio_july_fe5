import { useState } from "react";
import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {
  const { image, title, price, description } = product;
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
  };

  // Limit description to 3 lines using CSS
  return (
    <div className={styles.product_card}>
      <img src={image} alt={title} className={styles.product_image} />
      <h3 className={styles.product_title}>{title}</h3>
      <p className={styles.product_price}>${price.toFixed(2)}</p>
      <p className={styles.product_description}>{description}</p>
      <button className={styles.cart_button} onClick={toggleCart}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
