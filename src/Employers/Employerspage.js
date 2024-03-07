import React, { useEffect, useState } from 'react'
import './Employerspage.css'
import Requests from './Requests';
import { useAuth } from '../Context/AuthContext';
import axios from 'axios';

export const Employerspage = () => {
  const{empmail}=useAuth()
  const [empData,setEmpdata]=useState([])
  useEffect(()=>{
    fetchDetails()


  },)
   const fetchDetails=async()=>{
    try {
    const response =await axios.get("http://localhost:7010/api/employers/login")
    const data=response.data;
    const employers=response.data.employers
    console.log(employers)
    const activeuser=employers.filter(employers=>employers.email===empmail)
    console.log(activeuser)
    setEmpdata(activeuser)
    // const currentUserProfile = data.filter(data => employer.email === empmail);
    // console.log(currentUserProfile)

   
      
    } catch (error) {
      
    }
   }

  
  return (
    <div className='employers-page'>

       {empData.map(user=>
        <div className='empprofile-setion'key={user._id}>
            <h3>name:{user.name}</h3>
            <h3>Company Name:{user.companyname}</h3>
            <h3>name:{user.name}</h3>
            <h3>Industry:{user.industry}</h3>
            <h3>Location:{user.location}</h3>

                

        </div>)}
        <div className='features-emp'>
          <div className='features-buttons'>
            
            <a href='/Jobspostings'><button>Post Jobs</button></a>
            <br/>
            <button>Edit Post</button>
            <br/>

            <button>Delete Post</button>
            <br/>

            <button>View Your jobs posts</button>
            <br/>

            <button>post Company</button>
            <br/>

            <button>Edit Details</button>
            <br/>

            <button>Delete Company post</button>
            <br/>
            </div>

            

           
        </div>
        <div className='requests'>
            <h1>available requests are :</h1>
            <Requests/>

        </div>
    </div>
  )
}
export default Employerspage;
// import React, { useState } from 'react';

// const JobPosting = ({ job }) => {
//   return (
//     <div className="job-posting">
//       <h3>{job.title}</h3>
//       <p>{job.description}</p>
//       <p>Location: {job.location}</p>
//     </div>
//   );
// };

// const JobForm = ({ onSubmit }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [location, setLocation] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ title, description, location });
//     setTitle('');
//     setDescription('');
//     setLocation('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />
//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         required
//       ></textarea>
//       <input
//         type="text"
//         placeholder="Location"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         required
//       />
//       <button type="submit">Add Job</button>
//     </form>
//   );
// };

// const JobsDashboard = () => {
//   const [jobs, setJobs] = useState([]);

//   const addJob = (job) => {
//     setJobs([...jobs, job]);
//   };

//   return (
//     <div className="jobs-dashboard">
//       <h2>Job Postings</h2>
//       <JobForm onSubmit={addJob} />
//       <div className="job-listings">
//         {jobs.map((job, index) => (
//           <JobPosting key={index} job={job} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobsDashboard;

