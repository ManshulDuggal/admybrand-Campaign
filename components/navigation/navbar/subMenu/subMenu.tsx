import React from "react";
import styles from "../navbar.module.css";

const SubMenu = () => {
  return (
    <React.Fragment>
      <div className={styles.dropdownContainer}>
        <div className={styles.top}>
          <span className={styles.signup}>Sign up</span>
          <span className={styles.dropdownText}>Log in</span>
        </div>
        <div className={styles.bottom}>
          <span className={styles.dropdownText}>About</span>
          <span className={styles.dropdownText}>Contact</span>
          <span className={styles.dropdownText}>View Demo</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubMenu;
