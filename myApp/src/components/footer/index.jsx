import React from "react";
import "./footer.css";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer_container">
      <p>
        Made by Accio July Batch with <FaHeart className="heart_icon" /> July
        2025
      </p>
    </footer>
  );
};

export default Footer;
