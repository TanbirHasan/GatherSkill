import React from "react";
import styles from "./CourseDetails.module.css";
import Layout from "../Layout/Layout";

export default function CourseDetails() {
  return (
    <Layout>
    <section>
      <h2>Full Stack Crash Course</h2>
      <div className={styles.videoContainer}>
        <video controls>
          <source src="YOUR_VIDEO_LINK_HERE" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <div>
          <h4>Course Content</h4>
        </div>
        <div class="search-box">
          <input type="text" placeholder="Search Lesson" />
          <i class="fas fa-search search-icon"></i>
        </div>
        <div></div>
      </div>
    </section>
    </Layout>
  );
}
