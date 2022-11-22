import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import styles from "./Navigation.module.css";

function Navigation(props) {
  const ctx = useContext(AuthContext);
  return (
    <nav className={styles.nav}>
      {ctx.isLoggedIn && (
        <ul>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Admin</a>
          </li>
          <li onClick={ctx.onLogOut}>
            <button className={styles.logout}>Log Out</button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
