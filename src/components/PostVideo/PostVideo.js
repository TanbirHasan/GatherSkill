import React, { useState } from "react";
import styles from "./PostVideo.module.css";
import axios from "axios";
import {BACKEND_URI} from "../../config/contants"
import Layout from "../Layout/Layout";

export default function PostVideo() {
  const [name, setName] = useState();
  const [videos, setVideos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for(let key in videos){
        formdata.append('videos',videos[key])
    }
    formdata.append('name',name);

    axios.post(`${BACKEND_URI}/api/v1/media/create`,formdata)
    .then(success => alert('Submitted successfully'))
    .catch(error => {
        alert(error)
    })

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
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Videos</label>
            <input
              type="file"
              name="videos"
              className={styles.formControl}
              multiple
              accept=".mp4, .mkv"
              onChange={(e) => setVideos(e.target.files)}
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
