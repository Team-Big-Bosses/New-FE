import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../scss/Login.scss";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const headers = {
    "Content-Type": "application/json"
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        "https://team-big-bosses-be.herokuapp.com/api/login/",
        credentials,
        headers
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.key);
        props.history.push("/world");
      })
      .catch(err => {
        console.log(err);
        setCredentials({
          username: "",
          password: ""
        });
      });
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="register-container">
      <h1>Sign In to FlaskRPG!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Need an account?{" "}
        <Link className="link" to="/register">
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default Login;
