import { useContext } from "react";
import PageContainer from "../../components/pageContainer";
import { GlobalContext } from "../../contexts/GloabalContext";
import styles from "./cart.module.css";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(GlobalContext);

  return (
    <PageContainer>
      <h1 className={styles.heading}>MY CART</h1>
      {cart.length === 0 ? (
        <p className={styles.empty_cart}>Cart is empty</p>
      ) : (
        <div className={styles.container}>
          {cart.map((item) => (
            <div key={item.id} className={styles.product_card}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.product_image}
              />
              <div>
                <h3 className={styles.product_title}>{item.title}</h3>
                <p className={styles.product_price}>${item.price.toFixed(2)}</p>
                <p className={styles.product_description}>{item.description}</p>
                <button
                  className={styles.cart_button}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageContainer>
  );
};

export default CartPage;
