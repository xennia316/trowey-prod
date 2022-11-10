import InputStyles from './Input.module.css'

function Input({label, placeholder, sublabel}) {
  return (
    <div className={InputStyles.input}>
      <div className={InputStyles.label}>
        <label htmlFor="">{label}</label>
        <label htmlFor="">{ sublabel}</label>
      </div>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default Input