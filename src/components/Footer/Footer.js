
// Footer.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import withRouter
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

import './Footer.css'; // Create a CSS file for footer styling

const Footer = ({isAuthenticated,history}) => {
  // const navigate=useNavigate();
  // const empfeauture=()=>{
  //   if(!isAuthenticated){
  //     alert("You cant use this feature you have to login/register first")

      
  //   }
  //   else{
  //     navigate('/Jobspostings'y

  //   }

  // }
  // const empfeature=()=>{
  //   alert('This feature is available now')
  // }
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>SkilNet</h5>
            
            <ul className='list-unstyled'>
             <li><a href="/About">About SkilNet</a></li>
              <li><a href="#">Contact us</a></li>
              
            </ul>
          </div>
          
          <div className="col-md-3">
            <h5>Employers</h5>
            <ul className='list-unstyled'>
            <li><a  href="/Empmain">Employers Page</a></li>
            <li><a  href="/Employersregister">Employers Register</a></li>

          {/* <li className='links-empfeautures'><a style={{cursor:'pointer'}} className='links-empfeautures' to="/Jobspostings" onClick={empfeauture}>Jobs posting</a></li> */}
          {/* <li ><Link to="/Company-postings" >Post Companies</Link></li> */}

            {!isAuthenticated && <li><a href="Emplogin">Employers Login</a></li>}

              {/* <li><a href="Company-postings" onClick={empfeature}>Post Companies</a></li> */}
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Job seekers</h5>
            <ul className="list-unstyled">
            <li><a href="#">Companies</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a onclhref="/Popularcomp">Popoular Companies</a></li>
              <li><a href="#">Best Jobs</a></li>
              <li><a href="#">Mock Interviews</a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
          <div className="col-md-3">
          <h5>Learning</h5>
          <ul className="list-unstyled">
            <li><a href="#">New Courses</a></li>
              <li><a href="#">Interview prep</a></li>
              <li><a href="/Popularcomp">Problem Solving</a></li>
              <li><a href="#">Candidate Perks</a></li>
              <li><a href="#">Mock Interviews</a></li>
            </ul>
            </div>
          
          
          <div className="col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email:SkilNet.com@gmail.com</li>
              <li>
                <a href='https://www.instagram.com/skill.venture?igsh=MWJobW5oYnk1dWgwcw%3D%3D&utm_source=qr'><FontAwesomeIcon style={{gap:'10px'}} icon={faInstagram} />  instagram</a>
              </li>
           
            
            
            
           
            </ul>
          </div>
          <div className="col-md-12 text-center">
            <p style={{fontSize:'20px', color:'white'}}>&copy; SkilNet 2023</p>
            <p style={{fontSize:'15px', color:'white'}}>Developed By Dhruv Parmar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default (Footer); // Use withRouter to inject history
