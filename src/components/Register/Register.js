import React, { useState } from 'react';
import './Register.css'; // Import your CSS file for styling
import bgimg from './Assets/bg-img.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useAuth } from '../../Context/AuthContext';
// import App from '../../App';

function Register({}) {
  // const [isAuthenticated,setIsAuthenticated] = useState(false);
const{setIsAuthenticated,IsAuthenticated,setcurrentUsername,setUserEmail}=useAuth()
  const [formData, setFormData] = useState({
    Name: '',
    username:'',
    Phoneno: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
const navigate=useNavigate();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFieldChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/; // Matches 10 digits
    return phoneNumberPattern.test(phoneNumber);
  };
  

  const handleRegister = async(e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password does not match");
      return;
    }


    const postData = {
      Name: formData.Name,
      Phoneno: formData.Phoneno,
      email: formData.email,
      password: formData.password,
      username:formData.username
    };
    console.log(postData.username)
    console.log(postData.email)
    setcurrentUsername(postData.username)
    setUserEmail(postData.email)
    const validatePhoneNumber = (phoneNumber) => {
      const phoneNumberPattern = /^\d{10}$/; // Matches 10 digits
      return phoneNumberPattern.test(phoneNumber);
    };
    const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
      return emailPattern.test(email);
    };
    if (!validatePhoneNumber(formData.Phoneno)) {
      alert('Please enter a valid phone number.');
      return;
    }
  
    // Validate email
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }    

  await  axios.post('http://localhost:7010/api/candidate',postData)
           
      .then((response) => {
        console.log("Registration Successful",response);
        // alert("Registration Successful");
        console.log(response.data.newcandidate);
       
        // setusername(response.data.newcandidate.username);
        // setUserEmail(response.data.newcandidate.email); 

        // const {username}=response.data.candiate
        // console.log(username)
        // navigate('/')
        navigate('/Profilesetup')
        setIsAuthenticated(true)
       
      })
      .catch((error) => {
        console.error("Registration Failed", error);
        alert("Registration Failed email is already registered");
      });
  };

  return (

    <div>
     
  
  
    <div className="Register-container">
    

      <div className="Welcome-info">
    <h2 style={{color:"#2057d4"}}>Welcome to <span style={{color:"#2057d4"}}>SkilNet</span></h2>
    <p>Step into a world of endless possibilities with our professional social network! Discover career opportunities, forge valuable connections, and engage in public learning initiatives that empower you to grow personally and professionally
    </p>
  </div>
      
    
      <div className="Register-box">
        <form onSubmit={handleRegister} className="Register-form">
          <fieldset>
            <legend>Register</legend>
            <div className="form-group">
              <label htmlFor="Name">Full Name:</label>
              <input
                type="text"
                id="Name"
                value={formData.Name}
                onChange={(e) => handleFieldChange('Name', e.target.value)}
                required
                className="form-control"
              />
              <label htmlFor="username">User Name:</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => handleFieldChange('username', e.target.value)}
                required
                className="form-control"
              />
              <label htmlFor="Phoneno">Contact No:</label>
              <input
                type="tel"
                id="Phoneno"
                value={formData.Phoneno}
                onChange={(e) => handleFieldChange('Phoneno', e.target.value)}
                required
                className="form-control"
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
                required
                className="form-control"
              />
              <label htmlFor="password">Password:</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formData.password}
                  onChange={(e) => handleFieldChange('password', e.target.value)}
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
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => handleFieldChange('confirmPassword', e.target.value)}
                required
                className="form-control"
              />
            </div>
          </fieldset>
          <button type="submit" className="btn" id="Register-button">
            Register
          </button>
          <div className="login-link">
            <p>
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>
        </form>
      </div>
      </div>
      </div>

  );
}

export default Register;
