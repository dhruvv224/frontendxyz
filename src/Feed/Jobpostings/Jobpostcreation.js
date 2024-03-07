import React, { useState, useRef } from 'react';
import './Jobpost.css';
import image from '../Assets/image.png';
import Showsucess from '../Showsucess';
import Showerror from '../Showerror';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext';

export const Jobpostcreation = ({ onClose,username }) => {
    const { currentusername, useremail } = useAuth()

    const [showsuccess, setshowsucess] = useState(false);
    const [showerror, setshowerror] = useState(false);
    const [Jobdata, setJobdata] = useState({
        postText: '',
        jobTitle: '',
        salary: '',
        location: '',
        jobMode: '',
        imageUrl: null,
        contenttype: 'JobPost',
        username:currentusername
    });

    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobdata({ ...Jobdata, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        setJobdata({ ...Jobdata, imageUrl: file });
    };

    const handlePost = async () => {
        try {
            const formData=new FormData()
            formData.append('postText', Jobdata.postText);
            formData.append('contenttype', Jobdata.contenttype);
            formData.append('username', Jobdata.username);
            formData.append('imageUrl', Jobdata.imageUrl);
            formData.append('salary', Jobdata.salary);
            formData.append('location', Jobdata.location);
            
            formData.append('jobTitle', Jobdata.jobTitle);

            
            formData.append(' jobMode', Jobdata.jobMode);

            const response = await axios.post('http://localhost:7010/api/feedposts/feedposts',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                },
            });
            console.log('Successfully sent', response.data);
            setshowsucess(true);
        } catch (error) {
            console.error('Error:', error);
            setshowerror(true);
        }
    };

    const handleClose = () => {
        onClose();
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <div className='modal'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <div className='modal-title'>
                                <h3>Share Your Jobpost</h3>
                                <button className='close' onClick={handleClose}>&times;</button>
                            </div>
                        </div>
                        <div className='modal-body'>
                            <textarea
                                className='inputs'
                                placeholder='Enter Post Caption'
                                onChange={handleInputChange}
                                value={Jobdata.postText}
                                name='postText'
                                required
                            />
                            <input
                                className='inputs'
                                type='text'
                                placeholder='Enter Job title'
                                name='jobTitle'
                                value={Jobdata.jobTitle}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type='text'
                                className='inputs'
                                placeholder='Enter Salary'
                                name='salary'
                                value={Jobdata.salary}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type='text'
                                className='inputs'
                                placeholder='Enter location'
                                name='location'
                                value={Jobdata.location}
                                onChange={handleInputChange}
                                required
                            />
                            <div>
                                <label htmlFor="jobMode">Job Mode:</label><br />
                                <select
                                    className='inputs'
                                    name="jobMode"
                                    value={Jobdata.jobMode}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Job Mode</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="On-site">On-site</option>
                                </select>
                            </div>
                            <input
                                type='file'
                                accept="image/png, image/jpeg, image/jpg"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                ref={fileInputRef}
                            />
                            <button className='img-select' onClick={handleImageClick}>
                                <img src={image} alt='Selected' className='post-image' />
                            </button>
                            <div className='selected-image'>
                                {selectedImage && <img className='selected-image' src={selectedImage} alt='Selected' />}
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-primary' onClick={handlePost}>Post</button>
                            <button className='btn btn-primary' onClick={handleClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobpostcreation;
