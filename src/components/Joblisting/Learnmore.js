import React from 'react';

export const Learnmore = ({ job, onClose }) => {
  return (
    <div>
      <div className='modal'>
        <div className='modal-content'>
          <span className='close' onClick={onClose}>&times;</span>
          <p>
            <strong>Company:</strong> {job.company}
          </p>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Description:</strong> {job.description}
          </p>
          <p>
            <strong>Job Type:</strong> {job.jobType}
          </p>
          <p>
            <strong>Required Candidates:</strong> {job.requiredCandidates}
          </p>
          <p>
            <strong>Job mode:</strong> {job.jobMode}
          </p>
          <p>
            <strong>Salary:</strong> {job.salary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learnmore;
