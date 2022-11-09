import React from "react";
import styles from "./TipsCard.module.css";

import image from "../../Resources/tipsImage.svg";

const TipsCard = () => {
  return (
    <section className={`${styles.cardWrapper}`}>
      <section className={`${styles.container}`}>
        <img src={image} alt="tips" className={`${styles.image}`} />
        <h2 className={`${styles.h2}`}>This is dummy text here oh yes it is</h2>
        <p className={`${styles.p}`}>
          This is alsoo dummy text and I don't care about y typos because I'm
          tired. This is alsoo dummy text and I don't care about y typos because I'm
          tired. This is alsoo dummy text and I don't care about y typos because I'm
          tired
        </p>
      </section>
    </section>
  );
};

export default TipsCard;
