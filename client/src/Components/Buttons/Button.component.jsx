import React from "react";
import styles from "./Button.module.css";

const Button = ({ props }) => {
  return (
    <section className={`${styles.buttonSection}`}>
      <button className={`${styles.button}`}>{props}</button>
    </section>
  );
};

export default Button;
