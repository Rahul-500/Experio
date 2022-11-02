import axios from "axios";
import { useContext,useState } from "react";
import "./register.css";
import { Context } from "../../context/Context";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) { 
      alert("Username and Email already exists..!!")
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="registerInput1"
          placeholder="Enter username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="registerInput2"
          placeholder="Enter email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="registerInput3"
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
