import React, {useState} from 'react'
import axios from 'axios'

const Register = props =>{
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = e =>{
    e.preventDefault();
    const newUser = {
      username,
      password1,
      password2
    };
    console.log("Adding user: ", newUser);
    addUser(newUser);
  };

  const addUser = user =>{
    const endpoint = "https://team-big-bosses-be.herokuapp.com/api/registration/";
    axios
      .post(endpoint, user)
      .then(res =>{
        console.log(res.data);
        localStorage.setItem("token", res.data.key);
        // setUsername("");
        // setPassword1("");
        // setPassword2("");
        props.history.push("/")
      })
      .catch(err =>{
        console.log(err)
      })
  }
  return(
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="text" placeholder="Password" value={password1} onChange={e => setPassword1(e.target.value)} />
        <input type="text" placeholder="Confirm Password" value={password2} onChange={e => setPassword2(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register;