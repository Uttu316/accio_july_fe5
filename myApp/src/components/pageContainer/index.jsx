import Header from "../header";
import styles from "./pageContainer.module.css";
const PageContainer = ({ children, cart }) => {
  return (
    <div className={styles.pageContainer}>
      <Header cart={cart} />
      {children}
    </div>
  );
};
export default PageContainer;
