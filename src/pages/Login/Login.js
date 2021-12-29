/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { loginuser } from "../../redux/actions/userAction";
import { useNavigate } from "react-router";
function Login() {
  document.title = "Login";
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    let item = { email, password };
    dispatch(loginuser(item, navigate));
  }

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Sign In </h2>

        <div className="fadeIn first">
          <img
            src="https://media.istockphoto.com/photos/global-business-logistics-import-export-background-and-container-picture-id1266958681?k=20&m=1266958681&s=170667a&w=0&h=-OnsC_7jIbgt6r4kJVvEsLz1FRobgs01w_Fo8oh4Xlo="
            height="140px"
            id="icon"
            alt="User Icon"
          />
        </div>

        <br></br>
        <input
          type="text1"
          id="login"
          className="fadeIn second"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          className="fadeIn third"
          name="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          onClick={login}
          className="fadeIn fourth"
          value="Log In"
        />

        <div id="formFooter">
          <a
            onClick={() => navigate("/register")}
            className="underlineHover"
            href=""
          >
            Don't have an account? Register
          </a>
        </div>
      </div>
    </div>
  );
}
export default Login;
