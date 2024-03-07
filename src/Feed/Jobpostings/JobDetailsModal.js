// JobDetailsModal.js

import React from 'react';

const JobDetailsModal = ({ selectedJob, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Job Details</h2>
        <p><strong>Title:</strong> {selectedJob.jobTitle}</p>
        <p><strong>Salary:</strong> {selectedJob.salary}</p>
        <p><strong>Location:</strong> {selectedJob.location}</p>
       
      </div>
    </div>
  );
};

export default JobDetailsModal;
