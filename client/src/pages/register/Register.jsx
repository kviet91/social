import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "@material-ui/core";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      password.current.setCustomValidity("password don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        passwordAgain: passwordAgain.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              className="loginInput"
              ref={username}
            />
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={password}
            />
            <input
              placeholder="Password Again"
              type="password"
              className="loginInput"
              ref={passwordAgain}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>

            <button className="loginRegisterButton">
              <Link href="/login">Log into Account</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
