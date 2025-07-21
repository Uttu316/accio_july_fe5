import React from "react";
import "./contact.css";
import contactImage from "../../assets/contact_us.svg";
import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact_container">
      <div className="contact_image_box">
        <img src={contactImage} alt="Contact Us" className="contact_image" />
      </div>
      <ContactForm formTitle={"Contact Us"} />
      {/* <ContactForm formTitle={"Messgae Me"} /> */}
    </section>
  );
};

export default Contact;
