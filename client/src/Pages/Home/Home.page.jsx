import React from "react";
import NavBar from "../../Components/NavBar/NavBar.component";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.homeWrapper}`}>
      <NavBar />
    </div>
  );
};

export default Home;
