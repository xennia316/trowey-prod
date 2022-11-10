import {Link} from "react-router-dom"
import LoginStyles from "./Login.module.css";
import Input from "../Inputs/Input";
function Login() {
  return (
    <div className={LoginStyles.container}>
      <form action="" className={LoginStyles.form}>
        <h2>Login</h2>
        <div className={LoginStyles.inputs}>
          <Input label="Phone Number" placeholder="6xx xxx xxx" />
          <Input label="Password" placeholder="Password" sublabel="Forgot password"/>
        </div>
        <button>Login</button>
        <p className={LoginStyles.smallText}>Don't have an account? <Link className={LoginStyles.link}>Sign up</Link> </p>
      </form>
    </div>
  );
}

export default Login;
