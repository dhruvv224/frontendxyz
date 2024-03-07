import React, { useState, useEffect } from 'react';

const Demo = () => {
  const [joblists, setJobslists] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:90010/api/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        const jobsData = data['0'].jobs;
        console.log(jobsData)
        setJobslists(jobsData); // Assuming data is the array of jobs directly
        console.log('Data received from database:', data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Jobs</h1>
      {/* Uncomment and modify JSX to display jobs */}
      <ul>
        {joblists.map((job) => (
            <div className='job-card'>
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Demo;
