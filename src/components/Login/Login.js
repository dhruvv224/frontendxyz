// Login.js

import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import { BrowserRouter, Route, Routes, Router, Switch, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Postcreation from '../../Feed/Postcreation';
import { useAuth } from '../../Context/AuthContext';


function Login({setUsersobject,usersObject} ) {
  const { currentusername, setcurrentUsername, isAuthenticated, setIsAuthenticated, useremail, setUserEmail ,name,setName} = useAuth();

  const[userdata,setUserdata]=useState([])
  

  
  const[Logindata,setlogindata]=useState({
    email:"",
    password:""
  });
  // const[username,setusername]=useState('')
  const navigate=useNavigate();
 
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFieldChange=(fieldName,value)=>{
    setlogindata({
      ...Logindata,[fieldName]:value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:7010/api/login', Logindata)
      const data =response.data.candidate
      console.log(data)

      // setUserdata(response.data.candidate);

      console.log("Whole users object",userdata)
      const currusername=response.data.candidate.username
      const email=response.data.candidate.email
      console.log("email of user is ",email)


      console.log(currusername)
      setcurrentUsername(response.data.candidate.username)
      console.log("current username:",currentusername)
      setUserEmail(response.data.candidate.email);
      setName(response.data.candidate.Name)
      console.log("email of user is",useremail)
      // setCurrentusername(currusername)
      if (response.status === 200) {
        // alert("Login successful");
        console.log(userdata)
        setIsAuthenticated(true)
      //  setcurrentUsername(data.candidate.username)
      //  console.log(currentusername)

        // console.log(username)
      
        navigate('/');
        // setusername(data.candidate.username)
      

       

      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while logging in");
    }
  };
  

  return (
    <div className="login-container">
      <div className='Welcome-info'>
      <h2 style={{color:"#2057d4"}}>Welcome <span style={{color:"#2057d4"}}>Back!</span></h2>
      <p style={{color:"#2057d4"}}>We're glade to see you back.Please Login to continue the journey.</p>
      </div>
      <div className="login-box">
      <div className="signup-link">
          <Link to="/Signup" className="signup">Don't have an account? Sign Up</Link>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <fieldset>
            <legend>Login </legend>
            <div className="form-group">
            
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={Logindata.email}
                onChange={(e) => handleFieldChange('email',e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={Logindata.password}
                  onChange={(e) => handleFieldChange('password',e.target.value)}
                  required
                  className="form-control"
                />
                <button
                  type="button"
                  className={`toggle-password ${showPassword ? 'show' : ''}`}
                  onClick={handleTogglePassword}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </fieldset>
          <button type="submit" className="btn" id="Login-button" >
            Login
          </button>
          <div className="login-options">
            <button
              type="button"
              className="btn btn-google"
              
            >
              Login with Google
            </button>
            <button
              type="button"
              className="btn btn-facebook"
              
            >
              Login with Facebook
            </button>
          </div>
      

          
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
