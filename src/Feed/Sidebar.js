import React, { useState ,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import homeIcon from './Sidebar Assets/home.png';
import jobsIcon from './Sidebar Assets/suitcase.png';
import settingsIcon from './Sidebar Assets/settings.png';
import profileIcon from './Sidebar Assets/profile-user.png';
import communityIcon from './Sidebar Assets/community.png';
import learningIcon from './Sidebar Assets/online-learning.png';
import usericon from './Assets/user.png'
import { useAuth } from '../Context/AuthContext';
import axios from 'axios';
// import jobsicon from './Assets'
import sendicon from './Assets/ringing.png';
import home from './Assets/home.png';
import message from './Assets/send.png';
import jobs from './Assets/job.png'
import Chosepost from './Chosepost';
import groupicon from './Assets/people.png'

import settingsicon from './Assets/settings.png'



export const Sidebar = ({onClose}) => {
   
    const { currentusername,useremail,setProfileimage,selectedImage,setSelectedImage,isAuthenticated ,name} = useAuth();
    const currentemail=useremail
    const username=currentusername
    const[choosejob,setchoosejob]=useState(false)

    const[allowpost,setAllowpost]=useState(false)
    const [userprofile,setUserprofile]=useState([])
    useEffect(()=>{
        fetchData();
      },[])
    
      const fetchData=async()=>{
    try {
      
      const response=await axios.get("http://localhost:7010/api/profile")
      const data=response.data
      const profiles=response.data.profiles
      console.log(profiles)
      const currentUserProfile = profiles.filter(profiles => profiles.useremail === currentemail);
      console.log('user is currently active:====',currentUserProfile)
      const profileImage = currentUserProfile.length > 0 ? `http://localhost:7010/profiles/${currentUserProfile[0].profilepic}` : "";
      setProfileimage(profileImage)
      setSelectedImage(profileImage)
      setUserprofile(currentUserProfile)
      console.log(profileImage)
     
    
    
    } catch (error) {
      console.log(error)
      
    }    
      }
    
      const checklogin = () => {
        if (isAuthenticated) {
          setAllowpost(true)
      
        }
        else
        {
          setAllowpost(true)
        }
      };
      const handleclose=()=>{
        setAllowpost(false)
      }
      return (
        <>
         <div>
            <div className='sidebar-container'>
                <div className='profile2'>

                    {userprofile.length > 0 ? (
                        <><NavLink to="/profile" className='profile-link'>
                            <img src={selectedImage} alt='Profile' className='profile-pic' />
                            <h6>{name}</h6>
                            <h6 className="username">@{username}</h6>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <img src={usericon} alt='Default Profile' className='profile-pic' />
                            <h6>You haven't logged in/register</h6>
                        </>
                    )}
                     <div className='sidebar-section'>
                <NavLink to="/home" className='sidebar-link' activeClassName="active">
                    <img src={home} alt='Home' className='sidebar-icon' />
                    Home
                </NavLink>
                <NavLink to="/notification" className='sidebar-link' activeClassName="active">
                    <img src={sendicon} alt='Notification' className='sidebar-icon' />
                    Notifications
                </NavLink>
                <NavLink to="/community2" className='sidebar-link' activeClassName="active">
                    <img src={groupicon} alt='Notification' className='sidebar-icon' />
                    Community
                </NavLink>

                <NavLink to="/jobs" className='sidebar-link' activeClassName="active">
                    <img src={jobs} alt='Jobs' className='sidebar-icon' />
                    Jobs
                </NavLink>
                <NavLink to="/messages" className='sidebar-link' activeClassName="active">
                    <img src={message} alt='Messages' className='sidebar-icon' />
                    Messages
                </NavLink>
                <NavLink to="/settings" className='sidebar-link' activeClassName="active">
                    <img src={settingsicon} alt='Settings' className='sidebar-icon' />
                    Settings
                </NavLink>
                
            </div>
           
                </div>
              
            </div>
            <div className='post-button2'>
                <button className='' onClick={checklogin} >Post</button>

                {allowpost && <Chosepost onClose={handleclose} setchoosejob={setchoosejob}/>}
            </div>
            </div>
          
        </>
    );
    

    
};

export default Sidebar;
