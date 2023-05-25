import React from 'react'
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
   <header className={styles.header}>
     <div>
       <span>Logo</span>
     </div>
     <div>
      <ul className={styles.menulist}>
        <li className={styles.menulistitem}>Home</li>
        <li className={styles.menulistitem}>About</li>
        <li className={styles.menulistitem}>Course</li>
        <li className={styles.menulistitem}>Contact</li>
      </ul>
     </div>
   </header>
  )
}
