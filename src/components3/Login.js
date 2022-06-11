import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
const Login = (props) => {
  const [cerdentials, setcerdentials] = useState({ email: "", password: "" });
//   let history=useHistory();
   let navigate = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: cerdentials.email,
        password: cerdentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        localStorage.setItem('token',json.authtoken);
        navigate("/");
        props.showAlert("Looged in !","success");
    }
    else{
      props.showAlert("Invalid  details ","danger");
    }
  };

  const onChange = (e) => {
    setcerdentials({ ...cerdentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSumbit} className="loginform">
      <h1 className="text-light">Login here</h1>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            aria-describedby="emailHelp"
            value={cerdentials.email}
            onChange={onChange}
            className="inputemail"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label passtext">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            value={cerdentials.password}
            onChange={onChange}
            className="inputpassword"
          />
        </div>
        <button type="submit" class="btn btn-primary btnlogin">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
