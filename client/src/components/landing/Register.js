import React, { useState } from "react";
import axios from "axios";

const Register = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password1: "",
    password2: ""
  });

  const headers = {
    "Content-Type": "application/json"
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        "https://team-big-bosses-be.herokuapp.com/api/registration/",
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
          password1: "",
          password2: ""
        });
      });
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  console.log(credentials);

  return (
    <div className="register-container">
      <h1>Sign Up!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password1"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
