import React, { useState } from "react";
import styles from "./PostVideo.module.css";
import axios from "axios";
import { BACKEND_URI } from "../../config/contants";
import Layout from "../Layout/Layout";

export default function PostVideo() {
  const [name, setName] = useState("");
  const [courseTag, setCourseTag] = useState("");
  const [videos, setVideos] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleVideoChange = (e) => {
    setVideos(e.target.files);
  };

  const handleCourseTag = (e) => {
    setCourseTag(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("courseTag",courseTag)
    for (let i = 0; i < videos.length; i++) {
      formData.append("videos", videos[i]);
    }

    try {
      await axios.post(`${BACKEND_URI}/api/v1/media/create`, formData);
      alert("Submitted successfully");
      setName("");
      setVideos([]);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Layout>
      <div className={styles.postFileContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className={styles.formControl}
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="coursetag">CourseTag</label>
            <input
              type="text"
              name="coursetag"
              className={styles.formControl}
              value={courseTag}
              onChange={handleCourseTag}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="videos">Videos</label>
            <input
              type="file"
              name="videos"
              className={styles.formControl}
              multiple
              accept=".mp4, .mkv"
              onChange={handleVideoChange}
              required
            />
          </div>

          <button className={styles.videosButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
