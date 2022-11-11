import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <section classNameName={`${styles.wrapper}`}>
      <div className={styles.nav}>
        <input type="checkbox" iclassName={styles.navChecked} />
        <div className={styles.navHeader}>
          <div className={styles.navTitle}>Trowey</div>
        </div>
        <div className={styles.navBtn}>
          <label for={styles.navChecks}>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className={styles.navLinks}>
          <NavLink to="/about">About</NavLink>
          <NavLink to="routes">Routes</NavLink>
          <NavLink to="/tips">Tips</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">SignUp</NavLink>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
