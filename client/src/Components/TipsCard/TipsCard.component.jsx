import React from "react";
import styles from "./TipsCard.module.css";

import image from "../../Resources/tipsImage.svg";

const TipsCard = ({ props }) => {
  console.log("text1", props);
  return (
    <section className={`${styles.cardWrapper}`}>
      <section className={`${styles.container}`}>
        <img src={image} alt="tips" className={`${styles.image}`} />
        <h2 className={`${styles.h2}`}>{props?.text1}</h2>
        <p className={`${styles.p}`}>{props?.text2}</p>
      </section>
    </section>
  );
};

export default TipsCard;
