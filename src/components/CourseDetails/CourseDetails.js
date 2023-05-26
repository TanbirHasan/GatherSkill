import React from "react";
import styles from "./CourseDetails.module.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

export default function CourseDetails() {
  return (
    <Layout>
    <section className={styles.courses}>
      <h2>Full Stack Crash Course</h2>
      <div className={styles.coursesInner}>
      <div className={styles.videoContainer}>
        <video controls style={{width: "100%", height: "auto", minWidth: "800px"}} >
          <source src="videos/sea.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.courseContent}>
        <div>
          <h4>Course Content</h4>
        </div>
        <div class={styles.searchbox}>
          <input type="text" placeholder="Search Lesson" />
          <i class="fas fa-search search-icon"></i>
        </div>
        {/* tab */}
        <div className={styles.videoLink}>
           <Link to="">Vide0 1</Link> 
           <Link to="">Vide0 1</Link> 
           <Link to="">Vide0 1</Link> 
        </div>
      </div>
      </div>
   
    </section>
    </Layout>
  );
}
