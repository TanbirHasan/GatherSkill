import React, { useState, setState } from 'react';
import styles from './Register.module.css';
import Layout from '../../Layout/Layout';
import { Link } from 'react-router-dom';

const Register = () => {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    const handleAgreeCheckboxChange = (e) => {
        // setFormState({
        //   ...formState,
        //   agree: e.target.checked,
        // });
    };

    const handleSubmit = () => {
        console.log(firstName, lastName, email, password, confirmPassword);
    }

    return (

        <Layout>

            <div className={styles.loginContainer}>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            value={firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstname">Last Name</label>
                        <input
                            type="text"
                            id="firstname"
                            value={firstName}
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
                            name="agree"
                            value="true"
                            checked=''
                            onChange={handleAgreeCheckboxChange}
                            required
                        />
                        <p>I agree to the terms and conditions</p>
                    </div>
                    <button type="submit">Register</button>

                    <span>Already have an account? <Link to="/login">Login here</Link></span>

                </form>
            </div>

        </Layout>


    )
}

export default Register