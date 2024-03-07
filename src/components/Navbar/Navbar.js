import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../../Context/AuthContext';
import logo from './Assets/logo-brand.png.jpg';
import feedicon from './Assets/menu.png';
import jobsicon from './Assets/job.png';
import learningicon from './Assets/online-learning.png';

export const Navbar = () => {
  const { setcurrentUsername, currentusername, isAuthenticated, setIsAuthenticated } = useAuth()
  const [role, setrole] = useState('Employers')
  const [path, setpath] = useState('/empmain')
  const location = useLocation();

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions here (e.g., clear localStorage, reset state, etc.)
  };

  // Function to set role based on location
  const setRoleBasedOnLocation = () => {
    if (location.pathname.includes('/empmain')) {
      setrole('Job Seekers')
      setpath('/')
    } else {
      setrole("Employers")
      setpath('/empmain')
    }
  }

  React.useEffect(() => {
    setRoleBasedOnLocation();
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} className='brand-icon' alt="Logo"></img>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={location.pathname === '/feeds' ? 'nav-link active' : 'nav-link'} to="/feeds">
                <span className='nav-text'>Feeds</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={location.pathname === '/jobs' ? 'nav-link active' : 'nav-link'} to="/jobs">
                <span className='nav-text'>Jobs</span>
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/companies">Companies</Link> */}
            </li>
            {role === 'Employers' &&
              <li className="nav-item">
                <Link className={location.pathname === '/Learning' ? 'nav-link active' : 'nav-link'} to="/Learning">
                  <span className='nav-text'>Learning</span>
                </Link>
              </li>
            }
          </ul>

          <div className="form-inline my-2 my-lg-0">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="btn btn-login mx-2">Logout</button>
            ) : (
              role === 'Employers' ? (
                <>
                  <Link to="/Register" ><button className='nav-buttons'>Register</button></Link>
                  <Link to="/Login" ><button className='nav-buttons'>Login</button></Link>
                </>
              ) : (
                <>
                  <Link to="/Employersregister" ><button className='nav-buttons'>Register</button></Link>
                  <Link to="/Emplogin" ><button className='nav-buttons'>Login</button></Link>
                </>
              )
            )}
          </div>

          <div className='for-employeers'>
            <a href={path}>
              <button className='nav-buttons'>{role}</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
