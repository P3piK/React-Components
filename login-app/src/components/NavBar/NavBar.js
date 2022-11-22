import React from "react";
import Navigation from "./Navigation";
import styles from "./NavBar.module.css";

function NavBar(props) {
  return (
    <div className={styles.navbar}>
      <h2>A Typical Page</h2>
      <Navigation />
    </div>
  );
}

export default NavBar;
