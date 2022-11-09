import React from "react";
import styles from "./Home.module.css";

import { NavBar } from "../../Components";
import { Hero } from "../../Sections";

const Home = () => {
  return (
    <div className={`${styles.homeWrapper}`}>
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;
