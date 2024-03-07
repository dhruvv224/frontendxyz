import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Userspost from './Userspost';


import useravatar from './Assets/user.png'
import back from './Assets/left-arrow.png'

export const UserProfile = () => {
    // const history = useHistory();

    const [userProfile, setUserProfile] = useState(null);
    const[showPosts,setShowposts]=useState(false)
    const { username } = useParams();
    
    const Postshandler=()=>{
        setShowposts(true)

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:7010/api/Profile`);
                const profiles = response.data.profiles;

                const userProfile = profiles.find(profile => profile.username === username);
                console.log(userProfile)
                setUserProfile(userProfile);
            } catch(error) {
                console.log("There was an error", error);
            }
        };
        fetchData();
    }, [username]);

    return (
        <div>
            
            {userProfile ?  (
                <div className='profile-container'>
                  <div className='profile-heading'>
                    <a href='/feeds'>
                      <button className='back-button'>
                        <img src={back} className='back-icon'></img>
                      </button>
                    </a>

                    </div> 
                    <div className='cover-photo'></div>
                    <div className='profile-section'>
                    {userProfile.profilepic ?(
        <img src={`http://localhost:7010/profiles/${userProfile.profilepic}`} className='profile' alt="User Profile" />

       ) :(
          <img className='profile-avatar' src={useravatar} alt="User Avatar" />
       )
       }
       <h5 style={{marginTop:"20px"}}>{userProfile.username}</h5>
       <h6>Bio:
            <p style={{fontSize:'15px', color:"black"}}>{userProfile.bio}</p>
            </h6>
            <button className='editprofile' onClick={'() => setshowEditprofile(true)'}>Connect</button>

          
                      </div> 
                      <div className='features'>
                      <button className='Features-buttons' onClick={Postshandler}>Posts</button>
                        
          <button className='Features-buttons' onClick={"Mediahandle"}>Media</button>
          

                        </div>
                        {showPosts && <Userspost username={userProfile.username}/>}
                        
                  
                </div>
            ):(
                <h1>user not found</h1>
            )}
        </div>
    );
};

export default UserProfile;
