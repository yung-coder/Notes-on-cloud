import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const [cerdentials, setcerdentials] = useState({
    email: "",
    password: "",
    cpassword: "",
    name: "",
  });
  let navigate = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();
    const {name,email,password}=cerdentials;
    const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       name,
       email,
       password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Account created ","success");
    } else {
       props.showAlert("Invalid cerdentials ","danger");
    }
  };

  const onChange = (e) => {
    setcerdentials({ ...cerdentials, [e.target.name]: e.target.value });
  };
  return (
    <>
    <div className="main">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
      <form onSubmit={handleSumbit} className="signup">
        <h1>Signup here</h1>
        <div class="mb-3">
          <label for="name" class="form-label text-light">
            Enter your name
          </label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={onChange}
            placeholder="Enter your name"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label text-light">
            Email address
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label text-light">
            Password
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="password"
            onChange={onChange}
            minLength={5}
            required
            placeholder="Enter your password"
          />
        </div>
        <div class="mb-3">
          <label for="cpassword" class="form-label text-light">
            Confirm password
          </label>
          <input
            type="password"
            name="cpassword"
            class="form-control"
            id="cpassword"
            onChange={onChange}
            minLength={5}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary btnsignupbtn">
          Submit
        </button>
      </form>
      </div>
      </>
  );
};

export default Signup;
