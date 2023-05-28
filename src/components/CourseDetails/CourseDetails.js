import React, { useEffect, useRef, useState } from "react";
import {
  AiFillLock,
  AiOutlineUnlock,
  AiFillDelete,
  AiFillBookmark,
} from "react-icons/ai";
import {FaBookmark,FaRegBookmark} from "react-icons/fa"
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./CourseDetails.module.css";
import Layout from "../Layout/Layout";
import { Link, useLocation } from "react-router-dom";
import { BACKEND_URI } from "../../config/contants";

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
  const [bookmarks, setBookmarks] = useState([]); // State for bookmarked videos
  const [isLoading, setIsLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const location = useLocation();

  const videoRef = useRef();

  const getAllMedias = () => {
    setIsLoading(true);
    axios
      .get(`${BACKEND_URI}/api/v1/media/all`)
      .then((result) => {
        setCourses(result.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllMedias();
  }, []);

  useEffect(() => {
    if (
      courses.length > 0 &&
      !courses.some((course) => course.courseTag === location.state.query)
    ) {
      setSelectedVideo("");
    } else {
      setSelectedVideo(`${BACKEND_URI}${courses[0]?.videos[0]}`);
    }
  }, [courses, location.state.query]);

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
      id: Date.now(),
      timestamp,
      content: currentNote,
    };
    setNotes([...notes, note]);
    setCurrentNote("");
  };

  const handleNoteDelete = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  const toggleBookmark = (videoIndex) => {
    if (bookmarks.includes(videoIndex)) {
      setBookmarks((prevBookmarks) =>
        prevBookmarks.filter((bookmark) => bookmark !== videoIndex)
      );
    } else {
      setBookmarks((prevBookmarks) => [...prevBookmarks, videoIndex]);
    }
  };

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
            aria-label="LoadingSpinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <section className={styles.courses}>
          <h2 className={styles.courseTitle}></h2>
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
              <div className={styles.notesContainer}>
                <h4 className={styles.notesTitle}>
                  {courses[selectedVideoIndex]?.title} Take Notes
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
              </div>
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
                {!courses.some(
                  (course) => course.courseTag === location.state.query
                ) ? (
                  <div>
                    <h3>No Video Uploaded Yet</h3>
                  </div>
                ) : (
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
                            Video {videoIndex}
                            <span
                              className={styles.bookmarkIcon}
                              onClick={() => toggleBookmark(videoIndex)}
                            >
                              {bookmarks.includes(videoIndex) ? (
                                <FaBookmark />
                              ) : (
                                <FaRegBookmark />
                              )}
                            </span>
                          </button>
                        </div>
                      ))
                    )
                )}
                <div className={styles.notesList}>
                  {notes.map((note, index) => (
                    <div className={styles.noteItem} key={note.id}>
                      <span className={styles.timestamp}>
                        Time-Stamps : {formatTimestamp(note.timestamp)}
                      </span>
                      <p className={styles.noteContent}>
                        <b>Notes</b> : {note.content}
                      </p>
                      <div className={styles.noteActions}>
                        <button
                          className={styles.noteAction}
                          onClick={() => handleNoteDelete(note.id)}
                        >
                          <AiFillDelete />
                        </button>
                      </div>
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
