import React, { useEffect, useState } from 'react';
import './Yourposts.css';
import axios from 'axios';
import avatar from '../Feed/Assets/user.png'
import like from '../Feed/Assets/like.png';
import chat from '../Feed/Assets/chat.png'
import follow from '../Feed/Assets/add-user.png';
import share from '../Feed/Assets/share.png'

export const Yourposts = ({ username }) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:7010/api/feedposts/feedposts");
      const posts = response.data.feedposts;
      const currentUserPosts = posts.filter(post => post.username === username);
      console.log(username)
      console.log(currentUserPosts)
      setUserPosts(currentUserPosts);
    } catch (error) {
      console.log(error);
    }
  };
  
  function timeAgo(timestamp){
    const currentDate= new Date();
    const pastData=new Date(timestamp)
    const timediffrence=currentDate-pastData;
    const seconds=Math.floor(timediffrence/1000);
    const minutes =Math.floor(seconds/60)
  
    const hours=Math.floor(minutes/60);
    const days=Math.floor(hours/24)
    if(days>0){
      return `${days} day${days>1 ? 's':''} ago`
    }
    else if (hours>0){
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
    else if(minutes>0){
      return`${minutes} minute${minutes>1?'s':''} ago`
    }
    else if(seconds>0){
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    
    }
  }

  return (
    <div>
        
      {userPosts.length > 0 ? (
        <div className='Yourposts-container'>
          {userPosts.map((post, index) => (
            <div key={index} className='post-cards'>
              <div className='posts-header'>
                <a href={`/profile/${post.username}`}>
                  <h3> <img className='feed-icons' src={avatar} alt='Avatar' />{post.username}</h3>
                </a>
                <p>{timeAgo(post.createdAt)}</p>
                <button className='follow-button' onClick={''}>
                  <img src={follow} className='feed-icons' alt='Follow' />
                </button>
              </div>
              <div className='posts-content'>
                <p>{post.postText}</p>
              </div>
              <div className='posts-image'>
                {post.imageUrl &&
                  <img src={`http://localhost:7010/uploads/${post.imageUrl}`} className='post-img' style={{width:"100%"}} alt='Post' />
                }
              </div>
              <div className='footer2'>
                {post.contenttype === 'JobPost' ? (
                  <>
                    <button className='quick-apply-buttons'>Quick Apply</button>
                    <button className='quick-apply-buttons'>Learn More</button>
                  </>
                ) : (
                  <>
                    <button className='icons-button'><img className='feed-icons' src={like} alt='Like' /></button>
                    <button className='icons-button'><img className='feed-icons' src={chat} alt='Chat' /></button>
                    <button className='icons-button'><img className='feed-icons' src={share} alt='Share' /></button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='Yourposts-container'>
          <h4>You don't have any posts</h4>
        </div>
      )}
    </div>
  );
};

export default Yourposts;
