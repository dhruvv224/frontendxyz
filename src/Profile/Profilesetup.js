import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; // Import the user icon from a library
import { useAuth } from '../Context/AuthContext';
import './profilesetup.css'; // Import your CSS file for styling
import usericon from './Assets/user.png';
import axios from 'axios';
export const Profilesetup = () => {
    const fileInputRef = useRef(null);
    const { currentusername,useremail,setSelectedImage,selectedImage } = useAuth();
    const [profileData, setProfiledata] = useState({
        bio:'',
        profilepic:null,
        username: currentusername,
        useremail:useremail
    });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const profilepic = URL.createObjectURL(file);
        setSelectedImage(profilepic);
        setProfiledata({...profileData, profilepic: file});
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProfiledata({...profileData, [name]: value});
    };

    console.log(profileData);
    const navigate = useNavigate();

    const handleSave =async (e) => {
       try {
        const formData=new FormData();
        formData.append('bio',profileData.bio)
        formData.append('username',profileData.username)
        formData.append('useremail',profileData.useremail)
        formData.append('profilepic',profileData.profilepic)
        const response = await axios.post('http://localhost:7010/api/profile', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },})
        alert("saved changes")
        navigate('/')

        
       } catch (error) {
        console.log(error)
       }

        // Redirect to a new route after saving, for example:
        // navigate('/dashboard');
    };
    console.log("user email",useremail)
    console.log("username",currentusername)
    const handleSkip = async(e) => {
        try {
            const formData1=new FormData();
        formData1.append('bio',profileData.bio)
        formData1.append('username',profileData.username)
        formData1.append('useremail',profileData.useremail)
        formData1.append('profilepic',profileData.profilepic)
        const response = await axios.post('http://localhost:7010/api/profile', formData1, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },})
            navigate('/');
            
        } catch (error) {
            console.log(error)
            
        }
        
    };

    return (
        <div>
            <div className='profile-setup'>
                <label htmlFor="profile-picture" className="profile-picture-label">
                    {selectedImage ? (
                        <img src={selectedImage} alt="Profile Preview" className="profile-picture-preview" />
                    ) : (
                        <FaUser className="profile-picture-icon" />
                    )}
                    <input
                        type="file"
                        id="profile-picture"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={fileInputRef}
                    />
                </label>
                <label htmlFor="bio" style={{fontSize:"30px"}}>Bio:</label>
                <textarea
                    id="bio"
                    name='bio'
                    value={profileData.bio}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself..."
                    rows={4}
                    cols={50}
                />
                <div className='profile-footer'>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleSkip}>Skip</button>
                </div>
            </div>
        </div>
    );
};
export default Profilesetup;
