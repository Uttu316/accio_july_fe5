import React from "react";
import { useNavigate } from "react-router";
import styles from "./notFoundPage.module.css";
import notFoundImage from "../../assets/hero.svg";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Page not found</h1>
      <img src={notFoundImage} alt="Not Found" className={styles.image} />
      <button className={styles.homeButton} onClick={goHome}>
        Go to Home Page
      </button>
    </div>
  );
};

export default NotFoundPage;
