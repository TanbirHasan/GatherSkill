import React from "react";
import styles from "./Banner.module.css"

export default function Banner() {
  return (
    <section className={styles.learnSection}>
        <div className={styles.learnSectionInner}>
        <div>
         <h3>START TO NEW JOURNEY</h3>
         <h2>Experience a learning<br/> platform that take you <br/>next level</h2>
         <p>World class training and development programs <br/>developed by top teachers</p>
      </div>
      <div>
        <img src="https://cdn.elearningindustry.com/wp-content/uploads/2014/12/shutterstock_158869706.jpg" height="400" weight="300" alt="Learn"/>
      </div>
        </div>
    
    </section>
  );
}
