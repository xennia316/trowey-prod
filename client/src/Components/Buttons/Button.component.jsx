import React from "react";
import styles from "./Button.module.css";

import MyRoutes from "../RoutesPage/Routes";
import { Link } from "react-router-dom";

const Button = ({ props }) => {
  return (
    <section className={`${styles.buttonSection}`}>
      <Link to="/routes">
        <button
          className={`${styles.button}`}
          onClick={() => {
            return <MyRoutes />;
          }}
        >
          {props}
        </button>
      </Link>
    </section>
  );
};

export default Button;
