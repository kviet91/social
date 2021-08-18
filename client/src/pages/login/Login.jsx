import { useContext, useRef } from "react";
import "./login.css";
import { loginCalls } from "../../apiCalls";
import { AuthContext } from "../../contexts/AuthContext";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, dispatch, isFetching } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCalls(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <div>
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
              <button className="loginButton">
                {isFetching ? <CircularProgress color="secondary" /> : "Login"}
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
