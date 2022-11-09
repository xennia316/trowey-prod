import React, { useState } from "react";
import styles from "./NavBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faList } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const [isopen, setIsopen] = useState(true);
  const toggler = isopen ? (
    <FontAwesomeIcon
      icon={faXmark}
      onClick={() => {
        setIsopen(!isopen);
      }}
    />
  ) : (
    <FontAwesomeIcon
      icon={faList}
      onClick={() => {
        setIsopen(!isopen);
      }}
    />
  );

  return (
    <section className={`${styles.wrapper}`}>
      <section className={`${styles.container}`}>
        <h2 className={`${styles.listItem}`}>Trowey</h2>
        {isopen ? (
          <ul className={`${styles.listContainer}`} role="group">
            <section className={`${styles.toggler}`}>{toggler}</section>
            <li className={`${styles.listItems}`}>Home</li>
            <li className={`${styles.listItems}`}>About</li>
            <li className={`${styles.listItems}`}>Routes</li>
            <li className={`${styles.listItems}`}>Tips</li>
            <li className={`${styles.listItems}`}>Login</li>
          </ul>
        ) : (
          <section className={`${styles.toggler}`}>{toggler}</section>
        )}
      </section>
    </section>
  );
};

export default NavBar;
