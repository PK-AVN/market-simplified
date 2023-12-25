import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container-fluid">
        <div className="logo">
          <a href="https://weon.org.in/" rel="home">
            <img
              width="200"
              height="66"
              src="https://weon.org.in/wp-content/uploads/2023/09/20230928_014035_0000-e1695845725492.png"
              alt="Weon"
            />
          </a>
        </div>
        <div>
          <nav className={styles["header-menu"]}>
            <ui className={styles.menu}>
              <li>Home</li>
              <li>Job Placement</li>
              <li>Immigration</li>
              <li>About Us</li>
              <li>Enquiry</li>
              <li>Enroll</li>
              <li>Pay Now</li>
            </ui>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
