import React, { useState } from "react";
import styles from "./Register.module.css";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import axios from "../../../api/axios";

const REGISTER_URL = "/api/v1/register";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!username || !email || !password || !agreeTerms) {
      alert(
        "Please fill in all the required fields and agree to the terms and conditions."
      );
      return;
    }

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          username,
          email,
          password,
        }),
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );

      alert("Registration successful:", response?.data);

      setUsername("");
      setEmail("");
      setPassword("");
      setAgreeTerms(false);
    } catch (err) {
        console.log(err)
         if (err.response.status === 409) {
            alert('Email Taken');
        }
        else if(!err?.response) {
            alert('No Server Response');
        } 
        else {
            alert('Registration Failed')
        }
       
    }
  };

  return (
    <Layout>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className={styles.formGroup}>
            <label htmlFor="username">First Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="agreeTerms"
              name="agree"
              value="true"
              checked={agreeTerms}
              onChange={handleCheckboxChange}
              required
            />
            <p>I agree to the terms and conditions</p>
          </div>
          <button type="submit">Register</button>

          <span>
            Already have an account? <Link to="/login">Login here</Link>
          </span>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
