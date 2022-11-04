import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      alert("Invalid Credentials..!!");
    }
  };

  return (
    <div className="login">
      <div className="headerTitles">
        <span className="headerTitleLg">Experio</span>
        <span className="headerTitleSm">An Experience Sharing Platform</span>
        <div className="login-glass">
          <span className="loginTitle">Login</span>
          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              type="text"
              className="loginInput1"
              placeholder="Enter Username"
              ref={userRef}
            />
            <input
              type="password"
              className="loginInput2"
              placeholder="Enter Password"
              ref={passwordRef}
            />
            
          </form>
          <button className="loginButton" type="submit" disabled={isFetching}>
              Login
            </button>
        </div>
      </div>
    </div>
  );
}
