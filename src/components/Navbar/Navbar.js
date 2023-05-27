import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/586/123/original/book-reading-logo-and-symbols-template-icons-vector.jpg"
          height="50"
          width="60"
        />
      </div>
      <div className={styles.menulinkbox}>
        <ul className={styles.menulist}>
          <Link to="/" className={styles.navLink}>
            <li className={styles.menulistitem}>Home</li>
          </Link>
          <Link to="/about" className={styles.navLink}>
            {" "}
            <li className={styles.menulistitem}>About</li>
          </Link>
          <Link to="/course" className={styles.navLink}>
            {" "}
            <li className={styles.menulistitem}>Course</li>
          </Link>
          <Link to="/contact" className={styles.navLink}>
            {" "}
            <li className={styles.menulistitem}>Contact</li>
          </Link>
        </ul>
        <div class={styles.searchbox}>
          <input type="text" placeholder="Search..." />
          <i class="fas fa-search search-icon"></i>
        </div>
        <div className={styles.auth}>
          <li className={styles.menulistitem}>
            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
              Login
            </Link>
          </li>
          <li className={styles.menulistitem}>
            <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
              Register
            </Link>
          </li>
        </div>
      </div>
    </header>
  );
}
