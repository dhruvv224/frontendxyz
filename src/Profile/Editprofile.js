import React, { useState } from 'react';
import './Editprofile.css'; // Don't forget to create this CSS file for styling
import { useAuth } from '../Context/AuthContext';
import useravatar from './Assets/user.png';
import axios from 'axios';

const Editprofile = ({ onClose, username, useremail, currentbio,userId }) => {
  const { selectedImage } = useAuth();
  const [editData, setEditData] = useState({
    bio: currentbio || '',
    profilepic: null // Changed the state key to profilepic
  });

  const handleBioChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setEditData({ ...editData, profilepic: file }); // Set profilepic to the selected file
  };
  console.log(userId)
  const handlesave=async(e)=>{
    e.preventDefault();

    try {
      const response=await axios.put(`http://localhost:7010/api/profile/${userId}`,editData)
      console.log("saved changes")
     alert("error")

    } catch (error) {
      console.log("there is an error",error)
      alert("error")
      
    }

  }
  const handlesave1=()=>{
    alert("hello")
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className='modal-body'>
          <h2>Edit Profile</h2>
          <form onSubmit={handlesave}>
  <div className="form-group">
    <label htmlFor="profilepic">
      {editData.profilepic ? (
        <img
          src={URL.createObjectURL(editData.profilepic)}
          style={{ width: "150px", height: "150px", borderRadius: "50%", cursor: "pointer" }}
          alt="Profile Picture"
        />
      ) : (
        <img
          className='profile-avatar'
          src={selectedImage || useravatar}
          style={{ width: "150px", height: "150px", borderRadius: "50%", cursor: "pointer" }}
          alt="User Avatar"
        />
      )}
    </label>
    <input
      type="file"
      id="profilepic"
      accept="image/*"
      name='profilepic'
      onChange={handleImageUpload}
      style={{ display: "none" }}
    />
  </div>
  <div className="form-group">
    <label htmlFor="bio">Bio:</label>
    <textarea
      id="bio"
      value={editData.bio}
      name='bio'
      onChange={handleBioChange}
      placeholder="Enter your bio..."
    />
  </div>
  <div className='action-buttons'>
    <button type="submit" onClick={''}>Save</button> {/* Change button type to "submit" */}
    <button type="button" onClick={onClose}>Cancel</button> {/* Ensure Cancel button type is "button" */}
  </div>
</form>

        </div>
      </div>
    </div>
  );
};

export default Editprofile;
