import React, { useState,  useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/appApi";
import "../styles/Onboarding.css"
import axios from "axios"

    const Login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
   
        const [login, { isError, isLoading, error }] = useLoginMutation();
    function handleLogin(e) {
        e.preventDefault();
        login({ email, password });

        navigate("/")
    }
          
  
      
      return (
        <div className="wrapping">

<form onSubmit={handleLogin} className="form">
        <div className="inputWrap">
        <div className="NavTitle">Track & Road</div>
<h1>Welcome Back</h1>
          <label className="onboardLabel1" htmlFor="email">Email</label>
     
          <input
            className="inputOnboard"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setEmail(e.target.value)} value={email} required />
        </div>
        <div  className="inputWrap">
          <label className="onboardLabel" htmlFor="password">Password</label>
          <input
            className="inputOnboard"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setPassword(e.target.value)} value={password} required />
        </div>
       
          <span  className="bs1">
         <a className="authRoute" href="/forgotpassword">Forgot Pasword?</a>
        </span>
        <button type="submit" className="Submiter">Submit</button>
        <span className="bs">Don't have an account?<a className="authRoute" href="/Signup"> Sign up</a>
        </span>
       
      </form>




        </div>
      )
    }
    
    export default Login