import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password1: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://team-big-bosses-be.herokuapp.com/api/login/", credentials)
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
      <h1>Sign Up!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={handleChange} />
        <input type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login;
