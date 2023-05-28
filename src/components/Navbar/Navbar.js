import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import { FaUserAlt } from 'react-icons/fa';
import UserModal from "../UserModal/UserModal";

export default function Navbar() {
  const { auth ,setAuth} = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  const location = useLocation()
  console.log(location)

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogout = () => {
    setAuth({})
    setShowModal(false)
  };

  return (
    <header className={styles.header}>
      <div>
        <img
        className={styles.logo}
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
          <Link to="/contact" className={styles.navLink}>
            {" "}
            <li className={styles.menulistitem}>Contact</li>
          </Link>
        </ul>
        <div class={styles.searchbox}>
          <input type="text" placeholder="Search..." />
          <i class="fas fa-search search-icon"></i>
        </div>
        {
          !auth.accessToken ? <div className={styles.auth}>
         
          <li className={styles.menulistitem}>
            <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
              Register
            </Link>
          </li>
        </div> :   <div className={styles.auth}>
          <span style={{ color: "white", fontSize: "20px",cursor:'pointer' }} onClick={toggleModal}>  <FaUserAlt /></span>
        
        </div>
        }
        
      </div>
      {showModal && <UserModal onLogout={handleLogout} />}
    </header>
  );
}
