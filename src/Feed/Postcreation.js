import React, { useState, useRef, useEffect } from 'react';
import './Postcreation.css'; // Make sure to import your CSS file for styling
import image from './Assets/image.png';
import Showsucess from '../Feed/Showsucess';
import Showerror from '../Feed/Showerror';

import axios from 'axios';
import { useAuth } from '../Context/AuthContext';

export const Postcreation = ({ onClose, username }) => {
  const { currentusername, useremail } = useAuth();
  const [showsuccess, setshowsucess] = useState(false);
  const [showerror, setshowerror] = useState(false);
  const [postData, setPostData] = useState({
    postText: '',
    imageUrl: null,
    contenttype: 'Normalpost',
    username: currentusername,
    profileimg: null
  });
  const [selectedImage1, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleClose = () => {
    onClose(); // Call the onClose function passed as props
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file); // Get the URL of the selected image

    setSelectedImage(imageUrl);
    setPostData({ ...postData, imageUrl: file });
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handlePost = async () => {
    try {
      await Postingcontent();
      handleClose();
    } catch (error) {
      console.error('Error posting content:', error);
    }
  };

  useEffect(() => {
    fetchimage();
  }, []);

  const fetchimage = async () => {
    try {
      const response = await axios.get("http://localhost:7010/api/profile");
      const data = response.data;
      const profiles = data.profiles;
      const currentProfile = profiles.find(profile => profile.useremail === useremail);
    
      if (currentProfile && currentProfile.profilepic) {
        setPostData({ ...postData, profileimg: currentProfile.profilepic });
      }
    } catch (error) {
      console.error('Error fetching profile image:', error);
      // Handle error if needed
    }
  };

  const Postingcontent = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('postText', postData.postText);
      formData.append('contenttype', postData.contenttype);
      formData.append('username', postData.username);
      formData.append('imageUrl', postData.imageUrl);

      // if (postData.profileimg) {
      //   const response = await axios.get(postData.profileimg, { responseType: 'blob' });
      //   const profilePicFile = new File([response.data], 'profilepic.jpg');
      //   formData.append('profilepic', profilePicFile);
      // }
      console.log(postData)
      const response = await axios.post('http://localhost:7010/api/feedposts/feedposts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Submitted successfully', response.data);
      setshowsucess(true);
    } catch (error) {
      console.error('Error:', error);
      setshowerror(true);
    }
  };

  return (
    <div>
      <div className='modal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>

              <h3 className='modal-title'>Share Your Thoughts</h3>
              <button className='close' onClick={handleClose}>&times;</button>
            </div>
            <div className='modal-body'>
             
              {showerror && <Showerror />}
              {showsuccess && <Showsucess />}
              <textarea
                className='post-caption'
                value={postData.postText}
                onChange={handleInputChange}
                name='postText'
                placeholder='What do you want to post'></textarea>
              <input
                type='file'
                ref={fileInputRef}
                accept='image/png, image/jpeg, image/jpg'
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
              <button className='img-select' onClick={handleImageClick}>
                <img className='post-image' src={image} alt='Upload' />
              </button>
              <div className='selected-image'>{selectedImage1 && <img className='selected-image' src={selectedImage1} alt='Selected' />}</div>
            </div>
            <div className='modal-footer'>
              <button className='btn btn-primary' onClick={Postingcontent}>Post</button>
              <button className='btn btn-primary' onClick={handleClose}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postcreation;
