import React, { useEffect, useState } from 'react';
import axios from 'axios';
import avatar from './Assets/user.png';
import like from './Assets/like.png';
import share from './Assets/share.png';
import chat from './Assets/chat.png';
import follow from './Assets/add-user.png';
import Chosepost from './Chosepost';
import './Dummy.css';
import { useAuth } from '../Context/AuthContext';
import filledLike from './Assets/like-filed.png';
import { useNavigate } from 'react-router-dom';
import JobDetailsModal from './Jobpostings/JobDetailsModal';

const DummyPost = ({onClose,setpostcreation,currrentusername }) => {
  const [posts, setPosts] = useState([])
  const{selectedImage,isAuthenticated}=useAuth()


const navigate=useNavigate()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:7010/api/feedposts/feedposts');
      // console.log(response.data.Feedpost)
      const data=response.data
      console.log("this is data",data)
      const feedposts=response.data.feedposts
      console.log(feedposts)
      setPosts(response.data.feedposts)
      console.log("this is final array",posts)
      // setPosts("this is data",data);
      // console.log(posts)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const checklogin = () => {
    if (isAuthenticated) {
      // alert("you have to login first to post")
      setchoosejob(true)
      // Handle authentication logic
  
    }
    else
    {
      setchoosejob(true)
    }
  };
  const handlealertclose=()=>{
    setshowalert(false);
  }
 const handlechoosepostclose=()=>{
  setchoosejob(false)
 }
 const applyhandle=()=>{
  if(!isAuthenticated){
    alert("you havent register/login cant apply for job")
  }
  else{
    navigate('/Application')

  }
}
 
function timeAgo(timestamp){
  const currentDate= new Date();
  const pastData=new Date(timestamp)
  const timediffrence=currentDate-pastData;
  const seconds=Math.floor(timediffrence/1000);
  const minutes =Math.floor(seconds/60)

  const hours=Math.floor(minutes/60);
  const days=Math.floor(hours/24)
  if(days>0){
    return `${days} day${days>1 ? 's':''}ago`
  }
  else if (hours>0){
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  else if(minutes>0){
    return`${minutes} minute${minutes>1?'s':''}ago`
  }
  else if(seconds>0){
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  
  }

}
const [likedPosts, setLikedPosts] = useState([]);


const [selectedJob, setSelectedJob] = useState(null);


const handleLearnmore=(post)=>
{
  setSelectedJob(post)
}
const handleCloseModal = () => {
  setSelectedJob(null);
};
const handleLike = (postId) => {
  if (likedPosts.includes(postId)) {
    // Unlike the post
    setLikedPosts(likedPosts.filter(id => id !== postId));
  } else {
    // Like the post
    setLikedPosts([...likedPosts, postId]);
  }
};
// console.log(timeAgoString); // Output: "x hours ago"
  const[choosejob,setchoosejob]=useState(false)
  const [showalert,setshowalert]=useState(false)
  return (
    <div className='post-lists'>
      <div className='posts'>
        {/* Your post rendering logic */}
        <div className='post-button'>
          <button className='button-post' onClick={checklogin}>
            Post Something
          </button>
          {choosejob && <Chosepost  onClose={handlechoosepostclose} setchoosejob={setchoosejob} />}
        </div>
        {posts.map((post, index) => (
          <div key={index} className='post-cards'>
            <div className='posts-header'>
              <a className='profile-link' href={`/profile/${post.username}`}><h3> <img className='feed-icons' src={avatar} alt='Avatar' />   {post.username}</h3></a>
              <p>{timeAgo(post.createdAt)}</p>
              <button className='follow-button' onClick={checklogin}><img src={follow} className='feed-icons' alt='Follow' /></button>
            </div>
            <div className='posts-content'>
              <p>{post.postText}</p>
            </div>
            <div className='posts-image'>
              {post.imageUrl && <img src={`http://localhost:7010/uploads/${post.imageUrl}`} className='post-img' />}
            </div>
            <div className='footer2'>
              {post.contenttype === 'JobPost' ? (
                <>
              
                  <button className='quick-apply-buttons' onClick={applyhandle}>Quick Apply</button>
                
                  <button className='quick-apply-buttons' onClick={() => handleLearnmore(post)}>Learn More</button>
                  {selectedJob && (
        <JobDetailsModal selectedJob={selectedJob} onClose={handleCloseModal} />
      )}
                </>
              ) : (
                <>
                  <button className='icons-button' onClick={() => handleLike(post._id)}>
                    <img className='feed-icons' src={likedPosts.includes(post._id) ? filledLike : like} alt='Like' />
                  </button>
                  <button className='icons-button'><img className='feed-icons' src={chat} alt='Chat' /></button>
                  <button className='icons-button'><img className='feed-icons' src={share} alt='Share' /></button>
                </>
              )}
            </div>
            <div>
              {likedPosts.includes(post._id) && (
                <p>{likedPosts.filter(id => id === post._id).length} {likedPosts.filter(id => id === post.id).length === 1 ? 'like' : 'likes'}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DummyPost;