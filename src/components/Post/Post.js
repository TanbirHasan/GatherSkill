import React, { useState } from "react";
import styles from './Post.module.css';

const Post = ({ post: { title, body,
 author }, index }) => {
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
      setShowFullContent(!showFullContent);
    };
return (
	<div className={styles.postContainer}>
	<h1 className={styles.heading}>{title}</h1>
	{/* <img className="image" src={imgUrl} alt="post" /> */}
    {showFullContent ? (
        <p className={styles.body}>{body}</p>
      ) : (
        <p className={styles.body}>{body.slice(0, 150)}...</p>
      )}
	<div className="info">	
		<h4>Written by: {author}</h4>
	</div>
    <button onClick={toggleContent}>
          {showFullContent ? "Read Less" : "Read More"}
        </button>
	</div>
);
};

export default Post;
