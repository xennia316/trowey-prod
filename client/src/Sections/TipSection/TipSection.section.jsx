import React from "react";
import styles from "./TipSection.module.css";
import { TipsCard } from "../../Components";

const TipSection = () => {
  const fillings = [
    {
      text1: "How to recycle organic waste at home",
      text2:
        "By mulching organic waste (paper, leftovers, coffee grinds) into a compost pit or container, you can recycle it at home...",
    },
    {
      text1: "How to recycle organic waste at home",
      text2:
        "By mulching organic waste (paper, leftovers, coffee grinds) into a compost pit or container, you can recycle it at home... ",
    },
    {
      text1: "How to recycle organic waste at home",
      text2:
        "By mulching organic waste (paper, leftovers, coffee grinds) into a compost pit or container, you can recycle it at home... ",
    },
    {
      text1: "How to recycle organic waste at home",
      text2:
        "By mulching organic waste (paper, leftovers, coffee grinds) into a compost pit or container, you can recycle it at home... ",
    },
  ];
  return (
    <section className={`${styles.wrapper}`}>
      <h2 className={`${styles.h2}`}>Waste management Tips</h2>
      <section className={`${styles.gridContainer}`}>
        {fillings.map((item, index) => {
          console.log("props", item);
          return <TipsCard props={item} key={index} />;
        })}
      </section>
    </section>
  );
};

export default TipSection;
