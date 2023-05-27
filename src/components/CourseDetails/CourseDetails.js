import React, { useEffect, useRef, useState } from "react";
import styles from "./CourseDetails.module.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { AiFillLock, AiOutlineUnlock } from "react-icons/ai";
import axios from "axios";
import { BACKEND_URI } from "../../config/contants";

export default function CourseDetails() {
  const [courses, setCourses] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const videoRef = useRef();

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/all`)
      .then((result) => setCourses(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllMedias();
  }, []);

  useEffect(() => {
    if (courses.length > 0) {
      setSelectedVideo(`${BACKEND_URI}${courses[0]?.videos[0]}`);
    }
  }, [courses]);

  useEffect(() => {
    videoRef.current?.load();
  }, [selectedVideo]);

  const handleSelectVideo = (video, videoIndex) => {
    if (videoIndex > selectedVideoIndex) {
      setSelectedVideoIndex(videoIndex);
    }
    setSelectedVideo(`${BACKEND_URI}${video}`);
  };
  

  console.log(selectedVideo);

  return (
    <Layout>
      <section className={styles.courses}>
        <h2>Full Stack Crash Course</h2>
        <div className={styles.coursesInner}>
          <div className={styles.videoContainer}>
            <video
              autoPlay
              controls
              style={{ width: "100%", height: "auto" }}
              ref={videoRef}
            >
              {selectedVideo && <source src={selectedVideo} type="video/mp4" />}
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.courseContent}>
            <div>
              <h4 style={{ color: "white" }}>Course Content</h4>
            </div>
            <div className={styles.searchbox}>
              <input type="text" placeholder="Search Lesson" />
              <i className="fas fa-search search-icon"></i>
            </div>
            <div className={styles.videoLink}>
              {courses &&
                courses.map((item, index) =>
                  item.videos.map((video, videoIndex) => (
                    <div className={styles.videoBox} key={video}>
                      <span style={{ fontSize: "20px" }}>
                        {videoIndex <= selectedVideoIndex ? (
                          <AiOutlineUnlock />
                        ) : (
                          <AiFillLock />
                        )}
                      </span>
                      <button
                        onClick={() => handleSelectVideo(video, videoIndex)}
                      >
                        Open Video
                      </button>
                    </div>
                  ))
                )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
