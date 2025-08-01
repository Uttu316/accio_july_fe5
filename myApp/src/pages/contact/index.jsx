import React from "react";
import Header from "../../components/header";
import styles from "./contact.module.css";
import contactImage from "../../assets/contact_us.svg";

const ContactPage = () => {
  return (
    <div className={styles.page_container}>
      <Header />
      <div className={styles.hero_section}>
        <img
          src={contactImage}
          alt="Contact Us"
          className={styles.hero_image}
        />
        <div className={styles.text_content}>
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you! Whether you have questions,
            feedback, or need support, our team is here to help.
          </p>
          <form className={styles.contact_form}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows="5"
              required
            ></textarea>

            <button type="submit" className={styles.submit_button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
