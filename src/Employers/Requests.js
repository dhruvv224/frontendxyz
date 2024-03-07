import React, { useEffect, useState } from 'react';
import './Requests.css';
import axios from 'axios';

export const Requests = () => {
    const [applications, setApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:7010/api/application');
            setApplications(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleViewDetails = (application) => {
        console.log('View Details clicked:', application);
        setSelectedApplication(application);
    };

    const handleCloseModal = () => {
        setSelectedApplication(null);
    };

    return (
        <div>
            <h2>Applicant Details</h2>
            {applications.map(application => (
                <div key={application._id} className="applicant">
                    <p>{application.fullName}
                    <button onClick={() => handleViewDetails(application)} className='Details'>View Details</button>
                    </p>
                </div>
            ))}

            {selectedApplication && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" style={{color:'red'}} onClick={handleCloseModal}>&times;</span>
                        <h3>Full Details</h3>
                        <p>Name: {selectedApplication.fullName}</p>
                        <p>Email: {selectedApplication.email}</p>
                        <p>Phone: {selectedApplication.phone}</p>
                        <p>Position:{selectedApplication.position}</p>
                        <p>Refrences:{selectedApplication.refrences}</p>
                        <p>Resume:<a href={selectedApplication.resume}>Click to download</a></p>
                        <div className='approval-buttons'>
                        <button className='btn btn-success'>Approve</button>
                        <button className='btn btn-danger'>Decline</button>
                        </div>

                        {/* Add other details here */}
                    </div>
                </div>
            )}
        </div>
    );
};
export default Requests