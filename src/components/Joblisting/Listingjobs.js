import React, { useState, useEffect } from 'react';
import './Jobslisting.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBuilding, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Learnmore from './Learnmore';
import SkeletonLoader from '../SkeletonLoader';
import { useAuth } from '../../Context/AuthContext';

const Listingjobs = ({ searchedquery, searchedlocations, jobs }) => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const{isAuthenticated}=useAuth()
  const navigate=useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const[selectedjob,setselectedjob]=useState(null);

  const closeModal=()=>{
    setselectedjob(null)
  }

  useEffect(() => {
    // Filter jobs based on the searched query and locations
    if (searchedquery || searchedlocations) {
      const formattedQuery = searchedquery.trim().toLowerCase();
      const lowercaseLocation = searchedlocations.toLowerCase();

      const newFilteredJobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(formattedQuery) &&
          (job.city.toLowerCase().includes(lowercaseLocation) || job.location.toLowerCase().includes(lowercaseLocation))
      );

      setFilteredJobs(newFilteredJobs);
    } else {
      // If no search query or locations, display all jobs
      setFilteredJobs(jobs);
    }
  }, [searchedquery, searchedlocations, jobs]);
  const handleApply=()=>{
    if(!isAuthenticated){
      alert("you havent register/login cant apply for job")
    }
    else{
      navigate('/Application')

    }
  }
  const handleLearnmore=(job)=>
  {
    setselectedjob(job)
  }

  const JobCard = ({ job }) => {
    return (
      <>
      <div className='list-jobs'>
        <div className='job-card'>
          <h2>{job.title}</h2>
          <p>
            <FontAwesomeIcon icon={faBuilding} size='2x' className='icon' />
            <strong>Company:</strong> {job.company}
          </p>
          <p>
            <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
            <strong>Location:</strong> {job.location}
          </p>
          {/* <p>
            <strong>Description:</strong> {job.description}
          </p>
          <p>
            <strong>Job Type:</strong> {job.jobType}
          </p>
          <p>
            <strong>Requirements:</strong> {job.requirements}
          </p> */}
          <p>
            <strong>City:</strong> {job.city}
          </p>
          <p>
            <FontAwesomeIcon className='icon' icon={faMoneyBill} />
            <strong>Salary:</strong> {job.salary}
          </p>
          <div className='job-buttons'>
              
              <button className='' onClick={handleApply}>Apply</button>
            
            <button onClick={() => handleLearnmore(job)}>Learn More</button>
          </div>
        </div>
        </div>
      </>
    );
  };
  return (
    <>
      {isLoading ? (
        // Show skeleton loader while loading
        <div className='job-list'>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      ) : (
        <div className='job-list'>
          {filteredJobs.length === 0 ? (
            <div className='no-results'>No results found</div>
          ) : (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          )}
        </div>
      )}
      {selectedjob && <Learnmore job={selectedjob} onClose={closeModal} />}
    </>
  );
};

export default Listingjobs;
