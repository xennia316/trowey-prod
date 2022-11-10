import { Link } from "react-router-dom";
import LoginStyles from "../Login/Login.module.css";
import Input from "../Inputs/Input";
function Signup() {
  return (
    <div className={LoginStyles.container}>
      <form action="" className={LoginStyles.form}>
        <h2>Sign Up</h2>
        <div className={LoginStyles.inputs}>
          <Input label="Phone Number" placeholder="6xx xxx xxx" />
          <Input
            label="Password"
            placeholder="Password"
            sublabel="Forgot password"
          />
        </div>
        <button>Login</button>
        <p className={LoginStyles.smallText}>
          Don't have an account?{" "}
          <Link className={LoginStyles.link}>log in</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Signup;
