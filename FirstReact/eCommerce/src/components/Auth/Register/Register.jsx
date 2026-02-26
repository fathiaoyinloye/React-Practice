import React from "react";
import styles from "../Register/register.module.css";
import { Link } from "react-router";   

const Register = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.name}>
        OmoTemmy's
        <p>E-Commerce</p>
      </div>

      <div className={styles.todoBody}>
        <div className={styles.container}>
          <h1>Register</h1>
          <form action="" className={styles.userDetails}>
            <input
              type="text"
              placeholder="Enter Your Name"
              minlength="3"
              required
              id="name"
            />
            <input
              type="text"
              placeholder="Enter your username"
              minlength="6"
              required
              id={styles.username}
            />
            <input
              type="password"
              placeholder="Enter your password"
              minLength="6"
              id={styles.password}
            />
            <button>submit</button>
          </form>
          <div className={styles.login}>
            <h2>Already Have an Account</h2>
            <button>login <Link to="/login"></Link></button >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

