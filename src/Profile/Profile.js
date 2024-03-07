import React, { useDebugValue, useEffect, useState } from 'react';
import './Profile.css';
import back from './Assets/left-arrow.png';
import useravatar from './Assets/user.png';
import Yourposts from './Yourposts';
import Media from './Media';
import Requests from './Requests';
import { useAuth } from '../Context/AuthContext';
import axios from 'axios';
import Community from './Community';
import Editprofile from './Editprofile';

export const Profile = () => {
  const { currentusername,useremail,setProfileimage,selectedImage,setSelectedImage } = useAuth();
  const [showposts, setshowposts] = useState(false);
  const [showmedia, setshowmedia] = useState(false);
  const[showcommunity,setCommunity] =useState(false)
  const [showrequests, setshowrequests] = useState(false);
  const[userprofile,setUserprofile]=useState([])
  const currentemail=useremail
  const username=currentusername

const[editData,setEditData]=useState(false)
  const Mediahandler = () => {
    setshowmedia(true);
    setshowposts(false);
    setshowrequests(false);
    setCommunity(false)
  };

  const Postshandler = () => {
    setshowposts(true);
    setshowmedia(false);
    setshowrequests(false);
    setCommunity(false)

  };

  const Requesthandler = () => {
    setshowrequests(true);
    setshowmedia(false);
    setshowposts(false);
    setCommunity(false)

  };
  const Communityhandler = () => {
    setshowrequests(false);
    setshowmedia(false);
    setshowposts(false);
    setCommunity(true)

  };
  const Allowedit=()=>{
    setEditData(true)

  }
  const closeEdit=()=>{
    setEditData(false)
  }
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

  return (
    <div>
      <div className='profile-container'>
        {userprofile.map(user=>(
          <div key={user._id}>
        <div className='profile-heading'>
          <a href='/'>
            <button className='back-button'>
             
              <img className="back-icon" src={back} alt="Back" />
            </button>
          </a>
        </div>
        <div className='cover-photo'></div>
        <div className='profile-section'>
       {user.profilepic ?(
        <img src={`http://localhost:7010/profiles/${user.profilepic}`} className='profile' alt="User Profile" />

       ) :(
          <img className='profile-avatar' src={useravatar} alt="User Avatar" />
       )
       }
          <h5 style={{marginTop:"20px"}}>{user.username}</h5>
          <h6 style={{ display: 'inline' }}> Followers:</h6><p style={{ display: "inline" }}>500</p> <h6 style={{ display: 'inline' }}> Following:</h6><p style={{ display: "inline" }}>50</p>
          <h6>Bio:
            <p style={{fontSize:'15px', color:"black"}}>{user.bio}</p>
          </h6>
        
          <button className='editprofile' onClick={Allowedit}>Edit Profile</button>
        </div>
        <div className='features'>
          <button className='Features-buttons' onClick={Postshandler}>Posts</button>
          <button className='Features-buttons' onClick={Mediahandler}>Media</button>
          <button className='Features-buttons' onClick={Requesthandler}>Requests</button>
          <button className='Features-buttons' onClick={Communityhandler}>Community</button>
        </div>
        <div className='features-display'>
          {showposts && <Yourposts username={user.username} />}
          {showmedia && <Media />}
          {showrequests && <Requests />}
          {showcommunity&&<Community/>}
          {editData &&<Editprofile onClose={closeEdit} username={user.username} img={user.profilepic} useremail={user.useremail} currentbio={user.bio} userId={user._id}/>}
          {/* <Editprofile /> No need to conditionally render based on showEditprofile */}
        </div>
        </div>

))}
      </div>
    
    </div>
  )
}

export default Profile;
