import React, { useState, useEffect, useRef } from 'react';
import './Jobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import Listingjobs from './Listingjobs';
import axios from 'axios'; // Import Axios for HTTP requests

const Jobs = ({isAuthenticated}) => {
  const [locations, setLocation] = useState('');
  const [searchquery, setSearchquery] = useState('');
  const [jobs, setJobs] = useState([]); // State to hold the fetched jobs

  const jobListingsRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:7010/api/jobs');
      // Replace with your MongoDB API endpoint
      console.log(response)
      console.log("this is jobs array",response.data)
      setJobs(response.data);
      console.log(jobs)
      console.log("data is ",response.data[1])
      // const data = await response.json()
      // console.log(data)
      // console.log(jobs)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // useEffect(() => {
  //   console.log('Jobs:', jobs);
  // }, [jobs]);
  

  const locationHandler = (event) => {
    setLocation(event.target.value);
  };

  const searchqueryhandler = (event) => {
    setSearchquery(event.target.value);
  };

  const findJobsHandler = (event) => {
    event.preventDefault();

    // Filter jobs based on the searched query and locations
    if (searchquery || locations) {
      const formattedQuery = searchquery.trim().toLowerCase();
      const lowercaseLocation = locations.toLowerCase();

      const newFilteredJobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(formattedQuery) &&
          (job.city.toLowerCase().includes(lowercaseLocation) || job.location.toLowerCase().includes(lowercaseLocation))
      );

      setJobs(newFilteredJobs);
    } else {
      // If no search query or locations, reset to all jobs
      fetchData(); // Refetch all jobs
    }

    // Scroll to the job listings section
    jobListingsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='main-container'>
      <div className='searchbar-container'>
        <div className='jobsearch'>
          <div className='jobs-searchbar'>
            <form onSubmit={findJobsHandler}>
              <div className='search-container'>
                <FontAwesomeIcon className='icon' icon={faSearch} />
                <input
                  type='text'
                  id='search-what'
                  className='search-jobs'
                  placeholder='Jobs, Keywords, or Company'
                  value={searchquery}
                  onChange={searchqueryhandler}
                />
                <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
                <input
                  type='text'
                  id='search-where'
                  className='search-jobs'
                  placeholder='Location'
                  value={locations}
                  onChange={locationHandler}
                />
                <button type='submit' className='submit'>
                  FIND JOBS
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

       <div className='filter-container'>
       </div>

          <div className='job-listings' ref={jobListingsRef}>
          {/* Pass the fetched jobs to the Listingjobs component */}
          <Listingjobs searchedquery={searchquery} searchedlocations={locations} jobs={jobs} isAuthenticated={isAuthenticated}/>
        </div>

      
     
    </div>
  );
};

export default Jobs;
