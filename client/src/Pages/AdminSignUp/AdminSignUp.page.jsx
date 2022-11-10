import React from "react";
import { NavBar } from "../../Components";
import Input2 from "../../Components/Inputs/Input2";
import styles from "./AdminSignUp.module.css";

const AdminSignUp = () => {
  const fillings = [
    { label: "Company Name", sublabel: "", placeholder: "Enter  name" },
    { label: "Company Contact", sublabel: "", placeholder: "6xx xxx xxx" },
    { label: "Company Email", sublabel: "", placeholder: "name@example.com" },
    {
      label: "Password",
      sublabel: "forgot password?",
      placeholder: "Enter password",
    },
    { label: "Price", sublabel: "", placeholder: "xxx FCFA" },
  ];
  return (
    <section className={`${styles.wrapper}`}>
      <NavBar />
      <section className={`${styles.container}`}>
        {" "}
        <h2 className={`${styles.h2}`}>Start adding your own routes</h2>
        <section className={`${styles.innerGrid}`}>
          {fillings.map((item, index) => {
            console.log("item", item);
            return (
              <Input2
                label={item.label}
                placeholder={item.placeholder}
                sublabel={item.sublabel}
                key={index}
              />
            );
          })}
        </section>
        <section className={`${styles.btnWrap}`}>
          <label className={`${styles.label}`}>About Company</label>
          <textarea
            rows="5"
            className={styles.textArea}
            placeholder={"Tell us  a little about your company"}
          />
          <button className={styles.btn}>Create account</button>
        </section>
      </section>
    </section>
  );
};

export default AdminSignUp;
