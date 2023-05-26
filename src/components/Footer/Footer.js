import React from 'react'
import styles from "./Footer.module.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
         <h2><b>Gather Skill</b></h2>
         <p>We support programs that create <br/> advancement for people</p>
      </div>
      <div>
        <h3>Usefu Links</h3>
        <div className={styles.footerbox}>
        <Link to="" className={styles.footerboxLink}>About Us</Link>
        <Link to=""  className={styles.footerboxLink}>Privacy Policy</Link>
        <Link to=""  className={styles.footerboxLink}>Terms & Condition</Link>
        </div>
     
      </div>
      <div>
      <h3>Learning</h3>
      <div className={styles.footerbox}>
      <Link to=""  className={styles.footerboxLink}>Business Strategy</Link>
        <Link to=""  className={styles.footerboxLink}>Become a Teacher</Link>
        <Link to=""  className={styles.footerboxLink}>Project Managment</Link>
      </div>
     
      </div>
      <div>
      <h3>Contact Us</h3>
      <div className={styles.footerIconBox}>
        <span>Icon</span>
        <span>+91 458 654 528</span>
      </div>
      <div  className={styles.footerIconBox}>
        <span>Icon</span>
        <span>Info@example.com</span>
      </div>
      <div  className={styles.footerIconBox}>
        <span>Icon</span>
        <span>PO Box 16122 Collins Street West</span>
      </div>
      <span> Victoria 8007 Australia</span>
      </div>
    </footer>
  )
}
