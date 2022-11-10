import InputStyles from "./Input2.module.css";

function Input2({ label, placeholder, sublabel }) {
  console.log("return", { label, placeholder, sublabel });
  return (
    <div className={InputStyles.input}>
      <div className={InputStyles.label}>
        <label htmlFor="" className={`${InputStyles.labelMain}`}>
          {label}
        </label>
        <label htmlFor="" className={`${InputStyles.subLabel}`}>
          {" "}
          {sublabel}
        </label>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={`${InputStyles.mainInput}`}
      />
    </div>
  );
}

export default Input2;
