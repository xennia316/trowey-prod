import React from "react";
import { NavBar } from "../../Components";
import styles from "./about.module.css";
import img from "../../Resources/tipsImage.svg";

const About = () => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <h1>About us</h1>
        <p>
          Trowey is the most accurate source for never-before-seen notifications
          about waste collection.
        </p>
        <p>
          Trowey is a privately-held software company that specializes in
          collecting, sorting and analyzing municipal waste data. Trowey's
          service, available for free on the Trowey.com website, allows
          municipalities to offer their residents live notifications about
          changes to the waste collection schedule and where service trucks are
          located.
        </p>
        <div className={styles.bg}>
          <img src={img} />
        </div>
      </main>
    </>
  );
};

export default About;
