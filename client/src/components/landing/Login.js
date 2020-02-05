import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password1: ""
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
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
        setCredentials({
          username: "",
          password1: ""
        });
      });
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="register-container">
      <h1>Sign In!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="password" name="password1" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
