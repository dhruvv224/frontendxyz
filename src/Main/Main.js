import React, { useContext, useState } from 'react';
import './Main.css'
import Jobs from '../components/Joblisting/Jobs';
import Learning from '../components/Learning/Learning'
import img from './Assets/hero-img.png'
import Popularsearch from './Search/Popularsearch';
import jobicon from './Assets/Infograph/portfolio.png';
import visitors from './Assets/Infograph/candidate.png';
import courseicon from './Assets/Infograph/online-learning.png';
import placedicon from './Assets/Infograph/employee.png'
import Cityimg from './Cityimg';
import { AuthProvider } from '../Context/AuthContext';
import { useAuth } from '../Context/AuthContext';

import socialimg from './Assets/socialnetworking.png'
export const Main = () => {
  const {currentusername,useremail,profileimage,selectedImage}=useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showJobs, setShowJobs] = useState(false); 
  const [Learning,setlearning]=useState(false);


  const handleChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    console.log(value);
  };
  const handleSearch = () => {
    // Trigger to display job cards when search button is clicked
    setShowJobs(true);
  };
console.log()
  return (
    <>
    <div className='main'>
      <div className='hero-section'>
       

        <div className='hero-content'>
          <div className='hero-heading'>
            {/* <img src={socialimg} style={{width:"100%"}}></img> */}
        <h1 className='headding-title'>Welcome To Skilnet </h1>
        </div>
          
          
        </div>
        
       
      </div>
      <div className='intro'>
          <h1 className='intro-heading'>Where Your Posts Create Waves 
          of <br/>Influence and Opportunity!</h1>
          <p className='brief-info'>SkilNet is professional social network platform where you find jobs,make your profile post your work to get more opportunities<br/> 
            connect with people who has same intrest find clients by showcasing your work.
          </p>
<button className='get-started'>Get Started</button>
        </div>
      {/* <div className='container'>
      <div className='row info-row'>
  <div className='col-md-3'>
    <div className='imgplaceholder'>
      <div className='circle-container'>
        <img src={visitors} alt="" />
      </div>
      <p className='upper-font'>100+
      <p className='lower-font' style={{ fontSize: '20px' }}>Active Users</p></p>
    </div>
  </div>
  <div className='col-md-3'>
    <div className='imgplaceholder'>
      <div className='circle-container'>
        <img src={jobicon} alt="" />
      </div>
      <p className='upper-font'>1k+
      <p className='lower-font' style={{ fontSize: '20px' }}>Jobs posted</p></p>
    </div>
  </div>
  <div className='col-md-3'>
    <div className='imgplaceholder'>
      <div className='circle-container'>
        <img src={courseicon} alt="" />
      </div>
      <p className='upper-font'>15k+
      <p className='lower-font' style={{ fontSize: '20px' }}>Verified Courses</p></p>
    </div>
  </div>
  <div className='col-md-3'>
    <div className='imgplaceholder'>
      <div className='circle-container'>
        <img src={placedicon} alt="" />
      </div>
      <p className='upper-font'>5k+
      <p className='lower-font' style={{ fontSize: '20px' }}>Got Placed</p></p>
    </div>
  </div>
</div>
</div> */}
{/* <div className='Popularsearches'>
      <Popularsearch/>
   
    </div> */}
    <div className='box-container'>
    <div className='row box'>
      <div className='col-md-3'>
        <div className='Boxe1'>
          <img src=''></img>
          <h2>Networking Opportunities</h2>
          <p style={{color:'white'}}> SkilNet provides a platform for individuals to connect with professionals in their industry, colleagues, mentors, and potential employers or clients. These platforms facilitate networking on a global scale, allowing users to build valuable relationships, exchange ideas, and collaborate on projects. </p>
        </div>
      </div>

      <div className='col-md-3'>
        <div className='Boxe2'>
          <img src="" alt="" />
          <h2>Career Advancement</h2>
          <p  style={{color:'white'}}> SkilNet offer a wealth of resources and tools to support career growth and development. Users can showcase their skills, experience, and accomplishments through their profiles, participate in industry discussions, and access job opportunities and career-related content. This platforms also offer features such as professional groups, mentorship programs, and educational resources to help users advance their careers.</p>
        </div>
      </div>
      <div className='col-md-3'>
        <div className='Boxe4'>
          <img src="" alt="" />
          <h2>One-Click Job Applications</h2>
          <p  style={{color:'white'}}>Tired of lengthy job application processes? Say goodbye to the hassle of commenting "Interested" on every job post. With our innovative platform, applying for jobs is now easier than ever before!. Experience the future of job hunting with our one-click job application feature!</p>
        </div>
      </div>
      <div className='col-md-3'>
        <div className='Boxe3'>
          <img src="" alt="" />
          <h2>Knowledge Sharing and Learning</h2>
          <p  style={{color:'white'}}>SkilNet will be hub for knowledge sharing, where professionals can access a wide range of industry insights, best practices, and educational resources. Users can participate in discussions, share articles and research findings, and stay updated on the latest trends and developments in their field. This platforms foster a culture of continuous learning and professional development, empowering users to expand their knowledge and expertise.</p>
        </div>
      </div>
    </div>
 
  </div>
  <div className='cityimgs'>
      <Cityimg/>

    </div>
    
      {/* Show Jobs component and Learning component */}
      {showJobs && <Jobs searchQuery={searchQuery} />}
      {Learning && <Learning searchQuery={searchQuery} />}
    </div>
   
    </>
    
  );
};

 
export default Main;
