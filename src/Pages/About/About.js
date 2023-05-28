import React from "react";
import styles from './About.module.css';
import Layout from "../../components/Layout/Layout";


const About = () => {
  return (
   <Layout>
     <div className={styles.container}>
      <h1 className={styles.title1}>About Us</h1>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
        justo sit amet est aliquam tincidunt. Nullam at nunc nisi. Fusce dapibus
        hendrerit nunc. In hac habitasse platea dictumst. Suspendisse tempus
        nulla ac nisi porttitor efficitur. In ut fermentum felis, non sodales
        tortor. Aliquam commodo tellus at lorem ultrices, eu tempor odio
        porttitor. Nam lacinia orci at eros feugiat, id ultrices urna lacinia.
      </p>
     
    </div>
   </Layout>
  );
};

export default About;
