import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!email || !password) {
      alert("Please fill in all the required fields.");
      return;
    }

    setIsLoading(true);

    try {
      // Make API call using Axios
      const response = await axios.post("http://localhost:8000/api/v1/auth", {
        email,
        password,
      });

      // Handle the response as needed
      console.log("Login successful:", response?.data);

      // Clear form fields after successful submission
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error.response?.data);
      // Handle the error and display an appropriate message to the user
    }

    setIsLoading(false);
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
          <button className={styles.forgetPassButton} onClick={() => console.log("Forgot Password?")}>Forgot Password?</button>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <span>
            New to this page? <Link to="/register">Create new account</Link>
          </span>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
