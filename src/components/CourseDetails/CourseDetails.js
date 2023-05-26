import React, { useEffect, useState } from "react";
import styles from "./CourseDetails.module.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import axios from "axios";
import { BACKEND_URI } from "../../config/contants";

export default function CourseDetails() {
  const [courses, setCourses] = useState([]);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/all`)
      .then((result) => setCourses(result.data))
      .catch((err) => console.log(err));
  };

  console.log(courses[0]?.videos[0]?.video)

  useEffect(() => {
    getAllMedias();
  }, []);
  return (
    <Layout>
      <section className={styles.courses}>
        <h2>Full Stack Crash Course</h2>
        <div className={styles.coursesInner}>
          <div className={styles.videoContainer}>
            <video
              controls
              style={{ width: "100%", height: "auto", minWidth: "800px" }}
            >
              <source src={`${BACKEND_URI}${courses[0]?.videos[0]?.video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.courseContent}>
            <div>
              <h4 style={{ color: "white" }}>Course Content</h4>
            </div>
            <div class={styles.searchbox}>
              <input type="text" placeholder="Search Lesson" />
              <i class="fas fa-search search-icon"></i>
            </div>
            {/* tab */}
            <div className={styles.videoLink}>
              {/* <div className={styles.videoBox}>
                <span style={{ fontSize: "20px" }}>
                  <AiFillLock />
                </span>
                <Link to="">Video 1</Link>
              </div>
              <div className={styles.videoBox}>
                <span style={{ fontSize: "20px" }}>
                  <AiFillLock />
                </span>
                <Link to="">Video 2</Link>
              </div>
              <div className={styles.videoBox}>
                <span style={{ fontSize: "20px" }}>
                  <AiFillLock />
                </span>
                <Link to="">Video 3</Link>
              </div> */}
              {courses && courses?.map((item) => (
                <div className={styles.videoBox}>
                  <span style={{ fontSize: "20px" }}>
                    <AiFillLock />
                  </span>
                  <Link to="">Video 1</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
