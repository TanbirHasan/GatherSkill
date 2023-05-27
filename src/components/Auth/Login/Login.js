


import { useState } from "react";
import styles from './Login.module.css'
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);


  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(handlePasswordChange)
  };

  const handleSubmit = (e) => {
    e.preventDefault();


  };

  return (
    <Layout>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <p onClick=''>Forgot Password?</p>
          <button type="submit">Login</button>


          <span>New to this page? <Link to="/register">Create new account</Link></span>


        </form>
      </div>
    </Layout>
  );
};

export default Login