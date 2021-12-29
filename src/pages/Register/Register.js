import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { registerusers } from "../../redux/actions/userAction";
export default function Register() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  document.title = "Register";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    dispatch(registerusers({ name, email, password }, navigate));
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Register </h2>

        <div className="fadeIn first">
          <img
            src="https://media.istockphoto.com/photos/global-business-logistics-import-export-background-and-container-picture-id1266958681?k=20&m=1266958681&s=170667a&w=0&h=-OnsC_7jIbgt6r4kJVvEsLz1FRobgs01w_Fo8oh4Xlo="
            id="icon"
            alt="User Icon"
          />
        </div>

        <form onSubmit={submit}>
          <input
            type="text1"
            id="login"
            className="fadeIn second"
            name="name"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text1"
            id="email"
            className="fadeIn third"
            name="register"
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="register"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" className="fadeIn fourth" value="Register" />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
