import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Jobspostings.css';

export const Jobspostings = () => {
    const [Jobdetails, setJobdetails] = useState({
        title: '',
        company: '',
        city: '',
        location: '',
        description: '',
        requirements: '',
        salary: '',
        jobMode: '',
        jobType: '',
        experience: '',
        max_applicant:'',
        Require_candidates:'',
        postedDate: new Date()
    });
    const navigate=useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobdetails({ ...Jobdetails, [name]: value });
    };

    const submitJobs = async (e) => {
        e.preventDefault()
        try {
          const response = await fetch('http://localhost:7000/api/jobs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(Jobdetails),
          });
          if (!response.ok) {
            throw new Error('Failed to post job');
          }
          alert("Submited successfully")
          navigate('/Employerspage')
          console.log('Job posted successfully');
        } catch (error) {
          console.error('Error posting job:', error);
        }
      };
    return (
        <div>
            <div className='post-companies'>
                <form onSubmit={submitJobs} className='post-jobs'>
                    <label htmlFor="title">Enter Job Title</label>
                    <input type='text' placeholder='Enter Job Title' name='title' value={Jobdetails.title} onChange={handleChange} required/><br />

                    <label htmlFor="company">Company</label>
                    <input type='text' placeholder='Enter Company Name' name='company' value={Jobdetails.company} onChange={handleChange} required/><br />

                    <label htmlFor="city">City</label>
                    <input type='text' placeholder='Enter City Name' name='city' value={Jobdetails.city} onChange={handleChange}required /><br />

                    <label htmlFor="location">Location</label>
                    <input type='text' placeholder='Enter Location' name='location' value={Jobdetails.location} onChange={handleChange}required /><br />

                    <label htmlFor="description">Description</label>
                    <textarea placeholder='Enter Description' name='description' value={Jobdetails.description} onChange={handleChange} required/><br />

                    <label htmlFor="requirements">Requirements</label>
                    <textarea placeholder='Enter Requirements' name='requirements' value={Jobdetails.requirements} onChange={handleChange} required/><br />

                    <label htmlFor="salary">Salary</label>
                    <input type='text' placeholder='Enter Salary in LPA' name='salary' value={Jobdetails.salary} onChange={handleChange} required/><br />
                    <label htmlFor="max_aplicant">Max Applicant</label>
                    <input type='number' placeholder='Enter max Applicant' name='max_applicant' value={Jobdetails.max_applicant} onChange={handleChange} required/><br />
                    <label htmlFor="Require_candidates">Require Candidates</label>
                    <input type='number' placeholder='Enter Require Candidates' name='Require_candidates' value={Jobdetails.Require_candidates} onChange={handleChange} required/><br />
                    <div>
                        <label htmlFor="jobMode">Job Mode:</label><br />
                        <select name="jobMode" value={Jobdetails.jobMode} onChange={handleChange}required>
                            <option value="">Select Job Mode</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="On-site">On-site</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="jobType">Job Type:</label><br />
                        <select name="jobType" value={Jobdetails.jobType} onChange={handleChange} required>
                            <option value="">Select Job Type</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>

                    <label htmlFor="experience">Experience</label>
                    <select name='jobType' value={Jobdetails.experience} onChange={handleChange} required>
                        <option>Select Experience</option>
                        <option value='Fresher'>Fresher</option>
                        <option value='1 year +'>1 Year +</option>
                        <option value='2 year +'>2 Year +</option>
                        <option value='4 year +'>4 Year +</option>
                        <option value='5 year +'>5 Year +</option>
                    </select>

                    <label htmlFor="postedDate">Date</label>
                    <input type='date' name='postedDate' value={Jobdetails.postedDate} onChange={handleChange} required/>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Jobspostings;
