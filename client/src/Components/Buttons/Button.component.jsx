import React from "react";
import styles from "./Button.module.css";

import MyRoutes from "../RoutesPage/Routes";

const Button = ({ props }) => {
  return (
    <section className={`${styles.buttonSection}`}>
      <button
        className={`${styles.button}`}
        onClick={() => {
          return <MyRoutes />;
        }}
      >
        {props}
      </button>
    </section>
  );
};

export default Button;
