import React from "react";
import { Button } from "../../Components";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`${styles.HeroLander}`}>
      <section className={`${styles.bigText}`}>
        LET'S GET <br />
        TO THE DIRTY
        <br />
        BUSINESS
      </section>
      <br />
      <section className={`${styles.smallText}`}>
        We provide you with the most updated routes <br />
        taken by the waste collecting company every week
      </section>
      <br />
      <Button props={"See Routes"} />
    </section>
  );
};

export default Hero;
