import React, { useState } from 'react';
import './Mainfeed.css'; 
import { Link } from 'react-router-dom';
import DummyPost from './DummyPost';
import Sidebar from './Sidebar';
import Notice from './Notice'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Messages from './Messages';
// Import the Sidebar component

export const Mainfeed = ({isAuthenticated}) => {
  const[shownotice,setshownotice]=useState(true);
  const handleClosenotice=()=>[
    setshownotice(false)
  ]
  return (
    <div className="mainfeed-container">
      <div className="content">
        {shownotice && <Notice onClose={handleClosenotice}/>}
        <Sidebar className='sidebar'/> {/* Sidebar on the left */}
       </div>
        <div className='feed-postings'>
    <div className='feed-container'>
      <DummyPost isAuthenticated={isAuthenticated}/>
      </div>
    </div>
    <div className='Trending'>
      <div className='messages'>
        <Messages/>

      </div>
      
      </div>

    </div>
  );
};

export default Mainfeed;
