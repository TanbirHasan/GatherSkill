import React from "react";
import styles from "./Contact.module.css";
import Layout from "../../components/Layout/Layout";

const ContactUs = () => {
  return (
    <Layout>
      <div className={styles.contactContainer}>
        <div className={styles.description}>
          <h2 className={styles.contact}>Drop us a line</h2>
          <p>
            Our team is happy to answer all your questions. Fill out the form
            and we will be in touch as soon as possible
          </p>
        </div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactUs;
