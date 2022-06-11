import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {useNavigate } from "react-router-dom";
const Navbar = () => {
  let location = useLocation();
  let navigate=useNavigate();
  useEffect(()=>{
    console.log(location.pathname);
  },[location]);
  const handellogout=()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Cloudbook
          </Link>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class={`nav-link ${location.pathname==="/"?"active":" "}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${location.pathname==="/about"?"active":" "}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem('token')?<form class="d-flex">
              <Link className="btn btn-primary mx-2 addnote" role="button" to="/login">Login</Link>
              <Link className="btn btn-primary mx-2 addnote" role="button" to="/Signup">Signup</Link>
            </form>:<button className="btn btn-primary addnote" onClick={handellogout}>Logout</button>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
