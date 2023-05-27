import React, { useEffect, useRef, useState, CSSProperties } from "react";
import styles from "./CourseDetails.module.css";
import Layout from "../Layout/Layout";
import { Link, useLocation } from "react-router-dom";
import { AiFillLock, AiOutlineUnlock } from "react-icons/ai";
import axios from "axios";
import { BACKEND_URI } from "../../config/contants";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function CourseDetails() {
  const [courses, setCourses] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Loading state
  let [color, setColor] = useState("#ffffff");
  const location = useLocation();

  console.log(location);

  const videoRef = useRef();

  const getAllMedias = () => {
    setIsLoading(true); // Start loading
    axios
      .get(`${BACKEND_URI}/api/v1/media/all`)
      .then((result) => {
        setCourses(result.data);
        setIsLoading(false); // Stop loading
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Stop loading
      });
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

  const handleNoteChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    const timestamp = videoRef.current.currentTime;
    const note = {
      timestamp,
      content: currentNote,
    };
    setNotes([...notes, note]);
    setCurrentNote("");
  };

  console.log(selectedVideo);

  function formatTimestamp(timestamp) {
    const minutes = Math.floor(timestamp / 60);
    const seconds = Math.floor(timestamp % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return (
    <Layout>
      {isLoading ? (
        <div style={{ margin: "100px 0px" }}>
          <ClipLoader
            color={color}
            loading={isLoading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <section className={styles.courses}>
          <h2 className={styles.courseTitle}>Full Stack Crash Course</h2>
          <div className={styles.coursesInner}>
            <div className={styles.videoContainer}>
              <video
                autoPlay
                controls
                className={styles.videoPlayer}
                ref={videoRef}
              >
                {selectedVideo && (
                  <source src={selectedVideo} type="video/mp4" />
                )}
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.courseContent}>
              <div className={styles.contentHeader}>
                <h4 className={styles.contentTitle}>Course Content</h4>
                <div className={styles.searchBox}>
                  <input
                    type="text"
                    placeholder="Search Lesson"
                    className={styles.searchInput}
                  />
                  <i className={`fas fa-search ${styles.searchIcon}`}></i>
                </div>
              </div>
              <div className={styles.videoLink}>
                {courses &&
                  courses
                    .filter((item) => item?.courseTag === location.state.query)
                    .map((item, index) =>
                      item.videos.map((video, videoIndex) => (
                        <div className={styles.videoBox} key={video}>
                          <span className={styles.videoLockIcon}>
                            {videoIndex <= selectedVideoIndex ? (
                              <AiOutlineUnlock />
                            ) : (
                              <AiFillLock />
                            )}
                          </span>
                          <button
                            className={styles.videoButton}
                            onClick={() => handleSelectVideo(video, videoIndex)}
                          >
                            Open Video
                          </button>
                        </div>
                      ))
                    )}
              </div>
              <div className={styles.notesContainer}>
                <h4 className={styles.notesTitle}>
                  {courses[selectedVideoIndex]?.title} Notes
                </h4>
                <form onSubmit={handleNoteSubmit} className={styles.notesForm}>
                  <textarea
                    className={styles.noteInput}
                    placeholder="Write your note..."
                    value={currentNote}
                    onChange={handleNoteChange}
                  />
                  <button className={styles.saveButton} type="submit">
                    Save Note
                  </button>
                </form>
                <div className={styles.notesList}>
                  {notes.map((note, index) => (
                    <div className={styles.noteItem} key={index}>
                      <span className={styles.timestamp}>
                        {formatTimestamp(note.timestamp)}
                      </span>
                      <p className={styles.noteContent}>{note.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
