import React from "react";
import "./aboutContainer.css";
import aboutImage from "../../assets/about_ai.svg";

const AboutContainer = () => {
  return (
    <section id="about" className="about_container">
      <div className="about_content">
        <h2 className="about_heading">About Our AI Services</h2>
        <p className="about_text">
          We specialize in providing cutting-edge AI solutions tailored to
          accelerate your tech projects. Our company is dedicated to leveraging
          the power of artificial intelligence to deliver innovative, efficient,
          and scalable technology services that empower businesses to stay ahead
          in the digital era.
        </p>
        <p className="about_text">
          From intelligent automation to advanced data analytics, our AI
          services are designed to transform your ideas into reality with
          precision and professionalism.
        </p>
      </div>
      <div className="about_image_box">
        <img src={aboutImage} alt="About AI Services" className="about_image" />
      </div>
    </section>
  );
};

export default AboutContainer;
