import React from "react";
import Header from "../../components/header";
import styles from "./about.module.css";
import aboutImage from "../../assets/about_ai.svg";

const AboutPage = () => {
  return (
    <div className={styles.page_container}>
      <Header />
      <div className={styles.hero_section}>
        <img src={aboutImage} alt="About Us" className={styles.hero_image} />
        <div className={styles.text_content}>
          <h1>About Us</h1>
          <p>
            Welcome to our company. We are committed to delivering the best
            products and services to our customers. Our team is dedicated to
            innovation, quality, and customer satisfaction.
          </p>
          <p>
            Our mission is to empower businesses and individuals through
            cutting-edge technology solutions tailored to their needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
