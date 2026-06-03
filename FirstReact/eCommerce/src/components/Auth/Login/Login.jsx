import React from "react";
import styles from "./login.module.css";
import NavBar from '../../navBar/NavBar';


const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div>
        
        <NavBar />
      </div>

      <div className={styles.todoBody}>
        <div className={styles.container}>
          <h1>Login</h1>
          <form action="" className={styles.userDetails}>
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
              id= {styles.password}
            />
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
